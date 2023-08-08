# Configurações de bluetooth

Para iniciar a tela de configurações do bluetooth, chame a função `launchBluetoothSettings` como no exemplo abaixo.

> Os tipos de dispositivos bluetooth permitidos são: **teclados**, **leitores de códigos de barras** e **impressoras**.

```javascript
launchBluetoothSettings(callbackResult)
function callbackResult(result, error) {
   if (result == 'success') {
       // Chamada de sucesso
   } else {
       //'error' tem informação detalhada do erro
   }
}
```

Clique nas seções a seguir para mais informações sobre as comandos disponiveis.

* [Ligar e desligar]()
* [Obter status]()
* [Descobrir dispositivos (emparelhados e para emparelhamento)]()
* [Emparelhar e desemparelhar um dispositivo]()
* [Imprimir utlizando impressora Bluetooth]()