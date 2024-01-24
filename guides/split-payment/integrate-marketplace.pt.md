# Integrar o checkout em Split de pagamentos (marketplace)

Caso escolha vender através de um _marketplace_, é possível integrar **dois tipos de checkout do Mercado Pago** para processar os pagamentos realizados.
 
* [Checkout Pro](/developers/pt/guides/checkout-pro/landing): Neste modelo de checkout, o comprador é direcionado para uma página do Mercado Pago para concluir o pagamento.
* ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/pt/guides/checkout-api/introduction)----------------[mlb]----[Checkout Transparente](/developers/pt/guides/checkout-api/introduction)------------: Este modelo de checkout permite ao comprador realizar o pagamento dentro do ambiente do _marketplace_.

Ambos os checkouts realizam automaticamente a divisão dos valores entre o vendedor e o _marketplace_ por meio do _split_ de pagamentos, sem a necessidade de qualquer ação por parte do vendedor.

> NOTE
>
> Importante
>
> A comissão do Mercado Pago é descontada do valor recebido pelo vendedor. Ou seja, primeiro, a comissão do Mercado Pago é descontada e, em seguida, a comissão do Marketplace é descontada sobre o valor restante.

Para realizar a integração você precisará seguir o fluxo de integração usual do checkout escolhido utilizando um _access token_ para cada vendedor, obtido através de OAuth. Abaixo, listamos as etapas necessárias para integrar um checkout ao _marketplace_.

1. Siga as etapas descritas na [documentação OAuth](/developers/pt/guides/additional-content/security/oauth/introduction) para obter cada `access_token`. Esta informação será necessária durante o processo de integração do checkout ao _marketplace_.
2. Escolha o tipo de checkout ([Checkout Pro](/developers/pt/guides/checkout-pro/landing) ou ----[mla, mlu, mpe, mco, mlc, mlm]----[Checkout API](/developers/pt/guides/checkout-api/introduction)------------ ----[mlb]----[Checkout Transparente](/developers/pt/guides/checkout-api/introduction)------------) e siga o fluxo de integração.
3. Na integração do checkout, utilize a `public_key` da sua conta de integrador no _frontend_ e insira o `access_token` do vendedor (obtido na etapa 1) no _backend_ ou no _header_ da requisição. 
4. Para determinar a porcentagem de comissão do marketplace:

  - Se o checkout for Pro, preencha o parâmetro `marketplace_fee` com o valor a ser cobrado para cada preferência de pagamento criada na API **/checkout/preferences**.

<br>

#### Exemplo

```json
    {
    "items": [
        {
            "id": "item-ID-1234",
            "title": "Meu produto",
            "currency_id": "BRL",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
    "marketplace_fee": 10
    }
```

  - Se o checkout for ----[mla, mlu, mpe, mco, mlc, mlm]----API------------ ----[mlb]----Transparente------------, preencha o parâmetro `application_fee` com o valor a ser cobrado para cada pagamento criado na API **/payments**.

<br>

#### Exemplo

```json
    {
    "description": "API TRANSPARENTE MARKETPLACE",
    "installments": 1,
    "token": "{{card_token}}",
    "payer": {
        "id": "{{payer_id}}"
    },
    "marketplace": "{{marketplace_id}}",
    "payment_method_id": "master",
    "application_fee": 2,
    "transaction_amount": 10
    }
```

Ao finalizar essas etapas, a integração do checkout com o _marketplace_ estará concluída e pronta para processar os pagamentos.