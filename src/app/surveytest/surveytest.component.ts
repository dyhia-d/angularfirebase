import { Survey } from '../survey.model';
import { Component, Input, OnInit } from '@angular/core';
import * as Survey_t from 'survey-angular';
import { SurveyService } from '../survey.service';
import { JsonObject } from 'survey-angular';
import {ChartsModule, Color} from 'ng2-charts';
import {Router, RouterLink} from '@angular/router';
import { DataSharingService } from '../_services/data-sharing.service';



@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
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

    const json = { title: 'Maturity Feedback Survey', showProgressBar: 'bottom', 
    pages: [
      {
        questions: [
          {
            type: "radiogroup",
                  name: "position",
                  title: "Choose job position...",
                  isRequired: true,
                  colCount: 0,
                  choices: [
                      "1|Designer", "2|Front-end Developer", "3|Back-end Developer", "4|Database Administrator", "5|System Engineer"
                  ],
                  renderAs: "prettycheckbox"
          },
          {
            type: "radiogroup",
            name: "sector",
            title: "Industrial sector...",
            isRequired: true,
            colCount: 0,
            choices: [
                "1|Public sector", "2|Manufacturing", "3|Financial service", "4|Transportation and logistics", "5|Technology, media and telecoms", "6|Other"
            ],
            renderAs: "prettycheckbox"
          },
        ],
        name: "page1",
        title: "General questions"
      },
      {
        questions: [{
          type: 'matrix',
          name: 'Culture',
          title: 'Please indicate if you agree or disagree with the following statements',
          isRequired: true,
          columns: [{
            value: 1,
            text: 'Strongly Disagree'
          },
            {
              value: 2,
              text: 'Disagree'
            },
            {
              value: 3,
              text: 'Neutral'
            },
            {
              value: 4,
              text: 'Agree'
            },
            {
              value: 5,
              text: 'Strongly Agree'
            }
          ],
          rows: [{
            value: 'culture',
            text: 'A culture of change is embraced within the organization'
          },
            {
              value: 'agility',
              text: 'Agility is embraced in all levels of organization'
            },
            {
              value: 'risks',
              text: 'We take measured risks in order to enable innovation'
            },
            {
              value: 'customer',
              text: 'We prioritize overall customer experience over the performance of any individual channel'
            },
            {
              value: 'change',
              text: 'Our organization is able to identify the changes and quick respond to them'
            }
          ]
        }
        ],
        name: "page2",
        title: "Culture"
      }, {
        questions: [{
          type: 'radiogroup',
          name: 'price to competitors',
          title: 'Compared to our competitors, do you feel the Product is',
          choices: ['Less expensive', 'Priced about the same', 'More expensive', 'Not sure']
        },
          {
            type: 'radiogroup',
            name: 'price',
            title: 'Do you feel our current price is merited by our product?',
            choices: ['correct|Yes, the price is about right',
              'low|No, the price is too low for your product',
              'high|No, the price is too high for your product'
            ]
          }
        ]
      }, {
        questions: [{
          type: 'text',
          name: 'email',
          title: 'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
        }]
      }]
    };

    let surveyModel = new Survey_t.ReactSurveyModel(json);
    
    var self = this;

    //résultat en format json
    surveyModel.onComplete.add(function(result) {
    document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);

    var newSurvey:Survey;
    newSurvey = result.data;

    //calcul du sous total de scoring
    let n = surveyModel.getValue('Culture');
    var cat_1 = Number(n.culture) + Number(n.agility) + Number(n.risks) + Number(n.customer) + Number(n.change);
    
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

