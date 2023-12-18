# Pré-requisitos

Antes de começar a desenvolver sua solução, veja as condições que devem ser cumpridas.

| Requisitos | Descrição |
|---|---|
| Pré-configuração de dispositivos | Para que as maquininhas operem em **Modo integrado** e a pré-configuração seja feita, compartilhe com o Mercado Pago a conta que será utilizada para a integração, bem como as configurações de caixas, lojas e números de série dos aparelhos. |
|Kit de Desenvolvimento| Para iniciar o desenvolvimento, baixe o [Kit de Desenvolvimento](https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link) fornecido pelo Mercado Pago. |
|Android Studio| Instale o [ambiente de desenvolvimento Android](https://developer.android.com/studio) para construir e depurar os main apps.|
|App no Painel de Desenvolvedores | Crie um app no [painel de desenvolvedores](/developers/panel/app) com a conta do integrador. Em seguida, gere o `ClientId` que servirá como identificador da integração. Veja mais informações sobre como criar uma aplicação em [Detalhes da aplicação](/developers/pt/docs/main-apps/additional-content/your-integrations/application-details).|
|Fluxo de OAuth| Se for obter informações da conta da pessoa vendedora, faça o [fluxo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction). |

## Especificações técnicas da Point Smart

Para garantir que a integração seja exitosa, considere as características da maquininha e como o aplicativo se adaptará a elas.

<center>

![prerequisites](/main-apps/prerequisites-all.png)

</center>

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