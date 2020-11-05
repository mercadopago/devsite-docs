# Proceso de Homologación

Es el proceso mediante el cual el equipo de integraciones realiza una validación de la calidad de la integración. 
Un integrante del equipo ejecuta un control dependiendo del producto integrado y avanza punto por punto chequeando si se cumplió o no con ese requerimiento con el fin de obtener una nota para la integración.

## ¿Cuál es el objetivo?
El objetivo de la homologación es **asegurar la calidad de la integración** y para lograrlo nos apoyamos en un sistema de puntos.
El correcto funcionamiento de los pagos y la adopción de buenas prácticas para el procesamiento de los mismos permitirán llegar al puntaje necesario para hacer el Go Live.

## ¿Por qué es importante la homologación?

Una correcta integración tiene impacto tanto en la **conversión** como en la **aprobación** de pagos, y mejora la gestión y conciliación de los mismos. 
A su vez, se revisan distintos factores que impactan directamente en los sistemas de fraude de Mercado Pago, lo que permite lograr una mayor aprobación **reduciendo el riesgo de fraude** (contracargos). 


## ¿Qué se revisa durante la Homologación?

Los diferentes Checkouts de Mercado Pago son: Checkout Pro, Checkout Tokenizer o Checkout API. En todos se realizan validaciones sobre los siguientes aspectos:

- Seguridad de la integración.
- Efectividad de nuestros sistemas de fraude.  
- Gestión de cuenta.
- Conciliación de pagos/órdenes.
- Medios de pago. 


A continuación encontrarás una serie puntos que revisaremos en tu sitio en el momento de la homologación:


### Validaciones sobre Checkout Pro

- Se realizan [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/checkout-pro/test-integration) de pagos aprobados y rechazados.
	* En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *pendiente* a *aprobado*.
	* Se verifica en todos los casos que la redirección y los mensajes de éxito/rechazo de la transacción esten comunicados correctamente. 
- Se comprueba el uso del campo [_`external_reference`_](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/configurations#bookmark_ejemplo_de_una_preferencia_completa) en la preferencia para facilitar la conciliación de tus transacciones.
- Se comprueba el uso y procesamiento correcto de notificaciones de pago ([IPN](https://www.mercadopago.com/developers/es/guides/notifications/ipn) o [Webhooks](https://www.mercadopago.com/developers/es/guides/notifications/webhooks)) para actualizar el estado de las órdenes.
- Uso del [script de seguridad](https://www.mercadopago.com/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) en las páginas de tu e-commerce para mejora de aprobación.
- Envío de la informacion completa del [pagador y del ítem](https://www.mercadopago.com/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_informaci%C3%B3n_adicional_para_la_preferencia) en la preferencia.
- Envío de la información completa del item y de la [industria](https://www.mercadopago.com/developers/es/guides/resources/industry-data/additional-info) en la preferencia.

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).

### Validaciones sobre Checkout API

- Se realizan [pruebas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/testing#bookmark_prueba_el_flujo_de_pago) de pagos aprobados y rechazados.
	* En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *pendiente* a *aprobado*.
	* Se verifica en todos los casos que la redirección y los mensajes de éxito/rechazo de la transaccion esten comunicados correctamente. Revisa la documentación sobre [manejo de respuestas](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses). 
- Se comprueba el uso del campo [_`external_reference`_](https://www.mercadopago.com.ar/developers/es/reference/payments/resource/) en el pago para facilitar la conciliación de tus transacciones.
- Se comprueba el uso y procesamiento correcto de notificaciones de pago ([IPN](https://www.mercadopago.com/developers/es/guides/notifications/ipn) o [Webhooks](https://www.mercadopago.com/developers/es/guides/notifications/webhooks)) para actualizar el estado de las órdenes.
- Uso del [script de seguridad](https://www.mercadopago.com/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) en las páginas del ecommerce para mejora de aprobación.
- Envío de la información completa del [pagador y del ítem](https://www.mercadopago.com/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) como parte del [pago](https://www.mercadopago.cl/developers/es/reference/payments/resource/).
- Envío de la información completa del item y de la [industria](https://www.mercadopago.com/developers/es/guides/resources/industry-data/additional-info) en la preferencia.
- Envío de informacion del dispositivo al generar el pago

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Clientes y Tarjetas).


### Validaciones sobre Web Tokenize Checkout

- Se realizan [pruebas](https://www.mercadopago.cl/developers/es/guides/online-payments/web-tokenize-checkout/testing#bookmark_prueba_el_flujo_de_pago) de pagos aprobados y rechazados.
	* En caso de no estar utilizando el modo binario, se realizan pruebas de cambio de estado *pendiente* a *aprobado*.
	* Se verifica en todos los casos que la redirección y los mensajes de éxito/rechazo de la transacción esten comunicados correctamente. 
- Se comprueba el uso del campo [_`external_reference`_](https://www.mercadopago.com.ar/developers/es/reference/payments/resource/) en la preferencia para facilitar la conciliación de tus transacciones.
- Se comprueba el uso y procesamiento correcto de notificaciones de pago ([IPN](https://www.mercadopago.com/developers/es/guides/notifications/ipn) o [Webhooks](https://www.mercadopago.com/developers/es/guides/notifications/webhooks)) para actualizar el estado de las órdenes.
- Uso del [script de seguridad](https://www.mercadopago.com/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n) en las páginas del ecommerce para mejora de aprobación.
- Envío de la informacion completa del [pagador y del ítem](https://www.mercadopago.com/developers/es/guides/online-payments/checkout-pro/advanced-integration#bookmark_informaci%C3%B3n_adicional_para_la_preferencia) en la preferencia.
- Envío de la información completa del item y de la [industria](https://www.mercadopago.com/developers/es/guides/resources/industry-data/additional-info) en la preferencia.

Si tienes un marketplace, verifica las [validaciones sobre marketplace](###Validaciones sobre el flujo de Marketplace).
Si estas utilizando el flujo de clientes y tarjetas, verifica las [validaciones sobre el flujo de clientes y tarjetas](### Validaciones sobre el flujo de Clientes y Tarjetas).


			
### Validaciones sobre el flujo de Clientes y Tarjetas
- Se revisa que exista un flujo para vinculación y desvinculación de tarjetas del sitio. 
- Envío de [información del dispositivo ( device fingerprint )](https://www.mercadopago.com/developers/es/guides/resources/pci-compliant-merchants/receiving-payment-by-card)

### Validaciones sobre el flujo de Marketplace
- Revisión del flujo oAuth de vinculación y desvinculación del vendedor al marketplace.
- Revisión de flujo de renovación de token.
- Creación y búsqueda de pagos exitosa con las credenciales de vinculación del vendedor y con las credenciales del marketplace.
			
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
