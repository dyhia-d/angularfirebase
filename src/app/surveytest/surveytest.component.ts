import { Survey } from '../survey.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as Survey_t from 'survey-angular';
import { SurveyService } from '../survey.service';
import { JsonObject } from 'survey-angular';
import {ChartsModule, Color} from 'ng2-charts';
import {Router, RouterLink} from '@angular/router';
import { DataSharingService } from '../_services/data-sharing.service';



@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./surveytest.component.css']
})
export class SurveytestComponent implements OnInit {

  constructor(private surveySrv: SurveyService, private router:Router, public ds:DataSharingService) {}  

  ngOnInit() {   
    
    var myCss = {
      matrix: {
          root: "table table-striped"
      },
      navigationButton: "button btn-lg"
    };

    Survey_t.StylesManager.applyTheme("stone");

    var json = {
      surveyId: 'f25c2f4a-0e6f-490d-a946-89cd863c61a3'
    }


    let surveyModel = new Survey_t.ReactSurveyModel(json);
    
    var self = this;

    //résultat en format json
    surveyModel.onComplete.add(function(result) {
    document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);

    var newSurvey:Survey;
    newSurvey = result.data;

    //calcul du sous total de scoring
    let c = surveyModel.getValue('Culture');
    let i = surveyModel.getValue('ISresources'); let ib = surveyModel.getValue('ISRbis');
    let b = surveyModel.getValue('BusinessProcesses');
    let t = surveyModel.getValue('ITInfrastructure');
    let s = surveyModel.getValue('ISStrategy'); let sb = surveyModel.getValue('ISTbis');

    var cat_culture = Number(c.culture) + Number(c.agility) + Number(c.risks) + Number(c.learning) + Number(c.change) + Number(c.believe);
    var cat_resources = Number(i.budget) + Number(i.skills) + Number(i.resources) + Number(ib.management) + Number(ib.topmanagement);
    var cat_bp = Number(b.documentedprocesses) + Number(b.respondchange) + Number(b.understanding) + Number(b.bpimprov);
    var cat_tech = Number(t.integrate) + Number(t.modern) + Number(t.role) + Number(t.initiativeiot) + Number(t.hardware)+ Number(t.hardware)+ Number(t.supplychain);
    var cat_strat = Number(s.strategy) + Number(s.modules) + Number(s.scope) + Number(s.cleargoals) + Number(sb.vision) + Number(sb.goals);

    var heroes:number[]= [cat_culture, cat_resources, cat_bp, cat_tech, cat_strat];

    self.ds.sendData(cat_culture);
    self.ds.sendArray(heroes);

    
    setInterval(self.submitSurvey(newSurvey));
    setInterval(self.router.navigate(['/res']));
   //setInterval(self.router.navigate(['/chartjs']));
      
    });

    Survey_t.SurveyNG.render('surveyElement', { model: surveyModel , css: myCss});
  }


  submitSurvey(survey_r: Survey) {
    this.surveySrv.addSurvey(survey_r);
    //alert(JSON.stringify(survey_r));
  }

  calculerMaturityLevel() {

  }

}