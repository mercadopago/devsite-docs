---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
    - global
---
# Mobile Checkout

Os SDKs do Mercado Pago facilitam a criação de uma experiência de pagamento na sua aplicação. Instantaneamente você oferece aos seus usuários:


----[mla, mpe, mlb, mlm, global]----
- Pagamentos com cartão, dinheiro ou transferência bancária.
- **Financiamento**: parcelas com o melhor financiamento possível.
- Descontos e promoções.
- Comunicação do resultado dos pagamentos.
------------
----[mlc, mco]----
- Pagamentos com cartão.
- **Financiamento**: parcelas com o melhor financiamento possível.
- Descontos e promoções.
- Comunicação do resultado dos pagamentos.
------------


Todos os nossos pagamentos são analisados por nossa ferramenta de prevenção de fraudes para minimizar o risco em suas transações.

## Uma experiência, todas as plataformas

Ofereça aos seus usuários a melhor experiência de pagamento, tanto no Android como no iOS.

![androidiosfinal](/images/mobile-sdk-flow.png)

### Integrar o checkout é muito fácil:

1. Inclua o SDK em seu projeto.
2. Insira suas credenciais e crie a preferência de pagamentos.
3. Inicie o processo de pagamento a partir de um botão em sua aplicação.
4. Receba as notificações de pagamento que lhe enviamos.

## Adicione a dependência ao seu projeto
[[[
```android
===
No arquivo **build.gradle** insira o código a seguir.
Opcionalmente, você pode [baixar o SDK](https://github.com/mercadopago/px-android/releases) e adicioná-lo ao seu projeto.
===
dependencies {
   compile 'com.mercadopago:sdk:3.8.1'
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
pod 'MercadoPagoSDK', '3.7.2'
```
]]]
