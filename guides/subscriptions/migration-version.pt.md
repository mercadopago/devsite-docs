# Migração V1 para V0 

A partir de 8 de março de 2022 uma nova versão do motor de assinaturas relacionados às entidades abaixo estará disponível com novas funcionalidades. 

* **Plan** (identificado por /v1/plan na v1 e agora por `preapproval_plan` na v0)
* **Subscription** (identificado por /v1/subscriptions na v1 e agora por `preapproval` na v0)
* **Invoice** (identificado por /v1/invoices na v1 e agora por `authorized_payments` na v0)

A nova versão tem uma arquitetura superior e conta com notificações por e-mail enviadas a cada atualização de status em:

* Assinaturas (criação e cancelamento);
* Cobrança de assinatura;
* Alteração de planos. 

Além das notificações por e-mail, a nova versão também conta com [Webhooks](/developers/pt/guides/additional-content/your-integrations/notifications/webhooks) para `plans`, `subscriptions` e `invoices`.

> WARNING
> 
> Importante
> 
> Ao contrário das notificações Webhooks, que você precisa configurar, o envio dos e-mails é ativado automaticamente por padrão. Porém, você pode solicitar o desligamento manual dessa funcionalidade através de Integrações.

## Migração

Você precisará realizar a migração para este novo motor porque a versão 1 **deixará de estar disponível também em 8 de março de 2022**.

A migração acontecerá de forma automática e todos os planos, assinaturas e invoices migrados permanecerão ativos com um novo ID. Para verificar os novos IDs migrados, você pode utilizar o **endpoint** abaixo que permanecerá público à sua disposição até julho de 2022. 

Com o novo ID em mãos, você pode atualizar os IDs dos seus planos, assinaturas e invoices como desejar. 

[[[
```curl
curl --location 
--request GET 'https://api.mercadopago.com/subscriptions/migrations/<RESOURCE>/<ID>
```
]]]

| - | Resource | ID |
| :--- | :--- | :--- |
| Request | `plan` <br/> `subscription` <br/> `invoice` | Identificador único |
| Response | `preapproval` <br/> `preapproval_plan` <br/> `authorized_payment`| Identificador único |

> NOTE
> 
> Importante
> 
> Vamos notificá-lo por e-mail quando chegar a data limite da sua migração. É importante que você se programe e tenha as mudanças preparadas para a migração, pois todos os `Plans` e `Subscriptions`com status **cancelled**, **inactive** e/ou **finished**, bem como `Ìnvoices` com mais de seis meses, não serão migrados. 
