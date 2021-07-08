# Teste sua integração



## Como testar minha integração

**Os usuários de teste permitem que você faça testes no seu Checkout Pro** ao gerar fluxos de pagamento em uma cópia fiel da sua integração.

| Tipos de usuarios | Descrição |
| --- | --- |
| Vendedor | É a conta de testes que você usa para **configurar a aplicação e credenciais para a cobrança**. |
| Comprador | É a conta de testes que você usa para **testar o processo de compra.**<br/>Existem duas formas de fazer o pagamento:<br/><br/> **Como usuário convidado:** basta preencher o endereço de e-mail.<br/>**Como usuário cadastrado:** acessa a conta do Mercado Pago com o usuário e senha. Caso tenha saldo disponível na conta ou cartões salvos, estarão habilitados como meios de pagamento. |



## Como criar usuários
Para fazer os testes **é necessário que você tenha pelo menos dois usuários:** um comprador e um vendedor.

Execute o seguinte curl para gerar um usuário de teste:

### Solicitação

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
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

Gere uma preferência com as [credenciais]([FAKER][CREDENTIALS][URL]) do usuário de teste que quiser usar como vendedor.

### 2. Faça um pagamento de teste com seu usuário comprador

#### Comprar como usuário convidado

Testes com cartão de crédito

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Selecione Cartão como meio de pagamento.
2. Insira os dados de um [cartão de teste.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/test-integration#bookmark_cartões_de_teste)
3. Informe o e-mail e pronto!<br/><br/>

#### Comprar como usuário cadastrado (com conta do Mercado Pago)

Testes com cartão de crédito

Ao abrir o checkout criado com os dados do seu usuário vendedor:

1. Inicie sessão no Mercado Pago com a conta do seu usuário de teste comprador.
2. Selecione _Cartão_ como meio de pagamento.
3. Selecione um  cartão salvo ou preencha os dados um novo e pronto!


## Cartões de teste

----[mla]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------


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

Para começar a cobrar, você deve [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

Para ativá-las, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.<br/>

---

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Otimize sua integração e melhore o gerenciamento de suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/advanced-integration)

> RIGHT_BUTTON
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/customizations)
