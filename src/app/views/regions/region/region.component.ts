import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, shareReplay, switchMap } from 'rxjs';

import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent {
  public regionName$ = new BehaviorSubject<any>('');

  // TODO: add type
  public countryList$: Observable<any> = this.route.params
    .pipe(
      switchMap((params: Params) => {
        this.regionName$.next(params['id']);
        return this.locationService.getRegion(params['id'])
      }),
      catchError(() => this.router.navigateByUrl('/')),
      shareReplay({ refCount: false, bufferSize: 1 })
    )

  public constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private locationService: LocationService
  ) {}
}
