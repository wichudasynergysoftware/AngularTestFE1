import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalRequest1Component } from './chemical-request1.component';

describe('ChemicalRequest1Component', () => {
  let component: ChemicalRequest1Component;
  let fixture: ComponentFixture<ChemicalRequest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalRequest1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalRequest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
