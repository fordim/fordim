import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageTrackingServiceComponent } from './components/main-page/main-page.component';
import { HomeAdminModule } from '../../home-admin/home-admin.module';
import { TaskComponent } from './components/task/task.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageTrackingServiceComponent,
    TaskComponent,
    MenuComponent,
  ],
  imports: [CommonModule, HomeAdminModule, FormsModule],
})
export class TrackingServiceModule {}
