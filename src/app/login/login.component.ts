import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username=''
password= ''
errorMessage ='Invalid Cred'
invalidLogin = false

constructor(private router: Router, private auth: AuthenticationService){

}

handleClick(){
  if(this.auth.authenticate(this.username,this.password)){
    this.invalidLogin = false
    this.router.navigate(['welcome',this.username]);
  }
  else {
    this.invalidLogin = true
    this.router.navigate(['error']);
  }
  console.log(this.username + 'password---'+this.password);
}
}
