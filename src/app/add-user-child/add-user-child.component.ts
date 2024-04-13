import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user-child',
  templateUrl: './add-user-child.component.html',
  styleUrls: ['./add-user-child.component.css']
})
export class AddUserChildComponent {

  userName : string = '';

  @Output() userAdded  = new EventEmitter<string>();



  onuserAdded() {
    this.userAdded.emit(this.userName);

  }

}
