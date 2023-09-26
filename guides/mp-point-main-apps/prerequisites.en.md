# Requirements

Before you start developing your solution, take a look at the requirements that must be met.

| Requirement | Description |
|---|---|
| Device pre-configuration| In order for the machines to operate in **Integrated mode** and for the pre-configuration to be carried out, share with Mercado Pago the account that will be used for the integration, as well as the cash register and store configurations and the serial numbers of the devices. |
|Development kit | To start development, download the [Development kit]https://drive.google.com/drive/folders/1Mglpa2c3FmYs4L9iskczagBMPGjHCMbY?usp=share_link) provided by Mercado Pago. |
|Android Studio| Install the [integrated development environment](https://developer.android.com/studio) to build and debug the main apps. |
|App in the Developer Panel | Create an app in the [developer panel](/developers/panel/app) with the integrator's account. Then generate the `ClientId` that will serve as the integration identifier. Check out more information about creating an application in [Application details](/developers/en/docs/main-apps/additional-content/your-integrations/application-details). |
|OAuth flow| If you want to obtain information from the seller's account, do the [OAuth flow](/developers/en/docs/main-apps/additional-content/security/oauth/introduction). |

## Point Smart technical specifications

To ensure that the integration is successful, consider the machine's characteristics and how the application will adapt to them.

<center>

![prerequisites](/main-apps/prerequisites.png)

</center>

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
|Android System Web View|Package: com.android.webview <br> Version: 52.0.2743.100 <br> Use: Renderizar las WebViews en apps Android.|