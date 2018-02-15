import { Injectable } from '@angular/core';
import { JsonObject, SurveyModel } from 'survey-angular';

@Injectable()
export class DataSharingService {

  constructor() { }

  n:number;

  heroes: number[];

  j:SurveyModel;

  sendData(getN:number) {
    this.n = getN;
    return this.n;
  }

  sendArray(getA:number[]) {
    this.heroes = getA;
    return this.heroes;
  }

  sendJsn(getJ:SurveyModel) {
    this.j = getJ;
    return this.j;
  }

}
