# Processar reembolsos

Reembolsos são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

Quando você integra o Point via API para Ponto de Venda, você pode realizar reembolsos de duas maneiras: 
 * **Utilizando seu dispositivo Point:** sempre que se tratar de transações recentes, você pode buscar os pagamentos realizados, selecionar o que deseja reembolsar e seguir as instruções do dispositivo.

 * **Utilizando  nossa API:** você poderá reembolsar transações que o dispositivo não exibe. Além disso, realizar reembolsos via API lhe permitirá ter um maior controle sobre a operação.


----[mlb]----

> WARNING
>
> Importante
>
> O processamento de reembolsos está disponível apenas para dispositivos Point Pro 2.
------------

Para realizar reembolsos via API, você precisará primeiro criar uma intenção de reembolso e, em seguida, processá-la. Além disso, você pode consultar o status de uma intenção de reembolso ou cancelá-la. Continue lendo para saber como realizar cada operação. 


## Criar intenção de reembolso

Uma intenção de reembolso é uma chamada que contém os detalhes da transação a ser realizada, e que deve ser criada para iniciar o reembolso de um pagamento realizado anteriormente via API.

Esta é uma tentativa que, se bem-sucedida, retornará um `id` e seu status. Tenha em mente que as intenções de reembolso são a base para o processamento de reembolsos com dispositivos Point. Por esse motivo, é importante que você registre e salve os dados obtidos durante sua criação, especialmente o `id`.

> WARNING
>
> Importante
>
> A intenção de reembolso só pode ser criada para o dispositivo em que o pagamento foi processado e para o usuário que realizou a transação.

Você pode [criar uma intenção de reembolso](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) e atribuí-la ao seu dispositivo Point através da seguinte chamada: 

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "68316255058",
     "additional_info": {
        "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET"]
    }
}'

```

Você deverá enviar os campos indicados abaixo, seguindo sua descrição:

| Campo  | Descrição | Valores possíveis | Obrigatório/não obrigatório |
|:---:|:---:|:---:|:---:|
| `payment_id` | Identificação do pagamento que deseja reembolsar. | String numérico. Por exemplo, *65412345*. | Obrigatório |
| `print_on_terminal` | Campo para determinar se o dispositivo imprime o comprovante, seja para o vendedor ou para o comprador. | `SELLER_TICKET`: Imprime o ticket para o vendedor<br>`BUYER_TICKET`: Imprime o ticket para o comprador | Não obrigatório |


Como resposta, você receberá algo semelhante a isso: 

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93647810056",
   "device_id": "PAX_A910__SMARTPOS1490451054",	
   "additional_info": {
       "print_on_terminal": [
           "SELLER_TICKET",
           "BUYER_TICKET"
       ]
   }
}
```

## Processar intenção de reembolso

Uma vez que a intenção de reembolso é criada, você pode obtê-la de seu dispositivo Point pressionando a tecla para iniciar a transação (no caso de Point Plus e Point Pro 2 o **botão verde** e, no caso de Point Smart, o botão digital **Atualizar**).

## Verificar status da intenção de reembolso

Se você deseja saber o status de uma intenção de reembolso específica, você pode [verificar o status atual da sua intenção de reembolso](/developers/pt/reference/integrations_api/_point_integration-api_refund_refundintentid/get) usando o `id` que você recebeu na resposta ao criá-la.

Lembre-se que o `id` e status da intenção de reembolso (por exemplo, *7f25f9aa-eea6-4f9c-bf16-a341f71ba2f1*) são diferentes do `id` do pagamento e status do reembolso (por ejemplo, *65412345*). Neste caso, trata-se de consultar os detalhes de uma tentativa. 


> WARNING
>
> Importante
>
> O principal mecanismo recomendado para saber o resultado de uma intenção de pagamento é a assinatura de [notificações de integrações](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). Aconselhamos usar o endpoint aqui presente apenas como um mecanismo alternativo.


``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/refund/{intentid}' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

A resposta será semelhante a isso:

``` json
{
   "device_id": "GERTEC_MP35P__8701012142072431",
   "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93647810056",
   "state": "FINISHED"
   "additional_info": {
       "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET" ]
   },
}
```

Você pode verificar os possíveis estados de uma intenção de pagamento acessando nosso [Glossário](/developers/pt/docs/mp-point/integration-api/glossary).


## Cancelar  uma intenção de reembolso

Se desejar, você pode cancelar uma intenção de reembolso atribuída a um dispositivo Point, desde que o estado da intenção seja open e ainda não tenha sido enviada para o dispositivo. 

Se esses requisitos forem atendidos, você pode [cancelar uma intenção de reembolso via API](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_refund_refundintentid/delete) realizando a seguinte chamada:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \

```

Se a execução for bem-sucedida, você receberá uma resposta como esta:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1"
}

```

> NOTE
>
> Nota
>
> O único caso em que é possível cancelar uma intenção de reembolso no estado `on_terminal` é se for um reembolso a ser feito em um cartão de pagamento sem contato. O dispositivo aguardará que o cartão seja aproximado para confirmar o reembolso ou que o operador cancele a tentativa.