# Teste a integração

Para verificar se a loja está configurada corretamente, recomendamos que você teste sua loja antes de iniciá-la em produção.
Para ativar o modo de teste para sua loja, siga estas etapas:

1. Acesse sua conta [Wordpress](https://wordpress.com/).
2. Acesse o Painel da sua conta e clique em **Plugins > Plugins instalados**.
3. No buscador de plugins, procure por “Mercado Pago payments for WooCommerce”.
4. Clique em **Configurar plug-in**.
5. Clique em **4. Teste sua loja antes de vender** para exibir as opções.
6. Em **Escolha como deseja administrar sua loja**, selecione **Modo de teste**.
7. Clique em **Salvar alterações** para finalizar.

## Checkout Pro
1. Selecione a opção **Quero pagar com Mercado Pago sem custo adicional**.
1. Clique em **pedido com pagamento obrigatório** para ser redirecionado ao ambiente de pagamento do Mercado Pago.
1. Na tela de pagamento, escolha pagar com um novo cartão de crédito e use os [cartões de teste](https://mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/woocommerce/additional-content/cartõesdeteste) para efetuar o pagamento. É importante não fazer login na conta do Mercado Pago ou tentar pagar com cartões para uso pessoal.
1. Adicione as informações do cartão de teste indicado (número do cartão, CVV e data de validade).
1. Ao final da compra, você poderá visualizar, dentro do Mercado Pago, o comprovante de que a compra foi realizada e será redirecionado de volta à loja.

----[mlb]----
## Checkout transparente
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
## Checkout API
------------
1. Selecione a opção **Quero pagar com cartão de crédito**.
1. Opte por pagar com um novo cartão de crédito e use os [cartões de teste](/developers/pt/docs/woocommerce/additional-content/test-cards) para faça o pagamento. É importante não pagar com cartões para uso pessoal.
1. Adicione as informações do cartão de teste indicado (número do cartão, CVV e data de validade).
1. Clique em **pedido com pagamento obrigatório**.
1. Ao final da compra, você pode ver que a compra foi aprovada.

> PREV_STEP_CARD_PT
>
> Configurar notificações de pagamento
>
> Habilite notificações IPN em sua integração.
>
> [Configurar notificações](/developers/pt/docs/woocommerce/integration-configuration/notifications)

> NEXT_STEP_CARD_PT
>
> Saír à produção
>
> Ative a loja e vá para produção.
>
> [Saír à produção](/developers/pt/docs/woocommerce/goto-production)