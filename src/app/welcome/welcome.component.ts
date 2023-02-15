import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';


export class HelloData{
  constructor(public message: string){

  }
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   message ='tune'
   userName ='';
 constructor(private route: ActivatedRoute, private service: DataService){

 }

  ngOnInit(): void {
    console.log(this.message)
   
   this.userName = this.route.snapshot.params['name']
  }

  getWelcome(){
    console.log(this.service.getSpringMessage())
  }

}
