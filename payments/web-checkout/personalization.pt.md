# Personalização


A partir da preferência dos pagamentos você pode não somente enviar informações sobre os itens sendo comprados e o comprador, como também pode definir as formas de pagamento que não deseje aceitar, URL de retorno para seu site após o pagamento, métodos de envio e entre outros mais.


### Defina tipos e formas de pagamento

Por padrão oferecemos todas as formas de pagamento disponíveis para o país onde se está realizando a integração. Se o seu modelo de negócio não suporta alguma destas [formas de pagamento](#localización), ou simplesmente não deseja aceitar algum [método em particular](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLA&marketplace=NONE), pode exclui-lo na criação da preferência do pagamento.

Pode-se também definir a forma de pagamento ou a quantidade de parcelas que serão expostas por padrão, assim como também a quantidade máxima de parcelas a serem oferecidas.



```json

"payment_methods": {
		"excluded_payment_methods": [
			{
				"id": "master"
			}
		],
		"excluded_payment_types": [
			{
				"id": "ticket"
			}
		],
		
		"default_payment_method_id": null,
		"default_installments": null,
		"installments": 12
	},
```




### Defina URLs de Retorno

Ao finalizar o processo de pagamento, é muito importante que comunique ao seu comprador quais são os próximos passos e desta maneira lhe dar confiança a respeito do resultado da operação. Para ele, utilizamos as `back_urls`. O atributo `auto_return` para `approved` redirecionará de forma automática o comprador para a success url quando o resultado for o pagamento aprovado.

```json

"back_urls": {
		"success": "https://www.seu-site/success",
		"failure": "http://www.seu-site/failure",
		"pending": "http://www.seu-site/pending"
	},
	"auto_return": "approved",

```


### Sincronize com seu sistema

Para poder sincronizar com seu sistema de backend, pode-se enviar na preferência o campo `external_reference`, pelo qual vai poder consultar quando o pagamento for criado. 

```json
"external_reference": "Pedido_1234",
```

Para saber o estado atual de seu pagamento, pode ser feita uma busca utilizando-se da referência fornecida:

```php
<?php

require_once ('mercadopago.php'); 
$mp = new MP ("CLIENT_ID", "CLIENT_SECRET");

$mp->get('/v1/payments/search?external_reference=EXTERNAL');

>
```


### Expire links de sua preferência

Se não quiser permitir que um pagamento em específico possa ser efetuado, posteriormente a uma data determinada, pode-se utilizar os seguintes atributos:


```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


Para saber mais sobre os atributos de preferência, [consulte a documentação da API](https://www.mercadopago.com.co/developers/pt/api-docs/basic-checkout/checkout-preferences/)
