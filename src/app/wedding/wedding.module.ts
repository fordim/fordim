import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageModalComponent } from "./components/welcome-page-modal/welcome-page-modal.component";
import { WeddingMainPageComponent } from "./components/main-page/main-page.component";

@NgModule({
  declarations: [
    WelcomePageModalComponent,
    WeddingMainPageComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class WeddingModule { }
