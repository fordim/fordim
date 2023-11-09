import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageZoomedInImageComponent } from './main-page/main-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "../main/main.module";

@NgModule({
  declarations: [
    MainPageZoomedInImageComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MainModule
  ]
})
export class ZoomedInImageModule { }
