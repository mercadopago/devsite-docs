# Notificações IPN

----[mla, mlb, mlc, mlm, mco, mlu]----
> WARNING
>
> Pré-requisitos
>
> * Possuir o [Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) implementado.
------------
----[mpe]----
> WARNING
>
> Pré-requisitos
>
> * Possuir o [Checkout](https://www.mercadopago.com.br/developers/pt/guides/payments/web-checkout/introduction) implementado.
------------

O **IPN** (_Instant Payment Notification_) é uma notificação enviada de um servidor a outro mediante uma chamada `HTTP POST` para informar sobre suas transações.

Para receber notificações de eventos na sua plataforma, você pode [configurar previamente uma notification_url à qual Mercado Pago tiver acesso](https://www.mercadopago.com.br/ipn-notifications).



## Eventos

Notificamos eventos relacionados aos seus pedidos (`merchant_orders`), estornos recebidos (`chargebacks`) ou pagamentos recebidos (`payment`).

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
| `topic` | Identifica do que se trata o recurso. Pode ser `payment`, `chargebacks` ou `merchant_order ` |
| `id` | É um identificador único do recurso notificado. |

Exemplo: Se configurar a URL: `https://www.yoursite.com/notifications`, você receberá as notificações de pagamento desta maneira: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.

## O que devo fazer ao receber uma notificação?

Quando receber uma notificação na sua plataforma, o Mercado Pago espera uma resposta para validar que a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`.

Lembre-se que esta comunicação é feita exclusivamente entre os servidores do Mercado Pago e o seu servidor, de modo que não haverá um usuário físico vendo nenhum tipo de resultado.

Depois disso, você poderá obter a informação completa do recurso notificado acessando a API correspondente em `https://api.mercadopago.com/`:

Tipo               | URL                                                         | Documentação
------------------ | ----------------------------------------------------------- | --------------------
payment            | /v1/payments/[ID]?access\_token=[ACCESS\_TOKEN] | [ver documentação](https://www.mercadopago.com.ar/developers/pt/reference/payments/_payments_id/get/)
chargebacks    	   | /v1/chargebacks/[ID]?access\_token=[ACCESS\_TOKEN]| -
merchant_orders    | /merchant\_orders/[ID]?access\_token=[ACCESS\_TOKEN]           | [ver documentação](https://www.mercadopago.com.ar/developers/pt/reference/merchant_orders/_merchant_orders_id/get/)


### Notificações para pagamentos presenciais

**Se você estiver integrando pagamentos presenciais**, recomendamos utilizar notificações IPN de topic `merchant_order`. Para isso, lembre das seguintes regras:
 
1. O campo `status` da `merchant_order` permanecerá em **opened** quando ainda não tiver pagamentos associados, ou tiver pagamentos recusados ou aprovados por um valor menor ao total da ordem.
2. O campo `status` da `merchant_order` será **closed** quando a soma dos pagamentos aprovados for igual ou superior ao total da ordem.
 
Dentro da ordem, no objeto payments, você vai encontrar todos os pagamentos dela. É importante obter a ID dos pagamentos com status = approved para [poder realizar restituições](https://www.mercadopago.com.ar/developers/pt/guides/manage-account/cancellations-and-refunds).
 
> WARNING
>
> ATENÇÃO
>
> Quando o `status` da `merchant_order` for **closed**, certifique-se de que a soma dos pagamentos com `status` **approved** seja igual ou maior ao total da ordem.

### Implemente o receptor de notificações usando o seguinte código como exemplo:

```php
<?php
	MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

	$merchant_order = null;

	switch($_GET["topic"]) {
		case "payment":
			$payment = MercadoPago\Payment::find_by_id($_GET["id"]);
			// Get the payment and the corresponding merchant_order reported by the IPN.
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order->id);
			break;
		case "merchant_order":
			$merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
			break;
	}

	$paid_amount = 0;
	foreach ($merchant_order->payments as $payment) {	
		if ($payment['status'] == 'approved'){
			$paid_amount += $payment['transaction_amount'];
		}
	}
	
	// If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
	if($paid_amount >= $merchant_order->total_amount){
		if (count($merchant_order->shipments)>0) { // The merchant_order has shipments
			if($merchant_order->shipments[0]->status == "ready_to_ship") {
				print_r("Totally paid. Print the label and release your item.");
			}
		} else { // The merchant_order don't has any shipments
			print_r("Totally paid. Release your item.");
		}
	} else {
		print_r("Not paid yet. Do not release your item.");
	}
	
?>
```

> Para obter seu `ACCESS_TOKEN`, verifique a seção de [Credenciais]([FAKER][CREDENTIALS][URL])

## Pesquisa da ordem

**Si estas integrando pagos presenciales**, se debe implementar como método de contingencia, la  **búsqueda de la orden** utilizando el `external_reference` de la misma como criterio de búsqueda.

**Se você estiver integrando pagamentos presenciais**, é necessário aplicar como método de contingência a **pesquisa da ordem** utilizando o seu `external_reference` como critério de pesquisa.

```curl
curl -X GET https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE&access_token=$ACCESS_TOKEN -d
```
Mais informações na [Referência de API](https://www.mercadopago.com.br/developers/pt/reference/merchant_orders/_merchant_orders_search/get/).

A **pesquisa** pode ser realizada por `external_reference` de duas formas:


| Formas	|	Descrição		|
| ----------- | ----------------- |
| **Manual** | O ponto de venda deve incluir um botão para realizar a pesquisa. |
| **Automática** | Após um tempo razoável sem ter recebido qualquer notificação, é iniciada uma pesquisa da ordem a cada um intervalo de, por exemplo, 5 segundos. |

Por cada escaneamento do QR é gerada uma `merchant_order` diferente. Lembre que caso o cliente faça mais de um escaneamento, uma ordem ficará em **open** por tempo indefinido. Para encerrar a transação, a `merchant_order` deve ter `status` = **closed**.
 
Caso a pesquisa seja realizada **após o escaneamento do QR**, vão se obter todos os dados referidos à ordem:

```json
{
  "id": 1126664483,
  "status": "closed",
  "payments": [
     {
      "id": 4996721469,
      "transaction_amount": 4,
      "status": "rejected",
      [...],
    },
     {
      "id": 4996721476,
      "transaction_amount": 4,
      "status": "approved",
      [...], }, 
```

Caso contrário, se o QR no qual a ordem foi publicada ainda **não foi escaneado**, a resposta será:

```json
{
   "elements": null,
   "next_offset": 0,
   "total": 0
 }
```

> WARNING
>
> ATENÇÃO
>
> Mercado Pago requer a integração de pagamentos presenciais que tiverem aplicada a notificação (IPN) como método principal para a homologação. A pesquisa de ordem por `external_reference` deverá ser somente utilizada como contingência no caso eventual de não se receberem notificações.

## Receber apenas um tipo de notificação

Se deseja receber notificações apenas de IPN, e não de Webhooks, você pode adicionar na *notification_url* o parâmetro `source_news=ipn`. Como por exemplo:

`https://www.yourserver.com/notifications?source_news=ipn`

> E não se preocupe, a alteração não afeta os parâmetros já incluídos no URL.
