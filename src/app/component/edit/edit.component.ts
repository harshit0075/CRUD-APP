import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { UsersService } from '../../users.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  constructor(private user:UsersService, private router:ActivatedRoute){}
  editUser=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
  }
  )
message:boolean=false;
ngOnInit(): void {
  // console.log(this.router.snapshot.params.id);
  this.user.getUserById(this.router.snapshot.params['id']).subscribe((res:any)=>{
    console.log(res);
    this.editUser=new FormGroup({
      name:new FormControl(res['name']),
      email:new FormControl(res['email']),
    }
    )
    
  })
  
}
UpdateUser(){
// console.log(this.editUser.value);
this.user.updateUser(this.router.snapshot.params['id'],this.editUser.value).subscribe((res)=>{
  // console.log(res);
  this.message=true;
  
})

}
removeMessage(){
  this.message=false;
}


}
