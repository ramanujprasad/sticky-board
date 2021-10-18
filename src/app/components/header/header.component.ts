import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private snackBar: MatSnackBar
  ) {}

  /**
   * delete all stickies stored information method
   */
  public deleteStickies(): void {
    this.localStorageService.deleteAllStickies();
    this.snackBar.open('Deleted Successfully!');
    this.reloadCurrentURL();
  }
  /**
   * Refreshed the page method
   */
  public reloadPage(): void {
    this.reloadCurrentURL();
    this.snackBar.open('Refreshed Successfully!');
  }
  public reloadCurrentURL = () => location.reload();
}
