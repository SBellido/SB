import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setLoadingState(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  isLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
