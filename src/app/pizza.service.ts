import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  price: any = 0;
  constructor(private http: HttpClient) { }

  url = ('http://localhost:3000/pizza')
  CartUrl = ('http://localhost:3000/cart')
  signup = ('http://localhost:3000/signup')
  
  getData() {
    return this.http.get(this.url)
  }
  postCartList(list: any = []) {
    return this.http.post(this.CartUrl, list)
  }
  getCartList() {
    return this.http.get(this.CartUrl)
  }
  deleteCartList(id = []) {
    return this.http.delete(`${this.CartUrl}/${id}`)
  }
  signUpList(data: any = {}) {
    console.log(data)
    return this.http.post('http://localhost:3000/signup', data)
  }
  alreadyRegisteredCheck() {
    return this.http.get<[]>('http://localhost:3000/signup')
  }
  loginCheck() {
    return this.http.get<[]>('http://localhost:3000/signup')
  }
  setPrice(price: number){
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}
