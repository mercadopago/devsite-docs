# Requirements

Before you start developing your solution, take a look at the requirements that must be met.

| Requirement | Description |
|---|---|
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Suas integrações](/developers/pt/docs/main-apps/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação.|
| Credentials | Unique passwords with which we identify an integration in your account. To perform the integrations, you will need the **Client ID**. [Click here](/developers/en/docss/main-apps/additional-content/your-integrations/credentials) for more information. |
| Mercado Pago's Point Smart | [Mercado Pago Point](/developers/en/docs/mp-point/landing) is the Mercado Pago card machine that allows buyers to pay in person quickly and securely using credit or debit cards.|
| Device pre-configuration| In order for the machines to operate in **Integrated mode** and for the pre-configuration to be carried out, share with Mercado Pago the account that will be used for the integration, as well as the cash register and store configurations and the serial numbers of the devices. |
|Development kit | To start development, download the [Development kit](https://github.com/mercadolibre/point-mainapp-demo-android) provided by Mercado Pago. |
|Android Studio| OAuth is an authorization protocol that allows applications to have limited access to the private information of Mercado Pago accounts. Install the [integrated development environment](https://developer.android.com/studio) to build and debug the main apps. |
|OAuth| If you want to obtain information from the seller's account, do the [OAuth flow](/developers/en/docs/main-apps/additional-content/security/oauth/introduction). |

## Point Smart technical specifications

To ensure that the integration is successful, consider the [Point Smart](/developers/en/docs/mp-point/landing) machine's characteristics and how the application will adapt to them.

![prerequisites](/main-apps/prerequisites-all.png)

| Especificación | Descripción |
|---|---|
|Model|A910|
|Screen| 5'' IPS WXGA 720 x 1280 Pixels <br> Multi-Point Capacitive HD Touch Screen |
|Operating system|Android 6|
|Printer|Sí <br> 40 Lines/Sec <br> Paper roll outer diameter: 40mm |
|RAM memory|1GB|
|Internal storage|6GB|
|Payment methods processed|Chip & PIN <br> NFC Contactless <br> Magnetic Stripe|
|Architecture|ARMv7|
|Android System Web View|Package: com.android.webview <br> Version: 52.0.2743.100 <br> Use: Render the WebViews on Android apps.|