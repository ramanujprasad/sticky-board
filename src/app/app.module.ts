import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyBoardComponent } from './components/sticky-board/sticky-board.component';
import { StickyComponent } from './components/sticky/sticky.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyContainerComponent } from './components/sticky-container/sticky-container.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyBoardComponent,
    StickyComponent,
    HeaderComponent,
    StickyContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    ColorPickerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
