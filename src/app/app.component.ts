import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card.model';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cards';

 cards : Card[] = [];

 card : Card = {
    id: '',
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
 }

  constructor(private cardsService: CardsService){

  }
  //call this functions when the page loads
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.cardsService.getAllCards()
    .subscribe(
      response => {
        //assign response to cards array declared above
        this.cards = response;
        //console.log(response);
      }
    );
  }
  onSubmit(){

    //if nothing is in card id then its for adding 
    if(this.card.id === ''){
      this.cardsService.AddCard(this.card)
      .subscribe(
        response => {
          console.log(response);
          this.getAllCards();
  
           //clear form
           this.card ={
            id: '',
            cardholderName: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvc: ''
         }
        }
      )
    }
    else{
      //else if card has id then its for update
      this.updateCard(this.card);
    }
  }

  deletCard(id: string){
    this.cardsService.deletCard(id)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }

  populateForm(card: Card){
    //assign cards to display in form for updating
    this.card = card;
  }

  updateCard(card: Card){
    this.cardsService.updateCard(card)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }
}


