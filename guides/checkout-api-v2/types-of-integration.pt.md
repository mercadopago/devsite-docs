# Tipos de integração

Nossa integração com o Checkout Transparente permite o processamento de pagamentos através de diversos meios de pagamentos.

A integração pode ser feita utilizando procedimentos diferentes que variam de acordo com o conhecimento técnico e necessidade de negócio.Veja a tabela abaixo com o detalhamento de cada uma das opções disponíveis.

> NOTE
>
> Importante
>
> Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um GET ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição. Na resposta você terá acesso a cada uma das opções.


 Meio de pagamento  | Tipo de integração  | Nível de dificuldade  | Personalização de UI  | 
| --- | --- | --- | --- | 
| Cartão de crédito e/ou débito  | [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)  | Fácil  | Oferece componentes de UI parcialmente personalizáveis.  | 
| Cartão de crédito e/ou débito  |  [Cardform](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Médio  | Oferece componentes de UI parcialmente personalizáveis.  | 
| Cartão de crédito e/ou débito  | [Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)   | Alto  | Oferece componentes de UI totalmente personalizáveis  | 


> NEXT_STEP_CARD_PT
>
> Pré-requisitos
>
> Veja os pré-requisitos necessários para integrar o Checkout Transparente.
>
> [Integrar Checkout Transparente](/developers/pt/docs/checkout-api/prerequisites)
