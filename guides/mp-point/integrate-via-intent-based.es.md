# Integración vía Intent-Based

> WARNING
>
> Importante
>
> * Esta integración sólo esta disponible para Android versión 2.8.0 o superior.

Otra forma de integrarse con la aplicación de Mercado Pago es mediante código nativo de Android, mediante el concepto de _Intent-Based_.

Debes utilizar el método “startActivityForResult” para iniciar directamente el proceso de pago. El resultado del pago va a retornar como “activityResult”.

Es muy importante que el código maneje la posibilidad de que el usuario no tenga instalada la aplicación de Mercado Pago en su dispositivo, en este caso, recomendamos redireccionar al usuario al Play Store para descargar la misma.

Como referencia puedes utilizar el código de ejemplo y documentación que tiene el formato para poder enviar la información del pago y manejar el objeto de retorno.

En el artículo de [GitHub](https://github.com/mercadopago/point-android_integration#intent) podes obtener más información y el ejemplo correspondiente.