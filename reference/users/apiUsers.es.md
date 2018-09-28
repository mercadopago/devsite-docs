# API users

Permite crear usuarios a partir de la API de Users.

##Consideraciones generales

1. La apertura de la API de Users a nuevos clientes queda bajo la decisión y
responsabilidad del equipo comercial de Mercado Pago.
1. Los clientes que utilizan esta API deberán informar a sus usuarios de que se les está creando una cuenta de Mercado Pago.
1. Los nuevos clientes deberán recibir la contraseña de su nueva cuenta de Mercado Pago y se les deberá ofrecer la posibilidad de modificar la contraseña a través de Mercado Pago.

##Guía de integración

###1. Crear una aplicación nueva

Para crear una aplicación tienes que ingresar con tu cuenta de Mercado Pago a: [https://applications.mercadopago.com](https://applications.mercadopago.com)


Para poder utilizar esta API la aplicación deberá ser habilitada para tal fin.
Estos permisos son asignados desde Mercado Pago, por lo que __deberás enviarnos el APP ID__ obtenido para poder realizar la configuración correspondiente.

###1. Documentación de la API
La API para crear usuarios se utiliza de la siguiente manera:

[[[
```curl
curl -X POST -H "Accept: application/json"
"https://api.mercadolibre.com/users?access_token=<access_token> "
-d '{
"last_name":"<name>",
"first_name":"<last_name>",
"email":"<email>",
"phone":{
"area_code":"<area_code>",
"number":"<number>"
},
"identification":{
"type":"<identification_type>",
"number":"<identification_number>"
},
"context":{
"ip_address":"<ip_address>"
},
"password":"<password>",
"country_id":"AR",
"site_id":"MLA",
"auto_grant": true,
"secret_key":"<secret_key>",
"confirmed_registration":true
}'
```
]]]

__Referencias__

* __Access_token:__ Es el access_token del cliente asociado al APP\_ID.
* __Secret_key:__ Es la secret_key del cliente asociado al APP\_ID. _(Requerido si auto\_grant = true.)_
* __Identification Types:__ Es el tipo de identificador del dueño de la cuenta de Mercado Pago:
	* DNI
	* CUIT

* __Identification_number:__ Es el número de identificación de la cuenta de Mercado Pago.
* __Ip_address:__ Es la IP desde donde se está conectando el usuario que está solicitando la creación de la cuenta.
* __Password:__ Es la contraseña que va a tener esa cuenta de Mercado Pago, es importante que se le notifique al usuario final de esta contraseña.
	- Mínimo 6 caracteres y máximo 20 caracteres.
	- Puede tener repetición de hasta 3 caracteres iguales.
Ej.: "CASSSA", está bien pero "CASSSSA" está mal.
	- No puede ser igual al nombre o apellido o nomber+apellido o
apellido+nombre y tampoco puede ser igual a la primera parte del e-mail.
Ej.: Si el e-mail es minombre@mercadolibre.com, no puede ser “minombre”.
	- Tampoco puede contener una secuencia de caracteres continuos.
Ej.: "456" o "DEF" o "ZYX" (inversamente tampoco).

* __Site_id:__ Site de Mercado Pago donde va a poder operar el usuario.
 - Argentina: MLA
 - Brasil: MLB
 - Chile: MLC
 - Colombia: MCO
 - Perú: MLP
 - Uruguay: MLU
 - Venezuela: MLV
 - México: MLM
* __Auto_grant:__ Esta opción es para que la cuenta de Mercado Pago se cree vinculada
a la cuenta que generó la creación del usuario (modelo Marketplace).
 - True: la cuenta se vincula.
 - False: la cuenta no se vincula.
* __Confirmed_registration:__ Si la cuenta se crea sin la necesidad de confirmación de la misma:
 - True: la cuenta ya estará confirmada.
 - False: en el email se recibirá un correo electrónico por parte de Mercado Pago para confirmar la creación de la cuenta.



Response:
> Siempre hay que fijarse en la respuesta del POST la dirección tenga en su json el campo: **“normalized”: true**

[[[
```json
{
"id": <direction_id>,
"user_id": <user_id>,
"contact": null,
"phone": null,
"address_line": "<street_name> <street_number>",
"floor": null,
"apartment": null,
"street_number": “<street_number>”,
"street_name": “<street_number>",
"zip_code": "<zip_code>",
"city": {
"id": “<city_id>”
"name": ”<city_name>”
},
"state": {
"id": “<state_id>”
"name": “<state_name>”
},
"country": {
"id": “<country_id>”
"name": “<country_name>”
},
"neighborhood": {
"id": null,
"name": null
},
"municipality": {
"id": null,
"name": null

},
"search_location": {
"state": {
"id": null,
"name": null
},
"city": {
"id": null,
"name": null
},
"neighborhood": {
"id": null,
"name": null
}
},
"types": [],
"comment": "Piso: <piso> Depto: <depot> Referencia: <comment> Entre: <calle
y calle>",
"between": null,
"references": null,
"aditional_info": null,
"geolocation_type": null,
"latitude": null,
"longitude": null,
"status": "active",
"date_created": "<date_created>",
"normalized": true,
"open_hours": null
}
```
]]]




###API Countries
Esta API te permite obtener todos los códigos de países disponibles.

POST
[https://api.mercadolibre.com/countries](https://api.mercadolibre.com/countries)


Response:
[[[
```json
[
{
"id": "AR",
"name": "Argentina",
"locale": "es_AR",
"currency_id": "ARS"
},
...
]
```
]]]


###API Countries + States
Esta API te permite obtener todos los \<state\_code> para un \<country\_code\>.

POST

[https://api.mercadolibre.com/countries/AR](https://api.mercadolibre.com/countries/AR)

Response:
[[[
```json
{
"id": "AR",
"name": "Argentina",
"locale": "es_AR",
"currency_id": "ARS",
"decimal_separator": ",",
"thousands_separator": ".",
"time_zone": "GMT-03:00",
"geo_information": {},
"states": []
}
```
]]]


###API States + Cities
Esta API te permite obtener para un \<state\_code\> todos los \<city\_id\>.

POST

[https://api.mercadolibre.com/states/\<state\_code\>](https://api.mercadolibre.com/states/<state_code>)

Response:
[[[
```json
{
"id": "AR-C",
"name": "Capital Federal",
"country": {},
"geo_information": {},
"cities": []
}
```
]]]


###API Cities
Esta API te permite obtener para un \<city\_id\> información del \<state\_code\> y \<country\_code\>.

POST
[https://api.mercadolibre.com/cities/\<city\_id\>](https://api.mercadolibre.com/cities/<city_id>)

Response:
[[[
```json
{
"id": "QVItQjEyIERlIE9jdHVicmU",
"name": "12 De Octubre",
"state": {},
"country": {},
"geo_information": {}
}
```
]]]


###Ejemplo de la creación de una dirección
POST:
[[[
```json
{
"user_id”: <user_id>,
"address_line": "Calle San Martin 124",
"street_number": "124",
"street_name": "Calle San Martin",
"zip_code": "5000",
"city": {
"name": "Córdoba"
},
"state": {
"id": "AR-X"
},
"country": {
"id": "AR"
}
"types": [
"default_selling_address"
],
"comment": "Piso: 6 Referencia: Casa con rejas negras Entre: Colon y General
Paz"
}
```
]]]


Así se verá la cuenta de Mercado Pago del usuario:

![Vista de usuario en Mercado Pago](/images/apiUsers_example.png)

