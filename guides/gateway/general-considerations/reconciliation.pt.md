---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Conciliação

A seguir verá informação sobre como conciliar as operações de Mercado Pago Gateway com as operações dos adquirentes e emissores.

## Utilizando um parceiro

A forma mais fácil é trabalhar com um dos nossos parceiros:

|País|Parceiro|
|---|---|
|Argentina|[Increase](https://www.increasecard.com/mercadopago/)|

> Estamos trabalhando para lhe oferecer mais parceiros

## Utilizando seu sistema

Se desejar realizar a conciliação por meio de seu sistema de gestão ou com um desenvolvimento próprio, você tem duas opções:

### Conciliar via API

Realizando um **GET** ao endpoint /payments do API de Mercado Pago, você pode obter a relação de operações: 

```curl
curl -X GET \
"https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN" \
-H "Content-Type: application/json"
-d "{
  'status': 'approved'
}"
```

Cada operação (payment) conterá as informações de reconciliação no nó `adquirer_reconciliation`:

```json
{
  "id": "",
  "acquirer_reconciliation": [
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:47.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "authorization",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0036"
    },
    {
      "authorization_code": "646382",
      "batch_closing_date": "2019-06-10T17:00:00.000-04:00",
      "batch_number": "017",
      "date_created": "2019-06-10T10:49:48.000-04:00",
      "date_last_updated": "2019-06-10T10:49:53.000-04:00",
      "operation": "capture",
      "operation_status": "approved",
      "refund_id": null,
      "terminal_number": "98809468",
      "transaction_number": "0037"
    }
  ],
  ...
}
```

### Atributos

|Atributo|Descrição|
|---|---|
|`authorization_code`| Código de autorização |
|`batch_closing_date`| Data de encerramento de lote |
|`batch_number`| Número de lote |
|`date_created`| Data de criação do registro |
|`date_last_updated`| Data da última modificação do registro |
|`operation`| Tipo de operação |
|`operation_status`| Estado da operação |
|`refund_id`| ID do reembolso |
|`terminal_number`| Número do terminal |
|`transaction_number`| Número de operação ou de cupom |

> É importante mencionar que as informações de `acquirer_reconciliation` podem ir variando no tempo, conforme os diferentes casos de uso e à variação dos dados segundo cada adquirente.

### Tipos de operação

Os valores possíveis de `operation` são:

* **authorization:** autorização
* **capture:** captura
* **online_purchase:** compra direta
* **refund_online_purchase:** restituição / reembolso de uma compra direta.
* **refund_capture:** restituição / reembolso de uma captura.
* **refund_authorization:** restituição / reembolso de uma autorização.

### Estados de uma operação

Os valores possíveis de `operation_status` são:

* **approved:** aprovada
* **rejected:** recusada
* **in_process:** em processo

### Conciliar via Arquivo

Na seção _Operaciones Gateway_ poderá ver a relação de operações.

![Operaciones](/images/gateway/operations.png)

Clicando no vínculo _Exportar_ verá a seguinte tela:

![Exportar](/images/gateway/export.png)

Escolha seu formato preferido e o arquivo será gerado.

> Se o arquivo for muito grande, você vai recebe-lo uns minutos depois via e-mail na caixa de sua conta de Mercado Pago

### Necessita ajuda?

Entre em contato com seu executivo de conta.