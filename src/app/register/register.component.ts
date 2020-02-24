import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {email:'',password:''}

  error=false;

  constructor(private _auth: AuthService,
              public setupService: SetupService,
              private _router: Router) { }

  ngOnInit() {
  }

  check():boolean{
    if(this.registerUserData.email&&this.registerUserData.password) return true
    else return false
  }

  ngDoCheck(){
    if(this.registerUserData.email&&this.registerUserData.email=='') this.error=false
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          //console.log(res)
          localStorage.setItem('token', res.token)
          this.setupService.set('false')
          this._router.navigate(['/instellingen'])
        },
        err => {
          if(err.status===400) this.error=true
        }
      )
  }

}
