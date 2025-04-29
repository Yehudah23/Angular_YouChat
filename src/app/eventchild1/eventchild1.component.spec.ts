import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventchild1Component } from './eventchild1.component';

describe('Eventchild1Component', () => {
  let component: Eventchild1Component;
  let fixture: ComponentFixture<Eventchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventchild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
