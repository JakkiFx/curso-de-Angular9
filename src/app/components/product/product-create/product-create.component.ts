import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMsg("Produto criado!"); // Mostra uma mensagem, pop-up
      this.router.navigate(["/products"]); // Navega para outra página
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
