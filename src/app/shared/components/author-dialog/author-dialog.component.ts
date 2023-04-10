import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorDialogComponent {}
