# Integration test

Before going to production, we recommend testing the proper functioning of your integration and payment processing. This will allow you to verify if the integration was done correctly and if payments are being processed without errors. 

## Prerequisites 

To perform an integration test with the attended QR code model, you must meet the following prerequisites:

| Prerequisite | Description |
|---|---|
| Test users  (seller and buyer) | [Test users](/developers/en/docs/qr-code/additional-content/your-integrations/test/accounts) have the same characteristics as a real Mercado Pago account, allowing you to test the functionality of the integrations you are developing without compromising real data. <br>Please note that the entire QR code integration development phase should be carried out with test users. Therefore, we recommend **creating new test users** specifically for the integration testing phase. |
| Production credentials of test users | To test your integration correctly, you will need to use the **production credentials** of the test user you created. You can find more information about credentials by accessing [our documentation](/developers/en/docs/qr-code/additional-content/your-integrations/credentials). |

If all the prerequisites are met, continue to the next steps to start your integration test.