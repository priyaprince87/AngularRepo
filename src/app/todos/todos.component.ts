import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(
    public id:number,
    public desc:string,
    public targetDate: Date,
    public isCompleted: boolean
  ){

  }
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  {
ngOnInit(): void {
  
}
todos = [
  new Todo(1,'learn spring', new Date(), false),
  new Todo(1,'learn Angular', new Date(), false)
  //{id:1 ,desc:'learn spring'},
  //{id:2 ,desc: 'lear angular'}
]
}



