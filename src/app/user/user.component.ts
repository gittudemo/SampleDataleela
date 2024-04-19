import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  @Input() userName: string | undefined; 

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit() called');

  }

}
