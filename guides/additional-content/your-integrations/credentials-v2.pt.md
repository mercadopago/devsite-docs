# Credenciais

As credenciais são **senhas exclusivas** usadas para identificar uma integração em sua conta. Elas desempenham um papel fundamental na captura segura de pagamentos em lojas virtuais e outras aplicações.

Cada aplicação contará com **dois pares de credenciais de produção** e, quando aplicável ao produto, **um par de credenciais de teste**.

## Obter credenciais

Para obter as credenciais, primeiro você deverá **criar uma aplicação** dentro do Mercado Pago. Se você ainda não criou nenhuma, você pode aprender como fazer isso na documentação do [Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard#bookmark_criar_nova_aplicação).

Veja abaixo como obter as suas credenciais e em quais situações deverá utilizá-las.

### Credenciais de produção

As **credenciais de produção** são um conjunto de chaves que permitem receber pagamentos reais em lojas on-line e em outras aplicações.

Você poderá obter as suas credenciais de produção de duas maneiras:

1. Accesando a [**Suas integrações > "Sua aplicação" > Produção > Credenciais de produção**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)
------------

2. Através da sua conta do Mercado Pago, acessando **Sua loja > Configurações > Gestão e administração > Credenciais**.

----[mlb]----
![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)
------------

Ao acessar as suas credenciais de produção, poderá visualizar os seguintes pares de credenciais:

#### Public Key e Access Token

| Tipo | Descrição |
| :--- | :--- |
| Public key | A chave pública da aplicação é geralmente usada no frontend. Ela permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access token | Chave privada da aplicação que sempre deve ser usada no backend para gerar pagamentos. É essencial que essa informação seja mantida segura em seus servidores. |

A **Public Key** e o **Access Token** são credenciais que serão utilizadas, não necessariamente em conjunto, nas integrações realizadas com os soluções de pagamento do Mercado Pago (Checkout Pro, Checkout Bricks,----[mlb]---- Checkout Transparente------------ ----[mla, mlu, mlc, mlm, mco, mpe]----Checkout API------------ ----[mla, mlb, mlc, mlu]----, Assinaturas e QR Code------------ ----[mco, mlm, mpe]---- e Assinaturas------------) e nas integrações do plugin do Mercado Pago com as plataformas de e-commerce como, por exemplo, Shopify, WooCommerce e ----[mla, mlu, mlc, mlm, mco, mpe]----Tiendanube------------ ----[mlb]----Nuvemshop------------.

Em algumas soluções de pagamento, a Public Key e o Access token também serão utilizadas para testar a integração. Entretanto, nessas situações serão utilizadas as credenciais de uma [conta de teste](/developers/pt/docs/your-integrations/test/accounts) que estiver sido criado.

Para mais informações sobre quais credenciais serão utilizadas na sua integração, [acesse a respectiva documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs) da solução que estiver sendo integrada.

| Tipo | Descrição |
| :--- | :--- |
| Client ID | O ID de cliente é um identificador único que representa sua integração. |
| Client secret | Chave privada usada em alguns plugins para gerar pagamentos. É extremamente importante manter essa informação segura em seus servidores e não permitir acesso a nenhum usuário do sistema ou invasor. |

#### Client ID e Client Secret

O **Client ID** e o **Client Secret** são credenciais utilizadas em algumas integrações mais antigas do plugin do Mercado Pago com plataformas de e-commerce e, principalmente, na obtenção do Access Token a partir do fluxo (grant type) de **Client Credentials**. Esse fluxo é para quando se for usar as credenciais para acessar um recurso em nome próprio, ou seja, é utilizado para obter um Access Token sem interação do usuário.

Acesse a documentação de [OAuth](/developers/pt/docs/security/oauth/introduction) para mais informações.

> NOTE
>
> Nota
>
> Se por motivos de segurança ou qualquer outro motivo relevante precisar renovar suas credenciais, basta clicar em **Mais opções** (três pontos no final do cartão) > **Renovar**. Tenha em mente que sua integração pode ser afetada pela alteração.

### Credenciais de teste

As credenciais de teste são um conjunto de chaves usadas para testar a integração. Essas credenciais **não estão disponíveis para todos os produtos do Mercado Pago**, portanto, só estarão ativas nos aplicativos em que você selecionou um produto que as exige.

As credenciais de teste podem ser combinadas com cartões de crédito de teste para simular transações e verificar o correto funcionamento das integrações.

Você pode obter suas credenciais de teste acessando [Suas Integrações > "Seu aplicativo" > Credenciais de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-test-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-test-es.gif)
------------

Se você estiver integrando um produto que não utiliza credenciais de teste, você não poderá usá-las. Em vez disso, deverá utilizar [contas de teste](/developers/es/docs/your-integrations/test/accounts). Se ao criar um aplicativo você selecionou um produto do Mercado Pago que não requer credenciais de teste, você verá a seguinte tela:

![Pantalla de cuentas de test bloqueada](/images/credentials/blocked-test-credentials-pt.png)

## Compartilhar credenciais

Quando receber assistência na integração ou configuração dos seus canais de pagamento, é possível compartilhar suas credenciais com segurança. Para fazer isso, siga as etapas abaixo:

1. Acesse a sua conta Mercado Pago.
2. Navegue até [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. Dentro dessa página, selecione a opção "Compartilhar minhas credenciais".
4. Insira o e-mail da pessoa para a qual deseja conceder acesso.
5. Certifique-se de que o e-mail esteja associado à conta do Mercado Pago da pessoa em questão.

> WARNING
>
> Importante
>
> Caso não deseje mais compartilhar as suas credenciais por questões de segurança, você poderá interromper o compartilhamento.

