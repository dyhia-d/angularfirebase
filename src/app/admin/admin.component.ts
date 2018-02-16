import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

   // Doughnut
   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Dyhia-Order Sales', 'Adu-Order Sales', 'Gasp-Order Sales'];
   public doughnutChartData:number[] = [350, 450, 100, 500, 230, 890];
   public doughnutChartType:string = 'doughnut';
  
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

  constructor() { }

}
