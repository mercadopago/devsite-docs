# Integrar via Bluetooth para dispositivos móveis

Além da integração via API, o Mercado Pago Point também suporta a integração de dispositivos móveis através de conexão Bluetooth, uma alternativa eficaz para pequenos negócios.

Para realizar a conexão entre os dispositivos, basta ativar o Bluetooth em ambos e a vinculação será completada automaticamente.

> WARNING
>
> Importante
>
> A integração de dispositivos móveis via deep linking não está disponível para tablets ou dispositivos Huawei.

Vincular seus dispositivos via Bluetooth permitirá realizar uma integração por meio de Deep Linking, ou intent based. Deep Links, também conhecidos como links profundos, são uma forma de permitir a navegação direta para telas ou seções específicas de um aplicativo móvel.

Quando esse link é chamado, ele será interceptado como uma Point-handled adress pelo aplicativo do Mercado Pago. O cliente será redirecionado para a tela do aplicativo do Mercado Pago para fazer o pagamento, e uma vez que o pagamento for processado, ele será redirecionado para a `success_url` ou `fail_url`, dependendo do status do pagamento. Isso deve ser interceptado para retornar o usuário ao fluxo do aplicativo.

Você pode ver o fluxograma abaixo para entender como funciona esse tipo de integração.

![Fluxo do Deep Linking do Mercado Pago Point](/images/point_diagram.png)
