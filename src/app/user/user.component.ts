import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck{


  @Input() userName: string | undefined; 

  constructor() {
    console.log('constructor called');
  }


  ngOnInit() {
    console.log('ngOnInit() called');

  }


  ngDoCheck() {
    console.log('Do check called');

  }


}
