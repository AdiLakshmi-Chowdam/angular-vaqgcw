import { Component, OnInit, Inject } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = [];
  constructor(
    private cartService: CartService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storageService: StorageService
  ) {}

  ngOnInit() {
    this.items = this.storageService.get("myCart");
    //this.items = this.cartService.getItems();
  }
  routeTo500() {
    this.router.navigateByUrl("internal-server-error");
  }

  removeItem(productNumber) {
    this.items.splice(productNumber, 1);
    this.storageService.set("myCart", this.items);
    this.items = this.storageService.get("myCart");
  }
}
