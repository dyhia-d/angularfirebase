import { Injectable } from '@angular/core';

@Injectable()
export class DataSharingService {

  constructor() { }

  n:number;

  isData(getN:number) {
    this.n = getN;
    return this.n;
  }

}
