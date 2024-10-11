# Pré-requisitos

Antes de começar a desenvolver sua solução, veja as condições que devem ser cumpridas.

| Requisitos | Descrição |
|---|---|
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Suas integrações](/developers/pt/docs/checkout-bricks/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Credenciais | Senhas únicas com as quais identificamos uma integração na sua conta. Para realizar as integrações, será necessário o **Client ID**. [Clique aqui](/developers/pt/docs/main-apps/additional-content/your-integrations/credentials) para mais informações. |
| Point Smart do Mercado Pago | [Mercado Pago Point](/developers/pt/docs/mp-point/landing) é a maquininha de cartão do Mercado Pago que permite aos compradores realizarem pagamentos presenciais de maneira rápida e segura utilizando cartões de crédito ou débito. |
| Pré-configuração de dispositivos | Para que as maquininhas operem em **Modo integrado** e a pré-configuração seja feita, compartilhe com o Mercado Pago a conta que será utilizada para a integração, bem como as configurações de caixas, lojas e números de série dos aparelhos. |
|Kit de Desenvolvimento| Para iniciar o desenvolvimento, baixe o [Kit de Desenvolvimento](https://github.com/mercadolibre/point-mainapp-demo-android) fornecido pelo Mercado Pago. |
|Android Studio| Instale o [ambiente de desenvolvimento Android](https://developer.android.com/studio) para construir e depurar os main apps.|
|OAuth| O OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas das contas do Mercado Pago. Se for obter informações da conta da pessoa vendedora, faça o [fluxo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificações técnicas da Point Smart

Para garantir que a integração seja exitosa, considere as características da maquininha [Point Smart](/developers/pt/docs/mp-point/landing) e como o aplicativo se adaptará a elas.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificação | Descrição |
|---|---|
|Modelo|A910|
|Tela| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen |
|Sistema operacional|Android 6|
|Impressora|Sí <br> 40 Lines/Sec <br> Paper roll outer diameter: 40mm |
|Memória RAM|1GB|
|Armazenamento interno|6GB|
|Meios de pagamento processados|Chip & PIN <br> NFC Contactless <br> Magnetic Stripe|
|Arquitetura|ARMv7|
|Android System Web View|Pacote: com.android.webview <br> Versão: 52.0.2743.100 <br> Uso: Renderizar as WebViews nos aplicativos Android.|