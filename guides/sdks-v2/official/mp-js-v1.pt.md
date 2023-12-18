---
content_section_with_media: 
 - title: MercadoPago.js  V1
 - message: Esta é a primeira versão do SDK que já foi descontinuada. Por favor, refira-se à documentação do MercadoPago.js V2.
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Navegadores compatíveis <<<<

![compatible navigators](sdk/mp-jsv1.png) 

--- mini_landing_separator ---

>>>> Instalação <<<<

Para instalar o SDK de frontend, você deve incluir o MercadoPago.js no HTML da sua aplicação conforme o código abaixo.

[[[
```javascript
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```
]]]

Em seguida, você deve adicionar a Public key da conta que você está integrando para que ela possa ser identificada ao conectar com o Mercado Pago.

[[[
```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```
]]]

> Saiba mais sobre a public key em [Credenciais.](/developers/pt/docs/your-integrations/credentials)