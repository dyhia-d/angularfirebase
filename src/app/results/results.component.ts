import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../_services/data-sharing.service';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import {BrowserModule} from '@angular/platform-browser'
import {ChartsModule, Color} from 'ng2-charts';
import { JsonObject } from 'survey-angular';
import { legacy, novice, rec_opt_manu, optimised } from '../variable';

@Component({
  selector: 'app-results',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  myHero ;
  rec_legacy:String[] = legacy;
  rec_novice:String[] = novice;
  rec_optimised:String[] = optimised;

  @Input() public option: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: ['dimensions', 'global', 'recommendations']
  });

  constructor(public ds:DataSharingService, public fullpageService: MnFullpageService) { }

  ngOnInit() {


    
  //alert(display);
    
    var self = this;
    self.calcul_maturity();
  }

  ngOnDestroy() { 
    this.fullpageService.destroy('all'); 
  }



  cat1:number = Math.floor(Math.random() * 4) + 1 ;
  cat2:number = Math.floor(Math.random() * 4) + 1 ;
  cat3:number = Math.floor(Math.random() * 4) + 1 ;
  cat4:number = Math.floor(Math.random() * 4) + 1 ;
  cat5:number = Math.floor(Math.random() * 4) + 1 ;
 
  //matu_globale = this.ds.heroes[0] + this.ds.heroes[1] + this.ds.heroes[2] + this.ds.heroes[3] + this.ds.heroes[4];
  matu_globale = Math.floor(Math.random() * 112) + 1 ;
  
  calcul_maturity() {
    if (this.matu_globale < 55) {
      return this.myHero = "Legacy system";
    } else if (this.matu_globale < 80) {
      return this.myHero = "Digital novice";
    } else if (this.matu_globale < 99) {
      return this.myHero = "Optimised system";
    } else {
      return this.myHero = "Innovative / Intuitive system";
    }
  }
  
  name:string;
  labels:string[] = ['Culture', 'IS resources', 'Business processes', 'IT infrastructure', 'IS Strategy and IT alignment'];
  
  /*cat1:number = this.ds.heroes[0] / 6;
  cat2:number = this.ds.heroes[1] / 5;
  cat3:number = this.ds.heroes[2] / 4;
  cat4:number = this.ds.heroes[3] / 6;
  cat5:number = this.ds.heroes[4] / 7;*/


  data:number[] = [this.cat1, this.cat2, this.cat3, this.cat4, this.cat5];
  
  type:string = 'doughnut';
  type_2:string = 'bar';
  type_3:string = 'radar';
  
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
            max: 4,
            stepSize: 1
        }
    }
  };

  public lineChartColors:Array<any> = [
    { // orange
      backgroundColor: 'rgba(255,165,0, 0.1)',
      borderColor: 'rgba(255,165,0, 1)',
      pointBackgroundColor: 'rgba(255,127,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,127,0,0.8)'
    }
  ];
  
}
