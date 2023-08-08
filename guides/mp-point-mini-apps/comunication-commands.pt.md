# Comandos disponíveis

Veja abaixo quais são os comandos disponíveis para uso somente após o carregamento do Mini App.

## Comando: back 

Permite navegar para trás, podendo voltar por várias telas.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| screen | int | true | 0 < n < 50 | O número de telas para voltar, sendo por padrão = 1. | 

Exemplo de código:

```javascript
{
    "method": 'back',
    "args": {
        'screen': screens
     }
}
```

## Comando: close

Fecha o fluxo da _webview_ da landing do _Javascript_.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de código:

```javascript
{
    "method": 'close',
    "args": {}
}
```

## Comando: history

Acessa o histórico de navegação.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de código:

```javascript
{
    "method": 'history',
    "args": {}
}
```

## Comando: info_device

Permite obter informações do dispositivo Point Smart, como: **número de série**, **marca** e **modelo**.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de código:

```javascript
{
    "method": 'info_device',
    "args": {}
}
```

## Comando: clear_history

Apaga o histórico de navegação.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

Exemplo de código:

```javascript
{
    "method": 'clear_history',
    "args": {},
    "callback": callbackResult
}

function callbackResult(result, error) {
   if (result == 'success') {
       // Chamada de sucesso
   } else {
       //'error' tem informações de erro detalhadas
   }
}
```

# Iniciar fluxo de pagamento (payment_flow)

Para iniciar o fluxo de pagamento, a função `launchPaymentFlow` deve ser chamada juntamente com os seguintes parâmetros:

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| amount | Number | Sim | 0.01 <= n <  50000 | Valor a ser pago.  |
| metadata | string | Não | SON Object como uma string | Informação adicional que será retornada no callback depois que o fluxo de pagamento estiver concluído. |
| callback_success | string | Não | Paths| Indica o caminho para onde a resposta será enviada em caso de sucesso. Essa rota será relativa ao domínio do mini app.|
| callback_error | string | Não | Paths| Indica o caminho para onde a resposta será enviada em caso de erro. Essa rota será relativa ao domínio do Mini App. |

Exemplo de código:

```javascript
launchPaymentFlow(amount, encodeURIComponent({"attr":"123"}),
'response/congrats.html', 'response/error.html')
```

Para mais informações, veja a seção [Como começar](/developers/pt/docs/mp-point/mini-apps/introduction/how-to-start).

## Iniciar método de pagamento (payment_flow)

Para iniciar o fluxo de pagamento com forma de pagamento, a função `launchPaymentMethod` deve ser chamada juntamente com os seguintes parâmetros:

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| amount | Number | Sim | 0.01 <= n <  50000 | Valor a ser pago. |
| payment_method | string | Sim | credit, debit, qr, link| Indica o método de pagamento a ser utilizado. |
| metadata | string | Não | SON Object como uma string | Informação adicional que será retornada no callback depois que o fluxo de pagamento estiver concluído. |
| callback_success | string | Não | Paths| Indica o caminho para onde a resposta será enviada em caso de sucesso. Essa rota será relativa ao domínio do mini app.|
| callback_error | string | Não | Paths| Indica o caminho para onde a resposta será enviada em caso de erro. Essa rota será relativa ao domínio do Mini App. |

Exemplo de código:

```javascript
launchPaymentMethod(25.6, "debit", encodeURIComponent({"attr":"123"}), 
'congrats.html', 'error.html')
```

Para mais informações, veja [Iniciar método de pagamento]().

## Acessar métodos de pagamento disponíveis (payment_methods)

Obtém as variantes de meios de pagamento permitidas para iniciar o fluxo de pagamento, com um meio de pagamento específico.

As variantes compatíveis com esta versão são:

* **Credit**: pagamento com cartão de crédito.
* **Debit**: pagamento com cartão de débito.
* **Qr**: pagamento com QR.
* **Link**: para gerar um link de pagamento.
* **Voucher**: pagamento com cartões Sodexo.

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |