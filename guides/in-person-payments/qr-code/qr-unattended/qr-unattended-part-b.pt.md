---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Integrar o modelo autônomo do QR

> WARNING
>
> Contato comercial necessário
>
> Você só pode integrar este produto se o seu contato comercial compartilhar todas as informações necessárias para isso.

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

Nesses casos, o serviço deve responder uma mensagem de erro para que o usuário possa ver uma tela de espera. O serviço deve retornar um código de estado `HTTP 400 (Bad Request)` e a resposta deve continuar o formato a seguir: 

```json
{
"error": 
{  "type": "XXX",
  "message": "YYYY" }
}
```

### Atributos

| Tipo (type)       |  Descrição                                                 |
| ------------- | ------------------------------------------------------------ |
| `in_process`     | Tem um pedido em processo, porém, ainda não foi possível determinar o valor a receber. |
| `unavailable`           | Não tem pedido em processo ou pendente de pagamento.  |

O `message` é opcional, é uma explicação em texto plano que pode acompanhar o type declarado.

### 1.2. As informações da ordem foram disponibilizadas

Se já existir uma ordem para receber, o serviço deve restituir suas informações. 

A resposta esperada deste serviço deve conter o header `Content-Type: application/json` e o estado `HTTP 200 (OK)`.

A resposta deve conter a mensagem seguinte sobre o pedido a ser recebido: 

```json
{
   "collector_id": 446560529,
   "sponsor_id": 446566691,
   "items":[
      {
         "title":" $500.00 de SUPER",
         "currency_id": [FAKER][CURRENCY][ACRONYM],
         "description":"$500.00 de SUPER",
         "quantity": 1.0,
         "unit_price": 500.00
      }
   ],
   "external_reference":"45ea80da",
   "notification_url":"https://www.tusitio.com"
}
```

Deve utilizar o campo `external_reference` para poder identificar o pedido em seu sistema dentro de Mercado Pago.

### Atributos

| Atributo            | Tipo (_type_)       |  Descripción               |
| ------------- | ------------- | ------------------------------------------------------------ |
| `collector_id` | _Long_     | Identificador da conta Mercado Pago onde os pagamentos serão creditados.  |
| `sponsor_id` | _Long_           | Identificador da conta Mercado Pago do sistema integrador. |
| `items.title` | _String_           | Título do produto. |
| `items.currency_id` | _String (3)_           | Identificador de moeda no formato ISO-4217. |
| `items.description` | _String_     | Descrição do produto.  |
| `items.quantity` | _Integer_           | Quantidade do produto envolvido.  |
| `items.unit_price` | _Decimal_           | Preço unitário do produto. |
| `external_reference` | _String (256)_           | Referência para poder associar a ordem em Mercado Pago com ordem de compra, comanda ou despacho em seu sistema. Geralmente, é utilizado o número de NF.  |
| `notification_url` | String | URL aonde as notificações serão enviadas.  |

## 2. Declarar o URL de seu domínio a Mercado Pago

Deve informar ao seu assessor técnico atribuído, o URL base de seu domínio ao qual Mercado Pago consultará por cada transação. 

> WARNING
> 
> ATENÇÃO
> 
> A integração não dará certo se você não cumprir este passo. 

---

### Próximos passos


> LEFT_BUTTON_REQUIRED_PT
>
> Integração avançada
>
> Conheça as opções disponíveis para chegar à integração para o seguinte nível.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/advanced-integration)


> RIGHT_BUTTON_RECOMMENDED_PT
>
> Teste sua integração
>
> Realiza os casos de uso mais frequentes para validar sua integração.
>
> [Teste sua integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/integration-test)