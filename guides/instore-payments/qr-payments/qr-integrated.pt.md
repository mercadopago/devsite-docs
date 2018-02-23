---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---


# Pagamentos com QR codes integrados

O Mercado Pago permite receber os pagamentos de seus clientes através de um QR code exclusivo que identifica o ponto de venda.

Quando o cliente escaneia o QR code, é feita uma requisição ao seu servidor, consultando o valor a ser cobrado. O servidor responde com a [preferência de pagamentos](/reference/preferences/resource/) e no celular do seu cliente o checkout é exibido com as informações do pagamento a ser efetuado. Por fim, o cliente efetua o pagamento e você receberá imediatamente uma notificação *Webhook* em seu servidor para impactar o resultado.


## Detalhes da integração

Após a conclusão da ordem de venda em seu sistema de gestão:

![instore diagram](/images/wallet-instore.png)

1. O usuário escaneia o QR code a partir do aplicativo do Mercado Pago, ao qual está associada a url com as informações do local onde a venda ocorreu. O QR code representa univocamente uma posição em uma filial.

2. Com as informações do local onde o usuário fez o escaneamento, o MP Server consulta o servidor da empresa buscando a última ordem de venda pendente de pagamento para essa posição nessa filial.

  2.1. O servidor cria a preferência de pagamento (Objeto que contém todas as informações do valor a pagar – Vide anexo).
  2.2. O Mercado Pago retorna a preferência de pagamento criada.

3. O servidor retorna a preferência ao MP Server e com esta informação você pode exibir o *checkout* no celular do usuário para que efetue o pagamento.

4. O usuário preenche os dados necessários no *checkout* (geralmente basta inserir o código de segurança) e confirma o pagamento.

5. Assim que o pagamento é processado, o MP Server envia ao servidor da empresa uma notificação *Webhook* informando que há um novo pagamento, especificando a identificação do pagamento.

6. Com a identificação do pagamento, o servidor da empresa pode consultar se o status do pagamento é `approved` ou `rejected`. Se o pagamento foi aprovado, você pode liberar a ordem e dar baixa no pagamento. Se o pagamento tiver sido recusado, o app do Mercado Pago fará uma nova tentativa de cobrança.

7. O cliente é informado que o pagamento foi processado corretamente.


## Detalhes do QR code

O QR code gerado deve identificar de forma exclusiva o ponto de venda a partir do qual se deseja efetuar o pagamento. Por exemplo, você pode gerar uma URL como esta:
``https://www.miempresa.com/pay-mp?locationId=01&positionId=01``

Onde `locationId` representa a filial e `positionId` o caixa onde a venda foi realizada. Este QR code pertence à filial 01, caixa 01.

Defina os parâmetros necessários de acordo com o seu modelo de negócios.

### Obtenha a preferência de pagamento

Você deve gerar a preferência de pagamento, incluindo o valor da compra, para permitir que seu cliente visualize os detalhes do valor a pagar no aplicativo do
Mercado Pago no celular.  

Assim que o cliente escaneia o QR code, você recebe uma requisição do Mercado Pago com os parâmetros necessários para que possa identificar o ponto de venda.

Esta requisição é feita ao enviar no header `User-Agent` um dos seguintes valores:

*  `MercadoPago-Android/${version}`
*  `MercadoPago-iOS/${version}`

 > ${version} é a versão do aplicativo instalado no dispositivo

Com base no ponto de venda a partir do qual é feita a requisição, deve-se criar a preferência de pagamento indicando o valor da venda e os detalhes do produto ou serviço.

Para criar esse objeto, solicita-se um serviço do Mercado Pago.

Recomenda-se utilizar o campo `external_reference` (conteúdo livre, até 256 caracteres) para poder associar a preferência criada com o pedido de compra e seu possível pagamento.

A resposta esperada se houver uma venda pendente e uma preferência gerada será um status HTTP 200 (OK), e o corpo da resposta será JSON no seguinte formato:

```
{
	"preference_id": "XXXX"
}

```

Se não houver nenhum pedido pendente de pagamento para o ponto de venda, deve-se retornar um status HTTP 400 (Bad Request) e no corpo do JSON o seguinte formato:

```
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}
```

Onde `message` é um campo opcional e `type` pode possuir um dos seguintes valores:

* in_process: há um pedido em andamento, ainda não é possível determinar o valor a receber.
* unavailable: não há pedidos em andamento ou pendente de pagamento.
* invalid: os parâmetros adicionais (id da filial, caixa, etc.) referem-se a um local desconhecido.
* timeout: o servidor do integrador foi incapaz de se comunicar com qualquer um dos outros sistemas (fornecedor, POS, API do Mercado Pago) e cancelou a operação.

> É importante que em qualquer caso a resposta contenha o header `Content-Type: application/json`.


### Notificações

Consulte a seção sobre [Webhooks](/guides/notifications/webhooks.es.md) para integrar as notificações de pagamento ao seu sistema de gestão e impactar o resultado imediatamente, imprimindo a nota fiscal correspondente.


### Casos de teste

Crie dois usuários de teste. Com um você age como vendedor e configura as credenciais na preferência de pagamento. Com o outro você age como cliente, iniciando a sessão no aplicativo mobile do Mercado Pago e utiliza os [cartões de teste](/guides/payments/api/testing.es.md) para efetuar pagamentos.

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


Antes de partir para a produção, verifique os seguintes cenários.


| Caso| Cenário 				                                                                        | Resposta do App                                                        |
| ----| --------------------------------------------------------------------------     	   		  | ---------------------------------------------------------------        |
| 1  	| O usuário escaneia um QR code válido antes de concluir o pedido.                        |Primeiro, insira o QR code. Você poderá efetuar o pagamento assim que concluir o pedido.|
| 2  	| O usuário escaneia um QR code válido durante um pedido.                                 |Inserindo QR code. Você poderá efetuar o pagamento assim que concluir o pedido.|
| 3   | O usuário escaneia um QR code com parâmetros inválidos. (Faz referência a um ponto de venda inexistente)|Algo deu errado. Por favor, tente novamente.            |
| 4  	| O usuário escaneia um QR code válido após ter concluído o pedido.                       |Segue o fluxo normal de pagamento.                                      |
| 5  	| O usuário escaneia várias vezes um QR code válido com pedido concluído.                 |Segue o fluxo normal de pagamento.                                      |
| 6   | O usuário escaneia um QR code válido com pedido concluído e efetua o pagamento.         |Segue o fluxo normal de pagamento.                                      |
| 7  	| O usuário escaneia um QR code válido com pedido concluído e efetua o pagamento. Escaneia o QR code novamente após ter concluído o pagamento (impactando a notificação webhook)|Segue o fluxo normal de pagamento. Ao repetir o escaneamento, obtém a mensagem: Primeiro você deve fazer um pedido. Você poderá efetuar o pagamento ao concluir o pedido.|
| 8  	| O usuário escaneia um QR code válido com pedido concluído e cancela o fluxo. O usuário efetua o pagamento com outro meio de pagamento e escaneia o QR code novamente.|Primeiro, insira o QR code. Você poderá efetuar o pagamento ao concluir o pedido.|
| 9 	| O usuário escaneia um QR code válido com pedido concluído e efetua o pagamento com cartão teste para call4auth. (Cardholder name = CALL) Em seguida, outro meio de pagamento é inserido e o fluxo é concluído.|Mensagem de pagamento recusado solicitando que o usuário ligue para a operadora do cartão. Em seguida, continua o fluxo normal de pagamento.|
| 10	| Se permitido, insira dois pedidos com pagamentos pendentes.|Segue o fluxo normal de pagamento (correspondente ao usuário que efetuou o escaneamento)|


> Em caso de dúvidas sobre sua integração, envie um e-mail para instore@mercadopago.com
