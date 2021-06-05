import { WarningDialogComponent } from "./../components/warning-dialog/warning-dialog.component";
import { Directive, HostListener, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Directive({
  selector: "[appRedirectWarning]",
})
export class RedirectWarningDirective {
  @HostListener("click", ["$event"])
  public onClick(): void {
    this.execute();
  }

  @Input("url")
  private _url = "/";

  @Input("state")
  private _state;

  @Input("showDialog")
  private _hasModification;

  private _subscriptions = new Subscription();

  constructor(private _router: Router, private _dialog: MatDialog) {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {}

  public execute(): void {
    if (this._hasModification) {
      const dialogRef = this._dialog.open(WarningDialogComponent);
      this._subscriptions.add(
        dialogRef.afterClosed().subscribe((response) => {
          if (response) {
            this.redirectTo();
          }
        })
      );
    } else {
      this.redirectTo();
    }
  }

  public redirectTo(): void {
    this._router.navigate([this._url], { state: this._state });
  }
}
