# Prueba y recibe pagos


## Cómo probar el módulo

El módulo de Mercado Pago viene con el entorno Sandbox activo por defecto. Simula pagos en la tienda con este entorno de pruebas y verifica que todo funciona bien antes de empezar a recibir pagos reales de tus clientes. 
 
Aquí es donde entran en juego las credenciales de prueba que habrás copiado en el módulo al momento de [integrar Mercado Pago a tu tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/integration). Las necesitas para poder probar el módulo.

Cuando hagas pruebas, verifica que el flujo de pagos funcione correctamente y que las preferencias de pago sean las que hayas configurado. ¿Ves que todo va bien? Desactiva el modo Sandbox y ve al modo Producción para recibir pagos reales.

> NOTE
>
> Nota
>
> Todos nuestros módulos cuentan con una licencia de código abierto. ¿Quieres participar en su construcción? [Sugiere mejoras y ediciones en Github](https://github.com/mercadopago/cart-prestashop-7).

## Ir a producción

Para empezar a cobrar debes [activar tus credenciales](https://www.mercadopago.com/mla/account/credentials/).

> Consulta los [requisitos para salir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/goto-production) si tienes alguna duda con el proceso.

Verifica que las credenciales de Producción del módulo sean las de la cuenta que reciba el dinero de las ventas. 

Activa el modo Producción solo cuando estés listo para vender y hayas puesto a prueba el módulo con pagos simulados en Sandbox.

![Flow homologación producción](/images/prestashop/receive_payments_es.gif)

### ¡Listo! El módulo de Mercado Pago está preparado para recibir cobros online.

