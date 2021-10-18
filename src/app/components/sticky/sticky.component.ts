import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { Sticky } from 'src/app/models/sticky';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent {
  @ViewChild('sticky') sticky: HTMLDivElement;
  @Input() stickyData: Sticky;
  @Input() globalZindex: number;
  @Output() stickyChanged: EventEmitter<Sticky> = new EventEmitter();
  @Output() zIndexChanged: EventEmitter<number> = new EventEmitter();
  public localZindex: number = 0;
  public timeoutHandle: ReturnType<typeof setTimeout>;

  constructor() {}
  /**
   * color change handler
   * @param  {string} color
   */
  public onColorChange(color: string): void {
    this.stickyChanged.emit({
      ...this.stickyData,
      color: color,
      isFocus: true,
      zIndex: this.globalZindex + 1
    });
  }
  /**
   * delete sticky handler
   */
  public onDeleteSticky(): void {
    this.stickyChanged.emit({ ...this.stickyData, isDelete: true });
  }
  /**
   * change description for sticky handler
   *  @param  {string} value
   */
  public onChangeDescription(value: string): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = setTimeout(() => {
      this.stickyChanged.emit({
        ...this.stickyData,
        description: value,
        isFocus: true,
        zIndex: this.localZindex
      });
      this.localZindex = 0;
    }, 500);
  }
  /**
   * change position of the sticky handler
   *  @param  {MouseEvent} event
   */
  public onChangePosition(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const parentElement = target && (target.parentElement as HTMLElement);
    const newPosition =
      parentElement &&
      parentElement.style &&
      (parentElement.style.transform as string);
    this.stickyChanged.emit({
      ...this.stickyData,
      position: newPosition,
      isFocus: true,
      zIndex: this.globalZindex + 1
    });
  }
  /**
   * Focus on sticky handler for changing z-index
   */
  public onFocus(): void {
    this.localZindex = this.globalZindex + 1;
    this.zIndexChanged.emit(this.localZindex);
  }
}
