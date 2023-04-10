import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthorDialogComponent } from 'src/app/shared/components/author-dialog/author-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(AuthorDialogComponent);
  }
}
