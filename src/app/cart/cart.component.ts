import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { runInThisContext } from 'vm';
import { PizzaService } from "../pizza.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private router: Router, private service: PizzaService) { }

  collection: any = []
  price: number = 0

  ngOnInit(): void {
    this.start()
  }
  delete(item: any = []) {
    this.service.deleteCartList(item).subscribe(() => {
      if (this.service.deleteCartList(item)) {
        this.start()
      }
    })
  }

  start() {
    this.service.getCartList().subscribe((r) => {
      this.collection = r;
      this.collection.forEach((item: any) => {
        item['qty'] = 1
        this.calcuteNetPrice(item)
      });
      this.calculateTotalPrice()
    })
  }

  decrement(item: any) {
    if (item['qty'] != 1) {
      item['qty']--
      this.calcuteNetPrice(item)
      this.calculateTotalPrice()
    }
  }

  increment(item: any) {
    if (item['qty']) {
      item['qty']++
      this.calcuteNetPrice(item)
      this.calculateTotalPrice()
    }
  }

  calcuteNetPrice(item:any){
    item['netprice'] = item['qty'] * item.price;
  }

  calculateTotalPrice() {
    this.price = 0
    this.collection.forEach((i: any) => {
      this.price = this.price + i['netprice']
    });
  }

  goToPaymentOption(){
    this.service.setPrice(this.price);
    this.router.navigateByUrl("/paypal")
  }
}

