import { Survey } from '../survey.model';
import { Component, Input, OnInit } from '@angular/core';
import * as Survey_t from 'survey-angular';
import { SurveyService } from '../survey.service';
import { JsonObject } from 'survey-angular';
import {ChartsModule, Color} from 'ng2-charts';
import {Router, RouterLink} from '@angular/router';



@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
  styleUrls: ['./surveytest.component.css']
})
export class SurveytestComponent implements OnInit {

  constructor(private surveySrv: SurveyService, private router:Router) {}  

  ngOnInit() {   
    
    var myCss = {
      matrix: {
          root: "table table-striped"
      },
      navigationButton: "button btn-lg"
    };

    const json = { title: 'Maturity Feedback Survey', showProgressBar: 'top', 
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
                "1|Services industry", "2|Manufacturing", "3|Primary sector", "4|Food processing", "5|Etc..."
            ],
            renderAs: "prettycheckbox"
          }
      ]},
      {
        questions: [{
          type: 'matrix',
          name: 'Quality',
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
            value: 'affordable',
            text: 'Product is affordable'
          },
            {
              value: 'claims',
              text: 'Product does what it claims'
            },
            {
              value: 'better',
              text: 'Product is better than other products on the market'
            },
            {
              value: 'easy',
              text: 'Product is easy to use'
            }
          ]
        },
          {
            type: 'rating',
            name: 'recommend friends',
            visibleIf: '{satisfaction} > 3',
            title: 'How likely are you to recommend the Product to a friend or co-worker?',
            mininumRateDescription: 'Will not recommend',
            maximumRateDescription: 'I will recommend'
          },
          {
            type: 'comment',
            name: 'suggestions',
            title: 'What would make you more satisfied with the Product?',
          }
        ]
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

    surveyModel.onComplete.add(function(result) {
    document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);

    var newSurvey:Survey;
    newSurvey = result.data;

      alert('test affichage quality');

      let n = surveyModel.getValue('Quality');

      var cat_1 = Number(n.affordable) + Number(n.claims) + Number(n.better) + Number(n.easy);

      alert(cat_1);
      
      setInterval(self.submitSurvey(newSurvey));

      //setInterval(self.router.navigate(['/chartjs']));
      
    });

    Survey_t.SurveyNG.render('surveyElement', { model: surveyModel , css: myCss});
  }


  submitSurvey(survey_r: Survey) {
    this.surveySrv.addSurvey(survey_r);
    //alert(JSON.stringify(survey_r));
  }

}

