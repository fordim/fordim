import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingServiceModule } from "./tracking-service/tracking-service.module";
import { CalendarModule } from "./calendar/calendar.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TrackingServiceModule,
    CalendarModule,
  ]
})
export class FeaturesModule { }
