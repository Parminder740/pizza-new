import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PizzaService } from "../pizza.service";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPass: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  alreadyRegistered = {}

  constructor(private service: PizzaService) { }


  ngOnInit(): void {
  }

  saveUserData() {
    this.service.alreadyRegisteredCheck().subscribe((Response: any) => {
      this.alreadyRegistered = Response.find((getEmail: any) => this.form.value.email === getEmail.email)

    })

    if (this.alreadyRegistered === undefined && this.form.value.password===this.form.value.repeatPass) {
      console.log(this.form.value)
      this.service.signUpList(this.form.value).subscribe()
      alert("Successfully Registered!")
    }
    else {
      alert('Already Registered! Or Password Not Match' )
    }

  }
}


