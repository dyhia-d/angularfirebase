//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
//import { SurveyComponent } from './survey/survey.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SurveytestComponent } from './surveytest/surveytest.component';
import { SurveyService } from './survey.service';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { AdminComponent } from './admin/admin.component';

import { ChartsModule, Color } from 'ng2-charts';
import { ReportService } from './_services/report.service';
import { DataSharingService } from './_services/data-sharing.service';
import { ResultsComponent } from './results/results.component';
import { HeaderComponent } from './header/header.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    //SurveyComponent,
    WelcomeComponent,
    PresentationComponent,
    SurveytestComponent,
    ChartjsComponent,
    AdminComponent,
    ResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    ChartsModule,
    AccordionModule,
    BrowserAnimationsModule,
    MnFullpageModule.forRoot()
  ],
  exports: [
    SurveytestComponent,
    ChartjsComponent
  ],
  providers: [SurveyService, ReportService, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
