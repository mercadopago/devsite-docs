# Glossário

Alguns termos são novos e talvez você não esteja familiarizado com eles. Utilize este glossário para não se perder:

| Produto       | Termo           | Descrição                                                                                                                                                                                       |
|---------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Point e QR    | Credenciais    | Suas [credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) são as chaves que fornecemos para você configurar suas integrações. Para encontrá-las, vá para suas credenciais e selecione as de produção.                                     |
| Point e QR    | Access token    | Chave privada que permite que você faça cobranças. Use-a para se identificar em suas integrações. É muito importante proteger esses dados em seus servidores e não permitir o acesso por nenhum usuário ou atacante.                  |
| Point e QR    | Intent          | Intenção de pagamento que contém os detalhes da transação a ser realizada. Quando criada pela API do Ecossistema Presencial, ela recebe um 'intent_id' que a identifica.                          |
| Point e QR    | PDV             | Ponto de venda. Em integrações Point, é o modo do dispositivo em que opera com a API do Ecossistema Presencial e recebe o valor `device_id`.                                                                                |
| Point e QR    | Caja (POS)      | É um ponto de venda existente em uma filial ou loja física. Cada caixa terá associado um código QR único e só pode ter um dispositivo associado no modo PDV. Na API do Ecossistema Presencial, as caixas são identificadas pelo campo `external_id`.|
| Point e QR    | Loja (Store)    | É uma loja física onde seus clientes podem adquirir seus produtos ou serviços. Você pode ter várias filiais em uma única conta.
| Point         | Poi             | Número de série do dispositivo Point. Você pode vê-lo na parte de trás do dispositivo (SN, NS).                                                                                                 |
| Point         | Poi Type        | Tipo de dispositivo.                                                                                                                                                                           |
| Point         | Self-service    | Traduzido como "autoserviço" e é o modelo em que o cliente pode usar os dispositivos de forma autônoma e auto-gerenciada. Esse modelo não é recomendado para dispositivos no modo PDV.           |
| QR            | Cash out        | Operação disponível para ser realizada por código QR. Consiste na retirada de dinheiro em espécie a partir da geração de um código QR ou do uso do código QR associado à caixa.                      |
| QR            | Extra cash      | Operação disponível para ser realizada por código QR. Consiste em gerar uma ordem pela qual um cliente pode pagar um produto e retirar dinheiro em espécie em uma única transação.                  |


## Possíveis estados de um intent

### Point

| Status | Descrição |
|---|---|
| OPENED | Estado inicial de um intent ao criá-lo a partir do PDV. |
| ON_TERMINAL | Estado intermediário de um intent ao ser obtido a partir do dispositivo Point. |
| PROCESSING | Estado intermediário de um intent durante o processo de conciliação com uma instituição financeira. |
| PROCESSED | Estado intermediário de um intent após a conclusão da conciliação com uma instituição financeira. |
| CLOSED | Estado final de um intent quando a transação é finalizada. Quando você receber este estado, deve consultar a [Payments API](/developers/pt/reference/payments/_payments_id/get) para verificar o estado final do pagamento usando o `id` recebido. |
| CONFIRMATION_REQUIRED | Estado final do intent quando é finalizado sem receber um estado de pagamento. Uma vez recebido, este estado não será alterado. Quando recebido, você deve confirmar no seu dispositivo qual é o estado do pagamento, usando o `payment_id` recebido na resposta, antes de entregar o seu produto ou serviço. |
| CANCELED | Estado final de um intent quando é cancelado. |
| ERROR | Estado final de um intent quando ocorre um erro na transação. |
| EXPIRED | Estado final de um intent quando não é processado após uma hora de ter sido gerado. |

### QR

| Status | Descrição |
|---|---|
| OPENED | Estado inicial de um intent ao criá-lo. |
| CLOSED | Estado final de um intent quando a transação é finalizada. Quando você receber este estado, deve consultar a [Payments API](/developers/pt/reference/payments/_payments_id/get) para verificar o estado final do pagamento usando o `id` recebido. |
| CANCELED | Estado final de um intent quando é cancelado. |
| EXPIRED | Um intent atinge este estado quando o pagamento não foi efetuado dentro da data enviada no campo expiration_date, ou quando mais de 3 meses se passaram sem que seja processado. |


