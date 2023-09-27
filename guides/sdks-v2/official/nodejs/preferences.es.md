# Crear preferencia

Es posible crear preferencias utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({
	'external_reference': 'teste',
	'items': [
		{
			'id': '4567',
			'title': 'Dummy Title',
			'description': 'Dummy description',
			'picture_url': 'http://www.myapp.com/myimage.jpg',
			'category_id': 'eletronico',
			'quantity': 1,
			'currency_id': 'BRL',
			'unit_price': 100
		}
	],
	'payment_methods': {
		'default_payment_method_id': 'master',
		'excluded_payment_types': [
			{
				'id': 'ticket'
			}
		],
		'excluded_payment_methods': [
			{
				'id': ''
			}
		],
		'installments': 12,
		'default_installments': 1
	}
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

# Buscar preferencias

Puede encontrar toda la información de preferencias generada a través de filtros específicos o por un rango de fechas específico utilizando el SDK a continuación. Para detalles de los parámetros de la solicitud, acceda a la API [Buscar preferencias](/developers/es/reference/preferences/_checkout_preferences_search/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.search({
  sponsor_id: '0',
  external_reference: '',
  site_id: 'MLA',
  marketplace: 'NONE'
}).then((result) => console.log(result))
  .catch((error) => console.log(error));
```
]]]

# Obtener preferencia

Puede obtener toda la información de pago de un producto o servicio con el ID de preferencia deseado utilizando el SDK a continuación. Para obtener detalles sobre los parámetros de la solicitud, acceda a la API [Obtener preferencia](/developers/es/reference/preferences/_checkout_preferences_id/get).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });
const preference = new Preference(client);

preference.get({ preferenceId: '123456789' })
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

# Actualizar preferencia

Puede actualizar los detalles de una preferencia de pago utilizando el ID de preferencia. Para detalles de los parámetros de la solicitud, acceda a la API [Actualizar preferencia](/developers/es/reference/preferences/_checkout_preferences_id/put).

[[[
```node
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.update({
	id: '123456789',
	updatePreferenceRequest: {
		items: [
			{
				id: '1234',
				title: 'Dummy Title',
				quantity: 1,
				unit_price: 100
			}
		],
	}
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]


## Asociar Facebook Ads

Puede asociar la preferencia con un píxel para rastrear las conversiones de anuncios de Facebook. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Configura tu preferencia
var preference = {
  // Asocia tu píxel de Facebook
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
]]]

## Asociar Google Ads

Puede asociar una *tag* a la preferencia para realizar el seguimiento de las conversiones de Google Ads. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Configura tu preferencia
var preference = {
 
  // Asocia tu tag
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            } 
        }
      ]
  ...
};
```
]]]