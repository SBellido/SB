import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsButtonsComponent } from './brands-buttons.component';

describe('BrandsButtonsComponent', () => {
  let component: BrandsButtonsComponent;
  let fixture: ComponentFixture<BrandsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
