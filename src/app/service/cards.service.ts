import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Card } from 'src/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  basUrl = "https://localhost:7112/api/cards"
  constructor(private http: HttpClient) {}

   //get all cards

   getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(this.basUrl);
  }

  AddCard(card: Card): Observable<Card>{
    card.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Card>(this.basUrl, card);
  }

  deletCard(id: string): Observable<Card>{
    return this.http.delete<Card>(this.basUrl + "/" + id);
  }

  updateCard(card: Card){
    return this.http.put<Card>(this.basUrl + "/" + card.id, card)
  }
}
