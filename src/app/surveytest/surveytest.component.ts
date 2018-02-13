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
    let n = surveyModel.getValue('Culture');
    var cat_1 = Number(n.culture) + Number(n.agility) + Number(n.risks) + Number(n.learning) + Number(n.change) + Number(n.believe);
    
    self.ds.isData(cat_1);
    alert('test isData : ' + self.ds.n);
    
    alert('test affichage culture' + cat_1);
    
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