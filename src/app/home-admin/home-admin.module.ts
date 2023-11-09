import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetAdminComponent } from './cabinet-admin/cabinet-admin.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';
import { FlyingBalloonComponent } from './balloon/flying-balloon.component';

@NgModule({
  declarations: [
    CabinetAdminComponent,
    LayoutAdminComponent,
    FlyingBalloonComponent,
  ],
  exports: [
    LayoutAdminComponent,
  ],
  imports: [CommonModule, RouterModule, MainModule],
})
export class HomeAdminModule {}
