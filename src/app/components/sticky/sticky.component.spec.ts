import { By } from '@angular/platform-browser';
import { Sticky } from '../../models/sticky';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerModule } from 'ngx-color-picker';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { StickyComponent } from './sticky.component';
import { DebugElement } from '@angular/core';

describe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;
  const getTempSticky = (id: string, desc: string, y: number): Sticky =>
    <Sticky>{
      id: id,
      position: `translate3d(0, ${y}px, 0px)`,
      description: desc,
      color: '#CCCCCC',
      isDelete: false,
      zIndex: 0,
      isFocus: false
    };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyComponent],
      imports: [ColorPickerModule, MatIconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    component.globalZindex = 0;
    component.stickyData = getTempSticky('111', 'test desc01', 100);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.whenStable().then(() => {
      const stickyDebugElement: DebugElement = fixture.debugElement.children[0];
      expect(stickyDebugElement).not.toBeUndefined();
      expect(component).toBeTruthy();
    });
  });

  it('should emit position change event emitter', () => {
    spyOn(component.stickyChanged, 'emit');
    const evt: MouseEvent = new MouseEvent('mouseup');
    component.onChangePosition(evt);
    expect(component.stickyChanged.emit).toHaveBeenCalled();
  });

  it('should emit color change of sticky event emitter', () => {
    spyOn(component.stickyChanged, 'emit');

    component.onColorChange('#CCCCCC');
    expect(component.stickyChanged.emit).toHaveBeenCalled();
    expect(component.stickyChanged.emit).toHaveBeenCalledWith({
      id: '111',
      position: 'translate3d(0, 100px, 0px)',
      description: 'test desc01',
      color: '#CCCCCC',
      isDelete: false,
      zIndex: 1,
      isFocus: true
    });
  });

  it('should emit delete sticky event emitter', () => {
    spyOn(component.stickyChanged, 'emit');

    component.onDeleteSticky();
    expect(component.stickyChanged.emit).toHaveBeenCalled();
    expect(component.stickyChanged.emit).toHaveBeenCalledWith({
      id: '111',
      position: 'translate3d(0, 100px, 0px)',
      description: 'test desc01',
      color: '#CCCCCC',
      isDelete: true,
      zIndex: 0,
      isFocus: false
    });
  });

  it('should emit change description event emitter', fakeAsync(() => {
    spyOn(component.stickyChanged, 'emit');
    const stickyDebugElement = fixture.debugElement.query(
      By.css('#description')
    ).nativeElement;
    stickyDebugElement.value = 'Desc002';

    stickyDebugElement.dispatchEvent(new Event('keypress'));
    fixture.detectChanges();
    tick(500);
    expect(component.stickyChanged.emit).toHaveBeenCalled();
    expect(component.stickyChanged.emit).toHaveBeenCalledWith({
      id: '111',
      position: 'translate3d(0, 100px, 0px)',
      description: 'Desc002',
      color: '#CCCCCC',
      isDelete: false,
      zIndex: 0,
      isFocus: true
    });
  }));

  it('should emit z-index of sticky event emitter', () => {
    spyOn(component.zIndexChanged, 'emit');

    component.onFocus();
    expect(component.zIndexChanged.emit).toHaveBeenCalled();
    expect(component.zIndexChanged.emit).toHaveBeenCalledWith(1);
  });
});
