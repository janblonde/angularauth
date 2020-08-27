import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SetupService } from '../setup.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email:'',password:''}

  error = false

  constructor(private _auth: AuthService,
              private _router: Router,
              private setupService: SetupService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    if(this.loginUserData.email===''||this.loginUserData.password=='') this.error=false
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem('email', this.loginUserData.email)

          this._auth.getRole(this.loginUserData)
            .subscribe(
              res =>{
                localStorage.setItem('role',res.rows[0].role)
              },
              err => console.log(err)
            )

          this.setupService.updateAndReturn()
            .subscribe(
              res => {
                if(res.setup==3) this._router.navigate(['/dashboard'])
                else this._router.navigate(['/instellingen'])
              },
              err => console.log(err)
            )
        },
        err => {
          this.error = true
          console.log(err)
        }
    )
  }
}
