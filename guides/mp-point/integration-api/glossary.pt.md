## Glossário

Alguns termos são novos e você pode não estar familiarizado com eles. Use este glossário para não se perder:

| Termo | Descrição |
| --- | --- |
| Access token | Chave privada com a qual você pode gerar cobranças. Você deve usá-la para se identificar em suas integrações. É muito importante que esses dados estejam protegidos em seus servidores e não sejam acessíveis a qualquer usuário ou invasor. |
| Integrador | Pessoa ou entidade que deseja processar um pagamento por meio de nossa API.|
| Intenção de pagamento | Contém os detalhes da transação.|
| Poi | Série do dispositivo. Você pode ver na parte de trás do seu dispositivo (SN, NS). |
| Poi Type | Tipo de dispositivo. |
| PDV | Ponto de venda.|
| Self-service | Traduz-se como autoatendimento. É o modelo onde o cliente pode fazer uso dos dispositivos de forma autônoma e autogerida. Por favor, tenha em mente que o uso desses dispositivos é desaconselhado e, se implementado, será de total responsabilidade do comércio. |
| Webhook | É uma notificação que é enviada do nosso servidor para o integrador através de uma chamada HTTP POST em relação às suas transações. |

## Possíveis status de uma intenção

| Tipo de intenção | Status | Descrição |
|---|---|---|
| Intenção de pagamento e Intenção de reembolso | `Open` | Status inicial de uma intenção ao criá-la a partir do PDV. |
| Intenção de pagamento e Intenção de reembolso | `On_Terminal` | Status intermediário de uma intenção ao obtê-la do dispositivo Point. |
| Intenção de pagamento e Intenção de reembolso | `Processing` | Status provisório de intenção no momento da reconciliação com uma instituição financeira. |
| Intenção de pagamento | `Processed` | Status provisório de intenção de pagamento no momento de finalizar a reconciliação com uma instituição financeira. |
| Intenção de pagamento e Intenção de reembolso | `Finished` | Status final de uma intenção quando a transação termina. |
| Intenção de pagamento | `Confirmation_required` | Status final de uma intenção de pagamento quando concluiu sem recever um status do pagamento. Uma vez obtido, esse status não mudará. Ao recebê-lo, você deve confirmar em seu dispositivo qual é o status do pagamento, usando o `payment_id` recebido na resposta, antes de entregar seu produto ou serviço. |
| Intenção de pagamento e Intenção de reembolso | `Canceled` | Status final de uma intenção quando ela é cancelada. |
| Intenção de pagamento e Intenção de reembolso | `Error` | Status final de uma intenção quando ocorre um erro de transação. |
| Intenção de pagamento e Intenção de reembolso | `Abandoned` | Status final de uma intenção quando ela não é processada após um certo tempo. |
