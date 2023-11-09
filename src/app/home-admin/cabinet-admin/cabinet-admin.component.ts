import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-cabinet-admin',
  templateUrl: './cabinet-admin.component.html',
  styleUrls: ['./cabinet-admin.component.scss'],
})
export class CabinetAdminComponent implements OnInit {
  activeUser$ = this._user.activeUser$;

  constructor(private _user: UserService) {}

  ngOnInit(): void {}
}
