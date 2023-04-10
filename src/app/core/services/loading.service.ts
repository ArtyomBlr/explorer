import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading$ = new BehaviorSubject<boolean>(false);

  setLoading(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }

  getLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
}
