
# Geração por retirada


Você pode criar um relatório de Dinheiro disponível de forma automática cada vez que fizer uma retirada de dinheiro da sua conta do Mercado Pago para uma conta bancária. Programe esta opção a partir do seu painel do Mercado Pago ou via API. 

> WARNING
>
> A partir do dia 1º de março de 2022, o relatório Dinheiro disponível será desabilitado
>
> Use o [relatório de ----[mla]----Liquidações------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----Liberações------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/released-money/introduction) para fazer a reconciliação das transações que afetem o saldo disponível na sua conta, incluindo seus saques bancários.

## Gerar a partir do painel do Mercado Pago

A partir da seção "Relatórios" do Mercado Pago, programe a geração de relatórios por retirada seguindo estas etapas: 

1. Na sua conta do Mercado Pago, vá até [Relatórios](https://www.mercadopago.com.br/balance/reports) e depois, *Relatórios*.
1. Clique em *Programar relatório* e depois em *Agendar*.
1. Pronto! Cada vez que retirar dinheiro, você terá seu relatório disponível.

Gere seus relatórios cada vez que quiser consultar uma retirada de dinheiro

1. Na sua conta do Mercado Pago, vá até [Relatórios](https://www.mercadopago.com.br/balance/reports) e depois, *Relatórios*.
1. Vá em [Dinheiro Disponível](https://www.mercadopago.com.br/balance/reports?page=1#!/bank-report) e clique em *Gerar relatório*.
1. Organize suas retiradas por **período de tempo** e selecione a retirada que quer consultar.

<span style="margin-left:40px">Pronto! Você verá seu relatório *em preparação*.</span>

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/glossary) de Dinheiro Disponível para consultá-lo quando precisar ou queira conferir algum termo técnico.

## Gerar via API

Atualize o atributo `execute_after_withdrawal` com o valor `true`.

Pronto! Agora, você terá um relatório por cada retirada de dinheiro que você fizer. 


[[[
```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/config' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "execute_after_withdrawal": true,
        "scheduled": true,
        "display_timezone": "GMT-04",
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
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
            }
        ]
    }'
```
```php
<?php
include('vendor/rmccue/requests/library/Requests.php');
Requests::register_autoloader();
$headers = array(
    'accept' => 'application/json',
    'content-type' => 'application/json',
    'Authorization' => 'Bearer ENV_ACCESS_TOKEN'
);
$data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
            "scheduled": true,
            "display_timezone": "GMT-04",
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
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
                }
            ]
    }';
$response = Requests::put('https://api.mercadopago.com/v1/account/bank_report/config', $headers, $data);
```
```java
URL url = new URL("https://api.mercadopago.com/v1/account/bank_report/config");

HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();

connection.setRequestMethod("PUT");
connection.setRequestProperty("Accept", "application/json");
connection.setRequestProperty("Content-Type", "application/json");
connection.setRequestProperty("Authorization", "Bearer ENV_ACCESS_TOKEN");

connection.setDoOutput(true);

String body = "{
                \\"file_name_prefix\\": \\"bank-report-USER_ID\\",
                \\"include_withdrawal_at_end\\": false,
                \\"execute_after_withdrawal\\": true,
                \\"schedule\\": true,
                \\"display_timezone\\": \\"GMT-04\\",
                \\"frequency\\": {
                    \\"hour\\": 0,
                    \\"type\\": \\"monthly\\",
                    \\"value\\": 1
                },
                \\"columns\\": [
                   { \\"key\\": \\"DATE\\" },
                   { \\"key\\": \\"SOURCE_ID\\" },
                   { \\"key\\": \\"EXTERNAL_REFERENCE\\" },
                ]
            }";

try(OutputStream os = connection.getOutputStream()) {
    byte[] input = body.getBytes("utf-8");
    os.write(input, 0, input.length);
}

System.out.println(connection.getResponseCode());
System.out.println(connection.getResponseMessage());
System.out.println(connection.getInputStream());
```
```python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
}

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
            "scheduled": true,
            "display_timezone": "GMT-04",
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
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
                }
            ]
        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, data=data)
```
```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': 'Bearer ENV_ACCESS_TOKEN'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "execute_after_withdrawal": true,
            "scheduled": true,
            "display_timezone": "GMT-04",
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
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
                }
            ]
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config',
    method: 'PUT',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
```
]]]

Como resposta, você receberá um `HTTP STATUS 200 (Ok)`

```json
{
    "file_name_prefix": "bank-report-USER_ID",
    "include_withdrawal_at_end": false,
    "scheduled": true,
    "execute_after_withdrawal": true,
    "display_timezone": "GMT-04",
    "frequency": {
        "hour": 3,
        "type": "daily",
        "value": {}
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
        }
    ]
}
```

> WARNING
>
> Importante
>
> A geração por retirada é uma opção a mais de geração de relatório de Dinheiro disponível. Não altera a geração configurada no seu painel do Mercado Pago ou via API. Confira o resto da documentação para saber de quais outras formas é possível gerar seus relatórios: pelo painel do Mercado Pago e via API. 

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Geração a partir do Mercado Pago
>
> Gere seus relatórios de Dinheiro Disponível a partir do painel do Mercado Pago em 3 etapas simples. 
>
> [Geração a partir do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/panel)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Geração via API
>
> Crie relatórios de forma programada e manual por meio de uma integração com o Mercado Pago.
>
> [Geração via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/reports/available-money/api)
