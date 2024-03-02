import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private productosEnCarritoSubject = new BehaviorSubject<any[]>([]);
  productosEnCarrito$ = this.productosEnCarritoSubject.asObservable();

  constructor() {
    // Recuperar los productos del carrito del localStorage al inicializar el servicio
    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito') || '[]');
    this.productosEnCarritoSubject.next(productosEnCarrito);
  }

  agregarAlCarrito(producto: any) {
    let productosEnCarrito = this.productosEnCarritoSubject.getValue();
    const index = productosEnCarrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      // Si el producto ya está en el carrito, aumenta su cantidad en 1
      productosEnCarrito[index].cantidad++;
    } else {
      // Si el producto no está en el carrito, añádelo con cantidad 1
      producto.cantidad = 1; // Establecer la cantidad inicial en 1
      productosEnCarrito.push(producto);
    }
    this.productosEnCarritoSubject.next(productosEnCarrito);
    // Guardar los productos del carrito en localStorage
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  }
}
