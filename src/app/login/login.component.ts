import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { PizzaService } from "../pizza.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private service: PizzaService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin() {
    this.service.loginCheck().subscribe((r) => {
      r.find((view:any) => {
        if (view.email === this.loginform.value.email && view.password === this.loginform.value.password) {
          localStorage.setItem('login', JSON.stringify(view))
          alert("SUCCESSFULLY LOGEDIN!")
          this.router.navigate(['/dashboard'])

        }
        // else {
        //   window.alert("USER NOT FOUND!")
        // }
      })
    })
  }
}
