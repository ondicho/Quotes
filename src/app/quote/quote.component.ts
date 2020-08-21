import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[]=[
    new Quote(1,"you are his choice in a political marriage","Hubert Humphrey"),
    new Quote(2,"If the madness of a nation disturbs a solitary mind it is not enough to say that he his mad","Chinua Achebe"),

  ];
  addNewQuote(quote){
    quote.id=quote+1;
    this,quote.push(quote)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
