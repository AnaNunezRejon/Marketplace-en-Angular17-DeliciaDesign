import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { PRODUCTOS } from '../db/products.db';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productos: IProduct[] = PRODUCTOS

  getAll(): IProduct[] {
    return this.productos
  }

  getById(id: number): IProduct | undefined {
    return this.productos.find(product => product.id === id)
  }

  getByCategory(category: string): IProduct[] {
    if (category !== "") {
      return this.productos.filter(product => product.categoria === category)
    } else {
      return this.productos
    }
  }


  getByName(name: string): IProduct[] {
    return this.productos.filter(product => {
      let nameProduct = this.quitarTildes(product.nombre)
      let parameterName = this.quitarTildes(name);
      return nameProduct.includes(parameterName)
    })
  }

  quitarTildes(palabra: string): string {
    let sinTildes = ""
    sinTildes = palabra.toLowerCase()
    sinTildes = sinTildes.replaceAll('á', 'a');
    sinTildes = sinTildes.replaceAll('é', 'e');
    sinTildes = sinTildes.replaceAll('í', 'i');
    sinTildes = sinTildes.replaceAll('ó', 'o');
    sinTildes = sinTildes.replaceAll('ú', 'u');

    return sinTildes;
  }


}
