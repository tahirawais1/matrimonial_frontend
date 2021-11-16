/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnowremovalComponent } from './snowremoval.component';

describe('SnowremovalComponent', () => {
  let component: SnowremovalComponent;
  let fixture: ComponentFixture<SnowremovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowremovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowremovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
