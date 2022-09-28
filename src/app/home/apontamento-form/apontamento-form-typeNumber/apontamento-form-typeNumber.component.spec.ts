/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApontamentoFormTypeNumberComponent } from './apontamento-form-typeNumber.component';

describe('ApontamentoFormTypeNumberComponent', () => {
  let component: ApontamentoFormTypeNumberComponent;
  let fixture: ComponentFixture<ApontamentoFormTypeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApontamentoFormTypeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApontamentoFormTypeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
