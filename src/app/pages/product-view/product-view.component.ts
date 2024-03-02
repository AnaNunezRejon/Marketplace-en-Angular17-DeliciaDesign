import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { NgClass, NgIf } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [RouterLink, NgIf,NgClass],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  activedRoute = inject(ActivatedRoute);
  productsServices = inject(ProductsService);
  producto!: IProduct;

  constructor(private carritoService: CarritoService) {}
  ngOnInit() {
    this.activedRoute.params.subscribe((params: any) => {
      let id = Number(params.id)
      let response: any = this.productsServices.getById(id);
      if (response !== undefined) {
        this.producto = response
      }
    })
  }

  comprarProducto(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }

  formatPrice(price: number): string {
    const formattedPrice = price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    return formattedPrice.replace(/\s/g, '');
  }

}
