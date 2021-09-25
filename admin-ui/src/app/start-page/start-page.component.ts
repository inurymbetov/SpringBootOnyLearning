import {Component, OnInit} from '@angular/core';
import {StartPageServiceService} from "./start-page-service.service";
import {Product} from "../entitiy/product";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  public productList: Product[] | undefined;

  constructor(private productService: StartPageServiceService) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      data => this.productList = data,
      error => console.log(error),
      () => console.log(this.productList)
    )
  }

}
