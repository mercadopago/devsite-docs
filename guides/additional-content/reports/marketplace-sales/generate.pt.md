# Gerar relatório

## Como gerar o seu relatório de vendas do Marketplace?

Atualmente, o relatório de vendas do Marketplace do Mercado Pago só pode ser gerado por meio da API.
Esse processo envolve três etapas:
   1. **Criação das configurações**: você poderá definir os e-mails para os quais o relatório será enviado ou a frequência com que deseja que ele seja gerado, entre outras opções.
   2. **Programação do relatório**: você habilitará o envio programado do relatório de acordo com os parâmetros configurados na etapa anterior.
   3. **Geração do relatório**: você fará a chamada para gerar o relatório de acordo com as configurações feitas anteriormente.

## Criação das configurações

O processo de criação das configurações pode variar dependendo se é a primeira vez que você gera esse relatório ou se você já o gerou anteriormente e deseja consultar e modificar as configurações anteriores. 
Para criar as configurações do relatório de vendas do Marketplace pela primeira vez, siga os passos abaixo. Se você já o gerou anteriormente e deseja consultar e modificar as configurações anteriores, você pode pular para a próxima etapa.

### Criação das configurações pela primeira vez

Se esta é a primeira vez que você configura e gera o relatório de vendas do Marketplace, você deve enviar um POST com o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "juanpablo.rozada@mercadolibre.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
            },
            "columns": [
                {
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'

```

| Parâmetro                 | ¿Obrigatório ou opcional? | Descrição                                                                                                                                       |
|---------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `file_name_prefix`        | Obrigatório                | Prefixo que comporá o nome do relatório ao ser baixado.                                                                                           |
| `display_timezone`        | Opcional                   | Fuso horário que será utilizado nos horários do relatório. Se deixado em branco, será utilizado o GMT-04 como padrão.                             |
| `notification_email_list` | Opcional                   | Frequência desejada de geração do relatório. Deve ser especificado:                                                                               |
|                           |                            | - `hour`: hora do dia em que o relatório será gerado.                                                                                             |
|                           |                            | - `type`: frequência de geração (mensal para mensal, semanal para semanal, diária para diária).                                                  |
|                           |                            | - `value`: dia da semana em que o relatório será gerado.                                                                                          |
|                           |                            | **Atenção**: este parâmetro configura apenas a frequência. Para efetivamente programar o envio do relatório, siga para a etapa "Programação do relatório". |
| `columns`                 | Obrigatório                | Dados que deseja incluir no relatório. Para detalhes sobre cada um, consulte Usos do relatório.                                                     |

### Consulta e modificação de configurações anteriores

Se você já gerou um relatório de vendas do Marketplace anteriormente, pode consultar as configurações definidas e modificá-las, se desejar.

Para consultar as configurações definidas anteriormente, envie um GET com o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

Para modificar as configurações estabelecidas em relatórios de vendas anteriores do Marketplace, envie uma solicitação PUT usando o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/config' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data-raw '{
            "file_name_prefix": "release-report-MKP-test-v1",
            "display_timezone": "GMT-03",
            "notification_email_list": [
                "exemplo@exemplo.com"
            ],
            "frequency": {
                "hour": 15,
                "type": "weekly",
                "value": "tuesday"
            },
            "columns": [
                {
                    "key": "DATE"
                },
                {
                    "key": "SOURCE_ID"
                },
                {
                    "key": "EXTERNAL_REFERENCE"
                },
                {
                    "key": "MP_FEE_AMOUNT"
                },
                {
                    "key": "PAYMENT_METHOD"
                },
                {
                    "key": "STORE_NAME"
                },
                {
                    "key": "RECORD_TYPE"
                },
                {
                    "key": "DESCRIPTION"
                }
            ]
    }'
```

## Agendamento do relatório 

Se você escolheu a frequência para receber o relatório de vendas do Marketplace ao configurá-lo, também será necessário ativar o envio programado. Você pode fazer isso usando o seguinte cURL:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

> Este cURL apenas habilita o envio programado. Para configurar a frequência com a qual deseja que esse envio ocorra, você deve fazê-lo durante a criação das configurações.

Também é possível desfazer o agendamento do envio do relatório. Para isso, faça uma chamada usando o seguinte cURL:

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/account/marketplace_sales_report/schedule' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}'
```

## Geração do relatório

Uma vez que você tenha criado as configurações e agendado o envio do relatório de vendas do Marketplace, você poderá gerá-lo e obtê-lo automaticamente por e-mail ou manualmente através de um arquivo de texto. Os diagramas abaixo ilustram cada processo.

![Automática](/images/manage-account/reports/marketplace-sales/image3.png)
![Manual](/images/manage-account/reports/marketplace-sales/image4.png)

### Geração para download automático

Para gerar o relatório e fazer o download automaticamente por e-mail, você deve usar o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer {{ACCESS_TOKEN}}' \
--data '{
    "marketplaces": ["MP-MKT-3362814541380534"],
    "site": "MLB",
    "begin_date": "2023-06-01T00:00:00Z",
    "end_date": "2023-06-10T00:00:00Z"
}'
```

A geração do relatório é um processo assíncrono. Por esse motivo, você receberá o e-mail que permitirá o download do relatório após alguns minutos.

![Automática](/images/manage-account/reports/marketplace-sales/image1.png)

### Geração para download manual

Para gerar o relatório e fazer o download manualmente, você deve usar o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report/{{REPORT_FILE_NAME}}' \
--header 'Authorization: Bearer {{APP_USER_TOKEN}}'
```

O relatório será retornado pela API no formato de texto como resultado.

Aqui está uma coleção do Postman que você pode utilizar como exemplo: arquivo

## Consultar os relatórios configurados

Quando desejar consultar os relatórios que você configurou, você pode fazer isso com o seguinte cURL:

```curl
curl --location 'https://api.mercadopago.com/v1/account/marketplace_sales_report'/list?access_token={{USER_APP_TOKEN}}'
```

A chamada retornará uma resposta semelhante à seguinte:

```curl
[
    {
        "id": 34326722,
        "account_id": 1214966328,
        "begin_date": "2023-04-11T19:00:00Z",
        "created_from": "schedule",
        "currency_id": "BRL",
        "date_created": "2023-04-18T15:00:03.000-04:00",
        "download_date": null,
        "end_date": "2023-04-18T18:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-18-160003.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\"}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    },
    {
        "id": 34203258,
        "account_id": 1214966328,
        "begin_date": "2023-02-28T03:00:00Z",
        "created_from": "manual",
        "currency_id": "BRL",
        "date_created": "2023-04-13T08:04:50.000-04:00",
        "download_date": null,
        "end_date": "2023-03-12T02:59:59Z",
        "file_name": "reserve-release-report-4-USER_ID-2023-04-13-090450.csv",
        "internal_management": "{\"notify\": true, \"is_visible\": true, \"use_exact_time\": false}",
        "is_visible": true,
        "metadata": "{\"user_tags\": [\"test_user\", \"normal\"], \"generation_model\": \"reserve\", \"last_movement_id\": 164882712542}",
        "origin": "date_range",
        "status": "enabled",
        "subtype": "release",
        "user_id": 1291581847
    }
]
```

Para distinguir cada relatório, você pode usar os parâmetros `id` e `file_name`, que indicarão o número de identificação de cada um e o nome configurado para o download do arquivo, respectivamente.