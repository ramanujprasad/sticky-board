import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyContainerComponent } from './sticky-container.component';

describe('StickyContainerComponent', () => {
  let component: StickyContainerComponent;
  let fixture: ComponentFixture<StickyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyContainerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
