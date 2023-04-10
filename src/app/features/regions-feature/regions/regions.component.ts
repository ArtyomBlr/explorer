import { ChangeDetectionStrategy, Component } from '@angular/core';

import { REGIONS } from 'src/app/core/constants/regions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent {
  // ! Haven't found API

  // public regions$ = this.locationService.getRegions()
  //   .pipe(
  //     catchError(() => of([]))
  //   );
  
  public regions = REGIONS;
}
