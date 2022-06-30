# Teste sua integração

Antes de partir para a produção, é muito importante que realize testes de fluxo de pagamentos, verificando se as configurações feitas nas preferências realmente estão no checkout.

Você deve verificar se:

+ As informações do produto ou serviço a ser pago estão corretas.
+ Reconhece a conta do cliente para quem o e-mail é enviado.
+ Oferece os métodos de pagamento que deseja.
+ A experiência de pagamento é apropriada e se informa o resultado do pagamento.

## Como testar minha integração

**Os usuários de teste permitem que você faça testes no sua integração** ao gerar fluxos de pagamento em uma cópia fiel da sua integração.

| Tipos de usuarios | Descrição |
| --- | --- |
| Vendedor | É a conta de testes que você usa para **configurar a aplicação e credenciais para a cobrança**. |
| Comprador | É a conta de testes que você usa para **testar o processo de compra**.<br/> |

## Como criar usuários
Para fazer os testes **é necessário que você tenha pelo menos dois usuários:** um comprador e um vendedor.

Execute o seguinte curl para gerar um usuário de teste:

### Solicitação

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID],"description" : "a description""}'
```

### Resposta

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID]",
    "description": "a description",
    "email": "test_user_123456@testuser.com",
    "date_created": "2021-11-04T12:02:35Z",
    "date_last_updated": "2021-11-04T12:02:35Z"
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


### Para testar a integração siga estes passos:

1. Configure a [Public Key]([FAKER][CREDENTIALS][URL]) na sua aplicação.
2. Crie a preferência no seu servidor com o [Access Token]([FAKER][CREDENTIALS][URL]).
3. Preencha os dados do formulário, inserindo os dígitos de um cartão de teste. Na data de vencimento, é necessário inserir qualquer data posterior à data atual e o código de segurança de 3 ou 4 dígitos dependendo do cartão.
4. Para **testar diferentes resultados de pagamento**, preencha o dado que quiser no nome do titular do cartão:

- APRO: Pagamento aprovado.
- CONT: Pagamento pendente.
- OTHE: Recusado por erro geral.
- CALL: Recusado com validação para autorizar.
- FUND: Recusado por quantia insuficiente.
- SECU: Recusado por código de segurança inválido.
- EXPI: Recusado por problema com a data de vencimento.
- FORM: Recusado por erro no formulário.

## Cartões de teste

Utilize estes cartões de teste para testar os diferentes resultados do pagamento.

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


Você também pode [usar cartões de teste de métodos de pagamento locais de cada país](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/local-cards).
