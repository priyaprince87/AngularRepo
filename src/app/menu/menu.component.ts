import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLogg:boolean = false
  constructor(public auth: AuthenticationService){

  }
  ngOnInit(): void {
    //if(this.auth.isUserLoggedIn()){
      //this.isUserLogg=true}
  }
  

}
