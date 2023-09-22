## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

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

## Associar Facebook Ads

É possível associar a preferência a um pixel para acompanhamento das conversões do Facebook Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
  // Criar um objeto preferência
var preference = {
  // Associe seu píxel do Facebook
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

## Associar Google Ads

É possível associar uma tag à preferência para acompanhamento das conversões do Google Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```node
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
  // Criar um objeto preferência
var preference = {
 
  // Associar sua tag do Google ads
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