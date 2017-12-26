import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Survey } from './survey.model';

@Injectable()
export class SurveyService {

  surveys: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.surveys= database.list('surveys');
  }

  getSurveys() {
    return this.surveys;
  }

  addSurvey(survey: Survey) {
    console.log("Je suis un survey" + survey);
    this.surveys.push(survey);
  }

}
