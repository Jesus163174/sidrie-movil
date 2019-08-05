import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaralumnosPage } from './agregaralumnos.page';

describe('AgregaralumnosPage', () => {
  let component: AgregaralumnosPage;
  let fixture: ComponentFixture<AgregaralumnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaralumnosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaralumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
