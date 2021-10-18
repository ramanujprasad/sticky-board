import { Component, Input } from '@angular/core';
import { StickyContainer } from 'src/app/models/sticky-container';

@Component({
  selector: 'app-sticky-container',
  templateUrl: './sticky-container.component.html',
  styleUrls: ['./sticky-container.component.scss']
})
export class StickyContainerComponent {
  @Input() stickyContainer: StickyContainer;
}
