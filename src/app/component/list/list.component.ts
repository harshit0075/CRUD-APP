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

  deleteUser(user_id:any){
    console.log(user_id);
    this.user.deleteUser(user_id).subscribe((res)=>{
      // console.log(res);
      this.ngOnInit();
      
    })
   
  }

}
