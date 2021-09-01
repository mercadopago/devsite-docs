# Mobile Checkout

Os SDKs do Mercado Pago facilitam a criação de uma experiência de pagamento na sua aplicação. Instantaneamente você oferece aos seus usuários:


----[mla, mpe, mlb, mlm]----
- Pagamentos com cartão, dinheiro ou transferência bancária.
- **Financiamento**: parcelas com o melhor financiamento possível.
- Descontos e promoções.
- Comunicação do resultado dos pagamentos.
------------
----[mlc, mlv, mco]----
- Pagamentos com cartão.
- **Financiamento**: parcelas com o melhor financiamento possível.
- Descontos e promoções.
- Comunicação do resultado dos pagamentos.
------------


Todos os nossos pagamentos são analisados por nossa ferramenta de prevenção de fraudes para minimizar o risco em suas transações.

## Uma experiência, todas as plataformas

Ofereça aos seus usuários a melhor experiência de pagamento, tanto no Android como no iOS.

![Mercado Pago sdk android](/images/mobile-sdk-flow.png)

### Integrar o checkout é muito fácil:

1. Inclua o SDK em seu projeto.
2. Insira suas [credenciais]([FAKER][CREDENTIALS][URL]) e crie a preferência de pagamentos.
3. Inicie o processo de pagamento a partir de um botão em sua aplicação.
4. Receba as notificações de pagamento que lhe enviamos.

> Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações. 

## Adicione a dependência ao seu projeto
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
