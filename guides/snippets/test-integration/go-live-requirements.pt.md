# Requisitos para entrar em produção

Quando sua integração estiver pronta e você quiser começar a receber pagamentos, você deve [ativar as credenciais]([FAKER][CREDENTIALS][URL]) de produção e substituir as credenciais de teste, se necessário.

Alén disso, você terá que avaliar a [qualidade de sua integração](/developers/pt/docs/checkout-api/additional-content/integration-quality) para verificar se está cumprindo os padrões de qualidade e segurança do Mercado Pago.

## Não se esqueça de ter um certificado SSL

Para que você esteja seguro e possa proteger os dados, **é necessário ter um certificado SSL e que a forma de pagamento seja disponibilizada em uma página HTTPS**. Isso permite proteger as transações realizadas pelos compradores e seus dados.
Durante os testes, você pode não ter um, mas é obrigatório para entrar em produção.

### Por que este processo é necessário?

Com este processo, você pode garantir a segurança dos dados de seus clientes, cumprir os regulamentos ou disposições legais de cada país e conseguir a melhor experiência de compra para seus clientes.

[Confira os termos e condições do Mercado Pago](/developers/pt/guides/resources/legal/terms-and-conditions).

----[mlb]----
## Receber pagamentos com Pix

A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

------------

## Considerações adicionais

Aqui estão alguns pontos a observar para aumentar a qualidade das suas integrações:

+ Melhore a [aprovação de pagamentos](/developers/pt/guides/additional-content/how-tos/improve-approval) enviando informações do item e do pagador, dados de envio e informações da indústria.
+ Mantenha o status dos pedidos atualizados em seus sistemas, usando e processando as notificações [IPN](/developers/pt/guides/additional-content/notifications/ipn/introduction) ou [Webhooks](/developers/pt/guides/additional-content/notifications/webhooks/webhooks).
+ Use relatórios de reconciliação via API para melhorar a gestão financeira do negócio.