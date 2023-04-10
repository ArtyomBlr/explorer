import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, shareReplay, switchMap } from 'rxjs';

import { LocationService } from 'src/app/core/services/location.service';
import { Country } from 'src/app/core/models/country.model';
import { Currency } from 'src/app/core/models/currency.model';
import { Dictionary } from 'src/app/core/models/dictionary.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  public country$: Observable<Country> = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.locationService.getCountry(params['cca'])
      }),
      map((data: any) => data[0])
    )

  public constructor(
    private route: ActivatedRoute, 
    private locationService: LocationService
  ) {}

  public getCurrencies(currencies: Dictionary<Currency>): string {
    return Object.values(currencies).map(({ symbol }: Currency) => symbol).join(' ');
  }
}
