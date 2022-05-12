> CLIENT_SIDE
>
> h1
>
> Crie usuários de teste

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

</br>

> CLIENT_SIDE
>
> h1
>
> Teste o fluxo de pagamento
 
## 1. Configure a integração com os dados do seu usuário vendedor
 
Configure a [public key de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste comprador** no frontend da sua aplicação e o [access token de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste vendedor** no seu backend.
 
## 2. Realize um pagamento com seu usuário comprador
 
### Testes com cartão de crédito
 
Inicie sua integração configurada com as credenciais do seu usuário de teste vendedor:
 
1. Preencha os dados de um [cartão de teste](/developers/pt/guides/additional-content/testing/test-cards).
1. Insira o e-mail do seu usuário de teste comprador.
2. Confirme a compra e pronto!

> PREV_STEP_CARD_PT
>
> Exemplo de código
>
> Para facilitar e otimizar o seu processo de integração, veja um exemplo completo integração com o Checkout Bricks.
>
> [Exemplo de código](/developers/pt/docs/checkout-bricks-beta/code-example)

> NEXT_STEP_CARD_PT
>
> Definir tema 
>
> Caso deseje, veja como selecionar outro tema ao instanciar/renderizar o Card Payment Brick.
>
> [Definir tema](/developers/pt/docs/checkout-bricks-beta/integration/code-example)