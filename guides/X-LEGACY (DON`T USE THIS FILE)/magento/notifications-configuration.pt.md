# Configuração de notificações de pagamento

Para definir o status do pedido para notificações de pagamento, siga estas etapas:

1. Acesse o menu Stores > Configuration > Sales > Payment Methods.

2. Para configurar os status de pagamento, acesse a opção **Mercado Pago - Global Configuration** e vá até a opção "Order Status Options". Para cada status de pagamento, você pode escolher um status de pedido. Assim, quando sua loja receber uma notificação de pagamento, o plugin atualizará automaticamente o pedido com o status configurado.

3. Para salvar as configurações, clique no botão **Save Config**.

> NOTE
>
> Nota
>
> O plugin está preparado para receber notificações de pagamento automaticamente, ou seja, sem a necessidade de configurar sua conta no Mercado Pago ou o plugin.
> <br/>
> [Clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/introduction) para mais informações sobre os tipos de notificações integradas pelo Mercado Pago.

Pronto! O status de notificação foi configurado com sucesso.

## E-mail de notificação

Tendo selecionado o **Checkout Transparente** para receber os pagamento de sua loja, é importante configurar o envio de e-mails que notificarão o usuário de suas transações. Veja abaixo como personalizar o envio do **e-mail transacional** no painel de gerenciamento da Magento 2.

1. Acesse o menu **Marketing > Communications > Emails Templates > Add New Template** e crie o novo template de e-mail.
2. Em **Stores > Settings > Configuration > Sales > Sales Emails**, adicione o template criado nas configurações dos eventos na plataforma (exemplo: "pagamento aprovado").
3. Feitas as devidas configurações, instale e configure um **servidor de SMTP** de sua preferência para viabilizar o envio dos e-mails. 
4. Envie um **e-mail de teste** para garantir que a plataforma está enviando os e-mails corretamente.

Pronto! O envio dos e-mails foi configurado com sucesso.