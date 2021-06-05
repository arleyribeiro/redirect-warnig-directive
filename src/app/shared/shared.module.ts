import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RedirectWarningDirective } from "./directives/redirect-warning.directive";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { WarningDialogComponent } from "./components/warning-dialog/warning-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RedirectWarningDirective, WarningDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  entryComponents: [WarningDialogComponent],
  exports: [
    RedirectWarningDirective,
    WarningDialogComponent,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
