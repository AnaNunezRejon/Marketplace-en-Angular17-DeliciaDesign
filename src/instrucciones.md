### Trabajo fin de semana del 22 de febrero

Quiero pintar un listado de productos



            - generar un interfaz de producto:

                        - id: number

                        - nombre: string

                        - precio: number

                        - stock: boolean

                        - foto: string

                        - categoria: string (ropa, zapatos y complementos)

            - Quiero crear una BBDD en un fichero productos.db.ts y cargaremos 10 productos

            - Crear un servicio que me proporcione acceso al array de datos

                      - getAll() devolvera todos los productos

                      - getById() devolver un producto por id

            - Crear un pagina de productos que cargue el componente productList (/productos)

                      - Cargar todos los productos de la lista que tenga stock

                        - Crear un product-card para cargar cada minuproducto con un enlace a la vista del producto. El producto solo cargar titulo y precio

            - Crear una pagina para la vista de producto donde cargaremos toda la info del producto incluida la imagen. (/producto/:id)
