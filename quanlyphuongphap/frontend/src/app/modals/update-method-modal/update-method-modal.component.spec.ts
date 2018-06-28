import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMethodModalComponent } from './update-method-modal.component';

describe('UpdateMethodModalComponent', () => {
  let component: UpdateMethodModalComponent;
  let fixture: ComponentFixture<UpdateMethodModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMethodModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
