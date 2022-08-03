# Configurar notificações

Webhooks (também conhecido como retorno de chamada web) é um método simples que facilita o fornecimento de informações em tempo real sempre que um evento acontece, ou seja, é um modo de receber dados entre dois sistemas de forma passiva através de um HTTP POST.

Antes de configurar as notificações para Wallet Connect é importante considerar os seguintes requisitos.


| Requisitos | Descrição  |
| --- | --- |
| Certificado SSL  | Protocolo que permite estabelecer comunicações seguras na Internet para atividades como navegação, e-mail, e outras transferências de dados.  |
| Resposta à requisição  | O endpoint deve retornar um código de resposta 2XX para confirmar o recebimento da requisição. Todos os códigos de resposta fora do 2XX acionarão novas tentativas exponenciais do Mercado Pago.  |
| Timeout  | Para evitar problemas de timeout, a aplicação deve retornar uma resposta antes de acionar uma lógica complexa.  |
| Solicitação de permissão  | Para que seja possível colocar as solicitações na lista de permissões pelo DNS, as requisições virão através do endpoint api.mercadopago.com. É preciso desabilitar o CSRF (**Cross-site request forgery**) para api.mercadopago.com para permitir solicitações do Mercado Pago.  |




## Endpoints para eventos

Para Wallet Connect, existem dois tipos diferentes de eventos que permitem o recebimento de notificações. Esses eventos referem-se à atualização e/ou cancelamento de um agreement.



* **Agreement entre o integrador e Mercado Pago cancelado pelo usuário:** Neste caso, o usuário tem a possibilidade de se descadastrar de um agreement, o que faz com que o contrato existente seja cancelado. Quando isso acontece, o `payer_token` é invalidado e nenhuma outra cobrança é feita ao usuário. Se o integrador realizar novas tentativas de cobrança, a mesma será rejeitada.<br><br>
* **Atualização do meio de pagamento de um agreement pelo usuário:** Neste caso, o usuário pode adicionar ou atualizar uma forma de pagamento secundária. (Por padrão, dinheiro na conta Mercado Pago é a primeira forma de pagamento). Com base nos status de pagamento, é possível detectar pagamentos rejeitados e notificar o usuário para que ele possa realizar a atualização ou adicionar uma forma de pagamento secundária.

Na tabela abaixo mostramos os possíveis valores que são enviados no corpo da requisição do cancelamento de um agreement e atualização do meio de pagamento.




| Campo  | Valor  | Tipo  | Descrição  |
| --- | --- | --- | --- |
| id  | UUID/Number  | String  | ID exclusivo do evento. Este ID evita mensagens duplicadas do lado do integrador.  |
| type  | wallet_connect  | String  | Representa eventos sobre o agreement entre o integrador e o usuário do Mercado Pago. Este valor sempre será `wallet_connect`  |
| entity  | agreement  | String  | Entidade relacionada ao evento. O valor será sempre `agreement`.  |
| action  | payment_method.updated  | String  | - Indica que a forma de pagamento secundária associada ao contrato foi atualizada. <br> - Pode ser utilizado pelo vendedor como forma de saber se uma nova cobrança deve ser realizada.  |
| action  | status.updated  | String  | - Indica que o contrato foi cancelado pelo usuário. <br> - Pode ser utilizado para saber que novas cobranças não devem ser realizadas. |
| date  | {{action_date}}  | Date  | Uma data aproximada (em formato Zulu) associada ao evento.  |
| data  | {  id: {{agreement_id}},  status: {{agreement_status}}  }  | id: String  status: String  | Este campo pode trazer detalhes extras sobre o evento baseado no tipo e na ação.  |
| model_version  | 1  | Integer  | Versão do modelo de corpo do webhook. Será sempre `1`.  |
| version  | 0  | Integer  | Versão para identificar duplicatas dentro do mesmo id.  |

A seguir, mostramos os exemplos de todas as informações que são enviadas em uma requisição de cancelamento e atualização do meio de pagamento de um agreement.

### Cancelamento de agreement

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "11ae6c7564ed497f945f755fcabat8k6",
     type: "wallet_connect",
     entity: "agreement",
     action: "status.updated",
     date: "2021-09-30T23:24:44Z",
     model_ version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",
           status: "cancelled"

     }

}'

```
]]]


### Atualização do meio de pagamento

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "44ae6c7564ed497f945f755fcabat9d4",
     type: "wallet_connect",
     entity: "agreement",
     action: "payment_method.updated",
     date: "2021-09-30T23:24:44Z",
     model_ version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",

     }

}' 

```
]]]


## Configuração através do Dashboard

Abaixo explicaremos como indicar as URLs que serão notificadas e como configurar os eventos dos quais se receberá a notificação.

![webhooks](/images/notifications/webhooks_pt.png)


1. Caso ainda não tenha, crie uma aplicação na página inicial de seu [Dashboard](/developers/pt/additional-content/dashboard/introduction).
2. Com a aplicação criada, acesse a aba Notificações Webhooks em seu Dashboard e configure as URLs de produção e teste da qual serão recebidas as notificações.
3. Você também poderá experimentar e testar se a URL indicada está recebendo as notificações corretamente, podendo verificar a solicitação, a resposta dada pelo servidor e a descrição do evento.
4. Caso seja necessário identificar múltiplas contas, no final do URL indicada você poderá indicar o parâmetro ?cliente=(nomedovendedor) endpoint para identificar os vendedores.
5. Em seguida, selecione os eventos dos quais você receberá notificações em formato json através de um HTTP POST para a URL especificada anteriormente. Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo. Veja na tabela abaixo os eventos que poderão ser configurados.

Na tabela a seguir você encontra a ação e descrição de cada um dos eventos disponíveis para Wallet Connect.


| Tipo de notificação  | Ação  | Descrição  |
| --- | --- | --- |
| Cancelamento de agreement  | status.updated  | Agreement entre o integrador e o usuário do Mercado Pago foi cancelado pelo usuário.  |
| Atualização do meio de pagamento  | payment_method.updated  | O usuário atualizou o meio de pagamento de um agreement.  |
