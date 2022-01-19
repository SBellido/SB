import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationSketchComponent } from './illustration-sketch.component';

describe('IllustrationSketchComponent', () => {
  let component: IllustrationSketchComponent;
  let fixture: ComponentFixture<IllustrationSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationSketchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
