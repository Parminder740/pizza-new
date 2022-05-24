import { Component, OnInit } from '@angular/core';
import { PizzaService } from "../pizza.service";
import { ActivatedRoute } from "@angular/router";
import { ThemeService } from "../theme.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any = []
  profile: any = []
  view: any;
  title = 'dark-theme-yt'; 
  isDarkMode: boolean;
  showFiller= false;
  
  constructor(private pizzaData: PizzaService, private router: ActivatedRoute, private theme: ThemeService) {
    this.theme.initTheme();
    this.isDarkMode=this.theme.isDarkMode();
   }
  ngOnInit() {

    this.profile = localStorage.getItem('login')
    this.view = JSON.parse(this.profile)

    this.pizzaData.getData().subscribe((result) => {
      console.warn(result)
      this.data = result
    })

  }
  passData(item: any) {
    console.log(item)
    this.pizzaData.postCartList(item).subscribe((result) => {
      console.log(result)
    })
  }

  toggleDarkMode() {
    this.isDarkMode = this.theme.isDarkMode();

    this.isDarkMode
      ? this.theme.update('light-mode')
      : this.theme.update('dark-mode');
  }
}
