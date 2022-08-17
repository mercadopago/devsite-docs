# Tipos de integração

É possível utilizar Point de duas formas:

* **Não integrada:** Neste modelo, o vendedor insere manualmente os dados para pagamento e em seguida, insere o cartão do comprador na maquininha Point. Após essas etapas, o vendedor seguirá os próximos passos com base nas instruções exibidas no aplicativo do Mercado Pago. Para oferecer pagamentos com Point de maneira não integrada, veja a seção [Como utilizar point sem integração](/developers/pt/docs/mp-point/how-tos/how-to-use-point-without-integration). <br><br>
* **Integrada:** Neste modelo, o vendedor dispõe de diferentes tipos de integração que irão variar de acordo com a necessidade de negócio e conhecimento técnico do integrador. Veja na tabela abaixo o detalhe de cada tipo de integração disponível e escolha a mais adequada com seu modelo de negócio.

----[mla]----

| Tipo de integração  | Descrição  | Dispositivos  |
| --- | --- | --- |
| Deep link  | Deep Link é a forma como dispositivos Android geram uma solicitação ou evento em uma aplicação nativa ao invocar uma URI Web. Neste caso, para abrir o fluxo de cobranças no Mercado Pago. <br><br> Deep Link pode ser utilizado a partir de uma página na web, aplicativo não nativa ou através de um link em sms ou mensagens. Além disso, este tipo de integração também pode ser implementada a partir de um aplicativo nativo. Veja a seção [Integrar via Deep Link](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para mais informações.  | Point Mini  |
| Via API  | Integração via API é quando as interfaces de um serviço hospedado em um servidor são consumidas para habilitar o modo integrador, ou seja, criar, consultar e deletar ordens a serem executadas pelo fluxo de cobrança no Mercado Pago. <br><br> Esses pedidos são recebidos no aplicativo Mercado Pago por meio de notificações push, abrindo o fluxo de cobranças Point. Veja [Integrar via API](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para mais informações.  | Point Mini  |
| API para PDVs  | A API de integrações Point permite que você conecte seus pontos de venda (PDV) ao ecossistema de Point para receber pagamentos nos terminais previamente configurados, garantindo uma experiência de pagamento unificada. Veja [Integrar com PDV](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) para mais informações. | Point Plus <br><br> Point Smart |

------------

----[mlb]----

| Tipo de integração  | Descrição  | Dispositivos  |
| --- | --- | --- |
| Deep link  | Deep Link é a forma como dispositivos Android geram uma solicitação ou evento em uma aplicação nativa ao invocar uma URI Web. Neste caso, para abrir o fluxo de cobranças no Mercado Pago. <br><br> Deep Link pode ser utilizado a partir de uma página na web, aplicativo não nativa ou através de um link em sms ou mensagens. Além disso, este tipo de integração também pode ser implementada a partir de um aplicativo nativo. Veja a seção [Integrar via Deep Link](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para mais informações.  | Point Mini NFC 1  |
| Via API  | Integração via API é quando as interfaces de um serviço hospedado em um servidor são consumidas para habilitar o modo integrador, ou seja, criar, consultar e deletar ordens a serem executadas pelo fluxo de cobrança no Mercado Pago. <br><br> Esses pedidos são recebidos no aplicativo Mercado Pago por meio de notificações push, abrindo o fluxo de cobranças Point. Veja [Integrar via API](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para mais informações.  | Point Mini NFC 1  |
| API para PDVs  | A API de integrações Point permite que você conecte seus pontos de venda (PDV) ao ecossistema de Point para receber pagamentos nos terminais previamente configurados, garantindo uma experiência de pagamento unificada. Veja [Integrar com PDV](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) | Point Pro 2 |

------------

----[mlm]----

| Tipo de integração  | Descrição  | Dispositivos  |
| --- | --- | --- |
| Deep link  | Deep Link é a forma como dispositivos Android geram uma solicitação ou evento em uma aplicação nativa ao invocar uma URI Web. Neste caso, para abrir o fluxo de cobranças no Mercado Pago. <br><br> Deep Link pode ser utilizado a partir de uma página na web, aplicativo não nativa ou através de um link em sms ou mensagens. Além disso, este tipo de integração também pode ser implementada a partir de um aplicativo nativo.  Veja a seção [Integrar via Deep Link](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para mais informações.  | Point Blue  |
| Via API  | Integração via API é quando as interfaces de um serviço hospedado em um servidor são consumidas para habilitar o modo integrador, ou seja, criar, consultar e deletar ordens a serem executadas pelo fluxo de cobrança no Mercado Pago. <br><br> Esses pedidos são recebidos no aplicativo Mercado Pago por meio de notificações push, abrindo o fluxo de cobranças Point. Veja [Integrar via API](/developers/pt/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para mais informações.  | Point Blue  |

------------

> PREV_STEP_CARD_PT
>
> Pré-requisitos
>
> Conheça os pré-requisitos para integrar com Mercado Pago Point.
>
> [Pré-requisitos](/developers/pt/docs/mp-point/prerequisites)


> NEXT_STEP_CARD_PT
>
> Configuração da integração
>
> Saiba como integrar Mercado Pago Point ao seu PDV
>
> [Integrar com PDV](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/introduction)