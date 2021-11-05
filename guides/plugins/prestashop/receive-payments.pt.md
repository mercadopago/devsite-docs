# Recebimento de pagamentos

Após realizar a integração e fazer os devidos testes, sua loja já está pronta para entrar em produção.

## Ativação do modo produção

Para começar a receber pagamentos é necessário ativar o modo Produção. Para isso, siga os procedimentos abaixo.

1. No Painel Administrativo da sua loja, acesse o menu **Módulos e serviços**, localize o plugin do Mercado Pago e clique em **configurar**. 
2. Na tela de gerenciamento do plugin, confirme se as [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) de produção indicadas na seção **Credenciais** são as mesmas da conta que você recebe o dinheiro das vendas. Essa informação poderá ser visualizada em seu [Dashboard](https://www.mercadopago.com.br/developers/panel).
3. Em seguida, clique em **sim** para ativar o modo Produção.

> NOTE
>
> Nota
>
> Confira os [requisitos para entrar em produção](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/go-live-requirements) se tiver alguma dúvida com o processo.

Pronto! O módulo do Mercado Pago está pronto para receber pagamentos online.

## Processamento de vendas

Com todas as etapas concluídas, seus clientes poderão realizar compras em sua loja. Ao realizar uma transação, é comum que algumas mensagens retornem com informações específicas sobre a compra, visto que toda venda gera um status de pagamento que mostra a situação da venda incluindo a confirmação, pendência ou recusa do pagamento e outras informações importantes sobre a transação. Para mais informações, acesse a seção [Atividades](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) da sua conta do Mercado Pago.

![Status de pagamento](/images/prestashop/status_pt.png)

## Motivos de recusas

Com relação à **aprovação dos pagamentos** na sua loja, existem três principais motivos que podem impactar diretamente nesses resultados. Abaixo, detalhamos os fatores que influenciam na recusa de um pagamento. 

| Motivo | Situação | Como evitar |
|---|---|---|
| Erros do comprador | Erros de preenchimento de dados de endereço, CPF ou cartão. | Checkout com informações claras no passo a passo da compra. |
| Recusas bancárias | Cartões com expiração da validade, falta de limite, saldo insuficiente ou desabilitado para compras online.| Oferecer alternativas para outros meios e/ou condições de pagamentos. | 
| Prevenção contra fraude | O sistema anti-fraude do Mercado Pago faz a proteção do seu negócio contra ataques maliciosos que podem gerar prejuízos. | Este tipo de recusa é benéfico para sua loja.  |

Para mais informações sobre os motivos citados acima, acesse os artigos de [Recusas de pagamento](https://conteudo.mercadopago.com.br/entenda-como-funcionam-as-recusas-de-aprovacao-de-pagamentos-no-mercado-pago) e [Como lidar com recusas de pagamento](https://conteudo.mercadopago.com.br/como-lidar-com-as-recusas-de-pagamento-do-cartao-de-credito-no-seu-e-commerce).

> LEFT_BUTTON_RECOMMENDED_PT
>
> FAQ
>
> Conheça as principais dúvidas sobre a integração entre a PrestaShop e o plugin do Mercado Pago.
>
> [FAQ](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/faq)