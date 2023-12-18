# Integrar o modelo desatendido do QR

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.
>
> Para saber mais informações sobre este modelo de cobrança, acesse a documentação [Pagamentos QR modelo desatendido.](/developers/pt/docs/qr-code/qr-unattended/qr-unattended-part-a)

Para integrar o modelo desatendido, é necessário: 
  
1.  Criar o serviço que será invocado ao receber uma intenção de pagamento e sua lógica associada quando: 

    1.1 As informações do pedido **ainda não foram disponibilizadas**.

    1.2 As informações do pedido **são disponibilizadas**.

2. Declarar o URL de seu domínio a Mercado Pago.

## 1. Criar o serviço que será invocado para receber uma intenção de pagamento 

É necessário **criar um serviço que será invocado por Mercado Pago cada vez que quiser realizar um pagamento** com um código QR.

Este serviço deve restituir as informações do pedido a cobrar. Por exemplo:

> https://www.miempresa.com/pay-mp?storeid=6232&posid=1 

O URL do serviço é declarado no campo URL do caixa (QR).

## Lógica do serviço 

Implemente a seguinte lógica no serviço para suportar os casos a seguir: 

### 1.1 As informações do pedido ainda não foram disponibilizadas

Pode acontecer que as informações do pedido ainda não foram disponibilizadas ao querer realizar o pagamento. Por exemplo, durante o abastecimento de combustível. 

Nesses casos, o serviço deve responder uma mensagem de erro para que o usuário possa ver uma tela de espera. O serviço deve retornar um código de estado `HTTP 202 (ACCEPTED)` e a resposta deve continuar o formato a seguir: 

```json
{
  "status": {
    "status_detail": "<STATUS_DETAIL_TYPE>",
    "message": "<MESSAGE>"
  }
}
```

### Atributos

| Tipo (type)       |  Descrição                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | Tem um pedido em processo, porém, ainda não foi possível determinar o valor a receber. |
| `notihing_to_pay`           | O pedido processado não tem valor restante a pagar |
| `Waiting_for_order`           | Pedido ainda não recebido |

O `message` é opcional, é uma explicação em texto plano que pode acompanhar o type declarado.

### 1.2. As informações da ordem foram disponibilizadas

Se já existir uma ordem para receber, o serviço deve restituir suas informações. 

A resposta esperada deste serviço deve conter o header `Content-Type: application/json`, `order-version: “2”` e `client-id: “<CLIENT_ID>”` junto com o estado `HTTP 200 (OK)`.(O cabeçalho client-id só é necessário se estiver usando [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/additional-content/security/oauth/introduction) , que serão os últimos dígitos do token de acesso da conta do administrador).

A resposta deve conter a mensagem seguinte sobre o pedido a ser recebido: 

```json
{
    "external_reference": "<EXTERNAL_REFERENCE>",
    "total_amount": <TOTAL_AMOUNT>,
    "items": [
        {
            "sku_number": "<SKU_NUMBER>",
            "category": "<ITEM_CATEGORY>",
            "title": "<ITEM_TITLE>",
            "description": "<ITEM_DESC>",
            "quantity": <ITEM_QUANTITY>,
            "unit_measure": "<ITEM_UNIT_MEASURE>",
            "unit_price": <ITEM_UNIT_PRICE>,
            "total_amount": <ITEM_TOTAL_AMOUNT>,
        }
    ],
    "title": "<PURCHASE_TITLE>",
    "description": "<PURCHASE_DESC>",
    "notification_url": "<NOTIFICATION_URL>",
    "sponsor": {
        "id": <SPONSOR_ID>
    },
    ----[mco]----

    "taxes": [
      {
        "type": "<TAX_TYPE>",
        "value": "<TAX_VALUE>",
        "percentage": "<TAX_PERCENTAGE>"
      }
    ],

    ------------
    "marketplace_fee": <MARKETPLACE_FEE_NUMBER>
}
```

Deve utilizar o campo `external_reference` para poder identificar o pedido em seu sistema dentro de Mercado Pago.

### Atributos

| Atributo            | Tipo (_type_)       |  Descripción               |
| ------------- | ------------- | ------------------------------------------------------------ |
| `external_reference` | _String (256)_ | Referência para poder associar a ordem em Mercado Pago com ordem de compra, comanda ou despacho em seu sistema. Geralmente, é utilizado o número de NF.  |
| `total_amount` | _Double_ | Soma do `total_amount` no array de itens. |
| `items.sku_number` | _String_ | Código do produto. |
| `items.category` | _String_ | Categoria do Produto. |
| `items.title` | _String_ | Título do produto. |
| `items.description` | _String_ | Descrição do produto.  |
| `items.quantity` | _Integer_ | Quantidade do produto envolvido.  |
| `items.unit_measure` | _String_ | Unidade de medida("unit"). |
| `items.unit_price` | _Double_ | Preço unitário do produto. |
| `items.total_amount` | _Double_ | Preço total do item. |
| `title` | _Long_ | Título da compra.  |
| `description` | _Long_ | Descrição da compra. |
| `notification_url` | _String_ | URL aonde as notificações serão enviadas.  |
| `sponsor.id` | _Long_ | Identificador da conta Mercado Pago do sistema integrador. |
| `marketplace_fee` | _Double_ | Valor da taxa a ser cobrada pelo marketplace derivada do processo de [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/qr-code/additional-content/security/oauth/introduction) |

## 2. Declarar o URL de seu domínio a Mercado Pago

Deve informar ao seu assessor técnico atribuído, o URL base de seu domínio ao qual Mercado Pago consultará por cada transação. 

> WARNING
> 
> ATENÇÃO
> 
> A integração não dará certo se você não cumprir este passo. 