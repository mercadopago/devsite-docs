# Receber pagamentos

Após realizar a integração e fazer os devidos testes, sua loja já está apta para entrar em produção.

## Ativação do modo produção

Para começar a receber pagamentos é necessário ativar o modo Produçao. Para isso, siga os procedimentos abaixo:

1. Confirme se as credenciais de produção indicadas na seção **Credenciais** são as mesmas da conta que você recebe o dinheiro das vendas e preencha o formulario [Quero ir à produção](https://www.mercadopago.com/mlb/account/credentials/).
2. Por fim, **ative o modo Produção** apenas quando você estiver pronto para vender e já tenha testado o módulo com pagamentos simulados no Sandbox.

> NOTE
>
> Nota
>
> Confira os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/goto-production) se tiver alguma dúvida com o processo.

Pronto! O módulo do Mercado Pago está pronto para receber pagamentos online.

## Processamento de vendas

Com todas as etapas concluídas, seus clientes poderão realizar compras em sua loja. Ao realizar uma transação, é comum que algumas mensagens retornem com informações específicas sobre a compra, visto que toda venda gera um status de pagamento que mostra a situação da venda incluindo a confirmação, pendência ou recusa do pagamento e outras informações importantes sobre a transação. 

![Status de pagamento](/images/prestashop/status_pt.png)

> NOTE
>
> Nota
>
> Para mais informações, acesse a seção [Atividades](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) da sua conta do Mercado Pago.

## Motivos de recusas

Com relação à **aprovação dos pagamentos** na sua loja, existem três principais motivos que podem impactar diretamente nesses resultados. 

Abaixo, detalhamos os fatores que influenciam na recusa de um pagamento:

| Motivo | Situação | Como evitar |
|---|---|---|
| Erros do comprador | Erros de preenchimento de dados de endereço, CPF ou cartão. | Checkout com informações claras no passo a passo da compra. |
| Recusas bancárias | Cartões com expiração da validade, falta de limite, saldo insuficiente ou desabilitado para compras online.| Oferecer alternativas para outros meios e/ou condições de pagamentos. | 
| Prevenção contra fraude | O sistema anti-fraude do Mercado Pago faz a proteção do seu negócio contra ataques maliciosos que podem gerar prejuízos. | Este tipo de recusa é benéfico para sua loja.  |

> NOTE
>
> Nota
>
> Para mais informações sobre os motivos citados acima, acesse os artigos:
>
> * [Recusas de pagamento](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) 
> * [Como lidar com recusas de pagamento](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce)

> LEFT_BUTTON_RECOMMENDED_PT
>
> FAQ
>
> Conheça as principais dúvidas sobre a integração entre o PrestaShop e o plugin do Mercado Pago.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/faq)