import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { UittrekselService } from '../uittreksel.service';
import { FactuurService } from '../factuur.service';
import { Agenda } from '../agenda';
import { Factuur } from '../factuur';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [900, 1800, 2700, 3600, 4500, 5400, 6300], label: 'Gecumuleerde inkomsten' },
    { data: [460, 1250, 2500, 3500, 4000, 5000, 5500], label: 'Gecumuleerde uitgaven' }
  ];

  public chartLabels: Array<any> = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 4,
    },
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 4,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  agendas: Agenda[];

  voorschotten: Factuur[] = [];

  ongekoppeld = 0;

  todayDate = new Date();

  constructor(public dashboardService: DashboardService,
              public uittrekselService: UittrekselService,
              public factuurService: FactuurService) { }

  ngOnInit() {
    this.dashboardService.getAgenda()
      .subscribe(
        res => this.agendas = res,
        err => console.log(err)
      )

    this.uittrekselService.getOngekoppeldeUittreksels()
      .subscribe(
        res => this.ongekoppeld = res.length,
        err => console.log(err)
      )

    this.factuurService.getVoorschotten()
      .subscribe(
        res => {
          res.forEach((element)=>{
            console.log(element)
            console.log(this.voorschotten)
            if(!element.fk_uittreksel) this.voorschotten.push(element)
          })
        },
        err => console.log(err)
      )
  }

}
