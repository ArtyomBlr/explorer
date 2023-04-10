import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

import { LocationService } from 'src/app/core/services/location.service';
import { Country } from 'src/app/core/models/country.model';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent {
  public regionName$ = new BehaviorSubject<any>('');

  public countryList$: Observable<Country[]> = this.route.params
    .pipe(
      switchMap((params: Params) => {
        this.regionName$.next(params['id']);
        return this.locationService.getRegion(params['id']);
      })
    )

  public constructor(
    private route: ActivatedRoute, 
    private locationService: LocationService
  ) {}
}
