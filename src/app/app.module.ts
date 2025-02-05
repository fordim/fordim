import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { ThinkItUpModule } from "./think-it-up/think-it-up.module";
import { HttpClientModule } from "@angular/common/http";
import { GuessWordModule } from "./guess-word/guess-word.module";
import { NewYearClubsModule } from "./new-year-clubs/new-year-clubs.module";
import { NewYearMathModule } from "./new-year-math/new-year-math.module";
import { ZoomedInImageModule } from "./zoomed-in-image/zoomed-in-image.module";
import { HomeAdminModule } from "./home-admin/home-admin.module";
import { FeaturesModule } from "./features/features.module";
import { WeddingModule } from "./wedding/wedding.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ThinkItUpModule,
    HttpClientModule,
    GuessWordModule,
    NewYearClubsModule,
    NewYearMathModule,
    ZoomedInImageModule,
    HomeAdminModule,
    FeaturesModule,
    WeddingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
