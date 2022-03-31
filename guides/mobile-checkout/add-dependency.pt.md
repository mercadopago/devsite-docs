# Adicione a dependência ao seu projeto

[[[
```android
===
No arquivo **build.gradle** insira o código a seguir.
Opcionalmente, você pode [baixar o SDK](https://github.com/mercadopago/px-android/releases) e adicioná-lo ao seu projeto.
===
dependencies {
   implementation 'com.mercadopago.android.px:checkout:4.+'
}
```
```ios
===
Caso utilize **CocoaPods** em seu projeto, você pode adicionar a dependência no ** Podfile** do módulo que nos integra com o código a seguir.
Opcionalmente, você pode [baixar o SDK](https://github.com/mercadopago/px-ios/releases) e adicioná-lo ao seu projeto.
===
source 'https://github.com/CocoaPods/Specs.git'
# Este parâmetro é necessário por ser um SDK em Swift
use_frameworks!
platform :ios, '8.0'
pod 'MercadoPagoSDK'
```
]]]

> NOTE
>
> Nota
>
> Se você tiver a versão 3.x do Mobile Checkout integrada, pode visitar a [documentação de integração da versão 3](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/mobile-checkout/v3/introduction).<br>
> Lembre-se de que o suporte ativo é fornecido apenas para a versão principal mais recente e suporte passivo para o anterior, por isso recomendamos uma migração para a nova versão.

Pode-se encontrar a referência dos métodos nos seguintes links: [Documentação
 Android](https://mercadopago.github.io/px-android/) - [Documentação iOS](https://mercadopago.github.io/px-ios/v4/)