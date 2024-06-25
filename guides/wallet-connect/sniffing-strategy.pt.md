# Estratégia de sniffing

O **_sniffing_** é uma funcionalidade que permite identificar se um usuário tem o aplicativo do Mercado Pago instalado em seu dispositivo móvel e abrir esse app automaticamente. Caso afirmativo, ao abrir o `agreement_uri` em um navegador, o **fluxo de vinculação** é iniciado automaticamente no aplicativo, sem que o usuário precise fazer login manualmente.

A função de _sniffing_ simplifica o processo de vinculação, melhorando a experiência do usuário ao reduzir a fricção no processo de vinculação.

## Modelos de implementação de sniffing

Veja a seguir os modelos disponíveis para adicionar à sua integração com o Mercado Pago.

> WARNING
>
> Atenção
>
> Os modelos preferidos de utilização do _sniffing_ devem ser coordenados com a **equipe de Integrações do Mercado Pago** para que estes sejam previamente configurados em sua aplicação.

- **App Link (disponível apenas para dispositivos Android)**: se o aplicativo do Mercado Pago estiver instalado no dispositivo do usuário, ele interceptará quando se navegar para `agreement_uri` e abrirá automaticamente o fluxo de vinculação no contexto do aplicativo.
- **Navegador (disponível para dispositivos Android e iOS)**: ao abrir o `agreement_uri` em um navegador, a página reconhecerá o contexto e aplicará diferentes estratégias para tentar abrir o aplicativo do Mercado Pago, sendo: <br>
  - Se o usuário tiver o aplicativo instalado, o fluxo de vinculação será aberto automaticamente no aplicativo.
  - Se o usuário não tiver o aplicativo instalado, será direcionado ao navegador padrão do usuário e, nesse caso, é possível que o usuário tenha que fazer login manualmente.

![sniffing](/images/wallet-connect/sniffing-pt.png)

> NOTE
>
> Importante
>
> O _sniffing_está disponível apenas no navegador do dispositivo móvel quando o usuário tem o aplicativo do Mercado Pago instalado e, dependendo do dispositivo e do sistema operacional, a experiência de abrir um aplicativo a partir de um navegador pode variar. Em geral, é necessária a confirmação do usuário através de um modal do sistema.

## Configuração

Para utilizar o o recurso de _sniffing_, basta abrir um link no navegador web do dispositivo móvel para ativar a detecção e seguir o fluxo de vinculação. Veja abaixo como disponibilizar a funcionalidade de _sniffing_ em sua integração.

1. Envie um **GET** com os atributos necessários, pricipalmente o `return_uri`, ao _endpoint_ [/v2/wallet_connect/agreements](/developers/pt/reference/wallet_connect/_wallet_connect_agreements/post) e execute a requisição para [iniciar uma vinculação](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement).

> WARNING
>
> Atenção
>
> É necessário que a URL utilizada no parâmetro `return_uri` seja para um recurso _web_ (não podem ser utilizados _deeplinks_) e **o início dela deve coincidir com a URL de retorno configurada na aplicação do vendedor**. Para mais informações, acesse os[Detalhes da aplicação](/developers/pt/guides/additional-content/your-integrations/application-details).

2. Serão retornados os parâmetros `agreement_id` e `agreement_uri`. Utilize um componente **_In-App Browser_** para navegar até o `agreement_uri`, endereço para onde o comprador é redirecionado para conceder o acesso à carteira do Mercado Pago para realizar o pagamento. De acordo com o sistema operacional, utilize o **_Custom Tabs_** para dispositivos _Android_ e o **_SVC_** para dispositivos _iOS_.
3. A partir disso, utilize a URL de retorno `return_uri` para finalizar o processo de vinculação.

Após configurada, é possível desativar a função de _sniffing_ da sua apliação e essa ação deve ser coordenada com a **equipe de Integrações** do Mercado Pago.