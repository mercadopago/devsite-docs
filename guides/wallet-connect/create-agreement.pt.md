# Iniciar vinculação

A primeira etapa para integrar o Wallet Connect é a criação de uma vinculação, um link de autorização que o comprador acessa para conceder ao vendedor o acesso à sua carteira do Mercado Pago no momento em que um pagamento for realizado. 

A vinculação armazena os meios de pagamento selecionados pelo pagador e permite a alteração dessas configurações sem a intervenção do vendedor, tornando esta etapa transparente durante o fluxo de pagamento. 

> NOTE
>
> Nota
>
> Caso queira, antes de iniciar a vinculação você poderá solicitar a **equipe de Integrações do Mercado Pago** a utilização do **_Sniffing_**, uma funcionalidade que permite identificar se um usuário tem o aplicativo do Mercado Pago instalado em seu dispositivo móvel e abrir esse app automaticamente. Para mais informações, acesse a documentação de [Estratégia de Sniffing](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement/sniffing-strategy).

Qualquer mudança nos métodos de pagamento é comunicada através de uma notificação Webhooks, que traz detalhes da atualização. 
Para mais informações, consulte a seção [Atualização do meio de pagamento de uma vinculação](/developers/pt/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

> NOTE
>
> Importante
>
> Um usuário pode ter apenas uma vinculação ativa por integração. Para criar uma nova vinculação, é preciso cancelar o anterior. Para isso, envie um **DELETE** ao endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/pt/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) e execute a requisição. Após o cancelamento, uma notificação webhook será enviada contendo todos os detalhes da operação. Para entender o processo com mais detalhes, acesse a seção [Cancelamento de vinculação entre integrador e Mercado Pago](/developers/pt/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

Confira o diagrama abaixo que ilustra como funciona o fluxo de criação da vinculação.

![Criar vinculação](/images/wallet-connect/new-create-agreement.pt.png)

Para criar uma vinculação, envie um **POST** com os atributos necessários ao endpoint [/v2/wallet_connect/agreements](/developers/pt/reference/wallet_connect/_wallet_connect_agreements/post) e execute a requisição ou, se preferir, utilize o `curl` abaixo e atente-se à resposta da requisição que retornará **dois parâmetros** necessários para obter a aprovação do pagador: `agreement_id` e `agreement_uri`.

```curl
curl -X POST \
    'https://api.mercadopago.com/v2/wallet_connect/agreements' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \
      -H 'x-platform-id: YOUR_PLATFORM_ID' \
      -d '{
  "return_uri": "https://www.mercadopago.com/",
  "external_flow_id": "EXTERNAL_FLOW_ID",
  "external_user": {
    "id": "usertest",
    "description": "Test account"
  },
  "agreement_data": {
    "validation_amount": 3.14,
    "description": "Test agreement"
  }
}'
```

## Resposta

```json
{
  "agreement_id": "22abcd1235ed497f945f755fcaba3c6c",
  "agreement_uri": "https://wwww.mercadopago.com.ar/v1/wallet_agreement/22abcd1235ed497f945f755fcaba3c6c"
}
```