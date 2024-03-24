import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(private user:UsersService){}
  userData:any=[]

  ngOnInit(): void {
    this.user.getUsers().subscribe((allData)=>{
      console.log(allData);
      this.userData=allData;
      
    });
  }

}
