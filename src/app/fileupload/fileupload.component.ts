import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AuthService } from '../auth.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {

  public uploader: FileUploader //= new FileUploader({ url: URL,
                                //                    itemAlias: 'photo' });

  loading = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.uploader = new FileUploader({ url: URL,
                                       itemAlias: 'photo',
                                       authToken: `Bearer ${this.authService.getToken()}`});

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;};

    this.uploader.onProgressItem = (progress: any) => {
      console.log('progress');
      console.log(progress['progress']);
      this.loading=true;
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         //alert('File uploaded successfully');
         this.loading=false;
    };
  }
}
