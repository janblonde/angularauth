import { Component } from '@angular/core';
import { SetupService } from './setup.service';
import { InstellingenService } from './instellingen.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SNDX';

  constructor(public setupService: SetupService){}

  ngOnInit(){
    this.setupService.update()
      // .subscribe(
      //   res => console.log(res),
      //   err => console.log(err)
      // )
  }
}
