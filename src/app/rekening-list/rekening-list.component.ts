import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Uittreksel } from '../uittreksel';
import { UittrekselService } from '../uittreksel.service';

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

  optionsSelect= [
    { value: 'werk', label: 'Werkrekening', selected: true },
    { value: 'reserve', label: 'Reserverekening' }
  ];

  selectedType='werk';

  public uploadLabel = "Bankbestand importeren";
  public uploadToggle = true;

  public uploader: FileUploader

  constructor(public uittrekselService: UittrekselService,
              private authService: AuthService) {}

  ngOnInit() {
    this.uittrekselService.getUittreksels(this.selectedType)
      .subscribe(
        res => this.uittreksels = res,
        err => console.log(err)
      )

    //fileupload
    this.uploader = new FileUploader({ url: URL,
                                       itemAlias: 'photo',
                                       authToken: `Bearer ${this.authService.getToken()}`});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;};
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
        res => this.uittreksels = res,
        err => console.log(err)
      )
  }

  //sorting
  key: string = 'id'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
}
