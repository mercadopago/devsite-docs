# Acessar configurações

Use o método `launch` da classe `BluetoothUiSettings` para iniciar a atividade de configurações de bluetooth do Mercado Pago. Esse componente proporciona diversas funcionalidades, como ativar e desativar, buscar dispositivos, emparelhar e desemparelhar, entre outras. Confira como acessá-lo.

[[[
```kotlin
val bluetoothUiSettings = MPManager.bluetoothUiSettings

bluetoothUiSettings.launch(context)
```
```java
final BluetoothUiSettings bluetoothUiSettings = MPManager.INSTANCE.getBluetoothUiSettings();

bluetoothUiSettings.launch(context);
```
]]]

|Campo|Descrição|
|---|---|
|**context (Context)**| Deve ser o contexto do aplicativo e é obrigatório para iniciar a atividade.|