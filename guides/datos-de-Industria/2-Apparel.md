# Apparel

## Campos a enviar

### **IP Address:**

| Parámetro: IP Address | Tipo   | Descripción                                         |
| --------------------- | ------ | --------------------------------------------------- |
| ip_address            | String | dirección de IP desde donde se originó la solicitud |



### **Items:**

| Parámetro: Item       | Tipo    | Descripción                                                 |
| --------------------- | ------- | ----------------------------------------------------------- |
| id                    | String  | Código de item                                              |
| title                 | String  | Nombre de item                                              |
| description           | String  | Descripción del item                                        |
| picture_url           | String  | URL de imagen                                               |
| category_id           | String  | Categoría del item                                          |
| quantity              | Integer | Cantidad de items                                           |
| unit_price            | Float   | Precio unitario                                             |
| warranty              | Binary  | Garantía: 1 si el producto tiene garantía, 0 si no la tiene |
| event_date            | Date    | Fecha del evento                                            |
| Passenger             | Array   | Información adicional si se envia category_id               |
| first_name            | String  | Nombre                                                      |
| last_name             | String  | Apellido                                                    |
| Identification        | Object  | Identificacion del pagador. Objeto dentro de Passenger      |
| identification_type   | String  | Tipo de identificación                                      |
| identification_number | String  | Número de identificación                                    |
| Route                 | Array   | Información adicional si se envia category_id               |
| departure             | String  | Salida                                                      |
| destination           | String  | Llegada                                                     |
| departure_date_time   | Date    | Fecha de salida                                             |
| arrival_date_time     | Date    | Fecha de llegada                                            |
| company               | String  | Compañía                                                    |



### **Payer:**

| Parámetro: Payer         | Tipo    | Descripción                                                  |
| ------------------------ | ------- | ------------------------------------------------------------ |
| first_name               | String  | Nombre                                                       |
| last_name                | String  | Apellido                                                     |
| dni (excluir MLM)        | Integer | Identificación                                               |
| Phone                    | Object  | Datos de teléfono                                            |
| area code                | Integer | Código de área                                               |
| number                   | Integer | Número de teléfono                                           |
| Address                  | Object  | Datos de dirección                                           |
| zip_code                 | String  | Código Postal                                                |
| street_name              | String  | Nombre de calle                                              |
| street_number            | Integer | Número de calle                                              |
| authentication_type      | String  | Tipo de autenticación                                        |
| registration_date        | Date    | Fecha de registación del comprador en el sitio               |
| is_prime_user            | Integer | Es usuario premium: 1 si lo es, 0 si no lo es, 2 si no existe |
| is_first_purchase_online | Integer | Primera compra en el sitio: 1 si lo es, 0 si no lo es        |
| last_purchase            | Date    | Fecha de la última compra en el sitio                        |



### **Shipments:**

| Parámetro: Shipment | Tipo    | Descripción                                                  |
| ------------------- | ------- | ------------------------------------------------------------ |
| pick_up_on_seller   | Binary  | Retiro en sucursal: 1 si retira en sucursal, 0 si no lo hace |
| Receiver_address    | Object  | Datos de dirección del comprador                             |
| zip_code            | String  | Código Postal                                                |
| state_name          | String  | Provincia                                                    |
| city_name           | String  | Ciudad                                                       |
| street_number       | Integer | Número de calle                                              |
| floor               | String  | Piso                                                         |
| apartment           | String  | Apartamento                                                  |
| express_shipment    | Binary  | Envío express: 1 si lo tiene, 0 si no lo tiene               |

```json
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ACCESS_TOKEN_ENV' \
  -d '{
	"token":"b3a7dbec3eb0d71798c4f19fec445795",
	"installments":1,
	"transaction_amount":58.80,
	"description":"Point Mini maquina pequeña",
	"payment_method_id":"visa",
	"payer":{
	"email":"test_user_123456@testuser.com"

    },
    "notification_url":"https://www.suurl.com/notificaciones/",
    "sponsor_id":null,
    "binary_mode":false,
    "external_reference":"MP0001",
    "statement_descriptor":"MercadoPago",
    "additional_info":{
    "items":[
    	{
    		"id":"PR0001",
    		"title":"Point Mini",
    		"picture_url":"https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mla-point-i_medium@2x.png",
    		"quantity":1,
    		"unit_price":58.80,
            "category_id":"Accesorios PC",
            "warranty":1
    	}
    ],
    "payer":{
    	"first_name":"Nombre",
    	"last_name":"Apellido"",
    	"address":{
    	"zip_code":"06233-200",
    	"street_name":"Av de las Naciones Unidas",
    	"street_number":3003,
        "autentication_type":"Facebook",
        "is_prime_user":0,
        "last_purchase":"2018-11-11T12:01:01.000-03:00"
          
    },
    "registration_date":"2019-01-01T12:01:01.000-03:00",
    "phone":{
    "area_code":"011",
    "number":"987654321"
    }

},
	"shipments":{
    "pick_up_on_seller":0,
    "express_shipment":0,
	"receiver_address":{
	"street_name":"Av de las Naciones Unidas",
	"street_number":3003,
	"zip_code":"06233200"
	}
   }
  }
}'  
```

