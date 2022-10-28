# Parcelamento sem cartão de crédito

A opção de parcelamento sem cartão do Mercado Pago se chama Mercado Crédito e é um método de financiamento próprio que permite pagar em até 12x.

Ao oferecer esta opção na sua loja, seus clientes poderão comprar um produto hoje e pagar depois em parcelas. Para o seu negócio, a aprovação da compra é imediata e está garantida, sendo creditado o valor total adiantado e os seus clientes nos pagam depois.

Nosso objetivo é que você aumente suas vendas e que alcance novos usuários.

Siga os passos abaixo para oferecer o parcelamento sem cartão em sua loja.

Configuração da integração

## Pré-requisitos

Para realizar a integração, é importante atender aos requisitos mostrados abaixo.

| Requisitos | Descrição |
|---|---|
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/checkout-api/additional-content/dashboard/introduction) para mais informações sobre como criar uma aplicação. |
| Conta de vendedor Mercado Pago ou Mercado Livre | Para integrar o Card Payment Brick é preciso uma conta de vendedor no Mercado Pago ou Mercado Livre. Caso não tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar. | 
| Instale o SDK do Mercado Pago | Instale os SDKs oficiais para simplificar sua integração com nossas [APIs](/developers/pt/reference/payments/_payments/post). Para mais informações, [clique aqui](/developers/pt/docs/sdks-library/landing). |

Se todos os pré-requisitos foram cumpridos, siga as próximas etapas para integração do parcelamento sem cartão.

## Configuração da integração

> SERVER_SIDE
>
> h3
>
> Criar preferência

Preferências são conjuntos de informações sobre um produto e/ou serviço que permitem definir o nome, meio de pagamento, além de outras configurações relacionadas ao fluxo de pagamento definido. 

A primeira etapa para configurar pagamentos com Mercado Crédito é a criação da preferência. Para isso, envie um POST com o parâmetro `purpose` e o valor `onboarding_credits` ao **endpoint** [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize o SDK abaixo.

```curl
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "onboarding_credits"
}'
```

> SERVER_SIDE
>
> h3
>
> Adicionar opção no checkout

Com a preferência criada, é preciso exibir o botão de pagamento que permitirá o comprador utilizar o Mercado Crédito como meio de pagamento. Para exibir o botão de pagamento, insira o código abaixo diretamente em seu projeto.

```html
<div class="cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('PUBLIC_KEY');

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Em até 12x sem cartão com Mercado Pago',
      type: 'credits',
    }
  });
</script>
```

Ao inserir este código, você deverá visualizar um botão similar ao exemplo ilustrado abaixo.

![parcelamento ser cartao](api/button-installments-w-card-pt.png)

### Exemplo do fluxo de pagamento

![exemplo fluxo](api/flow-installments-w-card-pt.png)

### Sugestões de uso e boas práticas

Para oferecer a melhor experiência para seus clientes usando Mercado Crédito, sugerimos:

* Utilizar maiúsculas nas iniciais da marca: Mercado Pago

![iniciais](api/suggestions1-installments-w-card-pt.png)

* Manter o logo do Mercado Pago

![logo](api/suggestions2-installments-w-card-pt.png)

* Manter a proposta de valor de parcelas sem cartão

![proposta](api/suggestions3-installments-w-card-pt.png)

* Manter o alinhamento e os espaços dos elementos do botão

![alinhamento](api/suggestions4-installments-w-card-pt.png)

Para explicar melhor a seus clientes como funciona Mercado Crédito, compartilhe com eles as etapas a seguir.

1. Crie uma conta ou entre no Mercado Pago. Se você utiliza o **Mercado Livre**, você já tem essa conta! 

2. Selecione **Mercado Crédito** e escolha em quantas vezes quer pagar 

3. Pronto! Pague as parcelas todo mês como preferir, no **app do Mercado Pago**.