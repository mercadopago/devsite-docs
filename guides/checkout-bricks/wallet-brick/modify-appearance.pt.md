> CLIENT_SIDE
>
> h1
>
> Alterar visual

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding} |
| Tipo | String |
| Observações | Ao enviar uma propriedade vazia, a tela apresentará o visual definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a tabela a seguir.|

| Chave | Opções disponíveis | Padrão | Observações |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máximo: livre escolha. |

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