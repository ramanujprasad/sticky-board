import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { StickyBoardComponent } from './sticky-board.component';
import { StickyComponent } from '../sticky/sticky.component';

describe('StickyBoardComponent', () => {
  let component: StickyBoardComponent;
  let fixture: ComponentFixture<StickyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [StickyBoardComponent, StickyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component['localStorageService'].deleteAllStickies();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the sticky in list', () => {
    spyOn(component['localStorageService'], 'saveStickies');
    const addBtnElement: HTMLElement = fixture.debugElement.query(
      By.css('#addSticky')
    ).nativeElement;
    addBtnElement.click();
    fixture.detectChanges();
    expect(component.savedStickies.length).toBe(1);
    expect(component['localStorageService'].saveStickies).toHaveBeenCalledWith(
      component.savedStickies
    );
  });

  it('should save the global Z-index', () => {
    expect(component['localStorageService'].getGlobalZindex()).toBe(0);
    component.onZindexChanged(1);
    expect(component['localStorageService'].getGlobalZindex()).toBe(1);
  });
});
