import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikomDetailComponent } from './nikom-detail.component';

describe('NikomDetailComponent', () => {
  let component: NikomDetailComponent;
  let fixture: ComponentFixture<NikomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
