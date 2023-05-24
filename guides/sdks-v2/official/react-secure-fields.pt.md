# Secure Fields

Secure Fields são inputs seguros para a coleta de dados de cartão, que permitem a integração com cartões de crédito e débito sem a necessidade de tratar dados sensíveis, o que facilita a obtenção do certificado PCI Compliance.

Abaixo listamos os campos disponibilizados pela SDK.

| Campo | Descrição |
|---|---|
| CardNumber | Número do cartão |
| SecurityCode | Código de segurança do cartão |
| ExpirationDate | Data de expiração do cartão (pode ser MM/AA ou MM/AAAA) |
| ExpirationMonth | Mês de expiração do cartão |
| ExpirationYear | Ano de expiração do cartão (pode ser AA ou AAAA) |

A seguir, um exemplo de como é possível utilizá-los:

[[[
```react-jsx
import { initMercadoPago, CardNumber } from '@mercadopago/sdk-react'

initMercadoPago('<YOUR_PUBLIC_KEY>');

const App = () => {
 return (
   <CardNumber />
 );
};

export default App;

```
]]]

> NOTE
>
> Importante
>
> Para mais informações sobre a utilização dos Secure Fields, consulte a [SDK de React](https://github.com/mercadopago/sdk-react).
