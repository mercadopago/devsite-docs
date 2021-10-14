# Teste sua integração

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## Crie usuários de teste 

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

## Teste o fluxo de pagamento

### 1. Configure o checkout com os dados do seu usuário vendedor

Gere uma preferência com as [credenciais]([FAKER][CREDENTIALS][URL]) do usuário de teste que quiser usar como vendedor no fluxo de pagamento.

### 2. Faça um pagamento de teste com o seu usuário comprador

#### Comprando como usuário convidado

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Selecione `Cartão` como meio de pagamento.
2. Insira os dados de um [cartão de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration#bookmark_cartões_de_teste).
3. Informe o e-mail desejado.

#### Comprando como usuário cadastrado

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Acesse uma conta Mercado Pago usando o seu usuário de teste comprador.
2. Selecione `Cartão` como meio de pagamento.
3. Selecione um dos cartões previamente salvos ou insira os dados de um [cartão de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration#bookmark_cartões_de_teste).

>WARNING
>
>Importante
>
> * Use valores baixos para fazer os pagamentos de teste.
> * Use sempre cartões de teste, já que não é possível retirar o dinheiro.

### Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Receba os pagamentos

Para começar a cobrar, você deve [ativar as suas credenciais]([FAKER][CREDENTIALS][URL]).

Antes ativá-las, certifique-se de que as credenciais usadas na sua integração são as da conta que deverá receber o dinheiro das vendas.

---

### Próximo passo

> LEFT_BUTTON_REQUIRED_PT
>
> Configuração de preferências
>
> Configure os atributos de suas preferências e adapte o Checkout Pro ao seu modelo de negócios. 
>
> [Configuração de preferências](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations)



