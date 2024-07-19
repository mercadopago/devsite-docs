# Teste de integração

Antes de sair à produção, recomendamos testar o funcionamento da sua integração e do processamento de pagamentos. Isso permitirá verificar se a integração foi feita corretamente e se os pagamentos estão sendo processados sem erros.

## Pré-requisitos

Para testar a integração com Mercado Pago Point, é importante atender aos requisitos mostrados abaixo.

| Requisito | Descrição |
|---|---|
| Usuário produtivo do Mercado Pago e suas credenciais de produção | As [credenciais](/developers/pt/docs/mp-point/additional-content/your-integrations/credentials) são chaves únicas que permitem configurar suas integrações. Serão necessárias as **credenciais de produção** para testar o funcionamento de sua integração Point. |
| Dispositivo Mercado Pago Point | É preciso ter um dispositivo Point para testar se os pagamentos estão sendo processados corretamente. Acesse [nossa documentação](/developers/pt/docs/mp-point/landing) e saiba quais são os dispositivos disponíveis de acordo com a sua localização. |


> WARNING
>
> Importante
>
> Se o dispositivo Point for utilizado por mais de uma conta do Mercado Pago, será necessário adicionar [Contas de Colaborador](https://www.mercadopago[FAKER][URL][DOMAIN]/collaborators) no Painel do Mercado Pago para possibilitar a gestão compartilhada de todas as suas funcionalidades.

Se todos os requisitos foram cumpridos, prossiga com o teste da sua integração, que consiste em duas etapas:
 1. [Configurar a integração de teste]()
 2. [Testar o processamento de pagamentos]()

Além disso, uma vez concluído o teste, será necessário seguir os [requisitos para entrar em produção]().