import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, catchError, map, shareReplay, switchMap } from 'rxjs';

import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  // TODO: add type
  public country$: Observable<any> = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.locationService.getCountry(params['id'])
      }),
      catchError(() => this.router.navigateByUrl('/')),
      map((data: any) => data[0]),
      shareReplay({ refCount: false, bufferSize: 1 })
    )

  public constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private locationService: LocationService
  ) {}
}
