import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
})
export class LayoutAdminComponent {
  activeUser$ = this._user.activeUser$;

  constructor(private _user: UserService, private _router: Router) {}

  public logout() {
    this._user.logoutUser();
  }

  public adminPage() {
    this._router.navigateByUrl('admin-cabinet').then((r) => {});
  }

  public mainPage() {
    this._router.navigateByUrl('').then((r) => {});
  }

  public balloonPage() {
    this._router.navigateByUrl('admin-cabinet/balloon').then((r) => {});
  }

  public trackingPage() {
    this._router.navigateByUrl('admin-cabinet/tracking').then((r) => {});
  }
}
