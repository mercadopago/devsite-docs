# Integration Test

Before going to production, we recommend testing the correct operation of your integration and payment processing. This will allow you to verify if the integration was done correctly and if payments are being processed without errors.

## Prerequisites

To carry out an integration test with Mercado Pago Point, you must meet the following prerequisites:

| Requirement | Description |
|---|---|
| Mercado Pago User and production credentials | The [credentials](/developers/en/docs/mp-point/additional-content/your-integrations/credentials) are unique keys that we provide you with to configure your integrations. You will need your **production credentials** to test the correct operation of your Point integration. |
| Mercado Pago Point device | You must have a Point device to test the correct payment processing. Check [our documentation](/developers/en/docs/mp-point/landing) to see which devices are available according to your location. |

> WARNING
>
> Important
>
> If the Point device is operated by more than one Mercado Pago account, it will be necessary to add [Collaborator Accounts](https://www.mercadopago[FAKER][URL][DOMAIN]/collaborators) through the Mercado Pago Panel to be able to manage all its functionalities jointly.

If you meet all the prerequisites, you can proceed with testing your integration, which will consist of two stages:
 1. [Configure test integration]()
 2. [Test payments processing]()

Additionally, once you have completed your tests, you must be aware of and comply with the [requirements to go to production]().