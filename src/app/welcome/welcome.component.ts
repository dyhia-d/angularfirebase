import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-welcome',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
