import { Component,OnInit} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    const productosLocalStorage = localStorage.getItem('productosEnCarrito');
    if (productosLocalStorage) {
      this.productosEnCarrito = JSON.parse(productosLocalStorage);
      this.productosEnCarrito.forEach(producto => {
        producto.totalProducto = this.calcularPrecioTotal(producto);
      });
      this.calcularTotalCesta();
    }
  }

  restarProducto(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      producto.totalProducto = this.calcularPrecioTotal(producto);
      this.calcularTotalCesta();
    }
  }

  sumarProducto(producto: any) {
    producto.cantidad++;
    producto.totalProducto = this.calcularPrecioTotal(producto);
    this.calcularTotalCesta();
  }

  formatPrice(price: number): string {
    return `${price.toFixed(2)}€`;
  }

  eliminarProducto(producto: any): void {
    const index = this.productosEnCarrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
      localStorage.setItem('productosEnCarrito', JSON.stringify(this.productosEnCarrito));
      this.calcularTotalCesta();
    }
  }

  calcularPrecioTotal(producto: any): number {
    return (producto.precio || 0) * (producto.cantidad || 0);
  }

  calcularTotalCesta(): void {
    let total: number = 0;
    this.productosEnCarrito.forEach(producto => {
      total += producto.totalProducto || 0;
    });
    this.total = total;
  }
}
