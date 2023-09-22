# Gerar relatório

Para gerar o relatório, primeiro você deve [criar as configurações](#bookmark_criar_configuração) necessárias, onde poderá definir os emails para os quais o relatório será enviado ou a frequência com que deseja que ele seja gerado, entre outras opções. Em seguida, você deve [criar o relatório](#bookmark_criar_relatório), que pode ser de **forma automática** (_event_) ou **manual** (_statement_).

> NOTE
>
> Importante
>
> Para gerar os relatórios, será necessário ter o Access Token de suas credenciais de produção. Este é uma chave privada da aplicação que sempre deve ser usada no backend para gerar pagamentos. Se você ainda não possui essas informações, siga as etapas descritas abaixo.

## Gerar Access Token

As credenciais são senhas exclusivas usadas para identificar uma integração em sua conta. Elas desempenham um papel fundamental na captura segura de pagamentos em lojas online e outras aplicações. Você pode encontrá-las em **Detalhes da aplicação > Credenciais** dentro do [Painel do desenvolvedor](https://www.mercadopago.com.uy/developers/panel/app) ou em sua conta do Mercado Pago, acessando [Seu negócio > Configurações > Gestão e administração > Credenciais](https://www.mercadopago.com.uy/settings/account/credentials).

Existem dois tipos diferentes de credenciais:
* **Credenciais de teste**: Use as credenciais de teste para testar suas integrações. Elas podem ser combinadas com cartões de crédito de teste para simular transações e verificar o funcionamento correto das integrações. Recomenda-se usar essas credenciais antes de passar para as credenciais de produção.
* **Credenciais de produção**: Use as credenciais de produção para receber pagamentos.

Ambos os tipos de credenciais consistem em dois pares de chaves que você deve usar de acordo com o produto escolhido. Consulte a documentação específica de cada produto para obter detalhes sobre as chaves a serem usadas.

| Tipo            | Descrição                                                                   |
|-----------------|-------------------------------------------------------------------------------|
| Public key      | A chave pública da aplicação é geralmente usada no frontend. Permite, por exemplo, acessar informações sobre métodos de pagamento e criptografar os dados do cartão. |
| Access token    | Access token é a chave privada da aplicação que sempre deve ser usada no backend para gerar pagamentos. É essencial manter esta informação segura em seus servidores.    |

Para gerar o relatório de vendas, você deve usar o seu **Access Token** de produção.

![Gerar Access Token](/images/manage-account/reports/marketplace-sales/image1pt.png)

## Criar configuração

Antes de gerar o relatório, você deve criar as configurações correspondentes, o que permitirá personalizar os emails para os quais o relatório será enviado, a frequência de geração e sua estrutura.

A criação das configurações consiste em 2 etapas: primeiro, definir a **estrutura do relatório** e, em seguida, configurar as **vias de notificação**.

### Estruturar relatório

Criar a estrutura do relatório permite definir as características que ele terá no momento da geração. Através dos _structures_, você pode especificar o fuso horário em que deseja que o relatório seja gerado, adicionar um prefixo para identificar o arquivo gerado e incorporar a quantidade de colunas desejadas, juntamente com separadores de colunas e decimais.

Para definir esta estrutura, faça a seguinte chamada à API, levando em consideração as especificações da tabela abaixo:

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "display_timezone": "GMT-03",
    "name": "Structure de mi marketplace",
    "file_format": {
        "prefix": "marketplace",
        "column_separator": ";",
        "decimal_separator": "."
    },
    "columns": [
        {
            "key": "COLLECTOR",
            "alias": ""
        },
        {
            "key": "COLLECTOR_NICKNAME",
            "alias": ""
        },
        {
            "key": "PAYMENT",
            "alias": ""
        },
        {
            "key": "STATUS_DESCRIPTION",
            "alias": ""
        },
        {
            "key": "STATUS_DETAIL",
            "alias": ""
        },
        {
            "key": "PURCHASE_ORDER",
            "alias": ""
        },
        {
            "key": "PAYMENT_METHOD_TYPE",
            "alias": ""
        },
        {
            "key": "TRANSACTION_AMOUNT",
            "alias": ""
        },
        {
            "key": "DATE_CREATED",
            "alias": ""
        },
        {
            "key": "DATE_APPROVED",
            "alias": ""
        },
        {
            "key": "MARKETPLACE_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "MERCADOPAGO_FEE_AMOUNT",
            "alias": ""
        },
        {
            "key": "TOTAL_PAID_AMOUNT",
            "alias": ""
        },
        {
            "key": "NET_RECEIVED_AMOUNT",
            "alias": ""
        }
    ]
}'
```

#### Resposta
```json
{
    "id": {{structure_id}},
    "version": 0,
    "date_created": null,
    "date_last_updated": null,
    "name": null,
    "file_format": null,
    "columns": null,
    "file_config": null,
    "report_translation": null,
    "include_withdraw": null,
    "refund_detailed": null,
    "show_fee_prevision": null,
    "coupon_detailed": null,
    "show_chargeback_cancel": null
}
```

| Campo                      | Descrição                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------|
| `display_timezone` (opcional)  | Este campo determina a data e a hora que são exibidas nos relatórios. Se você não configurar este campo com um fuso horário, o sistema usará o valor padrão GMT-04. Se você escolher um fuso horário que utiliza horário de verão, será necessário fazer o ajuste manual quando houver mudança de horário. |
| `columns` (obrigatório)       | Campo com os detalhes das colunas a serem incluídas em seu relatório. Encontre todos os possíveis valores na seção [Glossário](/developers/es/docs/checkout-pro/additional-content/reports/marketplace-sales-report/report-fields). |
| `name` (obrigatório)          | Campo para atribuir um nome à **estrutura**. |
| `file_format.prefix` (obrigatório) | Prefixo que compõe o nome do relatório uma vez gerado. |
| `file_column_separator` (obrigatório) | Caractere que você pode usar no arquivo .csv quando não deseja que o separador seja um ponto e vírgula. |

### Vias de notificação

Depois de estabelecer a estrutura do relatório, determine como deseja receber as notificações, seja por email ou SFTP. Configure um _notifier_ conforme mostrado abaixo, e atente-se às características de cada campo descritas na tabela a seguir.

#### Email
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "email",
    "data": {
        "recipients": ["test@mercadolibre.com"]
    },
    "description": "test notifier email"
}'
```

#### Resposta
```json
{
    "id": {{notifier_id}},
    "type": "email",
    "data": {
        "recipients": [
            "test@mercadolibre.com"
        ]
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": true
}
```

#### SFTP
```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/notifiers?type=ftp' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "ftp",
    "data": {
        "ip": "test.files.com",
        "port": 22,
        "password": "test",
        "protocol": "SFTP",
        "username": "test@mercadolibre.com",
        "remote_dir": "/"
    },
    "description": "test notifier sftp"
}'
```

#### Resposta
```json
{
    "id": {{notifier_id}},
    "type": "ftp",
    "data": {
        "protocol": "SFTP",
        "ip": "test.files.com",
        "username": "test@mercadolibre.com",
        "password": "test",
        "remote_dir": "/",
        "port": 22
    },
    "description": null,
    "version": 0,
    "status": "ACTIVE",
    "is_pii_data": false
}
```

| Campo              | Descrição                                                                                                                    |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `type` (obrigatório) | Define o tipo de notificação a ser configurado. Valores possíveis: **email**; **ftp**.                                      |
| `data` (obrigatório) | Contém as informações do destinatário do **notifier**. Dependendo do valor indicado em `type`, pode conter os seguintes objetos: <br><br>- **email:** Contém o campo `recipients`, onde você pode indicar os emails para os quais o relatório será enviado. Pode ser mais de um, se desejar. <br><br>- **ftp:** Contém os seguintes campos: <br> - `ip`: URL do servidor FTP <br>   - `port`: Porta do servidor FTP <br>   - `password`: Senha de acesso ao servidor FTP <br>   - `protocolo`: `SFTP` <br>   - `username`: Nome de usuário para acessar o servidor FTP <br>   - `remote_dir`: Diretório remoto de destino no servidor FTP.   |

## Criar relatório

Após criar as configurações iniciais, você tem duas opções para criar o relatório:
 * **Agendar um evento**: Isso automatiza a criação de relatórios, permitindo que você defina a frequência.
 * **Gerar um evento manualmente**: Você poderá criar um relatório sob demanda para um período específico de sua escolha

### Agendar um relatório (Events)

Ao agendar um evento, é possível gerar relatórios de forma automática e definir sua periodicidade. Para executar essa ação, crie um _event_, seguindo o exemplo abaixo. Certifique-se de ter em mãos as configurações previamente estabelecidas e as informações da tabela a seguir para garantir um agendamento bem-sucedido do relatório.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 0
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [      
       {{notifier_id}}
    ],
    "status": "ACTIVE",
    "version": 0
}'
```

#### Reposta
```json
{
    "id": {{event_id}},
    "type": "frequency",
    "data": {
        "period": "daily",
        "value": 0,
        "hour": 20,
        "skip_non_working_days": false
    },
    "description": "event test",
    "structure_id": {{structure_id}},
    "notifiers": [],
    "status": "ACTIVE",
    "version": 0,
    "user_id": {{user_id}}
}
```

Você pode ver a descrição dos campos presentes nos _curls_ na tabela abaixo.

| Campo                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` (obrigatório)     | Este campo define o tipo de evento. O único valor possível é `frequência`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `data` (obrigatório)     | Este campo contém a frequência com que o relatório será gerado. Pode ser diariamente (`period=daily`), semanalmente (`period=weekly`) ou mensalmente (`period=monthly`).<br>Dentro de `value`, você pode definir qual dia da semana deseja que o relatório seja gerado (se `period=weekly`), atribuindo um número de 1 a 7, ou qual dia do mês (se `period=monthly`), atribuindo um número de 1 a 31.<br>Além disso, no campo _hour_, você pode programar a hora do dia em que o relatório será gerado. |
| `description` (obrigatório) | Campo para atribuir um nome ao evento. Máximo de 50 caracteres.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `structure_id` (obrigatório) | Campo para atribuir a estrutura com a qual o relatório será gerado. Você deve preenchê-lo com o valor obtido para este mesmo campo na resposta à criação da estrutura.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `notifier_id` (obrigatório)  | Campo para atribuir a forma pela qual deseja receber as notificações. Você deve preenchê-lo com a identificação obtida na resposta à criação das notificações.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Gerar relatório manualmente (Statements)

A criação manual possibilita gerar um relatório sob demanda, especificando o intervalo de tempo desejado.

Para isso, crie uma _statement_, conforme mostrado abaixo. Além disso, tenha em mãos as configurações que você criou anteriormente e as informações da tabela a seguir para garantir a criação bem-sucedida do relatório.

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data-raw '{
    "user_description": "",
    "created_by": "automatic",
    "origin": {
        "type": "date_range",
        "data": {
            "date_start": "2023-04-01T03:00:00Z",
    		"date_end": "2023-04-02T02:27:44Z"
        }
    },
    "structure_id": {{structure_id}},
    "notifiers_id": [{{notifier_id}}]
}'
```

#### Resposta
```json
{
    "status_code": 201,
    "request_id": {{statement_id}},
    "message": ""
}

```

Você pode ver a descrição dos campos presentes nos _curls_ na tabela abaixo.

| Campo                | Descrição                                                                                                                                                                        |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| user_description (obrigatório) | Descrição desejada. Extensão máxima: 50 caracteres.                                                                                                                                 |
| created_by (obrigatório)       | Criador da solicitação. No momento, só pode receber o valor _automatic_.                                                                                                              |
| Origin (obrigatório)          | Este campo contém a informação do período que deseja incluir no relatório.<br>- `type`: o único valor possível é `date_range`, já que você deverá indicar o período a ser consultado.<br>- `date_start`: indica o início do período que deseja consultar no formato: **yyyy-MM-dd HH:mm:ss.SSS**.<br>- `date_end`: indica o fim do período que deseja consultar no formato: **yyyy-MM-dd HH:mm:ss.SSS**.                       |
| structure_id (obrigatório)    | Campo para atribuir a estrutura com a qual o relatório será gerado. Você deverá preenchê-lo com o valor obtido para este mesmo campo na resposta à criação da estrutura.     |
| notifiers_id (obrigatório)    | Campo para atribuir a forma como deseja receber as notificações. Você deverá preenchê-lo com a identificação obtida na resposta à criação de notificações.                 |
