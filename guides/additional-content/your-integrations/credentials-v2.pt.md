# Credenciais

As credenciais são **senhas exclusivas** usadas para identificar uma integração em sua conta. Elas desempenham um papel fundamental na captura segura de pagamentos em lojas virtuais e outras aplicações.

Cada aplicação contará com **dois pares de credenciais de produção** e, quando aplicável ao produto, **um par de credenciais de teste**. 

## Obter credenciais

Para obter as credenciais, sejam de produção ou de teste, primeiro você deverá **criar uma aplicação** no Mercado Pago. Caso ainda não tenha criado uma, acesse a documentação [Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard#bookmark_criar_nova_aplicação) para mais informações.

Veja abaixo como obter as credenciais e em quais situações elas devem ser utilizadas.

### Credenciais de produção

As **credenciais de produção** são um conjunto de chaves que permitem receber pagamentos reais em lojas on-line e em outras aplicações.

Você poderá obter as suas credenciais de produção de duas maneiras:

1. Accesando a [**Suas integrações > "Sua aplicação" > Produção > Credenciais de produção**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)

2. Através da sua conta do Mercado Pago, acessando [**Sua loja > Configurações > Gestão e administração > Credenciais**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)

Ao acessar suas credenciais de produção, serão exibidos os seguintes pares de credenciais: **Public Key e Access Token**, além de **Client ID e Client Secret**.

### Public Key e Access Token

A **Public Key** e o **Access Token** são credenciais utilizadas, não necessariamente em conjunto, nas integrações com as soluções de pagamento do Mercado Pago, incluindo:

- Checkout Pro
- Checkout Bricks
- ----[mlb]---- Checkout Transparente----------------[mla, mlu, mlc, mlm, mco, mpe]---- Checkout API------------
- Assinaturas
----[mla, mlb, mlm]----
- Mercado Pago Point
------------
----[mla, mlb, mlc, mlu]----
- Código QR
------------

Essas credenciais também são utilizadas nas integrações do plugin do Mercado Pago com plataformas de e-commerce como, por exemplo, Shopify, WooCommerce e ----[mla, mlu, mlc, mlm, mco, mpe]----Tiendanube----------------[mlb]----Nuvemshop------------.

> WARNING
>
> Importante
>
> Em algumas soluções de pagamento, a Public Key e o Access token também serão utilizadas para testar a integração. Entretanto, nessas situações serão utilizadas as credenciais de uma [conta de teste](/developers/pt/docs/your-integrations/test/accounts) previamente criada.

| Tipo | Descrição |
| :--- | :--- |
| Public key | A chave pública da aplicação é geralmente usada no frontend. Ela permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access token | Chave privada da aplicação que sempre deve ser usada no backend para gerar pagamentos. É essencial que essa informação seja mantida segura em seus servidores. |

Para obter mais informações sobre quais credenciais serão necessárias para a sua integração, [consulte a documentação específica](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs) da solução que está sendo integrada.

### Client ID e Client Secret

O **Client ID** e o **Client Secret** são credenciais utilizadas em algumas integrações mais antigas com plataformas de comércio eletrônico e, principalmente, nas integrações que utilizam [OAuth](/developers/pt/docs/security/oauth/introduction) como protocolo para obtenção de informações privadas de contas do Mercado Pago. Especificamente, são utilizados durante o fluxo (_grant type_) de **Client Credentials**, o qual permite acessar um recurso em nome próprio e obter um Access Token sem interação do usuário.

| Tipo | Descrição |
| :--- | :--- |
| Client ID | O Client ID é um identificador único que representa sua integração. |
| Client secret | Chave privada usada em alguns plugins para gerar pagamentos. É extremamente importante manter essa informação segura em seus servidores e não permitir acesso a nenhum usuário do sistema ou invasor. |

### Credenciais de teste

As credenciais de teste são um conjunto de chaves usadas para testar a integração. Elas podem ser combinadas com cartões de crédito de teste para simular transações e verificar o correto funcionamento das integrações.

Para obter suas credenciais de teste, **desde que estas estejam disponíveis para sua integração**, acessando [Suas integrações > "Sua aplicação" > Credenciais de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Importante
>
> Essas credenciais **não estão disponíveis para todos os produtos do Mercado Pago**, portanto, só estarão ativas nas aplicações em que você selecionou um produto que as exigir.

![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-test-panel-pt.gif)

Se, ao criar uma aplicação, você selecionou um produto do Mercado Pago **que não requer credenciais de teste**, você verá a seguinte tela:

![Credenciais de teste não disponívels](/images/credentials/blocked-test-credentials-es-v3.png)

Se você estiver integrando um produto que não utiliza credenciais de teste, você não poderá usá-las. Em vez disso, deverá utilizar [contas de teste](/developers/pt/docs/your-integrations/test/accounts). 

> As **contas de teste** não têm as credenciais de teste habilitadas. Se você estiver usando uma conta de teste, precisará usar suas credenciais de produção.

## Compartilhar credenciais

Quando receber assistência na integração ou configuração dos seus canais de pagamento, é possível compartilhar suas credenciais com segurança com outra conta do Mercado Pago. 
Para fazer isso, você poderá seguir duas maneiras:

**Através das suas Integrações no Mercado Pago Developers:**
1. Acesse [Suas integrações](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e acesse um aplicativo.
2. Vá para a seção Testes ou Produção, dependendo do tipo de credencial que deseja compartilhar.
3. Uma vez selecionadas as credenciais, vá para a seção *Compartilhar as credenciais com um desenvolvedor* e clique no botão **Compartilhar Credenciais**.
4. Insira o endereço de e-mail da pessoa a quem deseja conceder acesso. Lembre-se de que é obrigatório que o endereço de e-mail esteja associado a uma conta do Mercado Pago.

![Compartilhar credenciais em Suas Integrações](/images/credentials/share-credentials-panel-pt.gif)

**Através do Mercado Pago:**

1. Acesse sua conta do Mercado Pago.
2. Vá para [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. Nessa página, selecione as credenciais de produção ou as credenciais de teste, dependendo do que deseja compartilhar.
4. Uma vez selecionadas as credenciais, vá para a seção *Compartilhar as credenciais com um desenvolvedor* e clique no botão **Compartilhar Credenciais**.
5. Selecione o aplicativo do qual deseja compartilhar suas credenciais e insira o endereço de e-mail da pessoa a quem deseja conceder acesso. Lembre-se de que é obrigatório que o endereço de e-mail esteja associado a uma conta do Mercado Pago.

![Compartilhar credenciais no Mercado Pago](/images/credentials/share-credentials-mp-pt.gif)

> WARNING
>
> Importante
>
> Você pode compartilhar as credenciais com outras contas do Mercado Pago até, no máximo, 10 vezes. Se atingir esse limite, será necessário excluir as permissões antigas e interromper o compartilhamento dessas credenciais, mas sem que isso impacte nas integrações já configuradas.<br><br>Além disso, se por razões de segurança você não desejar mais compartilhar as credenciais, você também poderá interromper este compartilhamento.

## Renovar credenciais

Se por motivos de segurança ou qualquer outra razão relevante você precisa renovar suas credenciais, clique em **Mais opções** (três pontos no final do cartão) > **Renovar**. Lembre-se de que sua integração pode ser afetada por essa alteração.

![Como renovar suas credenciais](/images/credentials/renew-credentials-pt.gif)