# How to manage chargebacks disputes?

A dispute occurs when **you want to argue the chargeback claim** with supporting information that validate and ensure that the product was delivered in compliance.

All the information necessary to manage chargeback disputes made can be found here:

1. Configure [IPN notifications](/developers/panel/notifications/ipn) on your dashboard and enable the **Chargebacks** option
   
2. Check all the information related to a chargeback using the [Get chargeback request](/developers/pt/reference/chargebacks/_chargebacks_id/get)
   1. Check if the chargeback [can be covered](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/294) and assure whether any documentation is required, via the `coverage_eligible` and `documentation_required` fields, respectively.

> WARNING
>
> Attention
>
>It is only necessary to continue with the next steps if:
> 
> 1. The chargeback dispute is eligible for coverage
>2. Documentation is required
>3. The term has not expired
>

3. Send the documents through the following API method:
```curl
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID/documentation
```

> NOTE
>
>Note
>
>Files can be `.jpg`, `.png` or `.pdf` and should not exceed 10mb overall.

If the documentation has been successfully uploaded, the API will answer with `200 OK`, and the `documentation_status` value will change to `review_pending`.


4. Upon resolution, a new IPN notification will be sent so that you can verify the case. Check the dispute using the [Get Chargeback](/developers/pt/reference/chargebacks/_chargebacks_id/get) method. The `coverage_applied` value could have taken on one of the possible values:

| Value           | Description
| ----            | ----
| **true**  | Shows that the decision was for the seller and the money is refunded.
| **false** | Shows that the decision was against the seller and the money is discounted.
