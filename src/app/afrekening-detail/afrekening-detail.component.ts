import { Component, OnInit } from '@angular/core';
import { AfrekeningService } from '../afrekening.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afrekening-detail',
  templateUrl: './afrekening-detail.component.html',
  styleUrls: ['./afrekening-detail.component.scss']
})
export class AfrekeningDetailComponent implements OnInit {

  items = [];
  van = ""
  tot = ""

  constructor(public afrekeningService: AfrekeningService,
              public route: ActivatedRoute ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.afrekeningService.getAfrekening(id)
      .subscribe(
        res=>{
          let dag = res.van.substr(8,2)
          let maand = res.van.substr(5,2)
          let jaar = res.van.substr(0,4)
          this.van = dag + '/' + maand + '/' + jaar

          dag = res.tot.substr(8,2)
          maand = res.tot.substr(5,2)
          jaar = res.tot.substr(0,4)
          this.tot = dag + '/' + maand + '/' + jaar
        },
        err=>console.log(err)
      )

    this.afrekeningService.getAfrekeningDetails(id)
      .subscribe(
        res=>{
          console.log(res)
          this.items = res
        },
        err=>console.log(err)
      )
  }

}
