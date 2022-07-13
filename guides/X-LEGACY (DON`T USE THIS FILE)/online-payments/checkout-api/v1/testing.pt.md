# Teste sua integração

Utilize cartões e usuários de teste para verificar que seus pagamentos sejam criados corretamente e que as mensagens que queira comunicar sejam efetivas.

## Como testar sua integração

**Os usuários de teste te permitem testar sua integração** ao gerar fluxos de pagamento em uma cópia exata da sua integração.

| Tipos de usuários | Descrição |
| --- | --- |
| Vendedor | É a conta de teste utilizada para **configurar a aplicação e credenciais para a cobrança**. |
| Comprador | É a conta de teste utilizada para **testar o processo de compra**. |

<br>

> SERVER_SIDE
>
> h2
> 
> Como criar usuários

Para começar, é necessário que tenha no mínimo dois usuários de teste: um comprador e um vendedor.

Execute o seguinte curl para criar um usuário de teste:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resposta

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
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * É possível gerar até 10 contas de usuários de teste simultâneamente. Por isso sugerimos que guarde o _email_ e _password_ de cada um.
> * Os usuários de teste caducam após 60 días sem atividade no Mercado Pago.
> * Para criar pagamentos de teste te recomendamos usar valores baixos.
> * Os valores devem respeitar os ----[mla]---- [valores mínimos e máximos](https://www.mercadopago.com.ar/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlm]---- [valores mínimos e máximos](hhttps://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlu]---- [valores mínimos e máximos](hhttps://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mco]---- [valores mínimos e máximos](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mpe]---- [valores mínimos e máximos](https://www.mercadopago.com.pe/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlc]---- [valores mínimos e máximos](https://www.mercadopago.cl/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlb]---- [valores mínimos e máximos](https://www.mercadopago.com.br/ajuda/minimo-maximo-posso-pagar_324) ------------ para cada meio de pagamento.

## Teste o fluxo de pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configure a integração com os dados do seu usuário vendedor

Configure a [chave pública de teste]([FAKER][CREDENTIALS][URL]) do seu usuário vendedor no frontend da sua aplicação e a [chave privada de teste]([FAKER][CREDENTIALS][URL]) no seu backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realize um pagamento com seu usuário comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testes com cartão de crédito

Inicie sua integração configurada com as credenciais do seu usuário de teste vendedor:

1. Preencha os dados de um [cartão de teste](#bookmark_cartões_de_teste).
1. Insira o e-mail do seu usuário de teste comprador.
1. Confirme a compra, e pronto!

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
| Mastercard |  5808 8877 7464 1586 | 123 | 11/25 |
| Visa | 4104 2962 6235 5432 | 123 | 11/25 |

------------
----[mpe]----

| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

Para **testar resultados diferentes de pagamento**, complete o dado que queira no nome do titular do cartão:

- APRO: Pagamento aprovado.
- CONT: Pagamento pendente.
- OTHE: Recusado por erro geral.
- CALL: Recusado com validação para autorizar.
- FUND: Recusado por quantia insuficiente.
- SECU: Recusado por código de segurança inválido.
- EXPI: Recusado por problema com a data de vencimento.
- FORM: Recusado por erro no formulário.

> WARNING
>
> Importante
>
> Tenha em conta que não é possível testar o fluxo completo para pagamentos em boleto ou em lotérica.

## Começar a receber pagamentos

Para começar a cobrar, você deve cumprir os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/v1/goto-production) e [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

Antes de ativá-las, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.<br/>

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Mensagens de resposta
>
> Ajude seus clientes a completar seus pagamentos sem erros.
>
> [Mensagens de resposta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/v1/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
