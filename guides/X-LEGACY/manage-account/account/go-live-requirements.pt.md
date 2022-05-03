# Requisitos para entrar em produção

Quando sua integração estiver pronta e você quiser começar a receber pagamentos, você deve [ativar as credenciais]([FAKER][CREDENTIALS][URL]) de produção e substituir as credenciais de teste, se necessário.

## Não se esqueça de ter um certificado SSL

Para que você esteja seguro e possa proteger os dados, **é necessário ter um certificado SSL e que a forma de pagamento seja disponibilizada em uma página HTTPS**. Isso permite proteger as transações realizadas pelos compradores e seus dados.
Durante os testes, você pode não ter um, mas é obrigatório para entrar em produção.

## Por que este processo é necessário?

Com este processo, você pode garantir a segurança dos dados de seus clientes, cumprir os regulamentos ou disposições legais de cada país e conseguir a melhor experiência de compra para seus clientes.

[Confira os termos e condições do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/legal/terms-and-conditions).

## Considerações adicionais

Aqui estão alguns pontos a observar para aumentar a qualidade das suas integrações:

+ Melhore a [aprovação de pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections) enviando informações do item e do pagador, dados de envio e informações da indústria.
+ Mantenha o status dos pedidos atualizados em seus sistemas, usando e processando as notificações [IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction) ou [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks).
+ Use relatórios de reconciliação via API para melhorar a gestão financeira do negócio.
