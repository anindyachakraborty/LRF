import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.DialogComponent } from './home.dialog.component';

describe('Home.DialogComponent', () => {
  let component: Home.DialogComponent;
  let fixture: ComponentFixture<Home.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
