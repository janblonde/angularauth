                                                                                                                                                                                                                                             import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AuthService } from '../auth.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-rekening-list',
  templateUrl: './rekening-list.component.html',
  styleUrls: ['./rekening-list.component.css']
})

export class RekeningListComponent implements OnInit {

  uittreksels: Uittreksel[];

  totaal = 0
  datum

  optionsSelect= [
    { value: 'werk', label: 'Werkrekening', selected: true },
    { value: 'reserve', label: 'Reserverekening' }
  ];

  selectedType='werk';

  public uploadLabel = "Bankbestand importeren";
  public uploadToggle = true;

  public uploader: FileUploader

  constructor(public uittrekselService: UittrekselService,
              public dashboardService: DashboardService,
              private authService: AuthService,
              public router: Router) {}

  ngOnInit() {
    this.uittrekselService.getUittreksels(this.selectedType)
      .subscribe(
        res => {
          this.uittreksels = res
          if(res[0])
            this.datum = res[0].datum
        },
        err => console.log(err)
      )

    if(this.selectedType=='werk'){
      this.dashboardService.getWerkrekeningSaldo()
        .subscribe(
          res=> this.totaal = res.sum,
          err=> console.log(err)
        )
    }else{
      this.dashboardService.getReserverekeningSaldo()
        .subscribe(
          res=> this.totaal = res.sum,
          err=> console.log(err)
        )
    }

    //fileupload
    this.uploader = new FileUploader({ url: URL,
                                       itemAlias: 'photo',
                                       authToken: `Bearer ${this.authService.getToken()}`});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;};

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("item uploaded" + response);
            this.uploadLabel = "Bankbestand importeren";
            this.uploadToggle=true;
            this.uittrekselService.getUittreksels(this.selectedType)
              .subscribe(
                res => this.uittreksels = res,
                err => console.log(err)
              )
            //this.router.navigate(['/rekeninglist'])
        };
  }

  fileSelected(event){
    console.log(event);

    if(event.target.value){
      this.uploadLabel = event.target.value.split("\\").pop();
      this.uploadToggle = false;
    }
  }

  getSelectedValue(event: any) {
    this.uittrekselService.getUittreksels(event)
      .subscribe(
        res => {
          this.uittreksels = res
          this.datum = res[0].datum
        },
        err => console.log(err)
      )

    if(event=='werk'){
      this.dashboardService.getWerkrekeningSaldo()
        .subscribe(
          res=> this.totaal = res.sum,
          err=> console.log(err)
        )
    }else{
      this.dashboardService.getReserverekeningSaldo()
        .subscribe(
          res=> this.totaal = res.sum,
          err=> console.log(err)
        )
    }
  }

  //sorting
  key: string = 'datum'; //set default
  reverse: boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
}
