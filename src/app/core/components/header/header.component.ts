import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isHomePage$: Observable<boolean> = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((nav) => nav.url !== '/')
  );

  public constructor(
    private location: Location,
    private router: Router
  ) {}

  public goBack(): void {
    this.location.back();
  }
}
