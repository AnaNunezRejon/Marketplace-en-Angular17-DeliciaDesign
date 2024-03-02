import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  arrProductos: IProduct[] = []
  arrCategorias: ICategoria[] = [];
  productsServices = inject(ProductsService);
  categoriasServices = inject(CategoriasService);
  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.arrCategorias = this.categoriasServices.getAll();
    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      let query = queryParams.query;
      if (query) {
        this.arrProductos = this.productsServices.getByName(query)
      } else {
        this.arrProductos = this.productsServices.getAll();
      }
    })
  }

  getCategory($event: any): void {
    const categoria = $event.target.value;
    this.arrProductos = this.productsServices.getByCategory(categoria);
  }
}
