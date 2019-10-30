import { Component, OnInit } from '@angular/core';
import { UittrekselService } from '../uittreksel.service';
import { EigenaarService } from '../eigenaar.service';
import { RapportenService } from '../rapporten.service';
//import { RapportInkomsten } from '../rapport_inkomsten';

@Component({
  selector: 'app-rapporten',
  templateUrl: './rapporten.component.html',
  styleUrls: ['./rapporten.component.css']
})
export class RapportenComponent implements OnInit {

  rapportInkomsten = new Map();
  rapportWerkrekening = [];
  //map = new Map<String, String>();

  constructor(public uittrekselService: UittrekselService,
              public eigenaarService: EigenaarService,
              public rapportenService: RapportenService) {}

  async ngOnInit() {

   //inkomsten rapport
   await this.eigenaarService.getEigenaars()
      .subscribe(
        res => {
          //console.log(res)
          res.forEach((element)=>{
            //console.log(element);
            this.rapportInkomsten.set(element.naam,{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,
                                                    '6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0});
          });
        },
        err => console.log(err)
      )


  await this.uittrekselService.getUittreksels('werk')
    .subscribe(
      res => {
        res.forEach((element)=>{
          let myDate = new Date(element.datum);
          let month = myDate.getMonth()

          if(this.rapportInkomsten.get(element.tegenpartij)){

            let myObj = this.rapportInkomsten.get(element.tegenpartij);
            myObj[month] = parseInt(myObj[month]) + parseInt(element.bedrag.toString());
            myObj[12] = myObj[12] + parseInt(element.bedrag.toString());

            this.rapportInkomsten.set(element.tegenpartij,myObj);
          }

        })
      },
      err => console.log(err)
    )

  this.rapportenService.getWerkrekeningRapport()
    .subscribe(
      res => {
        //console.log(res);
        this.rapportWerkrekening = res;
        console.log(this.rapportWerkrekening);
      },
      err => console.log(err)
    )

  }

}
