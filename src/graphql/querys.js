import gql from 'graphql-tag'

export const LIST_CATEGORIAS = gql`{
   categorias:pc_categorias {
      id
      nombre
      imagen
   }
}`

export const LIST_PRODUCTOS = gql`{
   allProducts:pc_productos(where: {estado: {_eq: true}}){
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
export const LIST_PRODUCTOS_BY = gql`
query MyQuery($_eq: Int!){
   pc_productos(where: {
      categoria_id: {_eq: $_eq},
      estado: {_eq: true}
      }){
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
