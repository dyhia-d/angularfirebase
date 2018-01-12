import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {
  constructor(public http: Http) {
  }
  getReports() {
    return this.http.get('assets/adverseimpact.json')
      .map(res => res.json());
  }
}
