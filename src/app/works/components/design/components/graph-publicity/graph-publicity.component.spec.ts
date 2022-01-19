import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPublicityComponent } from './graph-publicity.component';

describe('GraphPublicityComponent', () => {
  let component: GraphPublicityComponent;
  let fixture: ComponentFixture<GraphPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphPublicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
