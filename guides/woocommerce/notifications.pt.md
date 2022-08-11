# Ativar notificações de IPN

Notificações são mensagens enviadas pelo servidor do Mercado Pago de eventos que ocorrem em seu aplicativo. **IPN** (Instant Payment Notification) é um mecanismo que permite que seu aplicativo receba notificações do Mercado Pago, informando o status de um determinado pagamento, estorno e comerciante_order, por meio de uma chamada HTTP POST para informar suas transações.

Se você quiser saber mais sobre notificações de IPN, acesse [esta documentação](/developers/pt/docs/WooCommerce/additional-content/notifications/ipn).

Para receber notificações de IPN, siga as etapas abaixo:

1. Acesse [Suas notificações de IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Preencha os campos solicitados:
    - URL do site em produção: coloque a URL da loja.
    - Eventos: selecione os eventos sobre os quais deseja receber notificações.
3. Acesse sua conta do [Wordpress](https://wordpress.com/).
4. Acesse o Painel da sua conta e clique em **Plugins > Plugins instalados**.
5. Digite a opção **2. Personalize sua empresa > Opções avançadas de integração (opcional)**.
6. Preencha os campos **URL para IPN** com o URL do site de produção.
7. Preencha o campo **integrator_id** com seu número de membro do **&lt;dev&gt;program** do Mercado Pago. Se você ainda não é membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.
8. Clique em **Salvar e continuar**.

> PREV_STEP_CARD_PT
>
> Configurações da integração
>
> Aprenda a configurar o plugin do Mercado Pago com WooCommerce.
>
> [Configuração do plug-in](/developers/pt/docs/woocommerce/integration-configuration/plugin-configuration)

> NEXT_STEP_CARD_PT
>
> Teste a integração
>
> Teste sua integração para garantir que tudo está funcionando corretamente.
>
> [Teste de integração](/developers/pt/docs/woocommerce/integration-test)