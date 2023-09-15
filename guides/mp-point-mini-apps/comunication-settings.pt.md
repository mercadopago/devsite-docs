# Comunicação com Mercado Pago

Para se comunicar com o aplicativo do Mercado Pago, o mini app deve utilizar alguns comandos que estarão disponíveis para uso somente após o carregamento do mini app. Veja mais informações na seção [Ciclo de vida dos mini apps](/developers/pt/docs/mini-apps/introduction/lifecycle).

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

* [Comando: back](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_back) 
* [Comando: close](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_close)
* [Comando: history](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_history)
* [Comando: info_device](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_info_device)
* [Comando: clear_history](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_clear_history)
* [Iniciar fluxo de pagamento (payment_flow)](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_iniciar_fluxo_de_pagamento_(payment_flow))
* [Iniciar método de pagamento (payment_flow)](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_iniciar_método_de_pagamento_(payment_flow))
* [Acessar métodos de pagamento disponíveis (payment_methods)](/developers/pt/docs/mini-apps/comunication-mercado-pago/commands#bookmark_acessar_métodos_de_pagamento_disponíveis_(payment_methods))