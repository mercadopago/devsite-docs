# Mapa de APIs

Las siguientes acciones están disponibles para **Código QR**.

### Sucursales

|Acción|Descripción|
|---|---|
|[Obtener sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_stores_id/get)|Consulta toda la información de una tienda física con el ID de la sucursal que quieras.|
|[Crear sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores/post)|Genera una tienda física en la que los clientes pueden adquirir los productos o servicios.|
|[Buscar en sucursales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores_search/get)|Encuentra toda la información de las sucursales generadas a través de filtros específicos.|
|[Actualizar sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores_id/put)|Renueva los datos de una tienda física.|
|[Eliminar sucursal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/stores/_users_user_id_stores_id/delete)|Elimina una tienda física siempre que lo necesites con el ID de la sucursal.|

### Cajas

|Acción|Descripción|
|---|---|
|[Crear caja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos/post)|Genera un punto de venta en una sucursal.|
|[Buscar en cajas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos/get)|Encuentra toda la información de los puntos de venta a través de filtros específicos.|
|[Obtener caja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos_id/get)|Consulta toda la información de un punto de venta con el ID de la caja que quieras.|
|[Actualizar caja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos_id/put)|Renueva los datos de un punto de venta.|
|[Eliminar caja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/pos/_pos_id/delete)|Elimina un punto de venta siempre que lo necesites con el ID de la caja.|

### Modelo Atendido

#### Órdenes presenciales

|Acción|Descripción|
|---|---|
|[Crear orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post)|Genera una orden de pago asociada a la caja que quieras con toda la información de pago de tu producto o servicio.|
|[Eliminar orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/delete)|Elimina una orden creada siempre que lo necesites con el ID del vendedor y de la caja.|

#### Órdenes presenciales v2

|Acción|Descripción|
|---|---|
|[Crear orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put)|Genera una orden de pago asociada a la caja que quieras con toda la información de pago de tu producto o servicio.|
|[Obtener orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get)|Consulta toda la información de pago de un producto o servicio con el ID de la orden que quieras.|
|[Eliminar orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete)|Elimina una orden creada siempre que lo necesites con el ID del vendedor y de la caja.|

### Consulta de Órdenes

|Acción|Descripción|
|---|---|
|[Buscar en órdenes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_search/get)|Encuentra toda la información de las órdenes generadas a través de filtros específicos o por un rango de fechas determinado.|
|[Obtener orden](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/merchant_orders/_merchant_orders_id/get)|Consulta toda la información de pago de un producto o servicio con el ID de la orden que quieras.|

### Pagos

|Acción|Descripción|
|---|---|
|[Buscar en pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_search/get)|Busca y retorna los pagos hechos en los últimos doce meses desde la fecha de pago.|
|[Obtener pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get)|Consulta toda la información de un pago a través del ID del pago.|

### Reembolsos

|Acción|Descripción|
|---|---|
|[Crear reembolso](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/chargebacks/_payments_id_refunds/post)|Crear reembolsos parciales/totales para un pago específico.|

