# Gestão de pagamentos recebidos

Encontre todas as informações sobre os pagamentos gerados através de nossas APIs.

## Obtenha pagamentos criados a partir de sua ID

Para obter informações sobre um pagamento a partir de sua _ID_, deve-se fazer a seguinte _requisição_:
```curl
curl -G -X GET \
-H "accept: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/v1/payments/<payment_id>" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"`
```
```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/". $paymentId
	);
?>
```

Resposta esperada:

```json
{
  "id": 2798247250,
  "date_created": "2017-06-16T21:10:06.000-04:00",
  "date_approved": "2017-06-16T21:10:06.000-04:00",
  "date_last_updated": "2017-06-28T19:39:41.000-04:00",
  "date_of_expiration": null,
  "money_release_date": "2017-06-21T21:10:06.000-04:00",
  "operation_type": "regular_payment",
  "payment_method_id": "visa",
  "payment_type_id": "credit_card",
  "status": "approved",
  "status_detail": "accredited",
  "currency_id": "[FAKER][CURRENCY][ACRONYM]",
  "description": "Telefono Celular iPhone 7",
  ...,
}
```

As informações sobre todas as variáveis retornadas podem ser obtidas na [referência da API do recurso Payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get).

## Buscar pagamentos

Para buscar pagamentos, utilize a API `Payment Search`:

```curl
curl -G -X GET \
-H "accept: application/json" \
"https://api.mercadopago.com/v1/payments/search" \
-d "access_token=ACCESS_TOKEN" \
-d "status=approved" \
-d "offset=0" \
-d "limit=10"
```
```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789"
		)
	);
?>
```

Neste exemplo, a busca é realizada através do campo `external_reference`, mas também é possível utilizar muitos outros filtros.

### Filtros de busca

Para buscar pagamentos, pode-se utilizar as seguintes variáveis:

* `payer.id`: Identificação do comprador.
* `installments`: Número de parcelas do pagamento (por exemplo: `12`).
* `payment_method_id`: Meio de pagamento (por exemplo: `visa`).
* `payment_type_id`: Tipo de meio de pagamento (por exemplo: `credit_card`).
* `operation_type`: Tipo de operação, podendo ser `regular_payment`, `pos_payment`, `recurring_payment`, etc.
* `processing_mode`: Se o pagamento for tipo Gateway ou Agregador (por exemplo:`gateway`).
* `status`: Status do pagamento.
* `status_detail`: Detalhe do status do pagamento.

Será exibido o número total de resultados, que poderá então ser utilizado para paginação:

```json
{
  "paging": {
    "total": 1234,
    "limit": 30,
    "offset": 0
  },
  "results": [
    {}
  ]
}
```

### Filtros de busca por datas

Também é possível realizar a busca por datas específicas:

* `begin_date`: Data de início da busca (ISO 8601), por exemplo: `2017-05-06T15:07:20.000-04:00`.
* `end_date`: Data de término da busca (ISO 8601), por exemplo: `2017-05-06T15:07:20.000-04:00`.

Os campos de datas também aceitam a variável `NOW` (data atual), combinados com as seguintes variáveis:

* `MINUTES`: Minutos (1 a 60).
* `HOURS`: Horas (1 a 24).
* `WEEKS`: Semanas (1 a 8).
* `DAYS`: Dias (1 a 365).

Um exemplo disso seria `NOW-5MINUTES`:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"begin_date" => "NOW-2HOURS",
			"end_date" => "NOW",
			"range" => "date_last_updated",
			"sort" => "date_last_updated",
			"criteria" => "desc"
		)
	);
?>
```

Este exemplo mostra os **pagamentos atualizados** nas últimas 2 horas até a data atual de forma decrescente.

Pode-se utilizar o campo `range` para pesquisar um campo de data específico, por exemplo, `date_created` ou `date_last_updated`.

### Paginação de pagamentos

Caso obtenha muitos resultados, os pagamentos deverão ser paginados utilizando os seguintes atributos:

| Atributo | Descrição | Exemplo |
| :--- | :--- | :--- |
| `limit` | Número de registros exibidos (valor máximo = 50). Se não for definido, serão exibidos até 30 registros encontrados | `limit=50` |
| `offset` | Posição a partir da qual você deseja que os registros sejam exibidos. O valor padrão é 0 (máximo permitido: 10000). | `offset=100` |
| `sort` | Estabelece um critério a partir do qual os resultados são classificados. | `sort=external_reference` |
| `criteria` | Ordem dos dados. Pode ser asc (crescente) ou desc (decrescente). | `criteria=asc` |

Exemplo de paginação:

```php
<?php
	require ('mercadopago.php');

	$mp = new MP ("ENV_ACCESS_TOKEN");

	$payment = $mp->get(
		"/v1/payments/search",
		array(
			"external_reference" => "123456789",
			"limit" => 50,
			"offset" => 200,
			"sort" => "id",
			"criteria" => "desc"
		)
	);
?>
```

Isso exibiria 50 resultados, filtrando os primeiros 200, ordenados por `id` de forma decrescente.