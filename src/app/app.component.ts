import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule} from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})

export class AppComponent implements OnInit {
 
  loginForm: FormGroup | undefined;
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    config: NgbCarouselConfig
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit() {
    // init the react form object
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user : any) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });

  }
// Logout the current session
  logOut(): void {
    this.socialAuthService.signOut();
  }
}