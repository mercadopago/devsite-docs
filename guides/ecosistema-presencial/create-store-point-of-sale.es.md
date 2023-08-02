# Crear el local y la caja

Para crear un local, primero deberás realizar una llamada POST al endpoint [Crear sucursal](/developers/es/reference/stores/_users_user_id_stores/post).

Ten en cuenta que deberás reemplazar los valores `user_id` y `YOUR_ACCESS_TOKEN` con los obtenidos al crear tu aplicación. A su vez, deberás modificar las variables `name’, ‘business_hours` y `location` de acuerdo al negocio que estás creando.

> El request se encuentra configurado con la información del site de Argentina. Recuerda modificar esta configuración según el país desde donde estés integrando.

Luego, deberás crear una caja. Para eso, realiza una llamada POST al endpoint [Crear caja](/developers/es/reference/pos/_pos/post).

Ten en cuenta que, primero, debes ejecutar el request de creación del local para que el de creación de cajas funcione de manera correcta.

> WARNING
>
> Importante
>
> La API de Ecosistema Presencial se basa en el `external_id` que es enviado en la creación de la caja en la llamada POST. Recuerda que es una identificación única para la caja creada y para el usuario. Si requieres crear más cajas, debes asegurarte que todas tengan un `external_id` distinto.

