---
sites_supported:
  - mla
  - mlb
---

# Teste sua integração

> INDEX
>
> Nesta página
>
>
>
> [Como testar sua integração](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_como_testar_minha_integração)
>
> [Como criar usuários](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_como_criar_usuários)
>
> [Teste o fluxo de pagamento](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_teste_o_fluxo_de_pagamento)
>
> [Cartões de teste](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_cartões_de_teste)
>
> [Começar a receber pagamentos](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_começar_a_receber_pagamentos)


## Como testar minha integração

**Os usuários de teste permitem que você faça testes no seu Web Checkout** ao gerar fluxos de pagamento em uma cópia fiel da sua integração.

Tipos de usuarios | Descrição
------------ | -------------
Vendedor | É a conta de testes que você usa para **configurar a aplicação e credenciais para a cobrança.**
Comprador | É a conta de testes que você usa para **testar o processo de compra.**<br/>Existem duas formas de fazer o pagamento:<br/><br/> **Como usuário visitante:** basta preencher o endereço de e-mail.<br/>**Como usuário cadastrado:** acessa a conta do Mercado Pago com o usuário e senha. Caso tenha saldo disponível na conta ou cartões salvos , estarão habilitados como meios de pagamento.



## Como criar usuários
Para fazer os testes **é necessário que você tenha pelo menos dois usuários:** um comprador e um vendedor.

Execute o seguinte curl para gerar um usuário de teste:

### Solicitação

```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```


### Resposta

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

>WARNING
>
>Importante
>
> * Você pode gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o _e-mail_ e _senha_ de cada um.
> * Os usuários de teste caducam após 60 dias sem atividade no Mercado Pago.
> * Para fazer pagamentos de teste, recomendamos usar valore baixos.
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * Use cartões de teste, já que não é possível retirar o dinheiro.


## Teste o fluxo de pagamento

### 1. Configure o checkout com os dados do seu usuário vendedor

Gere uma preferência com as <a href="https://www.mercadopago.com/mla/account/credentials" target="_blank"> credenciais</a> do usuário de teste que quiser usar como vendedor.

### 2. Faça um pagamento de teste com seu usuário comprador

#### Testes com cartão de crédito

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Selecione Cartão como meio de pagamento.
2. Insira os dados de um [cartão de teste.](https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration#bookmark_cartões_de_teste)
3. Informe o e-mail e pronto!<br/><br/>

#### Comprar como usuário cadastrado (com conta do Mercado Pago)

Testes com cartão de crédito

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Inicie sessão no Mercado Pago com a conta do seu usuário de teste comprador.
2. Selecione _Cartão_ como meio de pagamento.
3. Selecione um  cartão salvo ou preencha os dados um um novo e pronto!


## Cartões de teste

Cartão | Número | Código de segurança | Data de vencimento
------------ | ------------- | ------------- | -------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25


Para **testar diferentes resultados de pagamento**, preencha o dado que quiser no nome do titular do cartão:

- APRO: Pagamento aprovado.
- CONT: Pagamento pendente.
- OTHE: Recusado por erro geral.
- CALL: Recusado com validação para autorizar.
- FUND: Recusado por quantia insuficiente.
- SECU: Recusado por código de segurança inválido.
- EXPI: Recusado por problema com a data de vencimento.
- FORM: Recusado por erro no formulário.

## Começar a receber pagamentos

Para começar a cobrar, você deve preencher o formulário <a href="https://www.mercadopago.com/mla/account/credentials/" target="_blank"> Eu quero it para produção</a>.

Ao terminar o formulário, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.<br/>

### Próximos passos

<div>
<a href="https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integração avançada<span class="card-status-tag card-status-tag-recommended">RECOMENDADO</span></p>
 <p>Otimize sua integração e melhore o gerenciamento de suas vendas.</p>
</blockquote>
</a>   
<a href="https://beta.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/customizations/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Customizações</p>
 <p>Adapte o estilo da sua marca na experiência de compra.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
