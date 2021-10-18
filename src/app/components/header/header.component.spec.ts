import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
class MatSnackBarStub{
  open(){
    return {
      onAction: () => of({})
    }
  }

}
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      declarations: [HeaderComponent],
      providers : [ { provide: MatSnackBar , useClass: MatSnackBarStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete all stickies', () => {
    spyOn(component['localStorageService'], 'deleteAllStickies');
    spyOn(component, 'reloadCurrentURL');
    spyOn(component['snackBar'],"open").and.callThrough();
    const deleteElement = fixture.debugElement.query(By.css('#delete'))
      .nativeElement;
    deleteElement.click();
    fixture.detectChanges();
    expect(
      component['localStorageService'].deleteAllStickies
    ).toHaveBeenCalled();
    expect(component['snackBar'].open).toHaveBeenCalledWith('Deleted Successfully!');
  });

  it('should refresh the page', () => {
    spyOn(component, 'reloadCurrentURL');
    spyOn(component['snackBar'],"open").and.callThrough();
    const deleteElement = fixture.debugElement.query(By.css('#refresh'))
      .nativeElement;
    deleteElement.click();
    fixture.detectChanges();
    expect(component['snackBar'].open).toHaveBeenCalledWith('Refreshed Successfully!');
  });
});
