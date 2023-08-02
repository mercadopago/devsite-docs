# Activar el modo PDV en el dispositivo Point

> WARNING
>
> Importante
>
> Este paso sólo es necesario para integrar dispositivos Point. 


Para activar el modo PDV en tu dispositivo Point, primero tendrás que identificarlo. Para esto, deberás realizar una solicitud GET al endpoint [Obtener dispositivos](/developpers/es/reference/instore-api/point/v1/devices/get):

> Esta solicitud retornará como respuesta los dispositivos asociados a la cuenta de Mercado Pago. Si en el listado te aparecen varios dispositivos, puedes identificar el Point que deseas por medio de los últimos caracteres del campo `id`. Los últimos números de este valor deben coincidir con el serial que aparece en la etiqueta trasera del dispositivo Point con el que estás integrando.

Luego, realiza una solicitud PATCH al endpoint [Cambiar el modo de operación](/developpers/es/reference/instore-api/point/v1/devices/patch), reemplazando `device.id` por el valor obtenido en ese campo en la respuesta a la solicitud GET anterior.

Por último, reinicia el dispositivo Point. Cuando se reactive, verás en la pantalla una confirmación, y tu Point estará vinculado al modo PDV. 

> WARNING
>
> Importante
>
> Ten en cuenta que sólo se permite un único dispositivo en modo PDV por caja y que este sólo debe ser manipulado por medio de un operador de la tienda. El uso [self-service desatendido](/developers/es/docs/ecosistema-presencial/glossary) de un dispositivo será de total responsabilidad del comercio. Considera esta limitación al implementar la integración para garantizar un uso adecuado y seguro de los dispositivos. 

