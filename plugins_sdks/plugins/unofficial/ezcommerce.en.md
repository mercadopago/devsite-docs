# EZ Commerce

## What is EZ Commerce?

[EZ Commerce](https://www.ezcommerce.com.br/) is a complete ecosystem of solutions for your virtual store that allows you to process payments through Mercado Pago.
For more information on the possibilities that EZ Commerce offers, access the [feature page](https://www.ezcommerce.com.br/plataforma/recursos-de-ecommerce/).

## Set up EZ Commerce to operate with Mercado Pago

The steps to start trading with the Mercado Pago are as follows:

1. Set up ticket.
2. Set up Credit Card.

### Set up ticket

To trade with ticket, follow this steps:

1. Expand the "Configurações" menu.
2. Access "Formas de Pagamento".
3. Select the "Boleto bancário" tab.
4. Click the "Boleto Bancário" option that contains "mercadopago_transparente" in the "Adquirente / Gateway" column. 
5. Fill in the data for the "Específico" group. For Client ID and Client Secret, see the [Credencials section](#credenciais).
6. Click "salvar".

    ![EZ ticket](/images/ezcommerce-ticket-1.gif)

### Set up Credit Cards

Para operar com cartões de crédito siga estes passos:
To trade with credit cards, follow this steps:

1. Expand the "Configurações" menu.
2. Access "Formas de Pagamento".
3. Select the "Cartão de Crédito" tab.
4. Find the credit card brands that contains "mercadopago_transparente" in the "Adquirente / Gateway" column.
5. Fill in the data for the "Específico" group. For Client ID and Client Secret, see the [Credencials section](#credenciais).
6. Choose one of the options for the "Tipo de parcelamento" field: 
- Dinâmico: The plataform will use the interests configured in Mercado Pago account.
- Customizado: The interests must be configures in the plataform.
7. Click "salvar".

    ![EZ credit_card](/images/ezcommerce-credit-card-1.gif)

>These steps should be performed for all credit card brands you want to enable.

<a name="credenciais"></a>
## Credencials

To obtain the credentials you must follow these steps:

1. Sign in to the Mercado Pago account.
2. Acesse esse [painel](https://www.mercadopago.com/mla/account/credentials).
3. Select the "Checkout básico" tab to visualize Client ID and Client Secret.
4. Select the "Checkout transparente" tab to visualize Public Key and Access Token ("Modo Produção" to process real payments / "Modo Sandbox" to teste payments).
5. Before proceeding to Production, make sure that you complete the 'Eu quero ir para produção' form (If you have already completed this step, the link does not appear).
