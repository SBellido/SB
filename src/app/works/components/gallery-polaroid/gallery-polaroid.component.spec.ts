import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPolaroidComponent } from './gallery-polaroid.component';

describe('GalleryPolaroidComponent', () => {
  let component: GalleryPolaroidComponent;
  let fixture: ComponentFixture<GalleryPolaroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPolaroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPolaroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
