import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloData } from '../welcome/welcome.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: HttpClient) { }
  getSpringMessage(){
    let basicAuthHeaderString = this.addHeader();
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString 
    })
    
    return this.client.get<HelloData>("http://localhost:8080/Hello",{headers:header}).subscribe(
      response => console.log(response.message)
    );

    
  }
  addHeader(){
    let username='lp';
    let password='Sarah';
    let authString = 'Basic '+window.btoa(username+':'+password);
    return authString;
  }
 
}
