# ¿Qué debo tener en cuenta para que mi integración esté completa?


Para todos los productos de Mercado Pago se deben validar los siguientes aspectos:


- Seguridad de la integración:
	* Uso de certificado SSL en el sitio
	* Protocolo TLS 1.2 o superior
- Efectividad de nuestros sistemas de fraude:
	* Envío de información del pagador, item, envío y de industria en el pago.
		* [Documentación checkout PRO](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_informaci%C3%B3n_adicional_para_la_preferencia)
		* [Documentación checkout API / Web Tokenize](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n)
	* Uso del [script de seguridad](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account/payment-rejections#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) en las páginas del ecommerce para mejora de aprobación.
	* Envío de información del dispositivo al generar el pago  
- Gestión de cuenta: Sugerimos implementar acciones de gestión de cuenta como [devoluciones, cancelaciones](https://www.mercadopago.cl/developers/es/guides/manage-account/account/cancellations-and-refunds/) y manejo de chargebacks para automatizar estos procesos desde tus sistemas. En caso de que no estén implementados, puedes gestionar estas acciones manualmente desde el backoffice de Mercado Pago. 

- Conciliación de pagos/órdenes: 
	* Utiliza el campo [_`external_reference`_] en la preferencia o en el pago para facilitar la conciliación de tus transacciones.
	* Utiliza y procesa correctamente las notificaciones de pago ([IPN](https://www.mercadopago.cl/developers/es/guides/notifications/ipn) o [Webhooks](https://www.mercadopago.cl/developers/es/guides/notifications/webhooks)) para actualizar el estado de las órdenes.
	* Utiliza los [reportes](https://www.mercadopago.cl/developers/es/guides/manage-account/reports/general-considerations/reconciliation-reports): El uso de reportes puede implementarse por [API](https://www.mercadopago.cl/developers/es/guides/manage-account/reports/available-money/api/) o manualmente desde el backoffice de mercadopago. También pueden configurarse como SFTP.


A continuación encontrarás una serie puntos que debes tener en cuenta de acuerdo al producto que estés integrando:


### Validaciones sobre Checkout Pro

Realiza [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/checkout-pro/test-integration/#bookmark_c%C3%B3mo_probar_mi_integraci%C3%B3n) de pagos aprobados y rechazados.

* En caso de no estar utilizando el modo binario, ten en cuenta que los pagos pueden cambiar de estado *in_process* a *approved*.
* Verifica en todos los casos que la [redirección](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_url_de_retorno) esté funcionando correctamente ( aplica sólo en apertura redirect).

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).



### Validaciones sobre Checkout API

Realiza [pruebas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/testing) de pagos aprobados y rechazados.

* En caso de no estar utilizando el modo binario, ten en cuenta que los pagos pueden cambiar de estado *in_process* a *approved*.
* Verifica en todos los casos que las páginas de éxito/rechazo de la transacción estén funcionando correctamente. Revisa la documentación sobre [manejo de respuestas.
](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses)
* Asegúrate de no incluir el atributo name al crear un formulario de tarjeta para cuidar la seguridad de los datos.

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Clientes y Tarjetas).


### Validaciones sobre Web Tokenize Checkout

Realiza [pruebas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/web-tokenize-checkout/testing) de pagos aprobados y rechazados.

* En caso de no estar utilizando el modo binario, ten en cuenta que los pagos pueden cambiar de estado *in_process* a *approved*.
* Verifica en todos los casos que las páginas de éxito/rechazo de la transacción estén funcionando correctamente. Revisa la documentación sobre [manejo de respuestas.
](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses)

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Usuarios y Tarjetas).


			
### Validaciones sobre el flujo de Usuarios y Tarjetas
* Debes tener un flujo para vinculación y desvinculación de tarjetas del sitio.
* La experiencia debe ser clara, segura, y amigable para el cliente. 
* Realiza pagos con tarjetas de crédito guardadas. 



### Validaciones sobre el flujo de Marketplace
* Debe funcionar el flujo oAuth de vinculación y desvinculación del vendedor al marketplace.
* Revisa el flujo de renovación de token de vinculación.
* Los pagos que crees pueden ser [encontrados via api](https://www.mercadopago.cl/developers/es/reference/payments/_payments_id/get/) utilizando las credenciales de vinculación del vendedor y utilizando las credenciales del marketplace.


[Documentación sobre vinculación de cuentas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/marketplace/checkout-pro/create-marketplace#bookmark_2._vinculaci%C3%B3n_de_cuentas)
			
#### Validaciones sobre el flujo de Split de pagos
- Se verifica que la liberación del dinero esté configurada correctamente.
								
### Validaciones sobre modo de operación Gateway
Recuerda que si estas utilizando el modo de operacion Gateway vamos a corroborar que estes enviando los campos [_`merchant_account_id`_] y [_`payment_method_option_id`_].		


## ¿Qué debo tener a mano para validar todo esto?
* Tener tu sitio de prueba funcionando.
* [Credenciales](https://www.mercadopago.com/developers/es/guides/resources/faqs/credentials) de test.
* Tener a mano las tarjetas de prueba.
* [Usuarios de prueba](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_c%C3%B3mo_crear_usuarios) (si es necesario).
