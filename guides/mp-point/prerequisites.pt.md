# Pré-requisitos

Para oferecer pagamentos com Point, é importante atender aos requisitos mostrados abaixo.

| Requisito  | Descrição  |
| --- | --- |
| Dispositivo Mercado Pago Point  | Para oferecer pagamentos presenciais utilizando Point é preciso adquirir a maquininha. Caso ainda não tenha adquirido, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/point) para comprar.  |
| Aplicativo Mercado Pago  | Em conjunto com a maquininha, é necessário ter o aplicativo Mercado Pago para gerenciamento das cobranças realizadas.  Para dispositivos Android, [clique aqui](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419) e faça o download. Para dispositivos iOS, [clique aqui](https://apps.apple.com/ar/app/mercado-pago/id925436649) e faça o download.   |
| Credenciais  | As credenciais são chaves únicas que fornecemos para que você possa configurar as suas integrações. Você precisará de um par de credenciais de teste para testar a integração e um par de credenciais de produção para receber pagamentos reais. Veja [Credenciais](/developers/pt/docs/mp-point/additional-content/your-integrations/credentials) para mais informações.  |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Painel do desenvolvedor](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard) para mais informações sobre como criar uma aplicação.  |

> WARNING
>
> Importante
>
> Para as maquininhas **Point mini** e **Point blue**, o aplicativo é necessário para realizar e gerenciar as cobranças. Já para **POS** e **SmartPOS**, o aplicativo é necessário apenas para realizar login com QR Code. <br/></br>
> <br/></br>
> O modo de integração de API para PDVs está disponível apenas para ser operado por um operador de loja. Caso seja implementado em modo de [self-service](/developers/pt/docs/mp-point/integration-api/glossary), será de total responsabilidade do negócio, uma vez que os dispositivos não estão habilitados para serem utilizados neste tipo de modelo de negócio.

Se todos os requisitos foram cumpridos, siga as etapas seguintes para realizar a integração com Point.
