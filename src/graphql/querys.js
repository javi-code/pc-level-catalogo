import gql from 'graphql-tag'

export const LIST_CATEGORIAS = gql`{
   categorias:pc_categorias {
      id
      nombre
      imagen
   }
}`

export const LIST_PRODUCTOS = gql`{
   productos:pc_productos{
      id
      imagen
      nombre
      stock
      precio
      estado
      descripcion
      caracteristicas
      categoria {
         nombre
      }
   }
}`
export const PRODUCTO = gql`
query MyQuery($id: Int!) {
   producto:pc_productos_by_pk(id: $id) {
     caracteristicas
     categoria_id
      descripcion
      id
      imagen
      nombre
      precio
      stock
      estado
      categoria {
         nombre
      }
   }
}`
