# Crear preferencias

Las preferencias son conjuntos de información sobre un producto y/o servicio que te permiten definir el nombre, el método de pago y otros atributos necesarios para obtener la URL para iniciar el flujo de pago al finalizar la compra.

> WARNING
>
> Importante
>
> Recuerda que debes instalar el SDK de Mercado Pago antes de crear una preferencia, así que asegúrate de que la instalación de los SDKs de Mercado Pago haya sido completada. Accede a [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks) para obtener instrucciones.

Para crear una preferencia a través de la API, utiliza el endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) completando los atributos necesarios para ejecutar la solicitud o, si lo prefieres, consulta [SDKs](/developers/pt/docs/sdks-library/landing)  para crear las preferencias utilizando nuestras bibliotecas.

Al crear la preferencia tendrás acceso a un campo llamado `id` el cual te devolverá un número de identificación de esta preferencia. **Esta información es obligatoria para agregar Checkout Pro a tu sitio web**.