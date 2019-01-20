import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryTestComponent } from './in-memory-test.component';

describe('InMemoryTestComponent', () => {
  let component: InMemoryTestComponent;
  let fixture: ComponentFixture<InMemoryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMemoryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
