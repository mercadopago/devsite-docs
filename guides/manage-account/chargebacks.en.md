# Chargeback Management

Find all the information about chargebacks, how to prevent them, and how to manage them via API.

## What is a chargeback?

A chargeback is created when a **customer disputes a credit or debit card charge with the card issuer bank and requests a money refund.**

When that happens, we can withhold the collected money until the problem is solved and manage the case with the card issuer entity.  10 days are allowed to submit the transaction vouchers. and the validation process may take up to 130 days.

If the claim is accepted by the issuer entity, the buyer will have the money refunded.  But don't worry, if you meet the [Seller Protection Program](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294) requirements we will cover the chargeback and will not discount the sales money.

> NOTE
>
> Note
>
> If you receive a chargeback and don't know what to do, see our [FAQs](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249).

## Recommendations for chargeback prevention

You cannot avoid all chargebacks but you can reduce the likelihood of having a payment charged back.

### Fill out your business data

If the buyer doesn't recognize a charge in his/her credit card statement, a chargeback can be made.  To avoid these cases, fill out [your business data](https://www.mercadopago.com.uy/settings/account) to define how you want to appear in your card statements and payment confirmation SMS.

### Add security code to your site

We help you detect any customer unusual behavior with our security code against fraud.

It’s very simple.  Add the script, set up your site section where it is in and, ready!  You only need to replace the `view` value for the name of the page you want to add it on.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Possible `view` values

| Value                                                         | Section                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| *home* | Your site home page. |
| *search* | Search page or product list. |
| *item* | Specific product page. |

> NOTE
>
> Note
>
> If you have no available value for this section, you can leave it empty.

### Send the purchase voucher

Send the payment voucher by e-mail or sms so that your customer remembers what the payment was about.

### Detail all payment data

For enhanced validation of payment security, send us as much information as possible when creating the payment.  For example, if you send us information about the buyer, we can detect if that buyer made any suspicious payment some other time and prevent it.  Find more information about each attribute in [API References](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post/).

### Return suspicious payments

When we detect an irregular behavior or are notified that a stolen credit card was used, we will contact via e-mail to let you know what happened. We recommend you to [cancel the purchase](https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds/) and refund the money to the buyer so that you can avoid a chargeback.

### Check data when collecting with Point

Ask your buyers for an ID when they make a payment and check that the data and signature match those on the card.

## Manage your chargebacks by API

### A chargeback emerges

We will advise you via [IPN notifications](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn) every time you receive a chargeback. To [start receiving notifications](https://www.mercadopago.com.ar/herramientas/notificaciones), fill out your data and choose Chargebacks.

### Chargeback query

The IPN notification will have a chargeback ID. Use that ID to get information about the payment.

```
curl -XGET https://api.mercadopago.com/v1/chargebacks/ID?access_token=<ACCESS_TOKEN>
```

You will get the following information:

```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "[FAKER][CURRENCY][ACRONYM]",
  "amount": 100.20,
  "reason": "fraud",
  "coverage_applied": false,
  "coverage_elegible": true,
  "documentation_required": true,
  "documentation_status": "valid",
  "documentation": [
    {
      "type": "image/png",
      "url": "https://api.mercadopago.com/v1/chargebacks/documentation/op/op-4ccf4f39-b6f7-4c7b-a5ce-e8941a2a2b5f?access_token=TEST-7330838325999170-111309-c5e69fb44fb5dc008668f64e27653767-345521533",
      "description": "File: img.png, Size: 3324"
    }
  ],
  "date_documentation_deadline": "2018-12-08T09:50:37.000-04:00",
  "date_created": "2018-09-14T16:20:54.000-04:00",
  "date_last_updated": "2018-11-28T10:48:48.000-04:00",
  "live_mode": true
}
```

> NOTE
>
> Nota
>
> Find more information in [API References](https://www.mercadopago.com.ar/developers/es/reference/chargebacks/_chargebacks_id/get/).

### Understanding coverage

Mercado Pago coverage policy may change on a case by case basis.
The `coverage_elegible` field defines that a chargeback can be covered and `documentation_required` shows whether documentation is required.
You can see the [Seller Protection Program](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294) for more information.

> WARNING
>
> Important
>
> You can continue with the other steps only if the chargeback can be covered, documentation needs to be uploaded and the term has not expired.

### Chargeback dispute

You can send supporting information validating the sale by API.

```
curl -XPOST -F 'files[]=@/path/to/file/file1.png' -F 'files[]=@/path/to/file/file2.pdf' https://api.mercadopago.com/v1/chargebacks/ID/documentation?access_token=
```

If the documentation has been successfully uploaded, the API will answer with `200 OK` state, and the `documentation_status` value will go to `review_pending`.

> NOTE
>
> Note
>
> Files can be .jpg, .png, .pdf and should not exceed 10mb overall.

### Resolution

Once the documentation has been sent, a Mercado Pago representative will review it.
Eventually, the chargeback may have two types of possible resolutions in the `coverage_applied` field:

| Value           | Description
| ----            | ----
| **true**  | Shows that the decision was for the seller and the money is refunded.
| **false** | Shows that the decision was against the seller and the money is discounted.

Upon resolution, a new IPN notification will be sent so that you can verify the case.
