import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {
  name !: string;
  lastName !: string;
  tab:string[]= ['a','b','c']
  user=[{name:'foulen',lastname:'foulani'},
  {name:'foulen2',lastname:'foulani'},
  {name:'foulen3',lastname:'foulani200'}]
  constructor() { }

  ngOnInit(): void {
    this.name="fahmi belaid"
    this.lastName="chaima sousse"
    
  }
  onAffiche(){
    this.name="ali"
  }


}
