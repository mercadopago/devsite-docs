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

* [Ligar e desligar](/developers/pt/docs/mp-point/mini-apps/bluetooth/commands#bookmark_ligar_e_desligar)
* [Obter status](/developers/pt/docs/mp-point/mini-apps/bluetooth/commands#bookmark_obter_status)
* [Descobrir dispositivos (emparelhados e para emparelhamento)](/developers/pt/docs/mp-point/mini-apps/bluetooth/commands#bookmark_descobrir_dispositivos_(emparelhados_e_para_emparelhamento))
* [Emparelhar e desemparelhar um dispositivo](/developers/pt/docs/mp-point/mini-apps/bluetooth/commands#bookmark_emparelhar_e_desemparelhar_um_dispositivo)
* [Imprimir utlizando impressora Bluetooth](/developers/pt/docs/mp-point/mini-apps/bluetooth/commands#bookmark_imprimir_utlizando_impressora_bluetooth)