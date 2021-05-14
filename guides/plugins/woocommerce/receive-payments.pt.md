# Teste e receba pagamentos

## Como testar o módulo

> WARNING
>
> Importante
>
> Os status de pagamento no woocommerce não são atualizados no modo de teste, uma vez que você está no modo produtivo, você poderá vê-los refletidos.

O módulo do Mercado Pago vem com um Sandbox teste ativo por padrão. Simule pagamentos na loja neste ambiente de teste e veja se tudo está funcionando bem antes de começar a receber pagamentos reais dos seus clientes. 

Aqui é onde entram em jogo as credenciais de teste que estarão copiadas no módulo no momento de [integrar Mercado Pago à sua loja](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/integration). Você precisará delas para poder testar o módulo.

Quando fizer os testes, confira se o fluxo de pagamentos está funcionando corretamente e se as preferências de pagamentos são as que você configurou. Tudo está certo? Desative os Testes e vá para o modo Produção para receber pagamentos reais.

> NOTE
>
> Nota
> 
> Todos os nossos módulos contam com uma licença de código aberto. Quer participar da criação? [Sugira melhorias e edições](https://github.com/mercadopago/cart-woocommerce) no Github.

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

## Ir à produção

Para começar a receber pagamentos, você deve [ativar suas credenciais](https://www.mercadopago.com/mlb/account/credentials/).

> Consulte os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/goto-production) se tiver alguma dúvida com o processo.

Verifique se as credenciais de Produção do módulo são as mesmas da conta que você recebe o dinheiro das vendas. 

Ative o modo Produção apenas quando você estiver pronto para vender e já tenha testado o módulo com pagamentos simulados no Sandbox. 

![Fluxo homologação](/images/woocomerce/br_woo_homologacion.gif)

### Pronto! O módulo do Mercado Pago está pronto para receber pagamentos online.