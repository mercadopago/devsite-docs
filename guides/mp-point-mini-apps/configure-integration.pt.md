# Configure a integração com o Mercado Pago

Para se comunicar com o aplicativo do Mercado Pago, o Mini App deve utilizar alguns comandos que estarão disponíveis para uso somente após o carregamento do MiniApp. Veja mais informações na seção [Ciclo de vida dos MiniApps]().

Todos os comandos disponíveis suportam os seguintes parâmetros:

| Parâmetro  | Tipo  | Obrigatório  | Descrição |
| --- | --- | --- | --- |
| method | string | true | set_title <br><br> payment_flow | 
| args | objeto JSON  | depende do método | qualquer objeto JSON | 
| callback | function | false | function <br><br> (result, error) | 

Exemplo de requisição:

```javascript
var exampleCommand =
    {
        "method": 'example',
        "args": {
            'arg1': value1
         },
         "callback": function(result, error) {
             if (!result) {
                 console.log("ERROR: wrong echo result");
             } else {
                 console.log("SUCCESS: echo arrives " + result);
             }
         }
    }
MobileWebKit.executeNative(exampleCommand)
```

## Comandos disponíveis

Veja abaixo quais são os comandos disponíveis para uso somente após o carregamento do MiniApp.

* `set_title`

Permite atualizar o título da barra de ferramentas.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| title | string | true | qualquer string | Texto a ser exibido na ActionBar. | 

Exemplo de requisição:

```javascript
{
    "method": 'set_title',
    "args": {
        'title': title
     }
}
```

* `back`

Permite navegar para trás, podendo voltar para várias telas.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| screen | int | true | 0 < n < 50 | O número de telas para voltar, sendo por padrão = 1. | 

Exemplo de requisição:

```javascript
{
    "method": 'back',
    "args": {
        'screen': screens
     }
}
```

* `back_action`

Permite alterar o comportamento do botão **Voltar**.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| type | String | true | back  <br><br> close | back: funciona como padrão de voltar a tela anterior. <br><br> close: fecha a tela.| 

Exemplo de requisição:

```javascript
{
    "method": 'back_action',
    "args": {
        'type': type
     }
}
```

* `close`

Permite fechar a tela do Mini App. 

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| nenhum | nenhum | nenhum | nenhum| nenhum |

Exemplo de requisição:

```javascript
{
    "method": 'close',
    "args": {}
}
```

* `history`

Permite obter o histórico de navegação.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de requisição:

```javascript
{
    "method": 'history',
    "args": {}
}
```

Exemplo de resposta:

```
{
  "result": {
    "serial_number": "SMARTPOS123044",
    "brand_name": "PAX",
    "model": "A910"
  }
}
``` 

* `info_device`

Permite obter informações do dispositivo Point Smart, como: **número de série**, **marca** e **modelo**.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de requisição:

```javascript
{
    "method": 'info_device',
    "args": {}
}
```

Exemplo de resposta:

```
{
  "result": {
    "serial_number": "SMARTPOS123044",
    "brand_name": "PAX",
    "model": "A910"
  }
}
``` 

* `clear_history`

Permite limpar histórico de navegação.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de requisição:

```javascript
{
    "method": 'clear_history',
    "args": {},
    "callback": callbackResult
}

function callbackResult(result, error) {
   if (result == 'success') {
       // Success call
   } else {
       //'error' has detailed info of error
   }
}
```

* `payment_methods`

Permite obter as variantes de meios de pagamento permitidas para iniciar o fluxo de pagamento com um meio de pagamento específico. Todas as variantes de métodos de pagamento compatíveis com esta versão são: **cartões de crédito e débito**, **código QR**, **link de pagamento** e **voucher (cartões Sodexo)**.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de requisição:

```javascript
getPaymentMethods(callback)

function callbackResult(result, error) {
    for (var method in result) {

    }
}
```

Exemplo de resposta:

```javascript
{
  "result": [
    "credit",
    "debit",
    "voucher",
    "qr",
    "link"
  ]
}
``` 