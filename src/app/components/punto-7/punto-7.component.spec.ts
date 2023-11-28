import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto7Component } from './punto-7.component';

describe('Punto7Component', () => {
  let component: Punto7Component;
  let fixture: ComponentFixture<Punto7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Punto7Component]
    });
    fixture = TestBed.createComponent(Punto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
