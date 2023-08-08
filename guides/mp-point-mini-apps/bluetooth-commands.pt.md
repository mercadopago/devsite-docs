# Comandos disponíveis

Veja abaixo quais são os comandos disponíveis para conectar via bluetooth um dispositivo externo compatível.

## Ligar e desligar

Para ligar e desligar um dispositivo bluetooth a partir de um MiniApp, o comando JS `bluetooth_enable` deve ser executado enviando uma ação como parâmetro para indicar a `action` a ser realizada.

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| action | string | true | on <br><br> off | Liga ou desliga o dispositivo bluetooth. |

Se o comando for bem-sucedido, o retorno de chamada enviará um valor `success`.

Exemplo de requisição:

```javascript
MobileWebKit.executeNative(
   {
       "method": 'bluetooth_enable',
       "args": {"action": on},
       "callback": function (result, error) {
           if (result === "success") {
               //  Escreva o código com sucesso aqui
           }
       }
   }
)
```

## Obter status

Para saber se o bluetooth está ativado ou não no MiniApp, você deve executar o comando JS `bluetooth_status` em que o resultado é um boolean que indica se está ativado.

Exemplo de código:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_status',
            "args": {},
            "callback": function (isOn, error) {
                if (isOn) {
                    // Escreva o código aqui se o bluetooth estiver ligado

                } else {
                    // Escreva o código aqui se o bluetooth estiver desligado

                }
            }
        }
    )
```

## Descobrir dispositivos (emparelhados e para emparelhamento)

Para descobrir os dispositivos visíveis para iniciar um emparelhamento, o comando JS `bluetooth_devices` deve ser executado através do envio do parâmetro `state` com o valor de `all` e, para listar os dispositivos pareados, o comando JS `bluetooth_devices` deve ser executado enviando o parâmetro `state` com o valor de `paired`.

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| state | string | true | all <br><br> paired | Lista os dispositivos visíveis. |
| devices | list | - | - | Retorna uma lista de dados do dispositivo, como: id, nome e endereço MAC. |
| id | string | - | - | Identificador exclusivo associado ao dispositivo. Este ID é gerado aleatoriamente pelo superAPP. |
| name | string | - | - | Indica o nome associado ao dispositivo. |
| address | string | - | - | Indica o endereço MAC do dispositivo.|

Exemplo de código:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_devices',
            "args": {"state": state},
            "callback": function (result, error) {

                if (error != null) {
                    // Ocorreu um erro
                    return
                }

                let status = result["status"];
                let devices = result["devices"];

                for (let i = 0; i < devices.length; i++) {
                    let device = devices[i];
                    // Dados do dispositivo
                    let id = device["id"];
                    let name = device["name"];
                    let address = device["address"];
                    // Escreva seu código aqui para cada dispositivo
                }
            }
        }
```

## Emparelhar e desemparelhar um dispositivo

Para emparelhar um dispositivo, execute o comando JS `bluetooth_pair_request` enviando o ID do dispositivo fornecido pelo comando de descobrir dispositivos (`bluetooth_devices`).

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | O ID do dispositivo a ser emparelhado. |

Exemplo de código:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_pair_request',
            "args": {
                "id": id
            },
            "callback": function (result, error) {
                if (result === "success") {
                    // Escreva seu código aqui
            }
        }
    )
```

Para desemparelhar um dispositivo, execute o comando JS `bluetooth_pair_request` enviando o ID do dispositivo fornecido pelo comando de descobrir dispositivos (`bluetooth_devices`).

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | O ID do dispositivo a ser desemparelhado. |

Exemplo de código:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_unpair',
            "args": {
                "id": id
            },
            "callback": function (result, error) {
                if (result === "success") {
                    // Escreva seu código aqui
                }
            }
        }
    )
```

## Imprimir utlizando impressora Bluetooth

Para emparelhar uma impressora, execute o comando JS `bluetooth_printer_devices` como no exemplo abaixo.

```javascript
MobileWebKit.executeNative({
            "method": 'bluetooth_printer_devices',
            "args": {},
            "callback": callback
})
```

Com a impressora emparelhada, execute o comando JS `bluetooth_print` para imprimir nesta impressora. Envie o ID da impressora fornecido pelo comando de descobrir dispositivos (`bluetooth_devices`) e o texto a ser impresso.

| Parâmetro  | Tipo  | Obrigatório | Valores possíveis | Descrição |
| --- | --- | --- | --- | --- |
| id | string | true | printerDeviceId | ID de impressora válido. |
| data | string | true | texto | Dados a serem impressos.|

Exemplo de código:

```javascript
function printData(data, printerDeviceId)  {
    MobileWebKit.executeNative({
	     "method": 'bluetooth_print',
         "args": {
             "id": printerDeviceId,
             "data": data
         },
         "callback": function (result, erros) {
             console.log("Print Result: " + result + ", Error: + error);
         }
    })
}
```