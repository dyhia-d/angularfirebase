import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataSharingService } from '../_services/data-sharing.service';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-results',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
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

}
