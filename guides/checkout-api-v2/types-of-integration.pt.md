# Tipos de integração

A integração com o Checkout Transparente pode ser feita utilizando procedimentos diferentes que variam de acordo com o conhecimento técnico e necessidade de negócio. Veja a tabela abaixo com o detalhamento de cada uma das opções disponíveis.

----[mlb]---- 
| Tipo de integração  | Meios de pagamento  | Complexidade a nível frontend  | User interface (UI)  |
| --- | --- | --- | --- | 
| [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing) | Crédito, débito virtual Caixa, Pix, boleto, pagamento em lotérica e Conta Mercado Pago | Fácil  | Componentes com UI já definida e que pode ser personalizada caso necessário.  | 
| [Cardform](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Todos os meios disponíveis  | Médio  | Formulário sem estilizações para começar as configurações do zero.  | 
|  [Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)  | Todos os meios disponíveis  | Alto | Crie seu formulário e suas estilizações  | 

------------

----[mla]---- 
| Tipo de integração  | Meios de pagamento  | Complexidade a nível frontend  | User interface (UI)  |
| --- | --- | --- | --- | 
| [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)  | Crédito, débito, Pago Fácil, Rapipago e Conta Mercado Pago | Fácil  | Componentes com UI já definida e que pode ser personalizada caso necessário.  | 
| [Cardform](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Todos os meios disponíveis  | Médio  | Formulário sem estilizações para começar as configurações do zero.  | 
|  [Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)  | Todos os meios disponíveis  | Alto | Crie seu formulário e suas estilizações  | 

------------

----[mlm, mpe, mco, mlu, mlc]---- 
| Tipo de integração  | Meios de pagamento  | Complexidade a nível frontend  | User interface (UI)  |
| --- | --- | --- | --- | 
| [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)  | Crédito, débito e Conta Mercado Pago  | Fácil  | Componentes com UI já definida e que pode ser personalizada caso necessário.  | 
| [Cardform](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Todos os meios disponíveis  | Médio  | Formulário sem estilizações para começar as configurações do zero.  | 
|  [Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)  | Todos os meios disponíveis  | Alto | Crie seu formulário e suas estilizações  | 

------------

Os três tipos de integração citados anteriormente são elegíveis a **certificação PCI SAQ A**. Isso porque os **dados de cartão**, **CVV** e **data de expiração** trafegam através de um iframe diretamente aos servidores do Mercado Pago, que impedem que os dados PCI (número do cartão, código de segurança e data de vencimento) sejam acessíveis a terceiros.

> NOTE
>
> Importante
>
> Para ser elegível ao PCI SAQ A é necessário que sua integração seja feita utilizando Secure Fields (Campos de cartão em formato Iframe). 

Além dos meios de pagamento mostrados na tabela acima, também é possível oferecer outras formas de pagamento. Para obter uma lista detalhada com todos as opções disponíveis para integração, envie um **GET** ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição. Na resposta você terá acesso a cada uma das opções.

