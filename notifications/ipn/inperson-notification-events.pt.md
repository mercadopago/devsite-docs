# Eventos de notificação

Um evento é qualquer tipo de atualização sobre o objeto notificado, incluindo mudanças de status ou atributos. 

Notificamos eventos referente a seus pedidos (`merchant_order`) o pagamento recebido (`payment`). 

A `merchant_order` é uma entidade que agrupa pagamentos aprovados ou rejeitados. Deverá consultar os dados dos pagamentos que são notificados.

Sempre que ocorrer um evento relacionado a qualquer um dos recursos mencionados, enviaremos uma notificação usando 'HTTP POST' para o `notification_url` que você especificou.

Os seguintes eventos são notificados:

1. **Registrar o Merchant Order (MO).**  Ao digitalizar um QR que contém um valor, ele criará automaticamente um pedido do lojista, enviando uma notificação (se o mesmo QR for escaneado várias vezes, cada um criará um pedido comercial diferente e, portanto, uma nova notificação, a integração deve levar este cenário em consideração).
2. **Atualização de pagamentos.** Cada tentativa de pagamento por parte do cliente atualizará as informações do pedido do lojista e enviará uma notificação.
3. **Fechamento do MO.** Assim que um pagamento aprovado for realizado, o status do MO aparecerá fechado e uma notificação será enviada.

**Se o servidor não estiver disponível ou demorar mais de 22 segundos para responder**, o Mercado Pago tentará avisar periodicamente seguindo o seguinte esquema:

|Evento|Prazo após a primeira remessa|Limite de confirmação|
|---|---|---|
|Remessa| - |22 segundos|
|Primeira tentativa|30 segundos|5 segundos|
|Segunda tentativa|5 minutos|5 segundos|
|Terceira tentativa|30 minutos|5 segundos|

O Mercado Pago informará este `notification_url` ao criar e atualizar o status do pagamento ou do pedido com dois parâmetros:

|Campo|Descrição|
|---|---|
|`topic`|Identificação do que se trata. Podendo ser `payment` ou `merchant_order`.|
|`id`|É um identificador exclusivo do recurso relatado.|

> **Exemplo:** Se você definir `notification_url`: `https://www.seusite.com.br/notificações`, receberá notificações de pagamento como esta: `https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`

## Ao receber uma notificação

**Ao receber uma notificação em seu PDV, o Mercado Pago aguarda uma resposta para validar se você recebeu corretamente**. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CRIADO)`.

Lembre-se que esta comunicação é exclusivamente entre os servidores do Mercado Pago e o seu servidor, portanto não haverá um usuário físico vendo nenhum tipo de resultado.

Se você estiver integrando pagamentos presenciais, recomendamos o uso de notificações IPN do tipo `merchant_order`. Para fazer isso, mantenha as seguintes regras em mente:

1. O campo `status` do `merchant_order` permanecerá **aberto** quando ainda não tiver pagamentos associados, ou se tiverem rejeitados ou aprovados por um valor inferior ao total do pedido.
2. O campo `status` do `merchant_order` será **fechado** quando a soma dos pagamentos aprovados for igual que o total do pedido.

Dentro do pedido, no objeto de pagamentos, você encontrará todos os pagamentos dele. É importante obter o id dos pagamentos com `status` = **aproved** para fazer reembolsos


> WARNING
>
> Importante
>
> O Mercado Pago instrui as integrações a usar este método de notificação IPN como o principal método de recebimento de notificações de pagamento.

> PREV_STEP_CARD_PT
>
> Configurar notificações de pagamentos presenciais
>
> Configurar notificações de pagamento com código QR.
>
> [Configurar notificações de pagamentos presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/inperson-configuration)

> NEXT_STEP_CARD_PT
>
> Consultar pedidos
> 
> Verifique o status dos pedidos.
>
> [Consultar pedidos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/inperson-order-query)