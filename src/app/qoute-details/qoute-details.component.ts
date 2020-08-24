import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
