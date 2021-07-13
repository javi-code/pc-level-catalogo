import gql from 'graphql-tag'

export const REG_CONSULTA = gql`
mutation MyMutation($mensaje: String, $nombre: String, $whatsapp: numeric) {
   insert_pc_consultas_one(object: {mensaje: $mensaje, nombre: $nombre, whatsapp: $whatsapp}) {
     id
   }
}`

export const REG_VENTA = gql`
mutation MyMutation($stock: Int, $id: Int!, $cantidad: numeric, $cliente: String, $cliente_whatsapp: numeric, $fecha: timestamp, $monto: numeric, $producto_id: Int) {
   update_pc_productos_by_pk(pk_columns: {id: $id}, _set: {stock: $stock}) {
      id
   }
   insert_pc_ventas_one(object: {cliente: $cliente, cantidad: $cantidad, cliente_whatsapp: $cliente_whatsapp, fecha: $fecha, monto: $monto, producto_id: $producto_id}) {
     id
   }
}`
