import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() miProducto!: IProduct;

  @Input() producto: any;

  constructor(private carritoService: CarritoService) {}

  comprarProducto(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
}
