# Receber um pagamento

Receba pagamentos de maneira simples e segura utilizando o Checkout do Mercado Pago.


## 1. Crie uma preferência de pagamento

Uma preferência de pagamento contém todas as informações sobre o produto ou serviço pelo qual se vai pagar. Por exemplo:

1. Descrição e montante.
2. Informações sobre seu comprador (Email, nome, endereço, etc).
3. Formas de pagamento aceitas.
4. ID de referência de seu sistema.

Para criar uma preferência de pagamento deve [instalar o SDK do Mercado Pago](https://github.com/mercadopago) e configurar o objeto `MP` com suas [credenciais](https://www.mercadopago.com/mlb/account/credentials?type=basic).

```php
<?php
require_once ('mercadopago.php');
$mp = new MP ("CLIENT_ID", "CLIENT_SECRET");
?>
```

Logo, deverá adicionar os atributos de sua preferência ao pagamento:

```php
<?php
$preference_data = array(
	"items" => array(
		array(
			"title" => "Multicolor kite",
			"quantity" => 1,
			"currency_id" => "ARS",
			"unit_price" => 10.00,
			"description" => "",
			"category_id" => "art" // Categorias disponíveis em https://api.mercadopago.com/item_categories
		)
	),
	"payer" => array(
		"email" => "usuario@mail.com"
	)
);

$preference = $mp->create_preference($preference_data);
?>
```

### Conteúdo da preferência

Quanto mais informações nos enviar, melhor será a taxa de aprovação dos pagamentos e a experiência de seus usuários.

#### Comprador

É obrigatório o envio do `email` de seu comprador. Se nos enviar dados como tipo e número do documento de identificação, os mesmos não são serão solicitados durante o processo de pagamento.

```json
{
   ...
	"payer": {
		"name": "user-name",
		"surname": "user-surname",
		"email": "user@email.com",
		"date_created": "2015-06-02T12:58:41.425-04:00",
		"phone": {
			"area_code": "11",
			"number": "4444-4444"
		},
		"identification": {
			"type": "DNI", // IDs dos tipos disponíveis em https://api.mercadopago.com/v1/identification_types
			"number": "12345678"
		},
		"address": {
			"street_name": "Street",
			"street_number": 123,
			"zip_code": "5700"
		} 
	},
	...
}
```

#### Dados de entrega

```json
{
	...,
	"shipments": {
		"receiver_address": {
			"zip_code": "5700",
			"street_number": 123,
			"street_name": "Street",
			"floor": 4,
			"apartment": "C"
		}
	}
}
```

## 2. Leve seu comprador para o Checkout

Uma vez criada a preferência utilize a URL localizada no atributo `init_point` da resposta para gerar um botão de pagamento:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Pagar</title>
	</head>
	<body>
		<a href="<?php echo $preference['response']['init_point']; ?>">Pay</a>
	</body>
</html>
```

## 3. Ative as notificações de pagamentos

As notificações são uma forma automática de inteirar-se sobre seus novos pagamentos e as atualizações de seus estados.

Isto lhe permitirá administrar seu estoque e manter seu sistema sincronizado.

Visite a seção de [Notificações](#) para saber mais sobre o assunto.

## 4. Cancelar um pagamento

As formas de pagamentos em dinheiro devem ser efetivadas entre 3 a 5 dias dependendo de cada uma.

O vencimento destes pagamentos **não é automático**, nesse caso é necessário que se execute o [cancelamento do pagamento](../account/refunds-and-cancellations.pt.md) após o vencimento.


## 5. Teste sua integração

Você pode testar sua integração antes de entrar em produção, a fim de verificar o funcionamento e efetuar os ajustes necessários.

Para tal deve se utilizar usuários e cartões de teste.

Visite a seção de [Testando](./testing.pt.md) para maiores informações.
