# Webhooks

Webhooks (também conhecido como retorno de chamada web) são um método simples que permite a uma aplicação ou sistema fornecer informações em tempo real sempre que um evento ocorre. É uma forma passiva de receber dados entre dois sistemas por meio de uma solicitação `HTTP POST`.

As notificações Webhooks podem ser configuradas para cada uma das aplicações criadas em  [Suas integrações](/developers/panel/app). Você também poderá configurar uma URL de teste que, junto com suas credenciais de teste, permitirá testar o funcionamento correto das suas notificações antes de sair à produção.

Uma vez configuradas, as notificações Webhooks serão enviadas sempre que ocorrer um ou mais eventos cadastrados. Isso evita a necessidade de verificações constantes, prevenindo a sobrecarga do sistema e a perda de dados em situações críticas. 

Para configurar as notificações Webhooks, escolha entre uma das opções abaixo:

| Tipo de configuração | Descrição |
|---|---|
| [Configuração via Suas integrações](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoviasuasintegraes) | Permite configurar notificações para cada aplicação, identificar contas diferentes se necessário, e validar a origem da notificação utilizando uma assinatura secreta----[mla, mlb, mlu, mlc]---- (exceto para notificações de integrações com Código QR)------------. |
| [Configuração durante a criação de pagamentos](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoduranteacriaodepagamentos) | Permite a configuração específica das notificações para cada pagamento, preferência ou pedidos comerciais. ----[mla]----Não é permitido configurar para integrações com Mercado Pago Point e nem para integrações com Mercado Pago Delivery----------------[mlb, mlm]----Não é permitido configurar para integrações com Mercado Pago Point------------.|

> WARNING
>
> Importante
>
> As URLs configuradas durante a criação do pagamento terão prioridade sobre aquelas configuradas através de Suas integrações. 

Uma vez que as notificações estiverem configuradas, consulte as [ações necessárias após receber uma notificação](/developers/pt/docs/your-integrations/notifications/webhooks#aesnecessriasapsreceberumanotificao) para validar se foram devidamente recebidas.

## Configuração via Suas integrações 

Configure notificações para cada aplicação diretamente em [Suas integrações](/developers/panel/app) de forma eficiente e segura. Nesta documentação, explicaremos como:

1. Indicar URLs e configurar eventos
2. Validar origem da notificação
3. Simular o recebimento da notificação

> WARNING
>
> Importante
>
> Este método de configuração não está disponível para integrações com----[mla, mlb, mlc, mlu]---- Código QR e nem------------ Assinaturas. Para configurar notificações com alguma dessas duas integrações, utilize o método [Configuração durante a criação de pagamentos](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoduranteacriaodepagamentos).

### 1. Indicar URLs e configurar eventos

Para configurar as notificações Webhooks via Suas integrações, é necessário indicar as URLs onde elas serão recebidas e especificar os eventos para os quais deseja receber notificações. 

Para isso, siga as etapas descritas abaixo.

1. Acesse [Suas integrações](/developers/panel/app) e selecione a aplicação para a qual deseja ativar as notificações. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard) e siga as instruções.
2. No menu à esquerda, vá até **Webhooks > Configurar notificações** e configure as URLs que serão usadas para receber as notificações. Recomendamos utilizar uma URL diferente para o modo de teste e o modo produção:
    * **URL modo teste:** fornece uma URL que permite testar o correto funcionamento das notificações dessa aplicação durante a fase de teste ou desenvolvimento. O teste dessas notificações deverá ser realizado exclusivamente com as **credenciais de teste de usuários produtivos**.
    * **URL modo produção:** fornece uma URL para receber notificações com sua integração produtiva. Essas notificações deverão ser configuradas com **credenciais produtivas**.

![webhooks](/images/dashboard/webhooks-pt.png)

> NOTE
>
> Nota
> 
> Caso seja necessário identificar múltiplas contas, adicione o parâmetro `?cliente=(nomedovendedor)` ao final da URL indicada para identificar os vendedores.

3. Selecione os  **eventos** para os quais deseja receber notificações em formato `json` através de um `HTTP POST` para a URL especificada anteriormente. Um evento pode ser qualquer atualização no objeto relatado, incluindo alterações de status ou atributos. Consulte a tabela abaixo para ver os eventos configuráveis, considerando a solução do Mercado Pago integrada e suas necessidades de negócio.

| Eventos | Nome em Suas integrações | Tópico | Produtos associados |
|---|---|---|---|
| Criação e atualização de pagamentos | Pagamentos | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Assinaturas<br>Wallet Connect |
| Pagamento recorrente de uma assinatura (criação - atualização) | Planos e assinaturas | `subscription_authorized_payment` | Assinaturas |
| Vinculação de uma assinatura (criação - atualização) | Planos e assinaturas | `subscription_preapproval` | Assinaturas |
| Vinculação de um plano de assinatura (criação - atualização) | Planos e assinaturas | `subscription_preapproval_plan` | Assinaturas |
| Vinculação e desvinculação de contas que se conectaram através de OAuth | Vinculação de aplicações | `mp-connect` | Todos os produtos que tenham  OAuth implementado |
| Transações com Wallet Connect | Wallet Connect | `wallet_connect` | Wallet Connect |
| Alertas de fraude após o processamento de um pedido | Alertas de fraude | `stop_delivery_op_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro |
| Criação de estornos e reclamações | Reclamações | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Assinaturas<br>----[mla, mlm, mlb]----Mercado Pago Point------------<br>Código QR<br>Wallet Connect |
| Recuperação e atualização de informações de cartões no Mercado Pago | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Criação, fechamento ou expiração de ordens comerciais | Ordens comerciais | `topic_merchant_order_wh` | Checkout Pro<br>Código QR  |
| Abertura de _chargebacks_, mudanças de status e modificações referentes às liberações de dinheiro | Chargebacks | `topic_chargebacks_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
----[mla]---- | Criação, atualização ou cancelamento de pedidos. | Delivery (proximity marketplace) | `delivery` | Mercado Pago Delivery | ------------
----[mla, mlm, mlb]---- | Finalização, cancelamento ou erros ao processar intenções de pagamento de dispositivos Mercado Pago Point. | Integrações Point | `point_integration_wh` | Mercado Pago Point | ------------

> WARNING
>
> Importante
>
> Em caso de dúvidas sobre quais tópicos ativar ou quais eventos serão notificados, consulte a documentação [Informações adicionais sobre notificações](/developers/pt/docs/your-integrations/notifications/additional-info). 

5. Por fim, clique e **Salvar** para gerar uma **assinatura secreta** exclusiva para a sua aplicação, permitindo validar a autenticidade das notificações recebidas e garantir que tenham sido enviadas pelo Mercado Pago. A assinatura gerada não tem prazo de validade e sua renovação periódica não é obrigatória, embora seja altamente recomendável. Para renová-la, clique no botão de **redefinição** ao lado da assinatura.

----[mla, mlb, mlu, mlc]----

> WARNING
> 
> Importante
> 
> As notificações de Código QR não podem ser verificadas utilizando a assinatura secreta, por isso, prossiga diretamente com a etapa de simulação de recebimento de notificações. Para integrações com Código QR que necessitam verificar a origem das notificações, entre em contato com [Soporte do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/support/center).

------------

### 2. Validar origem da notificação

As notificações enviadas pelo Mercado Pago serão semelhantes ao exemplo abaixo para um alerta do tópico `payment`:

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

O Mercado Pago sempre incluirá a assinatura secreta nas notificações Webhooks recebidas na URL cadastrada. Isso permitirá validar a sua autenticidade, proporcionando maior segurança e prevenindo possíveis fraudes. 

Esta assinatura será enviada no _header_ `x-signature`, conforme o exemplo abaixo.

```x-signature
`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

Para configurar essa validação, é necessário extrair a chave contida no _header_ e compará-la com a chave fornecida para sua aplicação em Suas integrações. Para isso, siga as etapas abaixo. No final, disponibilizamos alguns SDKs com um exemplo de código completo para facilitar o processo:

1. Para extrair o _timestamp_ (`ts`) e a assinatura do _header_ `x-signature`, divida o conteúdo do _header_ pelo caractere `,`, o que resultará em uma lista de 2 elementos. O valor para o prefixo  `ts` é o _timestamp_ (em milissegundos) da notificação, e `v1` é a assinatura encriptada. Seguindo o exemplo apresentado acima, `ts=1704908010` e `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Utilizando o _template_ e as descrições abaixo, substitua os parâmetros pelos dados recebidos na sua notificação.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Parâmetros com sufixo `_url` são provenientes de _query params_. Exemplo: `[data.id_url]`. Deve ser substituído pelo valor correspondente ao ID do evento (`data.id`). Esse `query param` poderá ser encontrado na notificação recebida.
 * `[ts_header]` representa o valor `ts` extraído do _header_ `x-signature`.
 * `[x-request-id_header]` deve ser substituído pelo valor recebido no _header_ `x-request-id`.

> WARNING
>
> Importante
> 
> Se algum dos valores mostrados no modelo acima não estiver presente na sua notificação, você deve removê-lo.

3. Em [Suas integrações](/developers/panel/app), selecione a aplicação integrada e navegue até a seção de Webhooks para visualizar a assinatura secreta gerada.
4. Crie a contra chave para validação. Para isso, calcule um HMAC (Código de Autenticação de Mensagem Baseado em Hash) utilizando a função de `hash SHA256` em base hexadecimal. Utilize a **assinatura secreta** como chave e o template preenchido com os respectivos valores como mensagem.

[[[
```php
$cyphedSignature = hash_hmac('sha256', $data, $key);
```
```node
const crypto = require('crypto');
const cyphedSignature = crypto
    .createHmac('sha256', secret)
    .update(signatureTemplateParsed)
    .digest('hex'); 
```
```java
String cyphedSignature = new HmacUtils("HmacSHA256", secret).hmacHex(signedTemplate);
```
```python
import hashlib, hmac, binascii

cyphedSignature = binascii.hexlify(hmac_sha256(secret.encode(), signedTemplate.encode()))
```
]]]

5. Por fim, compare a chave gerada com a chave extraída do _header_, assegurando que correspondam exatamente. Além disso, é possível usar o _timestamp_ extraído do _header_ para compará-lo com um _timestamp_ gerado no momento do recebimento da notificação. Isso permite estabelecer uma margem de tolerância para atrasos no recebimento da mensagem.

Veja exemplos de códigos completos abaixo:

[[[
```php
<?php
// Obtain the x-signature value from the header
$xSignature = $_SERVER['HTTP_X_SIGNATURE'];
$xRequestId = $_SERVER['HTTP_X_REQUEST_ID'];

// Obtain Query params related to the request URL
$queryParams = $_GET;

// Extract the "data.id" from the query params
$dataID = isset($queryParams['data.id']) ? $queryParams['data.id'] : '';

// Separating the x-signature into parts
$parts = explode(',', $xSignature);

// Initializing variables to store ts and hash
$ts = null;
$hash = null;

// Iterate over the values to obtain ts and v1
foreach ($parts as $part) {
    // Split each part into key and value
    $keyValue = explode('=', $part, 2);
    if (count($keyValue) == 2) {
        $key = trim($keyValue[0]);
        $value = trim($keyValue[1]);
        if ($key === "ts") {
            $ts = $value;
        } elseif ($key === "v1") {
            $hash = $value;
        }
    }
}

// Obtain the secret key for the user/application from Mercadopago developers site
$secret = "your_secret_key_here";

// Generate the manifest string
$manifest = "id:$dataID;request-id:$xRequestId;ts:$ts;";

// Create an HMAC signature defining the hash type and the key as a byte array
$sha = hash_hmac('sha256', $manifest, $secret);
if ($sha === $hash) {
    // HMAC verification passed
    echo "HMAC verification passed";
} else {
    // HMAC verification failed
    echo "HMAC verification failed";
}
?>
```
```javascript
// Obtain the x-signature value from the header
const xSignature = headers['x-signature']; // Assuming headers is an object containing request headers
const xRequestId = headers['x-request-id']; // Assuming headers is an object containing request headers

// Obtain Query params related to the request URL
const urlParams = new URLSearchParams(window.location.search);
const dataID = urlParams.get('data.id');

// Separating the x-signature into parts
const parts = xSignature.split(',');

// Initializing variables to store ts and hash
let ts;
let hash;

// Iterate over the values to obtain ts and v1
parts.forEach(part => {
    // Split each part into key and value
    const [key, value] = part.split('=');
    if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();
        if (trimmedKey === 'ts') {
            ts = trimmedValue;
        } else if (trimmedKey === 'v1') {
            hash = trimmedValue;
        }
    }
});

// Obtain the secret key for the user/application from Mercadopago developers site
const secret = 'your_secret_key_here';

// Generate the manifest string
const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;

// Create an HMAC signature
const hmac = crypto.createHmac('sha256', secret);
hmac.update(manifest);

// Obtain the hash result as a hexadecimal string
const sha = hmac.digest('hex');

if (sha === hash) {
    // HMAC verification passed
    console.log("HMAC verification passed");
} else {
    // HMAC verification failed
    console.log("HMAC verification failed");
}
```
```python
import hashlib
import hmac
import urllib.parse

# Obtain the x-signature value from the header
xSignature = request.headers.get("x-signature")
xRequestId = request.headers.get("x-request-id")

# Obtain Query params related to the request URL
queryParams = urllib.parse.parse_qs(request.url.query)

# Extract the "data.id" from the query params
dataID = queryParams.get("data.id", [""])[0]

# Separating the x-signature into parts
parts = xSignature.split(",")

# Initializing variables to store ts and hash
ts = None
hash = None

# Iterate over the values to obtain ts and v1
for part in parts:
    # Split each part into key and value
    keyValue = part.split("=", 1)
    if len(keyValue) == 2:
        key = keyValue[0].strip()
        value = keyValue[1].strip()
        if key == "ts":
            ts = value
        elif key == "v1":
            hash = value

# Obtain the secret key for the user/application from Mercadopago developers site
secret = "your_secret_key_here"

# Generate the manifest string
manifest = f"id:{dataID};request-id:{xRequestId};ts:{ts};"

# Create an HMAC signature defining the hash type and the key as a byte array
hmac_obj = hmac.new(secret.encode(), msg=manifest.encode(), digestmod=hashlib.sha256)

# Obtain the hash result as a hexadecimal string
sha = hmac_obj.hexdigest()
if sha == hash:
    # HMAC verification passed
    print("HMAC verification passed")
else:
    # HMAC verification failed
    print("HMAC verification failed")
```
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Obtain the x-signature value from the header
		xSignature := r.Header.Get("x-signature")
		xRequestId := r.Header.Get("x-request-id")

		// Obtain Query params related to the request URL
		queryParams := r.URL.Query()

		// Extract the "data.id" from the query params
		dataID := queryParams.Get("data.id")

		// Separating the x-signature into parts
		parts := strings.Split(xSignature, ",")

		// Initializing variables to store ts and hash
		var ts, hash string

		// Iterate over the values to obtain ts and v1
		for _, part := range parts {
			// Split each part into key and value
			keyValue := strings.SplitN(part, "=", 2)
			if len(keyValue) == 2 {
				key := strings.TrimSpace(keyValue[0])
				value := strings.TrimSpace(keyValue[1])
				if key == "ts" {
					ts = value
				} else if key == "v1" {
					hash = value
				}
			}
		}

		// Get secret key/token for specific user/application from Mercadopago developers site
		secret := "your_secret_key_here"

		// Generate the manifest string
		manifest := fmt.Sprintf("id:%v;request-id:%v;ts:%v;", dataID, xRequestId, ts)

		// Create an HMAC signature defining the hash type and the key as a byte array
		hmac := hmac.New(sha256.New, []byte(secret))
		hmac.Write([]byte(manifest))

		// Obtain the hash result as a hexadecimal string
		sha := hex.EncodeToString(hmac.Sum(nil))

if sha == hash {
    // HMAC verification passed
    fmt.Println("HMAC verification passed")
} else {
    // HMAC verification failed
    fmt.Println("HMAC verification failed")
}

	})
}
```
]]]

### 3. Simular o recebimento da notificação

Para garantir que as notificações estejam configuradas corretamente, é necessário simular o recebimento delas. Para isso, siga os seguintes passos:

1. Após configurar as URLs e os eventos desejados, clique em **Salvar** para salvar a configuração.
2. Após isso, clique em **Simular** para testar se a URL indicada está recebendo as notificações corretamente.
3. Na tela de simulação, selecione a URL a ser testada, podendo ser uma URL de **teste** ou de **produção**.
4. Em seguida, selecione o **tipo de evento** desejado e insira a **identificação** que será enviada no corpo da notificação.
5. Por fim, clique em **Enviar teste** para verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.


## Configuração durante a criação de pagamentos

Durante o processo de criação de pagamentos, preferências ou ordens comerciais, é possível configurar a URL de notificação de maneira específica para cada pagamento, utilizando o campo `notification_url` e implementando o receptor de notificações necessário. 
----[mla]----
> WARNING
>
> Importante
> 
> Este método não permite configurar notificações para os tópicos `point_integration_wh` e `delivery` utilizando este método. Para ativá-los, utilize as [configurações via Suas integrações](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoviasuasintegraes).

------------
----[mlb, mlm]----

> WARNING
>
> Importante
> 
> Este método não permite configurar notificações para o tópico de `point_integration_wh` utilizando este método. Para ativá-lo, utilize as [configurações de Suas integrações](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoviasuasintegraes).

------------

A seguir, explicamos como realizar esta configuração utilizando nossos SDKs.

1. No campo `notification_url`, informe a URL que receberá as notificações, conforme o exemplo abaixo. Para receber notificações exclusivamente via Webhooks e não via IPN, adicione o parâmetro `source_news=webhooks` à `notification_url`. Por exemplo: `https://www.yourserver.com/notifications?source_news=webhooks`.


[[[
```php
<?php 
$client = new PaymentClient();

        $body = [
            'transaction_amount' => 100,
            'token' => 'token',
            'description' => 'description',
            'installments' => 1,
            'payment_method_id' => 'visa',
            'notification_url' => 'http://test.com',
            'payer' => array(
                'email' => 'test@test.com',
                'identification' => array(
                    'type' => 'CPF',
                    'number' => '19119119100'
                )
            )
        ];

$client->create(body);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
 transaction_amount: '100',
  token: 'token',
  description: 'description',
  installments: 1,
  payment_method_id: 'visa',
  notification_url: 'http://test.com',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  }
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");


Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"))
      .setNotificationUrl("http://requestbin.fullcontact.com/1ogudgk1");


Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
             .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------


Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);


payment.save();


System.out.println(payment.getStatus());


```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')


payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
 payer: {
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:docType],------------
     number: params[:docNumber]
   }
 }
}


payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]


puts payment


```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;


MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";


var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   NotificationUrl = "http://requestbin.fullcontact.com/1ogudgk1",


   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["docType"],------------
           Number = Request["docNumber"],
       },
   },
};


var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);


Console.WriteLine(payment.Status);


```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")


payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "notification_url" =  "http://requestbin.fullcontact.com/1ogudgk1",
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}


payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]


print(payment)
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: <transactionAmount>,
   Token: <token>,
   Description: <description>,
   Installments: <installments>,
   PaymentMethodID:   <paymentMethodId>,
   NotificationURL: "https:/mysite.com/notifications/new",
   Payer: &payment.PayerRequest{
      Email: <email>,
      Identification: &payment.IdentificationRequest{
         Type: <type>,
         Number: <number>,
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
fmt.Println(err)
}


fmt.Println(resource)
```
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
         "payer": {
           "email": "test@test.com"


         }
   }'


```
]]]

2. Implemente o receptor de notificações utilizando o seguinte código como exemplo:

```php
<?php
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 switch($_POST["type"]) {
     case "payment":
         $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
         break;
     case "plan":
         $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
         break;
     case "subscription":
         $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
         break;
     case "invoice":
         $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
         break;
     case "point_integration_wh":
         // $_POST contém as informações relacionadas à notificação.
         break;
 }
?>
```

Após realizar as configurações necessárias, a notificação Webhooks será entregue com  formato `JSON`. Veja o exemplo de notificação do tópico de `payments` e as descrições das informações enviadas na tabela abaixo.

> WARNING
>
> Importante
>
> Os pagamentos de teste, criados com credenciais de teste, não enviarão notificações. A única maneira de testar o recebimento de notificações é por meio da [Configuração via Suas integrações](/developers/pt/docs/your-integrations/notifications/webhooks#configuraoviasuasintegraes).

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

| Atributo | Descrição | Exemplo no JSON |
| --- | --- | --- |
| **id** | ID de notificação | `12345` |
| **live_mode** | Indica se a URL informada é válida| `true` |
| **type** | Tipo de notificação recebida de acordo com o tópico previamente selecionado (payments, mp-connect, subscription, claim, automatic-payments, etc.) | `payment` |
| **date_created** | Data de criação do recurso notificado | `2015-03-25T10:04:58.396-04:00` |
| **user_id**| Identificador do vendedor | `44444` |
| **api_version** | Valor que indica a versão da API que envia a notificação. | `v1` |
| **action** | Evento notificado, indicando se é uma atualização de recurso ou a criação de um novo | `payment.created` |
| **data.id**  | ID do pagamento, do `merchant_order` ou da reclamação | `999999999` |


----[mla]----
> WARNING
>
> Importante
>
> Para obter o formato de notificações para tópicos diferentes de `payment`, como `point_integration_wh`, `delivery`, `topic_claims_integration_wh` e `topic_card_id_wh`, consulte [Informações adicionais sobre notificações](/developers/pt/docs/your-integrations/notifications/additional-info).
------------
----[mlb, mlm]----
> WARNING
>
> Importante
>
> Para obter o formato de notificações para tópicos diferentes de `payment`, como `point_integration_wh`, `topic_claims_integration_wh` e `topic_card_id_wh`, consulte [Informações adicionais sobre notificações](/developers/pt/docs/your-integrations/notifications/additional-info).

------------
----[mlu, mlc, mco, mpe]----
> WARNING
>
> Importante
>
> Para obter o formato de notificações para tópicos diferentes de `payment`, como `topic_claims_integration_wh` e `topic_card_id_wh`, consulte [Informações adicionais sobre notificações](/developers/pt/docs/your-integrations/notifications/additional-info).

------------


## Ações necessárias após receber uma notificação

Ao receber uma notificação em sua plataforma, o Mercado Pago aguarda uma resposta para validar se você a recebeu corretamente. Para isso, é necessário retornar um status `HTTP STATUS 200 (OK)` ou `201 (CREATED)`. 

O **tempo de espera** para a confirmação da recepção das notificações será de **22 segundos**. Se essa confirmação não for enviada, o sistema entenderá que a notificação não foi recebida e realizará **novas tentativas de envio a cada 15 minutos**, até receber uma resposta. Após a terceira tentativa, o prazo será prorrogado, mas os envios continuarão acontecendo.

Após responder à notificação e confirmar seu recebimento, é possível obter as informações completas do recurso notificado fazendo uma requisição ao endpoint correspondente da API. Para identificar qual endpoint utilizar, confira a tabela abaixo:

----[mpe, mco, mlu, mlc]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obter pagamento](/developers/pt/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obter assinatura](/developers/pt/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obter plano de assinatura](/developers/pt/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obter dados de fatura](/developers/pt/reference/subscriptions/_authorized_payments_id/get)  |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obter detalhes da reclamação](/developers/pt/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get) |

------------
----[mlm, mlb]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obter pagamento](/developers/pt/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obter assinatura](/developers/pt/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obter plano de assinatura](/developers/pt/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obter dados de fatura](/developers/pt/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obter intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obter detalhes da reclamação](/developers/pt/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get) |

------------
----[mla]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Obter pagamento](/developers/pt/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Obter assinatura](/developers/pt/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Obter plano de assinatura](/developers/pt/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Obter dados de fatura](/developers/pt/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Obter intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| delivery | `https://api.mercadopago.com/proximity-integration/v1/orders/{shipment_id}` | [Obter pedido](/developers/pt/reference/mp_delivery/_proximity-integrationorders_shipment_id/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Obter detalhes da reclamação](/developers/pt/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Obter pedido](/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get) |

------------

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado.

## Painel de notificações

O painel de notificações permite ao usuário visualizar os eventos disparados sobre uma determinada integração, verificar o status e obter informações detalhadas desses eventos.

Este painel será exibido assim que você configurar suas notificações **Webhooks**, e você pode acessá-lo a qualquer momento clicando em Webhooks dentro de Suas integrações.

Entre as informações disponíveis estão a porcentagem de notificações entregues, bem como uma visão rápida das URLs e dos eventos configurados. 

Além disso, você encontrará uma lista completa das últimas notificações enviadas e seus detalhes, como **status da entrega** (sucesso ou falha), **ação** (ação associada ao evento disparado), **evento** (tipo de evento disparado) e **data e hora**. Se desejar, é possível filtrar esses resultados exibidos por **status da entrega** e por período (**data e hora**).

![paiel de notificações webhooks](/images/dashboard/notification-dashboard-pt.png)

### Detalhes do evento

Ao clicar em uma das notificações listadas, é possível acessar os detalhes do evento. Esta seção fornece mais informações e permite a recuperação de dados perdidos em caso de falha na entrega da notificação para manter o sistema sempre atualizado.

 * **Status:** Status do evento junto com o código de sucesso ou erro correspondente.
 * **Evento:** Tipo de evento disparado, conforme selecionado na configuração das notificações.
 * **Tipo:** Tópico ao qual o evento disparado pertence, conforme a seleção feita durante a configuração.
 * **Data e hora do disparo:** Data e hora em que o evento foi disparado.
 * **Descrição:** Descrição detalhada do evento conforme documentada.
 * **ID do disparo:** Identificador único da notificação enviada.
 * **Requisição:** JSON da requisição correspondente à notificação disparada.

![detalhes de notificações enviadas](/images/dashboard/notification-details-dashboard-pt.png)

Em caso de falha na entrega da notificação, é possível visualizar os motivos e corrigir as informações necessárias para evitar problemas futuros.