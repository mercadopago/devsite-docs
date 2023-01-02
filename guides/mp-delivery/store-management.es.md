# Administración de la sucursal

A partir de la solicitud realizada a través de APIs REST, con la identificación devuelta en el atributo `user_id`, se puede consultar información sobre las sucursales que reciben las órdenes, como por ejemplo:

* Identificación de la sucursal (`store_id`).
* Ubicación del establecimiento.
* Horas de oficina.
* Identificación externa (si la hay).

Con `store_id` puede consultar y cambiar el estado operativo de la sucursal, además de poder crear una identificación externa que se utilizará como identificador para un sistema de software de gestión de pedidos.