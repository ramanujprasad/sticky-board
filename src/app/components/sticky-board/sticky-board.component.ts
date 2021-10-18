import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Sticky } from 'src/app/models/sticky';
import { StickyContainer } from 'src/app/models/sticky-container';
import { STICKY_CONTAINER } from 'src/app/constants/constant';

@Component({
  selector: 'app-sticky-board',
  templateUrl: './sticky-board.component.html',
  styleUrls: ['./sticky-board.component.scss']
})
export class StickyBoardComponent implements OnInit {
  public savedStickies: Sticky[] = [];
  public zIndex: number = 0;
  public stickyContainers: Array<StickyContainer> = STICKY_CONTAINER;

  constructor(private localStorageService: LocalStorageService) {}

  /**
   * get already saved stickies
   * get saved final or global z-index
   */
  public ngOnInit(): void {
    this.savedStickies = this.localStorageService.getStickies();
    this.zIndex = this.localStorageService.getGlobalZindex();
  }
  /**
   * add default sticky on click of plus icon
   * store the data to local storage through service
   */
  public addSticky(): void {
    this.savedStickies.push({
      position: `translate3d(0, ${this.savedStickies.length * 100}px, 0px)`,
      description: '',
      color: '#FEEFB6',
      id: uuidv4(),
      isDelete: false,
      zIndex: ++this.zIndex,
      isFocus: false
    });
    this.localStorageService.saveStickies(this.savedStickies);
  }
  /**
   * Trigger when sticky is changed by
   * drag and  drop,
   * change description,
   * change color,
   * delete sticky,
   * store the changes through local storage service
   * @param  {Sticky} data data emitted by triggered sticky
   */
  public onStickyChanged(data: Sticky): void {
    const newSavedStickies = this.savedStickies
      .map(sticky => {
        if (sticky.id === data.id) {
          sticky = data;
          if (data.isFocus) {
            sticky.isFocus = false;
            this.zIndex = sticky.zIndex + 1;
          }
        }
        return sticky;
      })
      .filter(sticky => sticky.isDelete !== true);
    this.savedStickies = newSavedStickies;
    if (!this.savedStickies.length) {
      this.localStorageService.saveGlobalZindex('0');
      this.zIndex = 0;
    }
    this.localStorageService.saveStickies(this.savedStickies);
  }
  /**
   * Trigger for z-index changes
   * on focus sticky
   * store the changes through local storage service
   * @param  {number} newZindex data emitted by triggered sticky on focus
   */
  public onZindexChanged(newZindex: number): void {
    this.zIndex = newZindex;
    this.localStorageService.saveGlobalZindex(JSON.stringify(this.zIndex));
  }
}
