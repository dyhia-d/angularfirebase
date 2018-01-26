import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { SurveyComponent } from './survey/survey.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SurveytestComponent } from './surveytest/surveytest.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { AdminComponent } from './admin/admin.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'pres', component: PresentationComponent},
  { path: 'surveytest', component: SurveytestComponent },
  { path: 'chartjs', component: ChartjsComponent },
  { path: 'res', component: ResultsComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
