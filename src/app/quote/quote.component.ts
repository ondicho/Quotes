import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[]=[
    new Quote(1,"you are his choice in a political marriage","Hubert Humphrey","sensei"),
    new Quote(2,"If the madness of a nation disturbs a solitary mind it is not enough to say that he his mad","Chinua Achebe","sensei"),

  ];
  toggleDetails(index){
    this.quote[index].showDescription=!this.quote[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength=this.quote.length;
    quote.id=quoteLength+1;
    this.quote.push(quote)

  }

  constructor() {}

  ngOnInit(): void {
  }

}
