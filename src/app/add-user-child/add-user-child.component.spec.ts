import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserChildComponent } from './add-user-child.component';

describe('AddUserChildComponent', () => {
  let component: AddUserChildComponent;
  let fixture: ComponentFixture<AddUserChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
