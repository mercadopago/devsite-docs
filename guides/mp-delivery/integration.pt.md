# Configuração da integração

Para configurar a integração com o Mercado Pago Delivery, siga os passos abaixo.

1. Crie a aplicação através do Dashboard. Veja [Suas aplicações](/developers/pt/guides/additional-content/dashboard/applications) para instruções.
2. Realize o processo de autorização via [OAuth](/developers/pt/guides/additional-content/security/oauth/introduction) com os restaurantes para gerar o `access-token` necessário para realizar operações e não deixar de receber as notificações sobre os novos pedidos via Webhooks.
2. Configure as notificações selecionando a opção "Delivery". Veja [Webhooks](/developers/pt/guides/additional-content/your-integrations/notifications/webhooks) para instruções. 
3. Utilize as APIs disponíveis para consultar e gerenciar informações das lojas. [Gerenciamento de lojas](/developers/pt/docs/mp-delivery/store-management).
5. Utilize as APIs disponíveis para gerenciar os pedidos. Veja [Gerenciamento de pedidos](/developers/pt/docs/mp-delivery/order-management).

> Como boa prática, é sempre necessário verificar o status das requisições que foram feitas em nossas APIs para casos em que ocorra algum tipo de intermitência. Essa medida é necessária principalmente nos casos em que são feitas solicitações que alteram o status de um pedido ou loja. Como no exemplo de uma ação para aceitar um pedido, é recomendável fazer novas tentativas subsequentes e, caso o pedido ainda não tenha retornado um status positivo (200), este pedido deve ser cancelado. <br/></br>
> <br/></br>
> O importante é sempre manter sincronizados os status, seja de um pedido ou de uma loja, entre o Mercado Pago e o PDV, por isso é sempre importante implementar soluções em caso de erros.