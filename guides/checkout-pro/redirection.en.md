# Redirection

At the end of the payment process, it is possible to redirect the buyer back to your website via the `back_urls` attribute. This attribute allows you to define the URLs where the buyer should be redirected according to the payment status.

> NOTE
>
> Important
>
> If you want the redirection for approved payments to be automatic, without rendering a return button, you must also add the `auto_return` attribute with the value `approved`. Also, the `auto_return` attribute only works for Checkout Pro's **redirect** and **mobile mode**. The same does not work in modal mode, since the buyer remains on the site during the entire payment process.

In the following tables you will find the details of each of the possible request and response parameters.

| Attribute | 	Description |
| ------------ 	| 	-------- |
| `auto_return` | Buyers are automatically redirected to _site_ when payment is approved. The default value is `approved`. |
| `back_urls` | Return URL to the site. Possible scenarios are:<br/><br/>`success`: Return URL when payment is approved.<br/><br/>`pending`: Return URL when payment is pending.<br/><br/> `failure`: Return URL when payment is rejected.

Through the `back_urls`, the following parameters will be returned:

| Parameter | 	Description |
| --- | --- |
| `payment_id` | ID (identifier) of the Mercado Pago payment. |
| `status` | Payment status. Eg: `approved` for an approved payment or `pending` for a pending payment. |
| `external_reference` | Amount sent when creating the payment preference. |
| `merchant_order_id` | ID (identifier) of the payment order generated in Mercado Pago. |


To define the `back_urls`, send a **POST** with the `back_urls` attribute informing the URLs where the buyer should be directed when finalizing the payment to the endpoint [/checkout/preferences](/developers/en/reference/ preferences/_checkout_preferences/post) or, if you prefer, use one of the codes available below.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
"success" => "https://www.your-website/success",
"failure" => "http://www.your-website/failure",
"pending" => "http://www.your-website/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
// ...
"back_urls": {
"success": "https://www.your-website/success",
"failure": "http://www.your-website/failure",
"pending": "http://www.your-website/pending"
},
"auto_return": "approved",
// ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
PreferenceBackUrlsRequest.builder()
.success("https://www.your-website/success")
.pending("https://www.your-website/pending")
.failure("https://www.your-website/failure")
.build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
# ...
back_urls = {
success: 'https://www.your-website/success',
failure: 'https://www.your-website/failure',
pending: 'https://www.your-website/pendings'
},
auto_return: 'approved'
# ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
// ...
BackUrls = new PreferenceBackUrlsRequest
{
Success = "https://www.your-website/success",
Failure = "http://www.your-website/failure",
Pending = "http://www.your-website/pendings",
},
AutoReturn = "approved",
};
```
```python
preference_data = {
"back_urls": {
"success": "https://www.your-website/success",
"failure": "https://www.your-website/failure",
"pending": "https://www.your-website/pendings"
},
"auto_return": "approved"
}
```
]]]

