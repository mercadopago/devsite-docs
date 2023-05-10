> CLIENT_SIDE
>
> h1
>
> Selecionar idioma 

Você pode selecionar o idioma do Brick de duas formas diferentes: no momento da inicialização ou via SDK.

## Selecionar idioma ao inicializar

Para selecionar o idioma ao inicializar o Brick, insira o código abaixo em seu projeto atentando-se ao parâmetro `locale`, que deverá ser preenchido com o idioma definido seguindo o seguinte padrão: `es` , `pt-BR`  e `en` para espanhol, português e inglês, respectivamente.

[[[
```Javascript
const settings = {
    ...,
    locale: 'en',
}
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY', {locale: 'pt-BR'});
```
]]]

## Selecionar idioma via SDK

Para selecionar o idioma via SDK, insira o código abaixo em seu projeto e preencha o parâmetro `locale` com o idioma desejado seguindo o padrão exibido na tabela a seguir.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  locale: 'en-US',
})
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY', {locale: 'pt-BR'});
```
]]]

| Idioma | País | Valor |
|--- |--- |--- |
| Espanhol | Argentina | 'es-AR' |
| Espanhol | Chile | 'es-CL' |
| Espanhol | Colômbia | 'es-CO' |
| Espanhol | México | ​​'es-MX' |
| Espanhol | Venezuela | 'es-VE' |
| Espanhol | Uruguai | 'es-UY' |
| Espanhol | Peru | 'es-PE' |
| Português | Brasil | 'pt-BR' |
| Inglês | Estados Unidos | 'en-US' |