import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  a: any
  data: any
  name: string = ''
  constructor() { }

  ngOnInit(): void {
    this.a = (localStorage.getItem("login"))
    this.data = JSON.parse(this.a)

  }
  updateProfile(){
    
  }

}
