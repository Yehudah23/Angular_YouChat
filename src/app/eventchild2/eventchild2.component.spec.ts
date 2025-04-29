import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventchild2Component } from './eventchild2.component';

describe('Eventchild2Component', () => {
  let component: Eventchild2Component;
  let fixture: ComponentFixture<Eventchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventchild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
