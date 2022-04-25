## Glossário

Alguns termos são novos e você pode não estar familiarizado com eles. Use este glossário para não se perder:

| Termo | Descrição |
| --- | --- |
| PDV | Ponto de venda.|
| Integrador | Pessoa ou entidade que deseja processar um pagamento por meio de nossa API.|
| Intenção de pagamento | Contém os detalhes da transação.|
| Access token | Chave privada com a qual você pode gerar cobranças. Você deve usá-lo para se identificar em suas integrações. É muito importante que esses dados estejam protegidos em seus servidores e não sejam acessíveis a qualquer usuário ou invasor. |
| Webhook | É uma notificação que é enviada do nosso servidor para o integrador através de uma chamada HTTP POST em relação às suas transações. |
| Poi | Série do dispositivo. Você pode ver na parte de trás do seu dispositivo (SN, NS). |
| Poi Type | Tipo de dispositivo. |

## Possíveis status de uma intenção de pagamento

| Termo | Descrição |
| --- | --- |
| Open | Status inicial de uma intenção de pagamento ao criá-la a partir do PDV. |
| On Terminal | Status intermediário de uma intenção de pagamento ao obtê-la do dispositivo Point. |
| Processing | Declaração provisória de intenção de pagar no momento da reconciliação com uma instituição financeira. |
| Processed | Status provisório de intenção de pagamento no momento de finalizar a reconciliação com uma instituição financeira. |
| Canceled | Status final de uma intenção de pagamento quando ela é cancelada. |
| Abandoned | Status final de uma intenção de pagamento quando ela não é processada após um certo tempo. |
| Error | Status final de uma intenção de pagamento quando ocorre um erro de transação. |
| Finished | Status final de uma intenção de pagamento quando a transação termina. |

