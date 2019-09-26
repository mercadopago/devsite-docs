---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global


---

# Pagamentos QR em postos de combustíveis

## Fluxo

![QR payment flow at gas stations](/images/mobile/qr-gas-flow.es.svg)

1. O usuário escaneia o código QR no aplicativo Mercado Pago ou Mercado Livre. O QR contém o `STORE_ID` com a informação da posição onde a venda foi feita.

2. O nosso servidor consulta o seu servidor para a última venda pendente para essa posição nessa filial.

3. Seu servidor procura a última ordem de pagamento pendente e, se existir, retorna o corpo do pedido com QR.

4. Seu servidor retorna o pedido para o nosso servidor e, portanto, o pedido é criado no celular do usuário.

5. O usuário segue o fluxo de compra e confirma o pagamento.

6. Imediatamente após o processamento do pagamento é enviada uma notificação para o servidor [IPN] (https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/) relatando que há algo novo.

7. Com o ID de pagamento, você pode [pesquisar] (https://www.mercadopago.com.br/developers/pt/reference/payments/_payments_search/get/) o pagamento e continuar os seus processos internos.

   > Se o status for 'approved', o pagamento deve ser creditado. Por outro lado, se for `rejected`, o aplicativo tentará novamente o pagamento solicitando outro meio de pagamento.

8. Pronto! Informe ao cliente que o pagamento foi processado corretamente.

## Conceitos

Primeiro você deve se familiarizar com os seguintes conceitos, já que você os usará durante a integração.

| Atributo                    | Descrição                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `ACCESS_TOKEN`              | É o [token de acesso] (https://www.mercadopago.com/mlb/account/credentials) da conta do Mercado Pago para a qual as coleções serão creditadas. |
| `COLLECTOR_ID`              | É o número de usuário da conta Mercado Pago, são os últimos 9 dígitos do seu `access_token`, após o hífen. |
| `EXTERNAL_ID`               | É o identificador único do fornecedor. É um código alfanumérico definido pelo integrador, não pode conter espaços ou caracteres especiais e não faz distinção entre maiúsculas e minúsculas. |
| `SPONSOR_ID`                | `COLLECTOR_ID` da conta do Mercado Pago do integrador. Você deve criar uma conta por marca (YPF, Shell, Axion, etc).|
| `APIES`, `STORE`,`STORE_ID` | Identificador único da estação de serviço.              |

## Objetos

Além dos conceitos anteriores, você também deve conhecer os objetos com os quais trabalharemos.

### Objeto POS

```json
{
    "name":"Fornecedor 1", 
    "external_id": "pos_1",
    "category": 473000,
    "store_id": "123456",
    "url": "api.integration.com?apies=1&pos=1"   
}
```

**Definições**

- `name`: Nome descritivo. É uma String de até 45 caracteres.
- `external_id`: É o identificador único do ponto de venda. É um código alfanumérico definido por você, não pode conter espaços ou caracteres especiais e letras maiúsculas não diferenciam maiúsculas de minúsculas. É uma String de até 40 caracteres.
- `category` : Código da MCC que indica o item do ponto de venda. Os valores possíveis são:
  - Gastronomia: 621102
  - Companhia de petróleo ou posto de gasolina: 473000
  - Geral: `null`
- `store_id`: É um número identificador da filial ao qual o ponto de venda pertence. O id da loja.
- `url`: URL do servidor do sistema de gerenciamento, que retorna os dados de um fornecedor ou bomba de uma estação específica.

### Objeto Order

```json
{
   "collector_id": 178106235,
   "sponsor_id": 334249281,
   "items":[
      {
         "title":" $500.00 de Premium",
         "currency_id": "[FAKER][CURRENCY][ACRONYM]",
         "description":"$500.00 de Premium",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"45ea80da",
   "notification_url":"https://www.seusite.com/notifiaction",
   "loyalty":{
      "program":"payback",
      "transaction_id":"45ea80da",
      "invoice_number":"3592",
      "transaction_date":"2018-09-21T12:33:13.000+00:00",
      "transaction_amount":500.00,
      "store_id":"802",
      "products":[
         {
            "code":"1",
            "quantity":1.0,
            "unit":"litro",
            "unit_price":500.00
         }
      ],
      "cashier_identification":{
         "type":"CPF",
         "number":"00000000"
      },
      "period":"0000",
      "shift":"1",
      "affinity_plan":"7"
   }
}
```

**Definições**

* `collector_id`: Long. Identificador da conta do Mercado Pago para o qual os pagamentos serão creditados.
* `sponsor_id`: Long. Identificador de uma conta de Mercado Pago que integra a solução.
* `external_reference`: String. Referência para sincronizar com seu sistema.
* `notification_url`: String. URL à qual serão enviadas as notificações, definida pelo integrador.
* `items`: Array. Lista dos produtos, onde cada item é um `object` com os seguintes campos:
  * `title`: String. Nome do produto.
  * `quantity`: Inteiro. Quantidade deste produto.
  * `unit_price`: Decimal. Preço unitário do produto.
* `loyalty`: Objeto. Dados necessários para marcar pontos em um programa de fidelidade específico:
  * `program`: String. Programa de fidelização (serviclub, payback, etc.)
  * `transaction_id`: String. Número de transação.
  * `invoice_number`: String. Número do comprovante.
  * `transaction_date`: String. Data e hora da transação (ISO 8601).
  * `transaction_amount`: Decimal. Valor total da transação.
  * `store_id`: String. Identificador exclusivo da empresa (identificador da estação de serviço ou APIES).
  * `products`: Array. Lista de produtos comprados com os seguintes atributos
    * `code`: String. Código do produto.
    * `quantity`: Decimal o inteiro. Por exemplo 20.50 litros.
    * `unit_price`: Decimal. Preço unitário do produto.
    * `unit`: String. Unidade de medida, se aplicável (litro, etc.)
  * `cashier_identification`: Object. Dados do funcionário
    * `type`: String. Tipo de documento (CPF, CNPJ, etc.)
    * `number`: String. Id do documento.
  * `period`: String. Número do período.
  * `shift`: String. Número do turno. 
  * `affinity_plan`: String. Plano de afinidade.

### Objeto Payment

```json
{
    "id": 420101010101,
    "external_reference": "id de transação interno",
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

**Definições**

- `id`: Id único gerado por Mercado Pago (necessário para realizar devoluções).

- `external_reference`: Mesma String alfanumérica que você adicionou ao criar o pedido.

- `status`: Estado do pagamento.

  - `approved`: O pagamento foi aprovado e creditado.

  - `rejected`: O pagamento foi rejeitado. O usuário pode tentar novamente o pagamento.

  - `refunded`: O pagamento foi devolvido ao usuário.

  - `charged_back`: Um estorno foi feito no cartão de crédito do comprador.

- `status_detail`: Informações detalhadas sobre o status atual ou o motivo da rejeição.

Consulte a [documentação completa](https://www.mercadopago.com.br/developers/pt/reference/payments/resource/) sobre este objeto em nossa Referencia API.

## Configuração inicial

### Configurar URL

É necessário que você tenha uma URL do seu software de gerenciamento que retorne os dados do fornecedor ou bomba de uma determinada estação. Ele contém os parâmetros adicionais que são desejados na consulta (APIES da estação, fornecedor ou identificador de bomba, etc.). Por exemplo: `https: //www.mycompany.com/pay-mp?Apies=6232&pos=1`

Essa URL ou endpoint deve retornar as informações com as quais o corpo do pedido que adicionaremos ao QR será criado.

Recomendamos usar o campo `external_reference` para poder associar o pedido (e seu eventual pagamento) à compra. É um código alfanumérico de até 256 caracteres definido pelo integrador, não pode conter espaços ou caracteres especiais e não faz distinção entre maiúsculas e minúsculas.

Se o seu sistema tiver um programa de fidelidade, você deve adicionar o campo de fidelidade que fornece as informações necessárias para creditar os pontos ao comprador assim que o pagamento for aprovado.

A resposta esperada deste endpoint contém o cabeçalho `Content-Type: application/json` e espera-se que ele responda com um estado`HTTP 200 (OK)`; Além disso, você deve incluir no corpo um JSON correspondente ao objeto `order`.

Em caso de erro, será retornado um código de status `HTTP 400 (Bad Request)`, e no corpo da resposta um JSON com o seguinte formato:

```json
{
	"error": {
		"type": "XXX",
		"message": "YYYY"
	}
}
```

**Donde**

| Type        | Descrição                                                  |
| ----------- | ------------------------------------------------------------ |
| in_process  | Existe um pedido em andamento, o valor a ser cobrado ainda não pode ser determinado.|
| unavailable | Não há pedido em andamento ou pagamento pendente.               |
| invalid     | Parâmetros adicionais (id da estação, posição, etc.) referem-se a um local desconhecido. |
| timeout     | O servidor do seu sistema não pôde se comunicar com nenhum dos outros sistemas (fornecedor, POS, API do Mercado Pago) e foi anulado. |

A `message` é opcional, corresponde a uma explicação de texto simples da causa do problema.

### Notificar URL

Seja na fase de teste ou de produção, você deve informar a URL do [Mercado Pago](https://www.mercadopago.com.br/developers/pt/support) para configurá-lo e iniciar o teste.

## Cobranças

### Criar QR

Você deve criar um código QR para cada fornecedor ou bomba com uma `url` configurada dentro do POS.

**API de criação de QRs**

```bash
curl -X POST https://api.mercadopago.com/pos?access_token=ACCESS_TOKEN -d
'{
    "name":"Caixa principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_id": "4lph4num3r1c",
    "url": "api.integration.com?apies=1&pos=1"   
}'
```

### Receber o pagamento

Depois que o usuário fizer o pagamento, você poderá obter os dados usando qualquer uma das seguintes maneiras:

1. [IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/): Quando o pagamento é criado, enviamos uma notificação via webhook para a URL configurado no `notification_url` da ordem, você deve se inscrever para o tipo de notificações `merchant_order`.
2. Faça a [pesquisa de pagamento](https://www.mercadopago.com.br/developers/pt/reference/payments/_payments_search/get/) usando o `external_reference` como critério de pesquisa.

## Devoluções

Haverá momentos em que você precisará efetuar a [devolução](https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds/) parcial ou total de um pagamento.

**Devolução total**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN
```

**Devolução parcial**

```bash
curl -X POST https://api.mercadopago.com/v1/payments/PAYMENT_ID/refunds?access_token=ACCESS_TOKEN -d '{ "amount": 10.50 }'
```

## Testes

Para testar a integração, você deve criar dois usuários de teste: um comprador, outro fornecedor:

Você usará o usuário vendedor para criar o QR e completar o dado `collector_id`; Assim, com o usuário comprador, acesse o aplicativo Mercado Pago ou Mercado Livre e complete o fluxo.

Verifique os [dados de teste](https://www.mercadopago.com.br/developers/pt/guides/payments/web-checkout/testing): teste usuários e cartões de teste que podem ser usados.

> **NOTA**: Se nos testes você usar uma conta de teste, todas as contas devem ser de testes. Caso contrário, se você usar uma conta real, todas as contas relacionadas deverão ser reais. **Se o `sponsor_id` for adicionado na fase de teste, lembre-se de que você deve ser um usuário de teste.**

**Casos de teste**

| Caso                                                         | Resultado esperado                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| O usuário escaneia um código válido antes de finalizar o pedido. | O aplicativo informa que você deve notificar o funcionário e esperar que o carregamento termine. |
| O usuário escaneia um código válido durante um pedido.       | O aplicativo informa que uma cobrança está sendo feita e que pode ser paga assim que a entrega estiver concluída. |
| O usuário escaneia um código válido, mas a URL que possui o QR não responde. | O aplicativo informa que a estação de serviço não pode operar com os meios de pagamento. |
| O usuário escaneia um código válido, mas a URL tem parâmetros inválidos | O aplicativo informa que algo não correu bem.                       |
| O usuário escaneia um código válido, assim que o pedido é concluído. | O checkout é mostrado no celular do usuário pagador.    |
| O usuário escaneia um código válido com o pedido concluído e efetua o pagamento. | O PDV recebe as informações de pagamento.                       |

### Dicionário de erros

[Aqui](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses/) você pode encontrar nosso dicionário de erros.

### Relatórios

Consulte a [documentação completa](https://www.mercadopago.com.ar/ayuda/herramienta-conciliacion_2116) sobre os relatórios do Mercado Pago.
