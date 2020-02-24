import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-password-request',
  templateUrl: './password-request.component.html',
  styleUrls: ['./password-request.component.scss']
})
export class PasswordRequestComponent implements OnInit {

  requestData = {email:""}

  error = false;

  success = false;

  constructor(private userService: UserService) { }

  ngOnInit() {}

  request(){
    this.userService.sendToken(this.requestData.email)
      .subscribe(
        res => {
          console.log(res)
          this.success=true;
        },
        err => {
          console.log(err)
          this.error=true;
        }
      )
  }

  ngDoCheck(){
    if(this.requestData.email==''){
      this.error=false
      this.success=false
    }
  }
}
