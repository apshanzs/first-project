import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName ="";
  password = "";
  errMsg="";

  constructor(private auth : AuthService,
    private route: Router) { }

  ngOnInit(): void {
  }
  login(){
  if(this.userName.length === 0){
    this.errMsg ="username is required";
  } else if(this.password.length === 0){
    this.errMsg = "password is required";

  } else{
    this.errMsg = ""
    let res = this.auth.login(this.userName, this.password)
    if(res=== 200){
      this.route.navigate(['home'])
    } else {
      if(res=== 403){
      this.errMsg = "invalid credentials"
      } 
     
    }
  }
  }

}
