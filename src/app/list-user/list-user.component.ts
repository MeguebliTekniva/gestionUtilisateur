import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  user=[{name:'foulen',lastname:'foulani'},
  {name:'foulen2',lastname:'foulani'},
  {name:'foulen3',lastname:'foulani200'}]
  constructor() { }

  ngOnInit(): void {
  }

}
