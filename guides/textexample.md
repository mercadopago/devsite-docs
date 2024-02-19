# Example Markdown Components

Lorem markdownum collo fuit corpore, **quod anhelanti artisque** virga concustodita.

1. In quam
2. Congelat muta
3. Castris sic causas et volumine unicus
4. Iam omnes illius cohibentur clamor stridentemque comitum
5. Tuorum cursus usum

## Flores litora ait auso alta rostro deposuit

Quod longi meos nec auctor [libera annis](http://www.hosti.com/sceptroque.html)

## RENDERS

### NOTE RENDER

> NOTE
>
> Important
>
> Please note that in order to obtain the Integrator ID, you must complete at least one certification test.

### GIT RENDER

> GIT
>
> Checkout API
>
> For complete code samples, check out the [Full Integration Examples](https://github.com/mercadopago/card-payment-sample)

### CHANGELOG COMPONENT (DEPRECATED)

> CHANGELOG
>
> New PrestaShop plugin version
>
> NEW_VERSION: NEW VERSION
>
> PRODUCT: PRESTASHOP

### SERVER SIDE COMPONENT

> SERVER_SIDE
>
> h2
>
> Send payment

### CLIENT SIDE COMPONENT

> CLIENT_SIDE
>
> h1
>
> Data entry errors

### NEXT STEP CARD COMPONENT (DEPRECATED)

> LEFT_BUTTON_RECOMMENDED_EN
>
> Generating from Mercado Pago
>
> Download your reports manually or scheduled from your Mercado Pago account.
>
> [Generating from Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/account-money/panel)

// 'LEFT_BUTTON', 'LEFT_BUTTON_REQUIRED_ES', 'LEFT_BUTTON_REQUIRED_PT', 'LEFT_BUTTON_REQUIRED_EN', 'LEFT_BUTTON_RECOMMENDED_ES', 'LEFT_BUTTON_RECOMMENDED_EN', 'LEFT_BUTTON_RECOMMENDED_PT', 'RIGHT_BUTTON', 'RIGHT_BUTTON_REQUIRED_ES', 'RIGHT_BUTTON_REQUIRED_EN', 'RIGHT_BUTTON_REQUIRED_PT', 'RIGHT_BUTTON_RECOMMENDED_ES', 'RIGHT_BUTTON_RECOMMENDED_PT', 'RIGHT_BUTTON_RECOMMENDED_EN', 'NEXT_STEP_CARD_ES', 'PREV_STEP_CARD_ES', 'NEXT_STEP_CARD_PT', 'PREV_STEP_CARD_PT', 'NEXT_STEP_CARD_EN', 'PREV_STEP_CARD_EN', 'RELATED_DOCS_ES', 'RELATED_DOCS_EN', 'RELATED_DOCS_PT'

### CodeBlockCustomRenderer

MD031/blanks-around-fences: Fenced code blocks should be surrounded by blank lines

[[[
```php
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago\SDK::setPlatformId("PLATFORM_ID");
MercadoPago\SDK::setIntegratorId("INTEGRATOR_ID");
```
```node
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
mercadopago.configure({
    platform_id: 'PLATFORM_ID',
    integrator_id: 'INTEGRATOR_ID',
});
```
```java
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPago.SDK.setPlatformId("PLATFORM_ID");
MercadoPago.SDK.setIntegratorId("INTEGRATOR_ID");
```
```ruby
===
Agrega los códigos de identificación y reemplaza por el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
request_options = Mercadopago::RequestOptions.new()
request_options.platform_id = 'PLATFORM_ID'
request_options.integrator_id = 'INTEGRATOR_ID'
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN', request_options: request_options)
```
```csharp
===
Agrega los códigos de identificación y reemplaza los valores que quieras: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
MercadoPagoConfig.PlatformId    = "PLATFORM_ID";
MercadoPagoConfig.IntegratorId  = "INTEGRATOR_ID";
```
```python
===
Agrega los códigos de identificación y reemplaza lpor el valor necesario: <code>INTEGRATOR\_ID</code> y <code>PLATFORM_ID</code>.
===
import mercadopago
from mercadopago.config import RequestOptions
request_options = RequestOptions(
    integrator_id="INTEGRATOR_ID",
    platform_id="PLATFORM_ID"
)
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN", request_options=request_options)
```
]]]

### HeadingsCustomRenderer

### LinkCustomRenderer

### CUSTOM PARAGRAPH RENDER

### TableCustomRenderer

## PARSERS

### SitesSupportedParser

---
sites_supported:
- mla
---

<!--- const SitesSupportedParserDetectorRegex = /(---\n(\s)*sites_supported:)(.*?)(---)/gs; -->

### FakersParser

[Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

<!--- const fakersParserDetectorRegex = /\[FAKER\]\[(?<CATEGORY>[\w]+)\]\[(?<METHOD>[\w_-]+)\](\[(?<PARAMS>[\w\s,']+)\])*/g; -->

### LocalContentParser

----[mlb]----

- **Boleto bancário**: If the expiry date of a boleto bancário expires, the user can generate it again by entering the transaction ID of their Mercado Pago account. However, if you want to avoid stock retention problems, for example, you can choose not to make a new issue of this slip available. To do this, simply cancel it.

------------

<!--- const localContentParserDetectorRegex = /(----\[((mla|mlb|mlm|mlc|mlu|mpe|mco|mlv)(,\s)?)+\]----)(.*?)(------------)/gs; -->

### MultiLangSnippetsParser

// See Custom Code Render

### IndexableParser (DEPRECATED)
<!--- const IndexableParserDetectorRegex = /(---\n((\s)*description:(.)*\n)?(\s)*indexable:)(.*?)\n*(---)/gs; -->

---
indexable: false

---

### CentralizeTextParser
<!--- const CentralizeTextParserDetectorRegex = />>>>(?<contentText>.*?)<<<</gms; -->

>>>> Availability by country <<<<

## MINILANDING PARSERS

### BulletContentWithImageParser
<!--- const ContentParserDetectorRegex = /(---\n(\s)*bullet_section_with_media:)(?<info>.*?)(---)/gms; -->

---
bullet_section_with_media:
- type: normal
- title: Start integrating with your Mercado Pago account
- message:
- image: /getting-started/credenciales.png
---

### ContentWithImageVideoParser
<!--- const ContentParserDetectorRegex = /(---\n(\s)*content_section_with_media:)(?<info>.*?)(---)/gms; -->

---
content_section_with_media:
- title: Getting started
- message: First time integrating Mercado Pago's payment solutions? In this documentation, you will find the information you need to get started.
- media_image: /getting-started/women-dev.png
---

### CountryAvailablesParser
<!--- const CountryAvailablesParserDetectorRegex = /(---\n(\s)*available_countries:)(?<sites>.*?)(---)/gms; -->

---
available_countries: mla, mlb, mlm, mlu, mco, mlc, mpe

---

### CustomSeparatorParser
<!--- return input.replace(/--- mini_landing_separator ---/gm, htmlContent) -->

--- mini_landing_separator ---

### FutureProductAvaibleParser
<!--- const ContentParserDetectorRegex = /(---\n(\s)*future_product_avaible:)(?<info>.*?)(---)/gms; -->

---
future_product_avaible:
- card_avaible: true
- card_icon: Card
- card_title: Checkout Pro para Web
- card_description: Ofrece diferentes medios de pago a los clientes en una web de manera simple, rápida y segura.
- card_button:  /developers/es/docs/checkout-pro/integrate-checkout-pro/web
- card_buttonDescription: Integrar
- card_pillText: DISPONIBLE
- card_linkAvailable: false
- card_linkProof:
- card_linkProofDescription:
- card_avaible: true
- card_icon: Loading
- card_title: Checkout Pro para Mobile
- card_description: Ofrece diferentes medios de pago a los clientes en tu aplicación mobile utilizando el lenguaje que más se adapte a tu proyecto.
- card_button: /developers/es/docs/checkout-pro/integrate-checkout-pro/mobile
- card_buttonDescription: Integrar
- card_pillText: DISPONIBLE
- card_linkAvailable: false
- card_linkProof:
- card_linkProofDescription:
---

### LiveDemoCodeAction
<!--- const ContentParserDetectorRegex = /(---\n(\s)*live_demo_code_action:)(?<info>.*?)(---)/gms; -->

---
live_demo_code_action:
- title: Try our Brick
- description: Build visual experiences in real time. When you are ready, download or copy the generated code to add to your website or share with a developer.
- link: /developers/en/live-demo/card-payment-brick
- image:[https://http2.mlstatic.com/frontend-assets/dx-devsite/images/card-payment-brick.png]
- linkName: Demo
- buttonDescription: Build your Card Payment Brick
---

### PaymentAvailablesParser
<!--- const PaymentAvailablesParserDetectorRegex = /(---\n(\s)*available_payments:)(?<payments>.*?)(---)/gms; -->

---
available_payments: credit, efectivo

----

### WrapperAnchored
<!--- const ContentParserDetectorRegex = /(---\n(\s)*anchored_menu:)(?<info>.*?)(---)/gms; -->

---
anchored_menu:
- title: Card Payment Brick
- link: /developers/en/live-demo/card-payment-brick
- title: Payment Brick
- link: /developers/en/live-demo/payment-brick
- title: Status Screen Brick
- link: /developers/en/live-demo/status-screen-brick
- title: Wallet Brick
- link: /developers/en/live-JANEIRO/wallet-brick
---

## SPECIAL CASE

### Text Snippet

[TXTSNIPPET][/guides/snippets/test-integration/refunds]

talvez JANEIRO eu vá

talvez JANEIRO eu vá

talvez Janeiro eu vá
talvez Janeiro eu vá

Talvez janeiro eu vá
talvez JAneiro eu vá

talvez janeiro eu vá

talvez janeiro eu vá

asdasd

asdadasexasd aaa
