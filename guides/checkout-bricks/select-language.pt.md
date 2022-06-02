> CLIENT_SIDE
>
> h1
>
> Selecionar idioma 

Você pode selecionar o idioma do brick de duas formas diferentes: no momento da inicialização ou via SDK.

## Selecionar idioma ao inicializar

Para selecionar o idioma ao inicializar o brick, insira o código abaixo em seu projeto atentando-se ao parâmetro `locale`, que deverá ser preenchido com o idioma definido seguindo o seguinte padrão: `es` , `pt-BR`  e `en` para espanhol, português e inglês, respectivamente.

```javascript
const settings = {
    ...,
    locale: 'en',
}
```

## Selecionar idioma via SDK

Para selecionar o idioma via SDK, insira o código abaixo em seu projeto e preencha o parâmetro `locale` com o idioma desejado seguindo o padrão exibido na tabela a seguir.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
  locale: 'en-US',
})
```

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

> PREV_STEP_CARD_PT
>
> Alterar textos
>
> Caso deseje, veja como alterar os textos do layout escolhido no Card Payment Brick
>
> [Alterar textos](/developers/pt/docs/checkout-bricks/additional-customization/modify-texts)

> NEXT_STEP_CARD_PT
>
> Possíveis erros
>
> Saiba quais são os possíveis erros exibidos ao integrador no momento de instanciar o Brick.
>
> [Possíveis erros](/developers/pt/docs/checkout-bricks/additional-content/possible-errors)