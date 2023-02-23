> CLIENT_SIDE
>
> h1
>
> Alterar visual

## Propriedades de estilo

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Tipo | String |
| Observações | Ao enviar uma propriedade vazia, a tela apresentará o visual definido pelo layout padrão. Por outro lado, ao se enviar um valor customizado, este substituirá o valor padrão. Para verificar quais são os valores padrões, veja a tabela a seguir.|

| Chave | Opções disponíveis | Padrão | Observações |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máximo: livre escolha. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: livre escolha. |

```javascript
const settings = {
    ...,
    customization: {
         visual: {
             buttonBackground: 'black',
             borderRadius: '16px',
         },
    },
}
```

## Ocultar texto da proposta de valor

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.hideValueProp |
| Tipo | Boolean |
| Observações | Quando `true`, oculta o texto da proposta de valor (fica abaixo do botão).|

```javascript
const settings = {
    ...,
    customization: {
         visual: {
             hideValueProp: true
         },
    },
}
```