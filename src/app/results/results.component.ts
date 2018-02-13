import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../_services/data-sharing.service';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import {BrowserModule} from '@angular/platform-browser'
import {ChartsModule, Color} from 'ng2-charts';

@Component({
  selector: 'app-results',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() public option: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: ['dimensions', 'global', 'recommendations']
  });


  constructor(public ds:DataSharingService, public fullpageService: MnFullpageService) { }

  ngOnInit() {
    var self = this;
    var getme = self.ds.n;

    alert("score : " + getme)
  }

  ngOnDestroy() { 
    this.fullpageService.destroy('all'); 
  }

  name:string;

  labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Product sales', 'Feedback rating'];
 
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
    backgroundColor: 'black',
    hoverBackgroundColor: 'purple'
  }];
  colorsEmptyObject: Array<Color> = [{}];

  options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            min: 0,
            max: 5,
            stepSize: 1
        }
    }
  };
  
  /*datasets: any[] = [
  {
    data: this.data,
    backgroundColor: [
      "#FF6384",
      "#FF6384",
      "#FF6384"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#FF6384",
      "#FF6384"
    ]}];*/


}
