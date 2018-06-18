import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goOnHitMe() {
    this.childEvent.emit("Hey Wake Up!!");
  }
}
