import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userName=''
  phone:any=''
  email:any=''
  constructor() { }

  ngOnInit(): void {
   this.phone= localStorage.getItem('mobile')
   this.userName=localStorage.getItem('user')
   this.email=localStorage.getItem('email')
  }

}
