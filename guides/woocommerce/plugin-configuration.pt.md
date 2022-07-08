#Configura o plugin

Uma vez instalado o plugin Mercado Pago com WooCommerce, é necessário configurá-lo. Para isso, siga estes passos:

1. Acesse sua conta [Wordpress](https://wordpress.com/).
2. Acesse o Painel da sua conta e clique em **Plugins > Plugins instalados**.
3. No buscador de plugins, procure por “Mercado Pago payments for WooCommerce”.
4. Clique em **Configurar plug-in**.

A seguir, explicaremos como configurar cada item do plugin. Clique nos títulos para exibir as opções para concluir.

## Integre a loja ao Mercado Pago

As credenciais de teste e produção são solicitadas neste campo.
1. Clique no botão **Verificar credenciais** para entrar no painel do Mercado Pago e ver suas credenciais.
2. Preencha os campos solicitados e clique em **Salvar e continuar**.

## Personalize seu negócio

Na seção **Informações sobre sua loja** você pode oferecer dados da loja para oferecer uma experiência mais completa e com mais informações aos clientes

* **Nome da Loja:** Digite o nome da sua loja.
* **Categoria da loja**: Insira a categoria dos produtos da sua loja.
* **ID da loja**: use um número ou prefixo para identificar pedidos e pagamentos de sua loja.
* **Integrator ID**: insira seu integrador_id como membro do **&lt;dev&gt;program** do Mercado Pago. Se você ainda não é membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) para mais informações.

Clique em **Salvar e continuar**.

Em **Configurações avançadas**, configure as opções relacionadas a salvar informações em um arquivo para depurar problemas técnicos


## Ativar notificações de IPN

Notificações são mensagens enviadas pelo servidor do Mercado Pago de eventos que ocorrem em seu aplicativo. **IPN** (Instant Payment Notification) é um mecanismo que permite que seu aplicativo receba notificações do Mercado Pago, informando o status de um determinado pagamento, estorno e comerciante_order, por meio de uma chamada HTTP POST para informar suas transações.

Se você quiser saber mais sobre notificações de IPN, acesse [esta documentação](/developers/en/docs/WooCommerce/additional-content/notifications/ipn).

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
> Instalação
>
> Aprenda como instalar o plugin Mercado Pago com WooCommerce.
>
> [Instalação](/developers/pt/docs/woocommerce/installation)

> NEXT_STEP_CARD_PT
>
> Configurar os meios de pagamento
>
> Aprenda a configurar os diferentes métodos de pagamento na loja.
>
> [Configurar métodos de pagamento](/developers/pt/docs/woocommerce/payments-methods-configuration)