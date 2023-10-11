# Configurar tu dispositivo en modo Punto de Venta

> WARNING
>
> Importante
>
> Previo a configurar el dispositivo Point en modo Punto de Venta, deberás acceder a tu cuenta de Mercado Pago y tener creada una [aplicación](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard) con **PointdeMercadoPago** como el producto a integrar.
> <br><br>
> Recuerda, también, acceder a tus [credenciales de producción](/developers/es/docs/mp-point/additional-content/your-integrations/credentials) para gestionar correctamente tu integración.

Para iniciar tu integración Mercado Pago Point vía API deberás configurar tu dispositivo en modo Punto de Venta. Para hacerlo, sigue los pasos a continuación.

## Crear una sucursal y una caja

Para configurar el dispositivo Point en modo Punto de Venta, deberás asociarlo a un local y una caja.

Si todavía no tienes sucursales y cajas creadas, puedes hacerlo a través de nuestra API.

Primero, deberás crear un local a través del endpoint [Crear sucursal](/developers/es/reference/stores/_users_user_id_stores/post). Deberás reemplazar los valores `user_id` y `YOUR_ACCESS_TOKEN` con los obtenidos al crear tu aplicación, además de modificar los parámetros necesarios de acuerdo a las características del negocio.

Luego, deberás crear una caja a través del endpoint [Crear caja](/developers/es/reference/pos/_pos/post). Esta caja deberá estar asociada a la sucursal creada anteriormente, por lo que deberás reemplazar el parámetro `external_store_id` por el obtenido en la creación del local. 

## Asociar el dispositivo Point a tu cuenta de Mercado Pago

Para vincular el dispositivo Point a tu cuenta de Mercado Pago, necesitas contar con la aplicación de Mercado Pago en tu móvil. 

Inicia sesión en ella con tu usuario y contraseña y oprime el ícono QR para escanear el código que aparece al encender el dispositivo Point. 
De esta manera, el dispositivo quedará vinculado a tu cuenta.

> Si vas a operar en nombre de otros vendedores, puedes gestionar la vinculación de manera segura integrando [OAuth.](/developers/es/docs/mp-point/additional-content/security/oauth/introduction)

## Configurar tu tienda y tu caja

Una vez que hayas vinculado tu dispositivo Point a tu cuenta de Mercado Pago y tengas la sucursal y caja creadas, deberás completar los datos del negocio y configurar la caja para asociarlos al dispositivo. 

Para hacerlo, puedes acceder al [sitio de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores) e ingresar en **Tu negocio > Locales y cajas**.

> También puedes configurar la tienda y la caja desde el mismo dispositivo Point una vez que este esté vinculado. El mismo dispositivo te guiará en caso de elegir hacer la configuración de esta manera.

## Activar el modo PDV en tu dispositivo Point

Para que el dispositivo Point esté integrado con nuestra API, es necesario activar el modo operativo Punto de Venta (PDV).

Para hacer esta activación por primera vez, consulta los dispositivos a través de la API [Obtener dispositivos](/developers/es/reference/integrations_api/_point_integration-api_devices/get). Este llamado devolverá un listado de dispositivos asociados a la cuenta de Mercado Pago. Podrás identificar el Point que deseas por medio de los últimos caracteres del campo `id`, que deberán coincidir con el serial que aparece en la etiqueta trasera del dispositivo.

Luego, realiza una solicitud PATCH al endpoint [Cambiar el modo de operación](/developers/es/reference/integrations_api/_point_integration-api_devices_device-id/patch), reemplazando `device-id` por el valor obtenido en ese campo en la respuesta a la solicitud GET anterior.

``` curl
curl -X PATCH \
      'https://api.mercadopago.com/point/integration-api/devices/{device-id}' \
       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
       -H 'Content-Type: application/json' \ 
      -d '{
  "operating_mode": "PDV"
}'
```

Recibirás una respuesta como esta:

``` json
{
"operating_mode": "PDV"
}
```

> WARNING
> 
> Importante
> 
> Ten en cuenta que sólo se permite un único dispositivo en modo PDV por caja, y que este sólo debe ser manipulado por medio de un operador de la tienda. El uso [self-service desatendido](/developers/es/docs/mp-point/integration-api/glossary) de un dispositivo será de total responsabilidad del comercio. Considera esta limitación al implementar la integración para garantizar un uso adecuado y seguro de los dispositivos. 

Por último, deberás reiniciar tu dispositivo para que el cambio en el modo de operación sea efectivo. 

En caso de que requieras utilizar el dispositivo en el modo no integrado debes configurar el campo `operating_mode` con el valor `STANDALONE`.

> Si ya realizaste la activación del modo PDV en un dispositivo vía API, y por algún motivo necesitas volver a configurarlo, podrás hacerlo directamente desde el dispositivo y no será necesario volver a recurrir a la API.