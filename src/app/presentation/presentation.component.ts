import { Component, Input, Output, ViewEncapsulation, OnInit } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-presentation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  title = 'app works!';

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
  });

  constructor(public fullpageService: MnFullpageService) {
  }

  ngOnInit() {
    
  }

  ngOnDestroy() { 
    this.fullpageService.destroy('all'); 
  }

}
