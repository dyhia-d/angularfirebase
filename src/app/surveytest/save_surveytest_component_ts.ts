/*import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey.model';

@Component({
  selector: 'app-surveytest',
  templateUrl: './surveytest.component.html',
  styleUrls: ['./surveytest.component.css']
})
export class SurveytestComponent implements OnInit {

  constructor() { }

  json = { title: 'BANANA Feedback Survey Example', showProgressBar: 'top', pages: [
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
          }
        ]
      }, {
        questions: [{
            type: 'radiogroup',
            name: 'price to competitors',
            title: 'Compared to our competitors, do you feel the Product is',
            choices: ['Less expensive', 'Priced about the same', 'More expensive', 'Not sure']
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

  onSurveySaved(survey) {
    this.json = survey;
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(survey);
    console.log("I am a banana");
  }

  onSurveyComplete(result) {
      document
          .querySelector('#surveyResult')
          .innerHTML = "result: " + JSON.stringify(result.data);
  };


  ngOnInit() {
  }

  

}*/

