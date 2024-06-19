# Sniffing

O **_Sniffing_** é uma funcionalidade que permite identificar se um usuário tem o aplicativo do Mercado Pago instalado em seu dispositivo móvel e abrir esse app automaticamente. Caso afirmativo, o [fluxo de vinculação]() é iniciado automaticamente no aplicativo, sem que o usuário precise fazer login manualmente.

> WARNING
>
> Atenção
>
> Os modos preferidos de utilização do _Sniffing_ devem ser coordenados com a **equipe de Integrações* para que estes sejam previamente configurados em sua aplicação.

## Configuração

Para disponibilizar a funcionalidade de _Sniffing_ é necessário apenas 

1. Abra um link no navegador web do dispositivo móvel para ativar a detecção.
2. Envie um **GET** com os atributos necessários ao endpoint [/v2/wallet_connect/agreements](/reference/wallet_connect/_wallet_connect_agreements/post) e execute a requisição para [criar uma vinculação]().


envie um **GET** com seu `access_token` ao endpoint [/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get)  e execute a requisição

Neste momento, deve-se especificar o endereço de retorno return_uri.
Obter o valor de agreement_uri na resposta.
Utilizar um componente In-App Browser para navegar até agreement_uri.
De acordo com o sistema operacional, utilizar:
Custom Tabs no Android
SVC no iOS
Capturar a URL de retorno return_uri para finalizar o processo de vinculação.