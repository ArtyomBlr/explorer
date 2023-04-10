import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  public isLoading$: Observable<boolean> = this.loadingService.getLoading();

  constructor(private loadingService: LoadingService) { }
}
