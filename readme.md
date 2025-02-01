Necesitamos que implementes un método POST que reciba por parámetro un id de load, una patente y un id de trucker y cree un shipment con esos datos.

Endpoints implementados:
 - GET /shipment/ping es un endpoint de ping para ver si esta funcionando la aplicación
 - GET /user/:id - se crea este endpoint para obtener el jwt de un usuario a modo de ejemplo para poder ser usado como autorizacion en los otros endpoints ya que no hay un modulo de login.
 - POST /shipment - recibe en el body: {"loadId":string,"plate": string} con los datos del id del load (el que esta en la base de datos) y la placa igual que como esta en la tabla de truck. Este endpoint tiene que tener como auth bearer el token que se genera con el GET de usuario, esto se verifica en un middleware. 

 La funcionalidad de crear un shipment recibe loadId, plate y el token de usuario que es convertido al objeto user. Para crear el shipment se busca el truck segun la placa y si no existe se crea uno. Luego con esos datos se crea el shipment con estado "pending".

