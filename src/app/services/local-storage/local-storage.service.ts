import { Injectable } from '@angular/core';
import { Sticky } from 'src/app/models/sticky';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public saveStickies(value: Array<Sticky>): void {
    localStorage.setItem('savedStickies', JSON.stringify(value));
  }

  public getStickies(): Array<Sticky> {
    const item = localStorage.getItem('savedStickies');
    return JSON.parse(item || '[]');
  }

  public saveGlobalZindex(value: string): void {
    localStorage.setItem('globalZindex', value);
  }

  public getGlobalZindex(): number {
    const item = localStorage.getItem('globalZindex');
    return JSON.parse(item || '0');
  }

  public deleteAllStickies(): void {
    localStorage.clear();
  }
}
