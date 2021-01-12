import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SurveyAnalyticsComponent } from "./survey.analytics.component";

@NgModule({
  declarations: [AppComponent, SurveyAnalyticsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
