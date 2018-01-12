//our root app component
import {Component, NgModule, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ChartsModule, Color} from 'ng2-charts';

@Component({
  selector: 'my-app',
  template: `
    <h2> Results </h2>
    <h2>[colors] being undefined prevents all of [datasets]'s colors</h2>
    <div style="display: block" width="2" height="2">
      <canvas baseChart
        [labels]="labels"
        [data]="data"
        [colors]="colorsUndefined"
        [chartType]="type_3"
        [options]="options"
        ></canvas>
    </div>

    <p>Here's what you could do... </p>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...   </li>
      <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco...   </li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse...   </li>
      <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...   </li>
    </ul>
  `,
})
export class ChartjsComponent implements OnInit {

ngOnInit() {

    var self = this;

    var JSONObject = {
        "albums": [{
          "title": "Pulse",
          "artist": "Pink Floyd",
          "description": "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.",
          "id": "1"
          }, {
          "title": "Dilate",
          "artist": "Ani DiFranco",
          "description": "Her highest-selling and most acclaimed album, released in 1996.",
          "id": "2"
            }, {
          "title": "Axis Bold As Love",
          "artist": "Jimi Hendrix",
          "description": "Second studio album by the English-American band, released in 1967.",
          "id": "3"
        }]
    }

    var count:number =setInterval(self.calc_rec(1));

    if (count = 5) {
      
    } else if (count = 10) {

    } else {

    }
  }

  calc_rec(calc:number) {
    if (this.cat1 + this.cat2 + this.cat3+ this.cat4 + this.cat5 < 10) {
      return calc = 5;
    } else if (this.cat1 + this.cat2 + this.cat3+ this.cat4 + this.cat5 < 20) {
      return calc = 10;
    } else {
      return calc = 15;
    }
  }


  name:string;

  labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Product sales', 'Feedback rating'];
 
  /*cat1:number = 5;
  cat2:number = 4;
  cat3:number = 2;
  cat4:number = 3;
  cat5:number = 1;*/
  cat1:number = Math.floor(Math.random() * 4) + 1 ;
  cat2:number = Math.floor(Math.random() * 4) + 1 ;
  cat3:number = Math.floor(Math.random() * 4) + 1 ;
  cat4:number = Math.floor(Math.random() * 4) + 1 ;
  cat5:number = Math.floor(Math.random() * 4) + 1 ;

  

  
  data:number[] = [this.cat1, this.cat2, this.cat3, this.cat4, this.cat5];
  
  type:string = 'doughnut';
  type_2:string = 'bar';
  type_3:string = 'radar'
  
  colorsUndefined: Array<Color>;
  colorsEmpty: Array<Color> = [];
  colorsOverride: Array<Color> = [{
    backgroundColor: 'green',
    hoverBackgroundColor: 'purple'
  }];
  colorsEmptyObject: Array<Color> = [{}];

  options = {
    //responsive: false,
    //maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            min: 0,
            max: 5,
            stepSize: 1
        }
    }
  };
  
  datasets: any[] = [
  {
    data: this.data,
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#000",
      "#36A2EB",
      "#FFCE56"
    ]}];


  constructor() {
    this.name = 'Angular2'
  }
}