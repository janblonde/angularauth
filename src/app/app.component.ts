import { Component } from '@angular/core';
import { SetupService } from './setup.service';
import { InstellingenService } from './instellingen.service'
import { HelpService } from './help.service'
import { Router } from '@angular/router';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SNDX';

  readonly = true

  feedbackOpen = false
  helpText = ""
  message: Message = {email:"", page:"", text:""}

  constructor(public setupService: SetupService,
              public helpService: HelpService,
              private router: Router){}

  ngOnInit(){
    this.setupService.update()

    if(localStorage.getItem('role')==='nimda') this.readonly = false

  }

  switch(){
    this.feedbackOpen = !this.feedbackOpen
  }

  verzend(){
    this.message.email = localStorage.getItem('email')
    this.message.page = this.router.url
    this.message.text = this.helpText
    this.helpService.sendMessage(this.message)
      .subscribe(
        res => {
          this.helpText = ""
          this.feedbackOpen = false
          console.log(res)
        },
        err => console.log(err)
      )
  }
}
