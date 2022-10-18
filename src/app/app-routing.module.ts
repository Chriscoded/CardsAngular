import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [BrowserModule, /* or CommonModule */],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
