import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {

  numberofLikes:number=0;
  numberofDislikes:number=0;

  likeButtonClick(){
    this.numberofLikes++;
  }
  dislikeButtonClick(){
    this.numberofDislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
