---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---

# Pagamentos com QR integrados

O Mercado Pago permite receber os pagamentos de seus clientes através de um QR code exclusivo que identifica o ponto de venda. Quando criar um pedido de venda em seu sistema de gestão, deve enviar ao Mercado Pago o detalhe do que quer cobrar para que seu cliente possa escanear o QR code e pagar o que comprou.

Identificamos dois atributos importantes na integração:

* `collector_id`: Identificador da conta do vendedor de Mercado Pago. Valor numérico.
* `pos_id`: Identificador do ponto de venda. Não pode haver valores repetidos para um mesmo vendedor. Valor alfanumérico (não aceita caracteres especiais).

## Detalhe da integração

Gera o QR code associado ao ponto de venda e integra a criação do pedido pendente no seu sistema de gestão.

### Geração do QR code

Configure a URL para cada caixa, substituindo o collector_id, pos_id e o access token de acordo com a sua conta e o ponto de venda correspondente:

https://api.mercadopago.com/mpmobile/instore/merchant/qr/${collector_id}/${pos_id}?access_token=ACCESS_TOKEN

Como resultado a API irá retornar uma lista de opções para impressão do código QR:

```json

{
 "qr": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/5...d9.png", // QR Simples
 "qr_template": {
   "document": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/template_5...d9.pdf", // PDF com QR e o logo do Mercado Livre
   "image": "https://www.mercadopago.com/instore/merchant/qr/$collector_id/13/template_5...d9.png" // Imagen com QR e o logo do Mercado Livre
 },
 "pos_id": "13" // Identificador do ponto de venda.
}

```

Caso tenha interesse em gerar o seu QR de forma manual, pode utilizar qualquer gerador online que converta a URL en un código QR substituindo o collector_id, pos_id de acordo com a sua conta e o ponto de venda correspondente.

https://mercadopago.com/s/qr/${collector_id}/${pos_id}

### Criação do pedido de venda

Integre no ponto de venda a criação do pedido de cobrança, fazendo um POST à seguinte API substituindo colletor_id e pos_id pelos valores correspondentes à conta e caixa de onde deseja cobrar.

https://api.mercadolibre.com/mpmobile/instore/qr/collector_id/pos_id?access_token=ACCESS_TOKEN


No `body` especifique o detalhe do pedido da seguinte maneira:

```json
{
  "external_reference" : "id de transação interno por exemplo",
  "items" :[{
    "title" : "Hambúrguer",
    "currency_id" : "ARS",
    "unit_price" : 100.0,
    "quantity" : 1
  },{
    "title" : "Refrigerante",
    "currency_id" : "ARS",
    "unit_price" : 25.0,
    "quantity" : 1
  }]
}

```
> Este pedido de venda estará disponível no QR durante 10 minutos a partir da sua criação.

## Fluxo de pagamento

1. Seu cliente escaneará o QR code impresso na caixa a partir de sua carteira virtual.
2. Mercado Pago recebe uma solicitação por um pedido pendente de cobrança para essa caixa desse vendedor.
3. Se houver um pedido pendente, mostra o detalhe a pagar ao usuário em seu celular. Se não houver pedido pendente verá em seu celular a comunicação correspondente.
4. Seu cliente paga com dinheiro em conta ou cartão e a notificação de pagamento é enviada.

### Notificações

Revise a seção de [Webhooks](/guides/notifications/webhooks.pt.md) para integrar as notificações de pagamento em seu sistema de gestão e impactar o resultado do mesmo de forma imediata, imprimindo a fatura correspondente.

## Casos de teste

Crie dois usuários de teste. Com um deles simule ser o vendedor e com seu Access Token crie o pedido de venda. Com o segundo simule ser o comprador, iniciando seção na aplicação móvel de Mercado Pago e utilize os [cartões de teste](/guides/payments/api/testing.pt.md) para realizar pagamentos.


```
# Get access_token

AT=`curl -s -X POST -H 'content-type: application/x-www-form-urlencoded' 'https://api.mercadopago.com/oauth/token' -d 'grant_type=client_credentials' -d 'client_id=CLIENT_ID' -d 'client_secret=CLIENT_SECRET' | grep -o '"access_token":"[^"]*"' | sed -n 's/.*"access_token":"\(.*\)"/\1/p'`

```

```
# Create test user

curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=$AT" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'

```

Antes de entrar em produção verifique os seguintes cenários.



| Caso 		| Cenário 				 | Resposta do App        |
| ---- 		| ---- 				 | ----------        |
| 1  	| O usuário escaneia um código válido antes de finalizar o pedido.|Não há pedido pendente.|
| 2   	| O usuário escaneia um código com parâmetros inválidos. (Faça referência a uma conta inexistente)|Algo não saio bem. Por favor, tente novamente.|
| 3  	| O usuário escaneia um código válido, uma vez finalizado o pedido.|Se prossegue com o fluxo normal de pagamento.|
| 4  	| O usuário escaneia múltiplas vezes um código válido com pedido finalizado.|Se prossegue com o fluxo normal de pagamento.|
| 5    	| O usuário escaneia um código válido com pedido finalizado e paga|Se prossegue com o fluxo normal de pagamento.|
