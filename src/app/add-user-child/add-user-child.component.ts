import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-user-child',
  templateUrl: './add-user-child.component.html',
  styleUrls: ['./add-user-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserChildComponent {

  // userName : string = '';

  @Output() userAdded  = new EventEmitter<string>();



  onuserAdded(input : HTMLInputElement) {
    // this.userAdded.emit(this.userName);
    // console.log('Template input',input.value);
     this.userAdded.emit(input.value);

  }

}
