# Comunicação com Mercado Pago

Para se comunicar com o aplicativo do Mercado Pago, o Mini App deve utilizar alguns comandos que estarão disponíveis para uso somente após o carregamento do Mini App. Veja mais informações na seção [Ciclo de vida dos MiniApps](/developers/pt/docs/mp-point/mini-apps/introduction/lifecycle).

Todos os comandos disponíveis suportam os seguintes parâmetros:

| Parâmetro  | Tipo  | Obrigatório  | Valores possíveis |
| --- | --- | --- | --- |
| method | string | sim | set_title <br><br> payment_flow | 
| args |  JSON object | depende do método | qualquer objeto JSON | 
| callback | function | não | function <br><br> (result, error) | 

Exemplo de código:

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

Clique nas seções a seguir para mais informações sobre os comandos disponiveis.

* [Comando: back]() 
* [Comando: close]()
* [Comando: history]()
* [Comando: info_device]()
* [Comando: clear_history]()
* [Iniciar fluxo de pagamento (payment_flow)]()
* [Iniciar método de pagamento (payment_flow)]()
* [Acessar métodos de pagamento disponíveis (payment_methods)]()