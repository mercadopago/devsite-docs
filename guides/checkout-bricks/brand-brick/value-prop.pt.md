# Proposta de valor (value prop)

O conteúdo textual exibido dentro do banner e do pop-up depende da escolha de uma **_value prop_** (proposta de valor).

Há quatro value props disponíveis para uso e cada uma possibilita determinadas customizações. A tabela abaixo exibe como cada value prop impacta nas mensagens exibidas no banner: 

| Value prop | Mensagem no banner |
|---|---|
|`payment_methods` (padrão)| Logo Mercado Pago + "Pague com [meio de pagamento] ou saldo disponível no Mercado Pago. Saiba mais" (link para pop-up)|
|`payment_methods_logos`|Logos + "Meios de pagamento disponíveis com o Mercado Pago. Saiba mais" (link para pop-up)|
|`installments`|Logo Mercado Pago + "Em até 12x sem acréscimos com o Mercado Pago. Saiba mais" (link para pop-up)|
|`security`|Logo Mercado Pago + "Pague de um jeito seguro com o Mercado Pago"|
|`credits`|Logo Mercado Pago + "Até 12x sem cartão com o Mercado Pago. Saiba mais" (link para pop-up)|

As customizações são passadas para o Brick através do objeto abaixo, que deve ser enviado como terceiro parâmetro no método `create()`.

[[[
```javascript
const settings = {
    customization: {
      text: {
        valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_logos"
      },
    },
  };
```
```react-jsx
const customization = {
   text: {
   valueProp: "payment_methods", // optional "installments" | "payment_methods" | "security" | "payment_methods_logos"
    },
};
```
]]]