# Busca e Conciliação

Uma parte importante da geração de pagamentos é a conciliação. A API permite realizar buscas de seus `advanced payments` para poder conciliar todas as operações feitas através do seu Marketplace.

É possível procurar por meio da API de Advanced Payments.

#### Request
```curl
curl -X GET \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/search?access_token=MKT_ACCESS_TOKEN&limit=10&offset=0'
```

#### Response
O qual retorna os resultados numa estrutura que mostra, também, a quantidade de resultados e informação para a paginação dos mesmos.
```json
{
  "paging": {
    "total": 3,
    "limit": 10,
    "offset": 0
  },
  "results": [
    {
      "id": 11111111,
      "status": "approved",
      ...
    },
    {
      "id": 22222222,
      "status": "rejected",
      ...
    },
    {
      "id": 33333333,
      "status": "pending",
      ...
    }
  ]
}
```

#### Filtros de busca

Estado                       |Descrição                                                          
-----------------------------|-------------------------------------------------------------------
date_created                 |Data de criação do Advanced Payment.                              
status                       |Estado do Advanced Payment.                                       
payments.id                  |ID do pagamento do comprador.                                      
payments.payment_method_id   |Método do pagamento.                                               
payments.external_reference  |ID gerado para este pagamento em específico.                       
payments.transaction_amount  |Valor do pagamento.                                                
payer.id                     |ID do comprador.                                                   
payer.email                  |Email do comprador.                                                
disbursements.collector_id   |ID do vendedor.                                                    
external_reference           |ID gerado pelo marketplace que identifica ao Advanced Payment.     

#### Filtrar busca por data

Estado                       |Exemplo de Valores Esperados                                                                          
-----------------------------|------------------------------------------------------------------------------------------------------
range                        |**date_created**: Data criação transação 
     ˆ                       | **date_last_updated**: Data última atualização da transação 
begin_date                   |2019-05-30T00:00:00.000**-04:00**                                                                     
end_date                     |2019-05-30T23:59:59.000**-04:00**                                                                     

Para filtrar uma consulta por data é preciso utilizar a combinação dos três estados, no campo range deve se informar **uma das duas opções possíveis marcadas em negrito**, o campo **end_date** precisa sempre ser mais recente temporalmente que o **begin_date**, o **fuso horário** ao final deve ser preservado, o restante é editável conforme expressão: ANO-MÊS-DIA”T”HORA-MINUTO-SEGUNDO-MILÉSIMO.

### Exportar Activities

Existe também a possibilidade de exportar as atividades da lista de sua conta no Mercado Pago com o link `Exportar`.

![export_activities](/images/advanced-payments/export_activities.png)

Você pode selecionar os filtros necessários e escolher o formato CSV ou XLS para realizar a conciliação manualmente.

![export_activities_2](/images/advanced-payments/export_activities_2.png)
