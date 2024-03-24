import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  constructor(private user:UsersService){}
  addUser=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
  }
  )

  ngOnInit(): void {
    
  }
  SaveUser(){
    // console.log(this.addUser.value);
    this.user.SaveUser(this.addUser.value).subscribe((res)=>{
      console.log(res);
      
    })
    
  }

}
