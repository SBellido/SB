import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPolaroidComponent } from './info-polaroid.component';

describe('InfoPolaroidComponent', () => {
  let component: InfoPolaroidComponent;
  let fixture: ComponentFixture<InfoPolaroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPolaroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPolaroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
