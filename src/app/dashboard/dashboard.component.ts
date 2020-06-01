import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { UittrekselService } from '../uittreksel.service';
import { FactuurService } from '../factuur.service';
import { Agenda } from '../agenda';
import { Factuur } from '../factuur';
//import { BaseChartDirective } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //@ViewChild(BaseChartDirective) chart: BaseChartDirective;

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [], label: 'Gecumuleerde inkomsten' },
    { data: [], label: 'Gecumuleerde uitgaven' }
  ];

  public chartLabels: Array<any> = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli',
                                    'Augustus', 'September', 'Oktober', 'November'];

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

  facturen: Factuur[] = [];

  ongekoppeld = 0;

  todayDate = new Date();

  werkrekeningsaldo = 0;
  reserverekeningsaldo = 0;

  constructor(public dashboardService: DashboardService,
              public uittrekselService: UittrekselService,
              public factuurService: FactuurService) {}

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

    this.factuurService.getVoorschotten(false)
      .subscribe(
        res => {
          res.forEach((element)=>{
            if(!element.betaald){
              let vervaldatum = new Date(element.vervaldatum)
              if(vervaldatum<this.todayDate){
                element.vervallen = true
              }else{
                element.vervallen = false
              }
              this.voorschotten.push(element)
            }
          })
        },
        err => console.log(err)
      )

      this.factuurService.getFacturen(true)
        .subscribe(
          res => {
            res.forEach((element)=>{
                let vervaldatum = new Date(element.vervaldatum)
                if(vervaldatum<this.todayDate){
                  element.vervallen = true
                }else{
                  element.vervallen = false
                }
                this.facturen.push(element)
            })
          },
          err => console.log(err)
        )

      this.dashboardService.getInkomsten()
        .subscribe(
          res => {
            let inkomsten = 0
            for(let element of res.rows){
              inkomsten = inkomsten + parseInt(element.sum)
              this.chartDatasets[0].data.push(inkomsten)
            }
            let clone = JSON.parse(JSON.stringify(this.chartDatasets));
            this.chartDatasets=clone;
          },
          err => console.log(err)
        )

      this.dashboardService.getUitgaven()
        .subscribe(
          res => {
            let uitgaven = 0
            res.rows.forEach((element)=>{
              uitgaven = uitgaven + parseInt(element.sum)
              this.chartDatasets[1].data.push(-uitgaven)
            })
            let clone = JSON.parse(JSON.stringify(this.chartDatasets));
            this.chartDatasets=clone;
          },
          err => console.log(err)
        )

      this.dashboardService.getWerkrekeningSaldo()
        .subscribe(
          res => {
            this.werkrekeningsaldo = res.sum || 0
          },
          err => console.log(err)
        )

      this.dashboardService.getReserverekeningSaldo()
        .subscribe(
          res => {
            this.reserverekeningsaldo = res.sum || 0
          },
          err => console.log(err)
        )
  }

}
