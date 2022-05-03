## Selecionar idioma

Você pode selecionar o idioma do brick de duas formas diferentes: no momento da inicialização ou via SDK.

### Selecionar idioma ao inicializar

Para selecionar o idioma ao inicializar o brick, insira o código abaixo em seu projeto atentando-se ao parâmetro `locale`, que deverá ser preenchido com o idioma definido seguindo o seguinte padrão: `es` , `pt-BR`  e `en` para espanhol, português e inglês, respectivamente.

[[[
```javascript
const settings = {
    initialization: {
        amount,
    },
    callbacks: {
        onSubmit: (data) => {
            // callback chamado o usuário clicar no botão de submissão dos dados
        },
        onReady: (error) => {
            // callback chamado quando o Brick estiver pronto
        },
        onError: (error) => {
            // callback chamado para todos os casos de erro do Brick
        },
    },
    locale: language,
}
const bricks = mp.bricks();
const cardPayment = await bricks.create('cardPayment', settings);
```
]]]

### Selecionar idioma via SDK

Para selecionar o idioma via SDK, insira o código abaixo em seu projeto e preencha o parâmetro `locale` com o idioma desejado seguindo o padrão exibido na tabela a seguir.

[[[
```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY', {

  locale: 'en-US',

})
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
