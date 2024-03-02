import { Injectable } from '@angular/core';
import { ICategoria } from '../interfaces/icategoria.interface';
import { CATEGORIAS } from '../db/categorias.db';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categorias: ICategoria[] = CATEGORIAS;

  getAll(): ICategoria[] {
    return this.categorias;
  }

}
