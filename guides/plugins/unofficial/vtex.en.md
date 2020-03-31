# VTEX

## What is VTEX?

[VTEX](https://www.vtex.com/en/) is a robust PCI compliance e-commerce platform based in Brazil with operations all around Latin America that provides the capability to process payments through Mercado Pago.

For further information about VTEX features please check it's [support site](help.vtex.com).

## Which products of Mercado Pago are available in VTEX?

VTEX supports payment processing in all of the operation modes Mercado Pago offers.

#### Aggregator mode

Receive payments using all the credit cards and deals that Mercado Pago offers, in addition to bank transfer and offline payment methods.

#### Gateway mode

Receive payments directly with the merchant commerce code using all the deals of the merchant.

#### All In mode

Combine gateway and aggregator operation offering the best option to the buyer.

## Set up VTEX to operate in aggregator mode

To set up aggregator mode you must follow this steps:

1. Set up affiliation.
1. Set up native payment plans.
1. Set up offline payment plans.
----[mlc]----
1. Set up offline payment Webpay.
------------
1. Set up custom payment plans.
1. Set up DeviceID.

### Set up affiliation

To operate in aggregator mode you just need to set an affiliation.

1. Select Catalog menu.
2. Select PCI Gateway.

    ![Setting affiliation in VTEX](/images/vtex-afiliation-1.png)

3. Access side menu: Payment/Settings.

    ![VTEX Configuration Page](/images/vtex-config.png)
    
4. Go top menu: Gateways Affiliations.
5. Add New Affiliation (+ Sign).

    ![Affiliation search bar](/images/vtex-afiliation.png)

6. Search y select "MercadoPagoV1".

    ![Affiliations page in VTEX](/images/vtex-afiliation-3.png)

7. Fill the information required.

    ![Complete affliation information](/images/vtex-afiliation-4.png)

- Affiliation Name: Affiliation identifier name.
- OAuth login: Not used.
- PublicKey PublicKey: Mercado Pago's PublicKey, [see credentials]([FAKER][CREDENTIALS][URL]).
- AccessToken Access:Mercado Pago's AccessToken, [see credentials]([FAKER][CREDENTIALS][URL]).
- RefreshToken RefreshToken: Not used - leave blank.
- ExpiredTokenIn: Not used - leave blank.
- Merchant Account Id: Not used - leave blank.
- Processing Mode: select aggregator.
- CountryName: select country.
- SoftDescriptor: String to display in credit card summary (feature available just in Brazil).
- Description: Operation description, optional.
- CategoryId: Product category - select from the list.
- Financial Institution: Just for Chile - fill with 1234.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Region that defines time zone.
- orderExpirationHours: Sets the time limit which order status will be queried to Mercado Pago.
- maxInstallments: Maximum amount of installments.
- Categoria Principal: Product category - Select from the list.
- Captura de segurança antecipada: Amount of hour for the automatic capture (just for Argentina and Brazil)

### Set up native payment plan

Native payment plan are the credit/debit cards that Vtex has integrated

1. In the top menu.
2. Click on payment conditions.
3. On the right side click add new condition.
4. Next to the search field.
5. On the (+ sign)

    ![Payment terms bar](/images/vtex-afiliation-2.png)

6. Search and select the payment method to add, in this example American Express.

    ![Setting payment method in VTEX](/images/vtex-native-plan-3.png)

7. Put a description (optional).
8. Select the affiliation.
9. Select automatic installments.
10. Set status active for the payment method in checkout - It could be set and customized afterwards.
11. Save.

    ![VTEX payment method configuration page](/images/vtex-native-plan-4.png)

12. Check that the native plan is added.

    ![Native plan](/images/vtex-native-plan-5.png)

### Set up oflline payment plan

Offline payment plan are the payment methods which payments are made in two steps:
- In first place a ticket with payment instructions is created.
- In second place cash or ATM payment is placed following the instructions in the ticket.

#### Offline methods by country

- Argentina: PagoFacil, Rapipago, RedLink.
- Chile: Servipag.
- Colombia: Efecty, Davivienda.
- Mexico: Banamex, Bancomer, Oxxo.
- Peru: PagoEfectivo.
- Uruguay: Abitab, Redpagos.
- Brazil: Ticket Bank

1. In the top menu.
2. Click on payment conditions.
3. On the right side click add new condition.
4. Next to the search field.
5. On the (+ sign)

    ![VTEX afiliation](/images/vtex-afiliation-2.png)


6. Search and select Boleto Bancario - This payment plan includes all offline methods of the country.

    ![Offline](/images/vtex-offline-plan-3.png)

7. Set a description (optional).
8. Select the affiliation.
9. Set status active to activate the payment method in checkout - could be set up and activated later.
10. Save.

    ![Offline](/images/vtex-offline-plan-4.png)

----[mlc]----
### Set up Webpay payment plan

1. Select Catalog menu.
2. Select PCI Gateway.

    ![Offline](/images/vtex-webpay-1.png)

3. Settings.
4. Payment plans.
5. New payment plan.

    ![Offline](/images/vtex-webpay-2.png)

6. Search and select Webpay.

    ![Offline](/images/vtex-webpay-3.png)

7. Set a description (optional).
8. Select the affiliation.
9. Set status active to activate the payment method in checkout - could be set up and activated later.
10. Save.

    ![Offline](/images/vtex-webpay-4.png)
------------

### Set up custom payment plan

Custom payment plan allows adding VTEX local cards that VTEX doesn't integrate as a native payment method and can be used with Mercado Pago.

Payment methods by country:

Argentina: Argencard, Cencosud, CMR, Cordial, Cordobesa, Mercado Pago + Banco Patagonia.
Chile: CMR, Magna, Presto.
Colombia: Codensa.
Uruguay: Oca.

1. Select modules menu.
2. Select PCI Gateway.

    ![Custom plan](/images/vtex-custom-1.png)

3. Settings.
4. Custom payments.
5. Select a Cobrand to set up.

    ![Custom plan](/images/vtex-custom-2.png)

6. Complete the fields to set up the credit card. You must copy-paste the values from this instructions to avoid errors.
7. Save.

    ![Custom plan](/images/vtex-custom-3.png)

8. Set a description (optional).
9. Select the affiliation.
10. Set status active to activate the payment method in checkout - could be set up and activated later.
11. Select automatic.
11. Save

![Custom plan](/images/vtex-custom-4.png)

### Set up custom plan - Argentina cards

| Name                   | Description              | Payment method |       Bins {min}-{max},{min}-{max},{bin1},{bin2}       | Payment code in acquirer (optional) |
|----|----|------|:-----:|------|
| Argencard                | Argencard                | Mastercard    | 501105-501105                                           | argencard                                |
| Cencosud                 | Cencosud                 | Mastercard    | 603493-603493                                           | cencosud                                 |
| CMR                      | CMR                      | Mastercard    | 557039-557039                                           | cmr                                      |
| Cordial                  | Cordial                  | Mastercard    | 522135-522135,522137-522137,527555-527555               | cordial                                  |
| Cordobesa                | Cordobesa                | Mastercard    | 542702-542702,544764-544764,550073-550073,528824-528824 | cordobesa                                |
| Mercado Pago - Patagonia | Mercado Pago - Patagonia | Mastercard    | 515073-515073,515070-515070,532383-532383,532384-532384 | mercadopago_cc                           |


### Set up custom plan - Chile cards

| Name | Description | Payment method|                                   Bins {min}-{max},{min}-{max},{bin1},{bin2}                                   | Payment code in acquirer (optional) |
|---|-----|-----|:----:|------|
| Presto | Presto      | Mastercard    | 920000-920099                                                                                                   | presto                                   |
| Magna  | Magna       | Mastercard    | 568000-568099                                                                                                   | magna                                    |
| CMR    | CMR         | Mastercard    | 499847-499847,460072-460072,445596-445596,465375-465375,548740-548740,548742-548742,533187-533187,558984-558984 | cmr                                      |

### Set up custom plan - Colombia cards

| Name  | Description |Payment method | Bins {min}-{max},{min}-{max},{bin1},{bin2} | Payment code in acquirer (optional) |
|---|------|-----|:------:|------|
| Codensa | Codensa     | Mastercard    | 590712-590712                               | codensa                                  |

### Set up custom plan - Uruguay cards

| Name | Description | Payment method |                     Bins {min}-{max},{min}-{max},{bin1},{bin2}                     | Payment code in acquirer (optional) |
|---|----|---|:----:|------|
| OCA    | OCA         | Mastercard    | 589892-589892,542991-542991,549530-549530,549564-549564,549571-549571,549576-549576 | oca                                      |

## Set up DeviceID

1. Select Catalog menu.
2. Select portal.

    ![Setting deviceID](/images/vtex-device-settings-1.png)

3. Select settings.

    ![Adjustment icon](/images/vtex-device-settings-2.png)

4. Select code.
5. Select checkout5-custom.js.
6. Copy and paste the following code:

```
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

7. Select "save"

## Credentials

To get Mercado Pago credentials you must follow this steps:

1. Log into Mercado Pago account.
2. Go to this [URL]([FAKER][CREDENTIALS][URL]).
3. Select custom checkout tab.
4. Copy and paste the Public key and Access token (Production mode to process real payments / Sandbox mode to test).
5. Before going to production you must fill the form ‘I want to go to production’.


### Understand VTEX's logs

The logs allow to check the information that Mercado Pago returns and VTEX exposes to have a better understanding of what happens with a transaction.

In case of changing or adding new payment methods, logs give us the possibility of checking that everything is working.

In addition, they also provide a broader understanding to the business teams to give a better support to the sellers and be the first support instance.

To access log enter a VTEX transaction, the search the log that contains the status response and click _see more_.

The most important fields are:

- `"Id":10302316` Transaction number in Mercado Pago.
- `"Payment_method_id":"visa"`: Payment method.
- `"Payment_type_id":"credit_card"`: Payment method.
- `"Status":"authorized"`: Payment status.
- `"Status_detail":"pending_capture"`: payment status detail.
- `"External_reference":"503451"`: VTEX identifier sent to Mercado Pago.
- `"First_six_digits":"450995"`: Credit card BIN.
- `"Processing_mode":"gateway"`: Processing mode (aggregator / gateway).
- `"Merchant_account_id":"83bb673420b8201f80aff598b3743864"`: Commerce code (just Gateway).

In case of a rejection is important to check `Status_detail` field which specifies the rejection cause.

- `"Status":"rejected"`: Payment rejected.

- `"Status_detail":"cc_rejected_other_reason"`:Credit card rejection, no information about the cause.
- `"Status_detail":"cc_rejected_call_for_authorize"`:Credit card rejection, customer must call to authorize.
- `"Status_detail":"cc_rejected_insufficient_amount"`: Credit card rejection, customer does not have funds.
- `"Status_detail":"cc_rejected_high_risk"`: Credit card rejection, fraud risk.
