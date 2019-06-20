#¿Qué es Web Checkout? 
Web Checkout de Mercado Pago es la herramienta que te permite cobrar a través de nuestro formulario web desde cualquier dispositivo de manera simple, rápida y segura. 

![Introduction Web Checkout](/images/refactor-images/introduction-web-checkout.png)

####Web Checkout ofrece:

* Compras en un click. Al recordar los datos de los compradores, admite pagos ingresando solamente el código de seguridad de la tarjeta.
* Una experiencia de compra adaptada y accesible desde cualquier celular o computadora.  
* Pagos como invitado. No es requerida la creación de una cuenta de Mercado Pago para poder hacer el pago.
* Pagar con una cuenta de Mercado Pago. Permite el acceso a dinero en cuenta y tarjetas guardadas. 
* Dividir el pago en 2 tarjetas.
* Pagar con los principales medios de pago del país.


####Diferencias de Web Checkout con otras herramientas de Mercado Pago 

							            | Web Checkout|Web Tokenize Checkout| API
---------------------------------	  | ----------- | ------------------- | ---
Dificultad de integración 			  | Baja        | Media               |Alta
Diseño UI/UX 							  | ✔           | ✔                   |
Optimizado para la mejor conversión| ✔           | ✔                   |
Pago automáticos 					  | ✔           |                     |
Pago de usuarios invitados         | ✔           | ✔                   |✔
Pago de usuarios registrados       | ✔           |                     |
Prevención de fraude               | ✔           | ✔                   |✔
Optimizado para mejorar la aprobación | ✔        |                     |
Pago con 2 tarjetas                | ✔           |                     |
Exclusión de medios de pago        | ✔           |                     |✔



#Requisitos Previos
Es importante conocer y tener los requisitos previos antes de avanzar. Esto permite hacer el paso a paso más simple.

Término		| 							|	Descripción
------------	| ----------- 			| 	-----------
Preferencia	|							|	Es una intención de pago de la operación a 												efectuar. Entre los atributos más importantes de 												una preferencia, se definen la descripción, el 												monto y la cantidad del ítem. Al generarla se 												obtiene la URL para iniciar el flujo de pago.
Init_point 	|							|	Es la URL que se obtiene al momento de generar la 												Preferencia y que da inicio al flujo de pago del 												Web Checkout.
Item			|							|	Hace referencia al producto o servicio que se 												está ofreciendo. Puede ser un solo ítem o una 												lista.
				|CLIENT_ID y SECRET_ID	|	Estas claves son requeridas para hacer uso de la 												sdk de Mercado Pago y poder crear una preferencia 												de pago
Credenciales |ACCESS_TOKEN				|	Clave privada requerida para generar pagos. Es 												confidencial para el usuario
				|PUBLIC_KEY				|	Clave que permite acceder a los recursos 												públicos, como consultar medios de pagos 												disponibles para un usuario
				

####Crea tu cuenta de Mercado Pago
1. Para poder comenzar la integración es necesario tener una cuenta de Mercado Pago, caso contrario, hacer click [aquí](https://www.mercadopago.com.ar/) para registrarse. 
1. Al ingresar a Mercado Pago con la cuenta creada, se autocompletarán las credenciales necesarias dentro de cada snippet de código de las siguientes secciones.



