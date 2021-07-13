import gql from 'graphql-tag'

export const REG_CONSULTA = gql`
mutation MyMutation($mensaje: String, $nombre: String, $whatsapp: numeric) {
   insert_pc_consultas_one(object: {mensaje: $mensaje, nombre: $nombre, whatsapp: $whatsapp}) {
     id
   }
}`

export const REG_VENTA = gql`
mutation MyMutation($objects: [pc_ventas_insert_input!]! ) {
   insert_pc_ventas(objects: $objects) {
     returning {
       id
     }
   }
}`
