import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-user-child',
  templateUrl: './add-user-child.component.html',
  styleUrls: ['./add-user-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserChildComponent {

  // userName : string = '';

  @Output() userAdded  = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement : ElementRef | undefined;



  onuserAdded() {
    // this.userAdded.emit(this.userName);
    // console.log('Template input',input.value);
     //this.userAdded.emit(input.value);
     //console.log(this.inputElement?.nativeElement.value);
     this.userAdded.emit(this.inputElement?.nativeElement.value);

  }

}
