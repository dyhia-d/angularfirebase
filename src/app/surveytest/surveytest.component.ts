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

  constructor(private surveySrv: SurveyService, private router:Router) {};

  /*surveySrv:SurveyService;
  submitForm(survey: JsonObject, score: number) {
    var newSurvey: Survey = new Survey(survey, score);
    this.surveySrv.addSurvey(newSurvey);
  }*/
  

  ngOnInit() {

    const json = { title: 'Product Feedback Survey Example', showProgressBar: 'top', pages: [
      {
        questions: [{
          type: 'matrix',
          name: 'Quality',
          title: 'Please indicate if you agree or disagree with the following statements',
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
              value: 'does what it claims',
              text: 'Product does what it claims'
            },
            {
              value: 'better then others',
              text: 'Product is better than other products on the market'
            },
            {
              value: 'easy to use',
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
    //var survey: Survey = new Survey(result.data);

    var self = this;

    

    surveyModel.onComplete.add(function(result) {
      
      //var newSurvey: Survey = new Survey(json);
      document.querySelector('#result').innerHTML = "result: " + JSON.stringify(result.data);
      
      //var score:number = 5;
      var newSurvey:Survey;
      newSurvey = result.data;
      
      //this.surveySrv.addSurvey(this.json_t.bind(this));  
      //setInterval(this.submitSurvey(newSurvey).bind(this));

      //alert('test1' + JSON.stringify(newSurvey));

      setInterval(self.submitSurvey(newSurvey));


     // setInterval(self.router.navigate(['/chartjs']));
      
    });
    //surveyModel.onComplete.add(this.sendDataToServer);
    Survey_t.SurveyNG.render('surveyElement', { model: surveyModel });
  }

  /*sendDataToServer(survey) {
        survey.sendResult('a9cd1b88-8e41-40a2-9331-61ffc60f7060');
    }*/

  submitSurvey(survey_r: Survey) {
    this.surveySrv.addSurvey(survey_r);
    alert(JSON.stringify(survey_r));
  }
}

