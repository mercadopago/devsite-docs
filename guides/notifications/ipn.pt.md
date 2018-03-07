# Notificações IPN

> WARNING
>
> Pré-requisitos
>
> * Possuir o [Checkout](/guides/payments/web-payment-checkout/introduction.pt.md)implementado.

O **IPN** (_Instant Payment Notification_) é uma notificação enviada de um servidor a outro mediante uma chamada `HTTP POST` para informar sobre suas transações.

Para receber as notificações dos eventos na sua plataforma, deve-se [configurar previamente uma URL acessível ao Mercado Pago](https://www.mercadopago.com.ar/herramientas/notificaciones).


## Eventos

Notificamos eventos relacionados aos seus pedidos (`merchant_orders`) ou pagamentos recebidos (`payment`).

A `merchant_order` é uma entidade que pode conter tanto pagamentos como envios. Você terá que consultar os dados dos pedidos notificados.

Sempre que ocorrer um evento relacionado a algum dos recursos mencionados, enviaremos uma notificação utilizando `HTTP POST` para a URL especificada.

Se a aplicação não estiver disponível ou demorar para responder, o Mercado Pago irá fazer tentativas de notificação nos seguintes intervalos:

1. Tentativa após 5 minutos.
2. Tentativa após 45 minutos.
3. Tentativa após 6 horas.
4. Tentativa após 2 dias.
5. Tentativa após 4 dias.

O Mercado Pago informará essa URL quando um recurso for criado ou quando houver atualização do status dos pagamentos ou pedidos, com dois parâmetros:

| Campo 		| Descrição   				 |
| ---- 		| ---- 				 |
| `topic` | Identifica do que se trata o recurso. Pode ser `payment` ou `merchant_order ` |
| `id` | É um identificador único do recurso notificado. |

Exemplo: Se configurar a URL: `https://www.yoursite.com/notifications`, você receberá as notificações de pagamento desta maneira: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.

## O que devo fazer ao receber uma notificação?

Quando receber uma notificação na sua plataforma, o Mercado Pago espera uma resposta para validar que a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`.

Lembre-se que esta comunicação é feita exclusivamente entre os servidores do Mercado Pago e o seu servidor, de modo que não haverá um usuário físico vendo nenhum tipo de resultado.

Depois disso, você poderá obter a informação completa do recurso notificado acessando a API correspondente em `https://api.mercadopago.com/`:

Tipo               | URL                                                         | Documentação
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentação](/reference/payments/resource/)
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [ver documentação](/reference/merchant_orders/resource/)


### Implemente o receptor de notificações usando o seguinte código como exemplo:

```php
<?php
require_once "mercadopago.php";

$mp = new MP("CLIENT_ID", "CLIENT_SECRET");

if (!isset($_GET["id"], $_GET["topic"]) || !ctype_digit($_GET["id"])) {
	http_response_code(400);
	return;
}

// Get the payment and the corresponding merchant_order reported by the IPN.
if($_GET["topic"] == 'payment'){
	$payment_info = $mp->get("/v1/payments/" . $_GET["id"]);
	$merchant_order_info = $mp->get("/merchant_orders/" . $payment_info["response"]["order"]["id"]);
// Get the merchant_order reported by the IPN.
} else if($_GET["topic"] == 'merchant_order'){
	$merchant_order_info = $mp->get("/merchant_orders/" . $_GET["id"]);
}

if ($merchant_order_info["status"] == 200) {
	// If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
	$paid_amount = 0;

	foreach ($merchant_order_info["response"]["payments"] as  $payment) {
		if ($payment['status'] == 'approved'){
			$paid_amount += $payment['transaction_amount'];
		}
	}

	if($paid_amount >= $merchant_order_info["response"]["total_amount"]){
		if(count($merchant_order_info["response"]["shipments"]) > 0) { // The merchant_order has shipments
			if($merchant_order_info["response"]["shipments"][0]["status"] == "ready_to_ship"){
				print_r("Totally paid. Print the label and release your item.");
			}
		} else { // The merchant_order don't has any shipments
			print_r("Totally paid. Release your item.");
		}
	} else {
		print_r("Not paid yet. Do not release your item.");
	}
}
?>
```

> Para obter seu `CLIENT_ID` e `CLIENT_SECRET`, verifique a seção de [Credenciais](https://www.mercadopago.com.ar/account/credentials?type=basic)
