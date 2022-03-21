# Teste sua integração

Utilize cartões e usuários de teste para verificar que seus pagamentos sejam criados corretamente e que as mensagens que queira comunicar sejam efetivas.

## Como testar sua integração

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## Como criar usuários

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

## Teste o fluxo de pagamento

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configure a integração com os dados do seu usuário vendedor

Configure a [public key de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste comprador** no frontend da sua aplicação e o [access token de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste vendedor** no seu backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realize um pagamento com seu usuário comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testes com cartão de crédito

Inicie sua integração configurada com as credenciais do seu usuário de teste vendedor:

1. Preencha os dados de um [cartão de teste](#bookmark_cartões_de_teste).
1. Insira o e-mail do seu usuário de teste comprador.
1. Confirme a compra, e pronto!

## Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

> WARNING
>
> Importante
>
> Tenha em conta que não é possível testar o fluxo completo para pagamentos em boleto bancário, pagamento em lotérica sem boleto e Pix.

## Começar a receber pagamentos

Para começar a cobrar, você deve cumprir os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/goto-production) e [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).

Antes de ativá-las, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.<br/>

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Mensagens de resposta
>
> Ajude seus clientes a completar seus pagamentos sem erros.
>
> [Mensagens de resposta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
