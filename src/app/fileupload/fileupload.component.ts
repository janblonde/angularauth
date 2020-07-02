import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AuthService } from '../auth.service';

import { EventEmitter } from '@angular/core';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import { config } from '../config';

const URL = config.api+'upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  public uploader: FileUploader;

  loading = false;

  constructor(private authService: AuthService) {
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
  }

  showFiles() {
      let files = '';
      for (let i = 0; i < this.files.length; i ++) {
        files += this.files[i].name;
         if (!(this.files.length - 1 === i)) {
           files += ',';
        }
      }
      return files;
   }

  startUpload(): void {
      const event: UploadInput = {
      type: 'uploadAll',
      url: config.api+'upload2',
      method: 'POST',
      data: { foo: 'bar' },
      headers: {'Authorization': `Bearer ${this.authService.getToken()}`}
      };
      this.files = [];
      this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
      this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

      if (output.type === 'allAddedToQueue') {
      } else if (output.type === 'addedToQueue') {
        this.files.push(output.file); // add file to array when added
      } else if (output.type === 'uploading') {
        // update current data in files array for uploading file
        const index = this.files.findIndex(file => file.id === output.file.id);
        this.files[index] = output.file;
      } else if (output.type === 'removed') {
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
      } else if (output.type === 'dragOver') {
        this.dragOver = true;
      } else if (output.type === 'dragOut') {
      } else if (output.type === 'drop') {
        this.dragOver = false;
      }
      this.showFiles();
  }

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
