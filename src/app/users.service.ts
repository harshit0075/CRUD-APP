import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='http://localhost:3000/user'

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.url)
  }
  SaveUser(user:any){
console.log(user);
return this.http.post(this.url, user)

  }

  deleteUser(id:any){
// console.log(id);
return this.http.delete(`${this.url}/${id}`)

  }  
}
