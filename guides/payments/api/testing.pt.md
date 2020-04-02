# Teste sua integração

Utilize cartões e usuários de teste para verificar que seus pagamentos sejam criados corretamente e que as mensagens que queira comunicar sejam efetivas.

## Como testar sua integração

**Os usuários de teste te permitem testar sua integração** ao gerar fluxos de pagamento em uma cópia exata da sua integração.

Tipos de usuários | Descrição
------------ | -------------
Vendedor | É a conta de teste utilizada para **configurar a aplicação e credenciais para a cobrança.** |
Comprador | É a conta de teste utilizada para **testar o processo de compra**<br/>. |

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
"https://api.mercadopago.com/users/test_user?access_token=ENV_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resposta

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
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * É possível gerar até 10 contas de usuários de teste simultâneamente. Por isso sugerimos que guarde o _email_ e _password_ de cada um.
> * Os usuários de teste caducam após 60 días sem atividade no Mercado Pago.
> * Para criar pagamentos de teste te recomendamos usar valores baixos.
> * Os valores devem respeitar os ----[mla]---- [valores mínimos e máximos](https://www.mercadopago.com.ar/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlm]---- [valores mínimos e máximos](hhttps://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlu]---- [valores mínimos e máximos](hhttps://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mco]---- [valores mínimos e máximos](https://www.mercadopago.com.uy/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mpe]---- [valores mínimos e máximos](https://www.mercadopago.com.pe/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlc]---- [valores mínimos e máximos](https://www.mercadopago.cl/ayuda/monto-minimo-maximo-medios-de-pago_620) ------------ ----[mlb]---- [valores mínimos e máximos](https://www.mercadopago.com.br/ajuda/minimo-maximo-posso-pagar_324) ------------ para cada meio de pagamento.

## Teste o fluxo de pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configure a integração com os dados do seu usuário vendedor

Configure a [chave pública de teste](https://www.mercadopago.com/mlb/account/credentials) do seu usuário vendedor no frontend da sua aplicação e a [chave privada de teste](https://www.mercadopago.com/mlb/account/credentials) no seu backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realize um pagamento com seu usuário comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testes com cartão de crédito

Inicie sua integração configurada com as credenciais do seu usuário de teste vendedor:

1. Preencha os dados de um [cartão de teste](#bookmark_cartões_de_teste).
1. Insira o e-mail do seu usuário de teste comprador.
1. Confirme a compra, e pronto!

## Cartões de teste

Cartão | Número | CVV | Data de vencimento
------------ | ------------- | ------------- | -------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

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

Para começar a cobrar, você deve cumprir os [requisitos para ir a produção](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/) e completar o formulário <a href="[FAKER][CREDENTIALS][URL]" target="_blank"> Quero ir para produção</a>.

Ao terminar o formulário, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.<br/>

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Manipulação de respostas de erro
>
> Ajude seus clientes a completar seus pagamentos sem erros.
>
> [Manipulação de respostas de erro](https://www.mercadopago.com.br/developers/pt/guides/payments/api/handling-responses/)

> RIGHT_BUTTON
>
> Referências de API
>
> Encontre toda informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago.com.br/developers/pt/reference/)
