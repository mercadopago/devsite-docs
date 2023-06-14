# Teste sua integração

## Crie usuários de teste 

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

> Existem duas formas de fazer o pagamento: como **usuário convidado**, preenchendo apenas um endereço de e-mail de sua escolha, e como **usuário cadastrado**, acessando uma conta do Mercado Pago com usuário e senha. Nesse último cenário, cartões previamente salvos e saldo disponível na conta serão habilitados como meios de pagamento.

## Teste o fluxo de pagamento

### 1. Configure o checkout com os dados do seu usuário vendedor

Gere uma preferência com as [credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials) do usuário de teste que quiser usar como vendedor no fluxo de pagamento.

### 2. Faça um pagamento de teste com o seu usuário comprador

#### Comprando como usuário convidado

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Selecione `Cartão` como meio de pagamento.
2. Insira os dados de um [cartão de teste](/developers/pt/docs/checkout-pro/additional-content/your-integrations/test/cards).
3. Informe o e-mail desejado.

#### Comprando como usuário cadastrado

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Acesse uma conta Mercado Pago usando o seu usuário de teste comprador.
2. Selecione `Cartão` como meio de pagamento.
3. Selecione um dos cartões previamente salvos ou insira os dados de um [cartão de teste](/developers/pt/docs/checkout-pro/additional-content/your-integrations/test/cards).

>WARNING
>
>Importante
>
> * Use valores baixos para fazer os pagamentos de teste.
> * Use sempre cartões de teste, já que não é possível retirar o dinheiro.

### Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Receba os pagamentos

Para começar a cobrar, você deve [ativar as suas credenciais](/developers/pt/docs/checkout-pro/additional-content/credentials).

Antes ativá-las, certifique-se de que as credenciais usadas na sua integração são as da conta que deverá receber o dinheiro das vendas.

---

> PREV_STEP_CARD_PT
>
> Integrar Checkout Pro
>
> Siga o passo a passo para começar a receber pagamentos em seu site através do Checkout Pro
>
> [Integrar Checkout Pro](/developers/pt/docs/checkout-pro/integration-configuration/integrate-checkout-pro)

> NEXT_STEP_CARD_PT
>
> Configuração de preferências
>
> Configure os atributos de suas preferências e adapte o Checkout Pro ao seu modelo de negócios.
>
> [Configuração de preferências](/developers/pt/docs/checkout-pro/checkout-customization/preferences)



