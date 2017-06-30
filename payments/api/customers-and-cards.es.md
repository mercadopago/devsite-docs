# Clientes y tarjetas almacenadas

> WARNING
>
> Pre-requisitos
> 
> * Tener implementada la [captura de datos de tarjeta](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta).

Los clientes y tarjetas (*customers & cards*) son la forma de almacenar datos de tarjeta de tus clientes de **manera segura** para mejorar la experiencia de compra.

Esto te permitiría que tus clientes finalicen sus compras mucho más rápido y de forma más sencilla, ya que no deberán completar nuevamente sus datos de tarjeta.

Los *customers* representan, como su nombre lo indica, a tu cliente. Las tarjetas que almacenes serán para este cliente específico.

## Creación de un customer y una card

Para crear un `Customer` y una `Card` al mismo tiempo es necesario enviar por lo menos los campos `email` y `token`.

```php
<?php

require_once ('mercadopago.php');

$mp = new MP ("ENV_ACCESS_TOKEN");

$customer = $mp->post(
	"/v1/customers", 
	array(
		"email" => "test@test.com",
		"token" => "9b2d63e00d66a8c721607214cedaecda"
	)
);
?>
```

Respuesta esperada:

```json
{
	"id": "123456789-jxOV430go9fx2e",
	"email": "test_payer_12312312@testuser.com",
	...
	"default_card": "1490022319978",
	"default_address": null,
	"cards": [{
		"id": "1490022319978",
		"expiration_month": 12,
		"expiration_year": 2020,
		"first_six_digits": "415231",
		"last_four_digits": "0001",
		...
	}],
	"addresses": [],
	"live_mode": false
}
```

## Recibir un pago de un Customer

Para que puedas recibir un pago utilizando una tarjeta almacenada, es necesario volver a capturar el **código de seguridad** de la esta. Por cuestiones de seguridad, Mercado Pago no puede almacenar este dato.

### 1. Mostrar las tarjetas almacenadas

Puedes listar las tarjetas almacenadas para que tu cliente elija con cuál quiere pagar.

Puedes obtener el listado completo de `Cards` de un cliente realizando un request `HTTP GET`:

```php
<?php
$cards = $mp->get("/v1/customers/".$customer_id."/cards");
?>
```

Respuesta:

```json
[{
	"id": "1490022319978",
	"expiration_month": 12,
	"expiration_year": 2020,
	"first_six_digits": "415231",
	"last_four_digits": "0001",
	...
}]
```

Con esta respuesta recomendamos realizar un formulario:

```html
<li>
	<label>Payment Method:</label>
	<select id="cardId" name="cardId" data-checkout='cardId'>
	<?php foreach ($cards["response"] as $card) { ?>
		<option value="<?php echo $card["id"]; ?>" 
			first_six_digits="<?php echo $card["first_six_digits"]; ?>" 
			security_code_length="<?php echo $card["security_code"]["length"]; ?>">
				<?php echo $card["payment_method"]["name"]; ?> ended in <?php echo $card["last_four_digits"]; ?>
		</option>
	<?php } ?>
	</select>
</li>
<li id="cvv">
	<label for="cvv">Security code:</label> 
	<input type="text" id="cvv" data-checkout="securityCode" placeholder="123" />
</li>
```

### 2. Captura el código de seguridad

El flujo de captura es casi el mismo que realizaste al [capturar los datos de la tarjeta](receiving-payment-by-card.es.md#captura-los-datos-de-tarjeta). Debes crear un `card token` enviando el `$form` con el `cardId` y el `securityCode`:

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'),'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');
        
        Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

        return false;
    }
};
```

El método `createToken` devolverá un `card_token` (la representación segura de la tarjeta):

```json
{
    "id": "ff8080814cbd77a8014cc",
    ...
}
```

### 3. Crear un pago

Una vez obtenido el token del paso anterior, podrás generar el pago por el monto correspondiente.

Al ser un pago con tarjeta guardada, deberás enviar el id de customer asociado junto al token.

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('ACCESS_TOKEN');

$payment_data = array(
	"transaction_amount" => 100,
	"token" => "ff8080814c11e237014c1ff593b57b4d",
	"payer" => array(
		"type" => "customer",
		"id" => "123456789-jxOV430go9fx2e"
	)
);

$payment = $mp->post("/v1/payments", $payment_data);
?>
```

Eso es todo, la respuesta tendrá el estado del pago (`approved`, `rejected` o `in_process`). 

> Puedes ver más información sobre el [manejo de respuestas](#manejo-de-respuestas).


## Agregar nuevas tarjetas a un Customer

Es posible agregar nuevas tarjetas a tu `Customer`. Para esto debes crear un `token` y hacer un request `HTTP POST` al `Customer`.

```php
<?php

require_once ('mercadopago.php');

$mp = new MP ("ACCESS_TOKEN");

$customer_id = '247711297-jxOV430go9fx2e';

$card = $mp->post(
	"/v1/customers/".$customer_id."/cards",
	array("token" => "ff8080814c11e237014c1ff593b57b4d")
);

print_r ($card);
?>
```

> SUMAR RESPUESTA

## Buscar un Customer

En el caso en el que no sepas cuál es el `id` de tu `Customer`, puedes utilizar la API de `Customer Search` realizando un request `HTTP GET`. El parámetro requerido para esto es `email`:

```php
<?php
  $customer = array (
      "email" => "your.payer@email.com"
  );

  $saved_customer = $mp->get("/v1/customers/search", $customer);
  $customer_id = $saved_customer["response"]["results"][0]["id"];
?>
```

> SUMAR RESPUESTA

## Obtener las Cards de un Customer

Puedes obtener el listado completo de `Cards` de un cliente realizando un request `HTTP GET`:

```php
<?php
  $cards = $mp->get("/v1/customers/".$customer_id."/cards");
  print_r($cards);
?>
```

Respuesta:

```json
[{
	"id": "1490022319978",
	"expiration_month": 12,
	"expiration_year": 2020,
	"first_six_digits": "415231",
	"last_four_digits": "0001",
	...
}]
```
