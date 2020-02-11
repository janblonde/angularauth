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

  constructor(public setupService: SetupService,
              private instellingenService: InstellingenService){}

  ngOnInit(){
    this.instellingenService.getSetup()
      .subscribe(
        res => {
          console.log(res.setup)
          this.setupService.set(res.setup)},
        err => console.log(err)
      )
  }


}
