/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NicheComponent } from './niche.component';

describe('NicheComponent', () => {
  let component: NicheComponent;
  let fixture: ComponentFixture<NicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
