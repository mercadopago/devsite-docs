# Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({
	'items': [
		{
			'id': '4567',
			'title': 'Dummy Title',
			'quantity': 1,
			'unit_price': 100
		}
	],
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

# Pesquisar preferências

É possível encontrar todas as informações das preferências geradas através de filtros específicos ou por uma faixa de datas específica utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar preferências](/developers/pt/reference/preferences/_checkout_preferences_search/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

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

# Obter preferência

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação da preferência desejada utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter preferência](/developers/pt/reference/preferences/_checkout_preferences_id/get).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
const preference = new Preference(client);

preference.get({ preferenceId: '123456789' })
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
```
]]]

## Atualizar preferência

É possível atualizar os detalhes de uma preferência de pagamento através do ID da preferência. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar preferência](/developers/pt/reference/preferences/_checkout_preferences_id/put).

[[[
```node
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });

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