import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  idp!:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idp=this.route.snapshot.params['id'];
    console.log('id : ',this.idp)
    this.name=this.user[this.idp-1].name
    this.lastName="chaima sousse"
    
  }
  onAffiche(){
    this.name="ali"
  }


}
