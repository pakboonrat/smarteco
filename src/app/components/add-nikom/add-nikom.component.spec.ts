import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNikomComponent } from './add-nikom.component';

describe('AddNikomComponent', () => {
  let component: AddNikomComponent;
  let fixture: ComponentFixture<AddNikomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNikomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNikomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
