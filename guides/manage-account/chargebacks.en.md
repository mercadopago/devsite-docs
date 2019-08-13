# Chargeback management

> NOTE
>
> Note
>
> **What is it?** When a buyer communicates with the entity that issued his card (a bank, for example) and disclaim a payment made through this means, a _chargeback_ is generated. [More information &raquo;](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249)

The chargeback implies that Mercado Pago will retain the money from the sale until the problem is solved.

Chargebacks can be managed via API.

It is important in this process to mention the key instances:

1. Occurrence of the chargeback
2. Consultation of the chargeback
3. Understanding of coverage
4. Dispute of the chargeback
5. Review by Mercado Pago
6. Resolution

Now we will go into detail in each of them.

## Occurrence of the chargeback

Through [IPN](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn) we will notify you instantly whenever you receive a chargeback. For this to happen, you must be subscribed to the subject `chargebacks` within the [configuration](https://www.mercadopago.com.ar/herramientas/notificaciones).

## Consultation of the chargeback

The IPN notification will contain the `ID` of the chargeback.

With this `ID` you can make a **GET** to` https://api.mercadopago.com/v1/chargebacks/ID?access_token=` 

```
curl -XGET https://api.mercadopago.com/v1/chargebacks/ID?access_token=<ACCESS_TOKEN>
```

to check your information:

```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "ARS",
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

## Understanding of coverage

According to the vendor's operation, your commercial agreement - or both - may vary the coverage policy of each chargeback by Mercado Pago. The field `coverage_elegible` defines if the chargeback is possible to be disputed or not.

| Field         | Value           | Description
| ----          | ----            | ----
| `coverage_elegible` | **false** | Indicates that the chargeback can not be disputed
| `coverage_elegible` | **true**  | Indicates that the chargeback can be disputed

In addition, there is a `documentation_required` field that indicates whether the documentation is required to be uploaded to be covered.

| Field         | Value           | Description
| ----          | ----            | ----
| `documentation_required` | **false** | Indicates that no documentation is required for the chargeback
| `documentation_required` | **true**  | Indicates that documentation is required for the chargeback


----[mla,mlc,mlm,mpe,mco,global]----
In case you need to provide documentation, you have a period of 7 days from the creation of the chargeback to upload it. In the response of the chargeback query you can see when this term expires in the `date_documentation_deadline` field.
------------
----[mlb]----
In case you need to provide documentation, you have a period of 10 days from the creation of the chargeback to upload it. In the response of the chargeback query you can see when this term expires in the `date_documentation_deadline` field.
------------

> WARNING
> 
> Requisites
>
> It is only possible to continue with the rest of the steps if the chargeback **can be disputed**, **it is required to upload documentation** and **the term has not expired.** 

## Dispute of the chargeback

If the chargeback follows the criteria mentioned above, you can send via API the supporting information that validates that the sale occurred. [More information &raquo;](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249) 

To do this, you must make a **POST** to `https://api.mercadopago.com/v1/chargebacks/ID/documentation` with the following form:
```
curl -XPOST -F 'files[]=@/path/to/file/file1.png' -F 'files[]=@/path/to/file/file2.pdf' https://api.mercadopago.com/v1/chargebacks/ID/documentation?access_token=
```

The api will respond with status `200 OK` if the documentation has been uploaded successfully. The response will change the state of the `documentation_status` attribute to **review_pending**.

> NOTE
>
> Note
>
> The files may be .jpg, .png, .pdf and as a whole they may not exceed 10mb.

## Review by Mercado Pago

Once the documentation is sent, a Mercado Pago representative will review it.

## Resolution

Eventually the chargeback may have two types of possible resolutions:

| Field         | Value           | Description
| ----          | ----            | ----
| `coverage_applied` | **false** | Indicates that Mercado Pago failed _against_ the seller (the money is returned to the buyer)
| `coverage_applied` | **true**  | Indicates that Mercado Pago failed _against_ the seller (the money is returned to the seller)

When the resolution happens, regardless of the result, a new notification will be sent via **IPN** so that it can be verified what happened.