# API users

This API allows to create Mercado Pago users.

##General Considerations

1. It is decision and responsibility of Mercado Pago's comercial team to open the Users API to new customers.
1. Customers using this API must inform their users that a Mercado Pago's account is being created.
1. New customers must receive the password of their new Mercado Pago's account and they must be offered the possibility to change it through Mercado Pago.

##Integration guide

###1. Create a new application

To create a new application, you need to login to your Mercado Pago's account and go to: [https://applications.mercadopago.com](https://applications.mercadopago.com)


In order to be able to use this API the application must be enabled for that purpose. This permissions are assigned from Mercado Pago, so you __must send us the obtained APP ID__ so we can make the configuration.

###1. API's documentation
You should use the API to create users as shown below:


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

__References__

* __Access_token:__ Customer's access_token associated to the APP\_ID.
* __Secret_key:__ Customer's secret_key associated to the APP\_ID. _(Required if auto\_grant = true.)_
* __Identification Types:__ Identification type of Mercado Pago's account owner:
	* DNI
	* CUIT

* __Identification_number:__ Identification number of Mercado Pago's account owner.
* __Ip_address:__ IP from where the user requesting the creation of the account is connected.
* __Password:__ The password that the new account will have, it is important that the final user gets notified about this password
	- Minimum 6 characters and maximum 20.
	- Maximum 3 repeated characters.
Example.: "CASSSA", is OK but "CASSSSA" is not.
	- It must not be the same as the name, last name, name + last name, last name + name.
	- It must not be the same as the e-mail's username.
Example.: If the e-mail is myname@mercadolibre.com, it must not be "myname".
	- It must not contain a secuence of continuous characters.
Example.: "456" or "DEF" o "ZYX" (applies also for inverse).

* __Site_id:__ Mercado Pago's site where the user will operate.
 - Argentina: MLA
 - Brazil: MLB
 - Chile: MLC
 - Colombia: MCO
 - Peru: MLP
 - Uruguay: MLU
 - Venezuela: MLV
 - Mexico: MLM
* __Auto_grant:__ Set this option if you want Mercado Pago's account to be linked to the account that generated the user's creation. (Merketplace model)
 - True: the account will be linked.
 - False: the account won't be linked.
* __Confirmed_registration:__ Will the account to be created be already confirmed? 
 - True: the account will already be confirmed.
 - False: Mercado Pago will send an e-mail to confirm the creation of the account.



Response:
> It is important to always validate in the POST response that the json includes the field: **“normalized”: true**

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
This API allows to get all available country codes.

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
This API allows to get all the  \<state\_code> for a \<country\_code\>.

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
This API allows to get all the \<city\_id\> for a \<state\_code\>.

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
This API allows to get information of \<state\_code\> and \<country\_code\> from a \<city\_id\>

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


###Example of an address creation.
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


This is how Mercado Pago's account for the user will look:

![User in Mercado Pago](/images/apiUsers_example.png)

