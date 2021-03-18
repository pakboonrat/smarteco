import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikomListComponent } from './nikom-list.component';

describe('NikomListComponent', () => {
  let component: NikomListComponent;
  let fixture: ComponentFixture<NikomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
