import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products",
    // }, {
    //   id: "e4bd504c-2224-4ed3-a8a7-1ccd05971473",
    //   name: "Renkli Kağıt",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe()

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "00734fe6-620d-46d3-8c26-aced2662b63d")
    // .subscribe();

    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data=> console.log(data));
  }

}
