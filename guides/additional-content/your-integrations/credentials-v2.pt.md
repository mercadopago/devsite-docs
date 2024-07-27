# Credenciais

As credenciais são **chaves de acesso exclusivas** usadas para identificar uma integração em sua conta. Elas desempenham um papel fundamental na captura segura de pagamentos em lojas virtuais e outras aplicações.

Cada aplicação contará com **dois pares de credenciais de produção** e, quando aplicável ao produto, **um par de credenciais de teste**. 

## Obter credenciais

Para obter as credenciais, sejam elas de produção ou de teste, primeiro você deverá **criar uma aplicação** no Mercado Pago. Caso ainda não tenha criado uma, acesse a documentação [Painel do Desenvolvedor](/developers/pt/docs/your-integrations/dashboard#bookmark_criar_nova_aplicação) para mais informações.

Veja abaixo como obter as credenciais e em quais situações elas devem ser utilizadas.

### Credenciais de produção

As **credenciais de produção** são um conjunto de chaves de acesso que permitem receber pagamentos reais em lojas e em outras aplicações.

Você poderá obter as suas credenciais de produção de duas maneiras:

1. Accesando [**Suas integrações > "Sua aplicação" > Produção > Credenciais de produção**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) a partir do [Panel do desenvolvedor](/developers/pt/docs/checkout-bricks/additional-content/your-integrations/dashboard).

![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)

2. Através da sua conta do Mercado Pago, acesse [**Sua loja > Configurações > Gestão e administração > Credenciais**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)

Ao acessar suas credenciais de produção, serão exibidos os seguintes pares de credenciais: **Public Key e Access Token**, além de **Client ID e Client Secret**.

### Public Key e Access Token

A **Public Key** e o **Access Token** são as credenciais utilizadas, não necessariamente em conjunto, nas integrações com as soluções de pagamento do Mercado Pago, incluindo:

- [Checkout Pro](/developers/pt/docs/checkout-pro/landing)
- [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)
- ----[mlb]---- [Checkout Transparente](/developers/pt/docs/checkout-api/landing)----------------[mla, mlu, mlc, mlm, mco, mpe]---- [Checkout API](/developers/pt/docs/checkout-api/landing)------------
- [Assinaturas](/developers/pt/docs/subscriptions/landing)
----[mla, mlb, mlm]----
- [Mercado Pago Point](/developers/pt/docs/mp-point/landing)
------------
----[mla, mlb, mlc, mlu]----
- [Código QR](/developers/pt/docs/qr-code/landing)
------------

Essas credenciais também são utilizadas nas integrações dos plugins do Mercado Pago com [plataformas de e-commerce](/developers/pt/docs#platform-list).

> WARNING
>
> Importante
>
> Em algumas soluções de pagamento, a Public Key e o Access token também serão utilizadas para testar a integração. Entretanto, nessas situações serão utilizadas as credenciais de uma [conta de teste](/developers/pt/docs/your-integrations/test/accounts) previamente criada.

| Tipo | Descrição |
| :--- | :--- |
| Public key | Chave pública da aplicação  geralmente usada no frontend. Ela permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access token |Chave privada da aplicação que deve ser usada exclusivamente no backend para gerar pagamentos. É essencial que essa informação seja mantida segura em seus servidores. |

Para obter mais informações sobre quais credenciais serão necessárias para a sua integração, consulte a [documentação específica](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs) da solução que está sendo integrada.

### Client ID e Client Secret

O **Client ID** e o **Client Secret** são credenciais utilizadas em algumas integrações mais antigas com plataformas de comércio eletrônico e, principalmente, nas integrações que utilizam [OAuth](/developers/pt/docs/security/oauth/introduction) como protocolo para obtenção de informações privadas de contas do Mercado Pago. Especificamente, são utilizados durante o fluxo (_grant type_) de **Client credentials**, o qual permite acessar um recurso em nome próprio e obter um Access Token sem interação do usuário.

| Tipo | Descrição |
| :--- | :--- |
| Client ID | Identificador único que representa sua integração. |
| Client secret | Chave privada usada em alguns plugins para gerar pagamentos. É essencial manter essa informação segura em seus servidores, garantindo que nenhum usuário ou invasor tenha acesso a ela. |

### Credenciais de teste

As credenciais de teste são um conjunto de chaves usadas para testar a integração. Elas podem ser combinadas com cartões de crédito de teste para simular transações e verificar o correto funcionamento das integrações.

Para obter suas credenciais de teste, **desde que estas estejam disponíveis para sua integração**, acesse [Suas integrações > "Sua aplicação" > Credenciais de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Importante
>
> Essas credenciais **não estão disponíveis para todos os produtos do Mercado Pago**, portanto, só estarão ativas nas aplicações em que você selecionou um produto que as exija.

![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-test-panel-pt.gif)

Se ao criar um aplicativo você selecionou um produto do Mercado Pago **que não requer credenciais de teste**, a seguinte tela será exibida:

![Credenciais de teste não disponívels](/images/credentials/blocked-test-credentials-es-v3.png)

Se você estiver integrando um produto que não utiliza credenciais de teste, você não poderá usá-las. Em vez disso, utilize as [contas de teste](/developers/pt/docs/your-integrations/test/accounts) para testar sua integração corretamente. 

> As **contas de teste** não possuem credenciais de teste habilitadas. Caso esteja utilizando uma conta de teste, será necessário usar as credenciais de produção.

## Compartilhar credenciais

Ao receber assistência na integração ou configuração dos seus canais de pagamento, é possível compartilhar suas credenciais de forma segura com outra conta do Mercado Pago. Você pode fazer isso de duas maneiras:

**Através das Suas integrações no Mercado Pago Developers:**

1. Acesse [Suas integrações](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e acesse a aplicação desejada.
2. Vá para a seção **Testes** ou **Produção**, a depender do tipo de credencial que deseja compartilhar.
3. Uma vez selecionadas as credenciais, vá para a seção *Compartilhar as credenciais com um desenvolvedor* e clique no botão **Compartilhar credenciais**.
4. Insira o endereço de e-mail de quem deseja conceder o acesso. Lembre-se de que é obrigatório que o endereço de e-mail esteja associado a uma conta do Mercado Pago.

![Compartilhar credenciais em Suas Integrações](/images/credentials/share-credentials-panel-pt.gif)

**Através do Mercado Pago:**

1. Acesse sua conta do Mercado Pago.
2. Vá para [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. Nessa página, selecione as credenciais de produção ou as credenciais de teste, a depender do tipo de credencial que deseja compartilhar.
4. Uma vez selecionadas as credenciais, vá para a seção *Compartilhar as credenciais com um desenvolvedor* e clique no botão **Compartilhar credenciais**.
5. Selecione o aplicativo do qual deseja compartilhar suas credenciais e insira o endereço de e-mail de quem deseja conceder acesso. Lembre-se de que o endereço de e-mail deve obrigatoriamente estar associado a uma conta do Mercado Pago.

![Compartilhar credenciais no Mercado Pago](/images/credentials/share-credentials-mp-pt.gif)

> WARNING
>
> Importante
>
> Você pode compartilhar as credenciais com outras contas do Mercado Pago até, no máximo, 10 vezes. Se atingir esse limite, será necessário excluir as permissões antigas e interromper o compartilhamento dessas credenciais, mas sem que isso impacte nas integrações já configuradas.
> <br><br>
> Além disso, por razões de segurança, se você não desejar mais compartilhar as credenciais, poderá interromper o compartilhamento a qualquer momento.

## Renovar credenciais

Se por motivos de segurança ou qualquer outra razão relevante você precisar renovar suas credenciais, clique em **Mais opções** (três pontos no final do cartão) > **Renovar**. 

> WARNING
> 
> Atenção
>
> Tenha em mente que se as credenciais que você renovar estiverem sendo usadas em alguma de suas integrações, elas serão afetadas e você deverá substituí-las pelas novas credenciais que obtiver após a renovação.

![Como renovar suas credenciais](/images/credentials/renew-credentials-pt.gif)