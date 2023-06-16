# Pré-requisitos

Para integrar o Checkout Transparente, é importante atender aos requisitos mostrados abaixo.

| Requisito  | Descrição  |
| --- | --- |
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/checkout-api/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Credenciais  | As credenciais são chaves únicas que fornecemos para que você possa configurar as suas integrações. Você precisará de um par de credenciais de teste para testar a integração e um par de credenciais de produção para receber pagamentos reais. Veja [Credenciais](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials) para mais informações.  |
| MercadoPago.js  | MercadoPago.js te permite gerenciar os dados do cartão para cumprir com os requerimentos de segurança necessários e evitar o envio de dados sensíveis para seus servidores. Para isso, nossa biblioteca gera um token que representa esta informação e te permite operar de forma segura. Veja [SDKs](/developers/pt/docs/sdks-library/client-side/mp-js-v2) para ter acesso ao MercadoPago.js.  |
----[mlb]---- | Chave Pix  | Caso queira oferecer pagamentos via Pix, é necessário ter as chaves cadastradas. Caso ainda não tenha, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) para mais informações sobre como cadastrá-las.  | ------------


Se todos os pré-requisitos foram cumpridos, você poderá realizar a integração do Checkout Transparente.

