import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  userId = ""
  password = ""
  token = ""

  success = false;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    console.log(this.router.url)

    if(this.router&&this.router.url)
      this.token = this.router.url.substr(20,12)

    console.log(this.token)

    this.userService.checkToken(this.token)
      .subscribe(
        res => {
          if(res.rows[0])
            this.userId = res.rows[0].id
          else
            console.log('geen geldig resettoken')
        },
        err => console.log(err)
      )
  }

  check():boolean{
    if(this.password!='') return true
    else return false
  }

  reset(){
    let passPort = {
      userId: this.userId,
      password: this.password,
      token: this.token
    }
    this.userService.resetPassword(passPort)
      .subscribe(
        res => {
          console.log(res)
          this.success = true
        },
        err => console.log(err)
      )
  }

}
