import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarMainPageComponent } from './components/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeAdminModule } from "../../home-admin/home-admin.module";
import { BoardComponent } from './components/board/board.component';
import { DayComponent } from './components/day/day.component';
import { DayOpenModalComponent } from "./components/day-open-modal/day-open-modal.component";

@NgModule({
  declarations: [
    CalendarMainPageComponent,
    MenuComponent,
    BoardComponent,
    DayComponent,
    DayOpenModalComponent,
  ],
  imports: [
    CommonModule,
    HomeAdminModule
  ]
})
export class CalendarModule {
}
