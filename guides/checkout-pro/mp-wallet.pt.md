# Conta Mercado Pago

A opção de pagar com a Conta Mercado Pago, por padrão, é apresentada em todos os Checkouts do Mercado Pago em combinação com pagamentos de usuários guest (sem login). 

Esta opção permite que usuários cadastrados no Mercado Pago e/ou Mercado Livre façam login e utilizem-se dos métodos disponíveis para efetuar seus pagamentos, além de poder incluir novas opções de pagamento, como cartões de crédito. 

----[mco, mpe, mlu, mlc]----
É possível pagar com **cartão** e **saldo disponível** em um ambiente seguro e otimizado, aumentando as chances de conversão de vendas, além de permitir ao vendedor oferecer somente pagamentos com Conta Mercado Pago. Com isso, a opção de pagar sem se logar não existirá, porém, contribuirá para um aumento na conversão de pagamentos.

------------
----[mla, mlm]----
É possível pagar com **cartão**, **saldo disponível** e **parcelamento sem cartão** em um ambiente seguro e otimizado, aumentando as chances de conversão de vendas, além de permitir ao vendedor oferecer somente pagamentos com Conta Mercado Pago. Com isso, a opção de pagar sem se logar não existirá, porém, contribuirá para um aumento na conversão de pagamentos.

------------
----[mlb]----
É possível pagar com **cartão**, **saldo disponível**, **Pix** e **parcelamento sem cartão** em um ambiente seguro e otimizado, aumentando as chances de conversão de vendas, além de permitir ao vendedor oferecer somente pagamentos com Conta Mercado Pago. Com isso, a opção de pagar sem se logar não existirá, porém, contribuirá para um aumento na conversão de pagamentos.

------------

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.

Siga as etapas abaixo para configurar a Conta Mercado Pago como meio de pagamento.

> SERVER_SIDE
>
> h2
>
> Criar preferência

Se você é um usuário e deseja que todos os seus pagamentos sejam feitos via Wallet, é possível determinar isso através de um atributo na chamada de preferências. Para criar uma preferência, utilize um dos SDKs disponíveis abaixo.

> Além dos SDKs, também é possível criar uma preferência através da API de preferências. Para isso, envie um **POST** com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.

[[[
```php
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
===
<?php
   $client = new PreferenceClient();
   $preference = $client->create([
          "items"=> array(
            array(
              "title" => "My product",
              "description" => "Test product",
              "picture_url" => "http://i.mlcdn.com.br/portaldalu/fotosconteudo/48029_01.jpg",
              "category_id" => "electronics",
              "quantity" => 1,
              "currency_id" => "BRL",
              "unit_price" => 100
            )
          )
  ]);
  echo implode($preference);
?>
```
```node
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
===
const client = new MercadoPagoConfig({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const preference = new Preference(client);

preference.create({ body: {
items: [
 {
  id: '<ID>',
  title: '<title>',
  quantity: 1,
  unit_price: 100
 }
],
} }).then(console.log).catch(console.log);
```
```java
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
===
// Cria um objeto de preferência
PreferenceClient client = new PreferenceClient();

// Cria um item na preferência
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("75"))
       .build();

List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);

PreferenceRequest request =
   PreferenceRequest.builder().items(items).purpose("wallet_purchase").build();

client.create(request);
```
```ruby
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Cria um objeto de preferência
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1
    }
  ],
  purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
===
// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto,
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
    Purpose = "wallet_purchase",
};
// Cria a preferência
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": "Meu produto",
            "unit_price": 100,
            "quantity": 1
        }
    ],
    "purpose": "wallet_purchase"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

----[mlc, mco]----

> WARNING
>
> Importante
>
> O valor `unit_price` deve ser um número inteiro.

------------

> CLIENT_SIDE
>
> h2
>
> Adicionar checkout

Os passos para configurar a Conta Mercado Pago (*client-side*) são os mesmos apresentados [nessa seção](/developers/pt/docs/checkout-pro/integrate-checkout-pro). 