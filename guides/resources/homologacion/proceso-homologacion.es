# Proceso de Homologación

Es el proceso mediante el cual el equipo de integraciones realiza una validación de la calidad de la integración. 
Un integrante del equipo ejecuta un control, dependiendo del producto integrado, y avanza punto por punto chequeando si se cumplió o no con ese requerimiento con el fin de obtener un nota por la integración.

## ¿Cuál es el objetivo?
El objetivo de la homologación es asegurar la calidad de la integración y para lograrlo nos apoyamos en un sistema de puntos.
Además de los puntos que se suman de manera directa, existen buenas prácticas que suman puntos extras que son los que le permitirán llegar al puntaje necesario para hacer el Go Live.

## ¿Por qué es importante la homologación?

Una correcta integración tiene impacto tanto en la **conversión** como en la **aprobación** de pagos, y contribuye a evitar problemas operativos. 
A su vez, se revisan distintos factores que impactan directamente en los sistemas de fraude de Mercado Pago, lo que permite lograr una mayor aprobación **reduciendo el riesgo de fraude** (contracargos). 


## ¿Qué se revisa durante la Homologación?

Los diferentes Checkouts de Mercado Pago son: Checkout Pro, Checkout Tokenizer o Checkout API. En todos se realizan validaciones sobre los siguientes aspectos:



- Seguridad de la integración:
	* Uso de certificado SSL en el sitio
	* Protocolo TLS 1.2 o superior
- Efectividad de nuestros sistemas de fraude:
	* Envío de la información del ítem y del pagador.
	* Envío de información de envío y de industria en el pago.
		* [Documentación checkout PRO](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_informaci%C3%B3n_adicional_para_la_preferencia)
		* [Documentación checkout API](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n)
	* Uso del [script de seguridad](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account/payment-rejections#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) en las páginas del ecommerce para mejora de aprobación.
	* Envío de información del dispositivo al generar el pago  
- Gestión de cuenta: Sugerimos implementar acciones de gestión de cuenta como [devoluciones, cancelaciones](https://www.mercadopago.cl/developers/es/guides/manage-account/account/cancellations-and-refunds/), manejo de chargebacks para automatizar estos procesos desde tus sistemas. En caso de que no estén implementados, puedes gestionar estas acciones manualmente desde el backoffice de mercadopago. 

- Conciliación de pagos/órdenes: 
	* Se comprueba el uso del campo external_reference en la preferencia o en el pago para facilitar la conciliación de tus transacciones.
	* Se comprueba el uso y procesamiento correcto de notificaciones de pago ([IPN](https://www.mercadopago.cl/developers/es/guides/notifications/ipn) o [Webhooks](https://www.mercadopago.cl/developers/es/guides/notifications/webhooks)) para actualizar el estado de las órdenes.
	* Uso de [reportes](https://www.mercadopago.cl/developers/es/guides/manage-account/reports/general-considerations/reconciliation-reports): El uso de reportes puede implementarse por [api](https://www.mercadopago.cl/developers/es/guides/manage-account/reports/available-money/api/) o manualmente desde el backoffice de mercadopago. También puede configurarse como SFTP.
- Medios de pago: verificamos qué medios de pago tienes habilitados e integrados. 


A continuación encontrarás una serie puntos que revisaremos en tu sitio en el momento de la homologación:


### Validaciones sobre Checkout Pro

Se realizan [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/checkout-pro/test-integration/#bookmark_c%C3%B3mo_probar_mi_integraci%C3%B3n) de pagos aprobados y rechazados. En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *in_process* a *approved*.
Se verifica en todos los casos que la redirección esté funcionando correctamente ( esta verificación se aplica solo en apertura *redirect* )

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).

### Validaciones sobre Checkout API

Se realizan [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/checkout-api/testing) de pagos aprobados y rechazados.
En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *in_process* a *approved*.
Se verifica en todos los casos que las páginas de éxito/rechazo de la transacción estén funcionando correctamente. [Revisa la documentación sobre manejo de respuestas.](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses) Asegúrate de no incluir el atributo name al crear un formulario de tarjeta para cuidar la seguridad de los datos.

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Clientes y Tarjetas).


### Validaciones sobre Web Tokenize Checkout

- Se realizan [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/web-tokenize-checkout/testing) de pagos aprobados y rechazados.
En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *in_process* a *approved*.
Se verifica en todos los casos que las páginas de éxito/rechazo de la transacción estén funcionando correctamente. [Revisa la documentación sobre manejo de respuestas.](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses)

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Clientes y Tarjetas).
			
### Validaciones sobre el flujo de Clientes y Tarjetas
- Se revisa que exista un flujo para vinculación y desvinculación de tarjetas del sitio. 


### Validaciones sobre el flujo de Marketplace
- Revisión del flujo oAuth de vinculación y desvinculación del vendedor al marketplace.
- Revisión de flujo de renovación de token.
- Creación y búsqueda de pagos exitosa con las credenciales de vinculación del vendedor y con las credenciales del marketplace.

[Documentación sobre vinculación de cuentas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/marketplace/checkout-pro/create-marketplace#bookmark_2._vinculaci%C3%B3n_de_cuentas)
			
#### Validaciones sobre el flujo de Split de pagos
- Se verifica que la liberación del dinero esté configurada correctamente.
								
### Validaciones sobre modo de operación Gateway
Recuerda que si estas utilizando el modo de operacion Gateway vamos a corroborar que estes enviando los campos [_`merchant_account_id`_] y [_`payment_method_option_id`_].		


## ¿Qué necesito para poder realizar la homologación?
* Tener tu sitio de prueba funcionando.
* [Credenciales](https://www.mercadopago.com/developers/es/guides/resources/faqs/credentials) de test.
* Tener a mano las tarjetas de prueba.
* Usuarios de prueba (si es necesario).
* Coordinar con equipo de integraciones para obtener cualquier información adicional que necesite el para probar.
