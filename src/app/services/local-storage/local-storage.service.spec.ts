import { Sticky } from '../../models/sticky';
import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
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
  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });

  it('should get stickies local storage', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    const arr = [];
    arr.push(getTempSticky('111', 'test001', 100));

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(arr));
    expect(service.getStickies()).toEqual(arr);
  });

  it('should return blank array from local storage', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);

    spyOn(localStorage, 'removeItem');
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    expect(service.getStickies().length).toBe(0);
  });

  it('should  save stickies', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    const sticky = getTempSticky('111', 'test001', 100);
    service.saveStickies([sticky]);
    expect(service.getStickies().length).toBe(1);
    expect(service.getStickies()).toEqual([sticky]);
  });

  it('should get global z-index from storage', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    const zIndex = 0;
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(zIndex));
    expect(service.getGlobalZindex()).toEqual(zIndex);
  });

  it('should  delete stickies', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    const arr: Sticky[] = [
      getTempSticky('111', 'test001', 100),
      getTempSticky('112', 'test003', 200)
    ];

    service.saveStickies(arr);
    expect(service.getStickies().length).toBe(2);

    service.deleteAllStickies();
    expect(service.getStickies().length).toBe(0);
  });
});
