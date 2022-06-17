# Tipos de integração

A integração com checkout transparente pode ser feita utilizando procedimentos diferentes que variam de acordo com o conhecimento técnico e necessidade de negócio.Veja a tabela abaixo com o detalhamento de cada uma das opções disponíveis.

> NOTE
>
> Importante
>
> Para obter uma lista detalhada com todos os meios de pagamento disponíveis para integração, envie um GET ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get) e execute a requisição. Na resposta você terá acesso a cada uma das opções.



| Tipo de integração  | Meios de pagamento  | Complexidade a nível frontend  | Conversão otimizada  | User interface (UI)  | Conformidade PCI   |
| --- | --- | --- | --- | --- | --- |
| [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)  | Débito e Crédito  | Fácil  | Sim  | Componentes com UI já definida e que pode ser personalizada caso necessário.  | PCI SAQ A  |
| [Cardform](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Todos os meios disponíveis  | Médio  | Não  | Formulário sem estilizações para começar as configurações do zero.  | Elegível a PCI SAQ A com Secure Fields  |
|  [Métodos Core](/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)  | Todos os meios disponíveis  | Alto  | Não  | Crie seu formulário e suas estilizações  | Elegível a PCI SAQ A com Secure Fields  |




> NEXT_STEP_CARD_PT
>
> Pré-requisitos
>
> Veja os pré-requisitos necessários para integrar o Checkout Transparente.
>
> [Integrar Checkout Transparente](/developers/pt/docs/checkout-api/prerequisites)
