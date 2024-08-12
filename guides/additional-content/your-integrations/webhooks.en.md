# Webhooks

Webhooks (also known as web callbacks) are a simple method that allows an application or system to provide real-time information whenever an event occurs. It's a passive way of receiving data between two systems via an `HTTP POST` request.

Webhooks notifications can be configured for each application created in [Your integrations](/developers/panel/app). You can also configure a test URL that, along with your test credentials, allows you to test the correct operation of your notifications before going live.

Once configured, the Webhook will be sent whenever one or more registered events occur, eliminating the need for constant checks and thus preventing system overload and data loss in critical situations.

To configure your Webhooks notifications, choose one of the options below:

| Configuration type | Description |
|---|---|
| [Configuration through Your integrations](/developers/en/docs/your-integrations/notifications/webhooks#bookmark_configuration_through_your_integrations) | Allows configuring notifications for various topics, identifying different accounts if necessary, and validating the notification origin using the secret signature (except notifications for QR Code integrations). |
| [Configuration during payment creation](/developers/en/docs/your-integrations/notifications/webhooks#bookmark_configuration_during_payment_creation) | Allows specific configuration of notifications for each payment. This configuration is not allowed for Mercado Pago Point or Delivery integrations. |

> WARNING
>
> Important
>
> The URLs configured during payment creation will take precedence over those configured through Your integrations.

Once notifications are configured, refer to the necessary [actions after receiving a notification](/developers/en/docs/your-integrations/notifications/webhooks#bookmark_necessary_actions_after_receiving_a_notification) to validate that the notifications were properly received.

## Configuration through Your integrations

Efficiently and securely configure notifications for each application directly in [Your integrations](/developers/panel/app). In this documentation, we will explain how to: 
1. Specify URLs and configure events
2. Validate the notification source
3. Simulate receiving the notification

> WARNING
>
> Important
>
> This configuration method is not available for QR Code or Subscriptions integrations. To set up notifications for either of these integrations, use the [Configuration during payment creation](/developers/en/docs/your-integrations/notifications/webhooks#bookmark_configuration_during_payment_creation) method.


### 1. Specify URLs and configure events

To configure Webhooks notifications via Your integrations, it is necessary to specify the URLs where they will be received and the events for which you wish to receive notifications.

To do this, follow these steps:

1. Access [Your integrations](/developers/panel/app) and select the application for which you want to enable notifications. If you haven't created an application yet, access the [Developer Dashboard documentation](/developers/en/docs/your-integrations/dashboard) and follow the instructions to do so.
2. In the left menu, click on **Webhooks > Configure notifications** and configure the URLs that will be used to receive notifications. We recommend using different URLs for testing mode and production mode:
    * **Test mode URL:** provide a URL that allows testing the correct operation of notifications for this application during the testing or development phase. Testing these notifications should be done exclusively with the **test credentials of productive users**.
    * **Production mode URL:** provide a URL to receive notifications with your productive integration. These notifications should be configured with **productive credentials**.

![webhooks](/images/dashboard/webhooks-es.png)

> NOTE
>
> Note
> 
> If it is necessary to identify multiple accounts, you can add the parameter `?cliente=(sellersname) endpoint` to the endpoint URL to identify the sellers.

3. Select the **events** from which you want to receive notifications in `JSON` format via an `HTTP POST` to the URL specified earlier. An event can be any type of update on the reported object, including status changes or attributes. Refer to the table below to see the events that can be configured, considering the integrated Mercado Pago solution and its business specifics.

| Events | Name in Your Integrations | Topic | Associated products |
|---|---|---|---|
| Creation and update of payments | Payments | `payment` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Subscriptions<br>----[mla, mlm, mlb]----MP Point------------<br>Wallet Connect |
| Recurring payment of a subscription (creation - update) | Plans and Subscriptions | `subscription_authorized_payment` | Subscriptions |
| Subscription linking (creation - update) | Plans and Subscriptions | `subscription_preapproval` | Subscriptions |
| Subscription plan linking (creation - update) | Plans and Subscriptions | `subscription_preapproval_plan` | Subscriptions |
| Linking and unlinking of mp-connect accounts | Application linking | `mp-connect` | All products that have implemented OAuth |
----[mla, mlm, mlb]----| Completion and cancellation of payment attempt, or error processing payment attempt from Mercado Pago Point devices. | Point Integrations | `point_integration_wh` | Mercado Pago Point |------------
----[mla]----| Creation, update, or cancellation of orders. | Delivery (proximity marketplace) | `delivery` | MP Delivery |------------
| Wallet Connect transactions | Wallet Connect | `wallet_connect` | Wallet Connect |
| Fraud alerts after order processing | Fraud alerts | `stop_delivery_op_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro |
| Creation of refunds and claims | Claims | `topic_claims_integration_wh` | Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Pro<br>Checkout Bricks<br>Subscriptions<br>----[mla, mlm, mlb]----MP Point------------<br>QR Code<br>Wallet Connect |
| Retrieval of card information and update within Mercado Pago | Card Updater | `topic_card_id_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |
| Creation, closure, or expiration of commercial orders | Commercial orders | `topic_merchant_order_wh` | Checkout Pro<br>QR Code  |
| Opening of chargebacks, status changes, and modifications related to the release of funds | Chargebacks | `topic_chargebacks_wh` | Checkout Pro<br>Checkout ----[mlb]----Transparente ----------------[mla, mlu, mlc, mlm, mco, mpe]----API------------<br>Checkout Bricks |

> WARNING
>
> Important
>
> If you have any questions about the topics to de activated or the events that will be notified, check the [Additional information about Notifications documentation](/developers/en/docs/your-integrations/notifications/additional-info). 

5. Finally, click on **Save**. This will generate a unique **secret signature** for your application, allowing you to validate the authenticity of received notifications, ensuring they were sent by Mercado Pago. Note that the generated signature does not have an expiration date, and its periodic renewal is not mandatory but highly recommended. Simply click the **Reset** button next to the signature to renew it.

> WARNING
> 
> Important
> 
> QR Code notifications cannot be verified using the secret signature. Therefore, you should proceed directly to the Simulate receiving notifications step. If you have a QR Code integration and still want to verify the origin of your notifications, please contact [Mercado Pago Support](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/support/center).


### 2. Validate notification origin

Notifications sent by Mercado Pago will be similar to the following example for a `payment` topic alert:

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

Mercado Pago will always include the secret signature in the Webhooks notifications received at the registered URL, which will allow you to validate their authenticity to provide greater security and prevent potential fraud.

This signature will be sent in the `x-signature` header, as shown in the example below.

```x-signature

`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

To configure this validation, you need to extract the key contained in the header and compare it with the key provided for your application in Your integrations. You can do this by following the steps below. At the end, we provide some SDKs with a **complete code example** to facilitate the process:

1. To extract the timestamp (`ts`) and the signature from the `x-signature` header, split the content of the header by the "," character, which will result in a list of 2 elements. The value for the `ts` prefix is the timestamp (in milliseconds) of the notification, and `v1` is the encrypted signature. Following the example presented above, `ts=1704908010` and `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Using the template and descriptions below, replace the parameters with the data received in your notification.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Parameters with the `_url` suffix come from query params. Example: [data.id_url] will be replaced by the corresponding event ID value (`data.id`). This query param can be found in the received notification.
 * `[ts_header]` will represent the `ts` value extracted from the `x-signature` header.
 * `[x-request-id_header]` should be replaced with the value received in the `x-request-id` header.

> WARNING
>
> Important
> 
> If any of the values shown in the above template are not present in your notification, you should remove them.

3. In the [Your integrations](/developers/panel/app), select the integrated application and navigate to the Webhooks section to reveal the generated secret signature.
4. Generate the validation key. To do this, calculate an HMAC (Hash-based Message Authentication Code) using the `SHA256 hash` function in hexadecimal base. Use the **secret signature** as the key and the template filled with the respective values as the message.

[[[
```php
$cyphedSignature = hash_hmac('sha256', $data, $key);
```
```node
const crypto = require('crypto');
const cyphedSignature = crypto
    .createHmac('sha256', secret)
    .update(signatureTemplateParsed)
    .digest('hex'); 
```
```java
String cyphedSignature = new HmacUtils("HmacSHA256", secret).hmacHex(signedTemplate);
```
```python
import hashlib, hmac, binascii

cyphedSignature = binascii.hexlify(hmac_sha256(secret.encode(), signedTemplate.encode()))
```
]]]

5. Finally, compare the generated key with the key extracted from the header, ensuring they match exactly. Additionally, you can use the timestamp extracted from the header to compare it with a timestamp generated at the time of receiving the notification. This allows establishing a tolerance margin for delays in receiving the message.

See examples of complete code below:

[[[
```php
<?php
// Obtain the x-signature value from the header
$xSignature = $_SERVER['HTTP_X_SIGNATURE'];
$xRequestId = $_SERVER['HTTP_X_REQUEST_ID'];

// Obtain Query params related to the request URL
$queryParams = $_GET;

// Extract the "data.id" from the query params
$dataID = isset($queryParams['data.id']) ? $queryParams['data.id'] : '';

// Separating the x-signature into parts
$parts = explode(',', $xSignature);

// Initializing variables to store ts and hash
$ts = null;
$hash = null;

// Iterate over the values to obtain ts and v1
foreach ($parts as $part) {
    // Split each part into key and value
    $keyValue = explode('=', $part, 2);
    if (count($keyValue) == 2) {
        $key = trim($keyValue[0]);
        $value = trim($keyValue[1]);
        if ($key === "ts") {
            $ts = $value;
        } elseif ($key === "v1") {
            $hash = $value;
        }
    }
}

// Obtain the secret key for the user/application from Mercadopago developers site
$secret = "your_secret_key_here";

// Generate the manifest string
$manifest = "id:$dataID;request-id:$xRequestId;ts:$ts;";

// Create an HMAC signature defining the hash type and the key as a byte array
$sha = hash_hmac('sha256', $manifest, $secret);
if ($sha === $hash) {
    // HMAC verification passed
    echo "HMAC verification passed";
} else {
    // HMAC verification failed
    echo "HMAC verification failed";
}
?>
```
```javascript
// Obtain the x-signature value from the header
const xSignature = headers['x-signature']; // Assuming headers is an object containing request headers
const xRequestId = headers['x-request-id']; // Assuming headers is an object containing request headers

// Obtain Query params related to the request URL
const urlParams = new URLSearchParams(window.location.search);
const dataID = urlParams.get('data.id');

// Separating the x-signature into parts
const parts = xSignature.split(',');

// Initializing variables to store ts and hash
let ts;
let hash;

// Iterate over the values to obtain ts and v1
parts.forEach(part => {
    // Split each part into key and value
    const [key, value] = part.split('=');
    if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();
        if (trimmedKey === 'ts') {
            ts = trimmedValue;
        } else if (trimmedKey === 'v1') {
            hash = trimmedValue;
        }
    }
});

// Obtain the secret key for the user/application from Mercadopago developers site
const secret = 'your_secret_key_here';

// Generate the manifest string
const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;

// Create an HMAC signature
const hmac = crypto.createHmac('sha256', secret);
hmac.update(manifest);

// Obtain the hash result as a hexadecimal string
const sha = hmac.digest('hex');

if (sha === hash) {
    // HMAC verification passed
    console.log("HMAC verification passed");
} else {
    // HMAC verification failed
    console.log("HMAC verification failed");
}
```
```python
import hashlib
import hmac
import urllib.parse

# Obtain the x-signature value from the header
xSignature = request.headers.get("x-signature")
xRequestId = request.headers.get("x-request-id")

# Obtain Query params related to the request URL
queryParams = urllib.parse.parse_qs(request.url.query)

# Extract the "data.id" from the query params
dataID = queryParams.get("data.id", [""])[0]

# Separating the x-signature into parts
parts = xSignature.split(",")

# Initializing variables to store ts and hash
ts = None
hash = None

# Iterate over the values to obtain ts and v1
for part in parts:
    # Split each part into key and value
    keyValue = part.split("=", 1)
    if len(keyValue) == 2:
        key = keyValue[0].strip()
        value = keyValue[1].strip()
        if key == "ts":
            ts = value
        elif key == "v1":
            hash = value

# Obtain the secret key for the user/application from Mercadopago developers site
secret = "your_secret_key_here"

# Generate the manifest string
manifest = f"id:{dataID};request-id:{xRequestId};ts:{ts};"

# Create an HMAC signature defining the hash type and the key as a byte array
hmac_obj = hmac.new(secret.encode(), msg=manifest.encode(), digestmod=hashlib.sha256)

# Obtain the hash result as a hexadecimal string
sha = hmac_obj.hexdigest()
if sha == hash:
    # HMAC verification passed
    print("HMAC verification passed")
else:
    # HMAC verification failed
    print("HMAC verification failed")
```
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Obtain the x-signature value from the header
		xSignature := r.Header.Get("x-signature")
		xRequestId := r.Header.Get("x-request-id")

		// Obtain Query params related to the request URL
		queryParams := r.URL.Query()

		// Extract the "data.id" from the query params
		dataID := queryParams.Get("data.id")

		// Separating the x-signature into parts
		parts := strings.Split(xSignature, ",")

		// Initializing variables to store ts and hash
		var ts, hash string

		// Iterate over the values to obtain ts and v1
		for _, part := range parts {
			// Split each part into key and value
			keyValue := strings.SplitN(part, "=", 2)
			if len(keyValue) == 2 {
				key := strings.TrimSpace(keyValue[0])
				value := strings.TrimSpace(keyValue[1])
				if key == "ts" {
					ts = value
				} else if key == "v1" {
					hash = value
				}
			}
		}

		// Get secret key/token for specific user/application from Mercadopago developers site
		secret := "your_secret_key_here"

		// Generate the manifest string
		manifest := fmt.Sprintf("id:%v;request-id:%v;ts:%v;", dataID, xRequestId, ts)

		// Create an HMAC signature defining the hash type and the key as a byte array
		hmac := hmac.New(sha256.New, []byte(secret))
		hmac.Write([]byte(manifest))

		// Obtain the hash result as a hexadecimal string
		sha := hex.EncodeToString(hmac.Sum(nil))

if sha == hash {
    // HMAC verification passed
    fmt.Println("HMAC verification passed")
} else {
    // HMAC verification failed
    fmt.Println("HMAC verification failed")
}

	})
}
```
]]]

### 3. Simulate receiving the notification

Simulating receiving notifications is necessary to verify if they are configured correctly. To do so, follow these steps:

1. After configuring the URLs and desired events, click **Save** to save the configuration.
2. Afterward, click **Simulate** to test if the specified URL is receiving notifications correctly.
3. On the simulation screen, select the URL to be tested, which can be a **test** or **production** URL.
4. Next, select the desired **event type** and enter the identification that will be sent in the body of the notification.
5. Finally, click **Send test** to verify the request, the server response, and the event description.

## Configuration during payment creation

During the payment creation process, it's possible to configure the notification URL more specifically for each payment using the `notification_url` field and implementing the necessary notification receiver.

> WARNING
>
> Important
> 
> It's not possible to configure notifications for the point_integration_wh and delivery topics using this method. To activate these topics, use the [Your integrations settings](/developers/en/docs/your-integrations/notifications/webhooks#yourintegrationssettings).

Next, we explain how to do this with the help of the SDKs.

1. In the `notification_url` field, specify the URL where notifications will be received, as shown in the example below. To receive notifications exclusively via Webhooks and not via IPN, you can add the parameter `source_news=webhooks` to the `notification_url`. For example: "https://www.yourserver.com/notifications?source_news=webhooks".

[[[
```php
<?php 
$client = new PaymentClient();

        $body = [
            'transaction_amount' => 100,
            'token' => 'token',
            'description' => 'description',
            'installments' => 1,
            'payment_method_id' => 'visa',
            'notification_url' => 'http://test.com',
            'payer' => array(
                'email' => 'test@test.com',
                'identification' => array(
                    'type' => 'CPF',
                    'number' => '19119119100'
                )
            )
        ];

$client->create(body);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
 transaction_amount: '100',
  token: 'token',
  description: 'description',
  installments: 1,
  payment_method_id: 'visa',
  notification_url: 'http://test.com',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  }
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");


Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"))
      .setNotificationUrl("http://requestbin.fullcontact.com/1ogudgk1");


Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
             .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------


Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);


payment.save();


System.out.println(payment.getStatus());


```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')


payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
 payer: {
   email: params[:email],
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:docType],------------
     number: params[:docNumber]
   }
 }
}


payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]


puts payment


```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;


MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";


var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   NotificationUrl = "http://requestbin.fullcontact.com/1ogudgk1",


   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["docType"],------------
           Number = Request["docNumber"],
       },
   },
};


var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);


Console.WriteLine(payment.Status);


```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")


payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "notification_url" =  "http://requestbin.fullcontact.com/1ogudgk1",
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}


payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]


print(payment)
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: <transactionAmount>,
   Token: <token>,
   Description: <description>,
   Installments: <installments>,
   PaymentMethodID:   <paymentMethodId>,
   NotificationURL: "https:/mysite.com/notifications/new",
   Payer: &payment.PayerRequest{
      Email: <email>,
      Identification: &payment.IdentificationRequest{
         Type: <type>,
         Number: <number>,
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
fmt.Println(err)
}


fmt.Println(resource)
```
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
         "payer": {
           "email": "test@test.com"


         }
   }'


```
]]]

2. Implement the notification receiver using the following code as an example:

```php
<?php
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 switch($_POST["type"]) {
     case "payment":
         $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
         break;
     case "plan":
         $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
         break;
     case "subscription":
         $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
         break;
     case "invoice":
         $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
         break;
     case "point_integration_wh":
         // $_POST contiene la informaciòn relacionada a la notificaciòn.
         break;
 }
?>
```

After making the necessary configurations, the Webhooks notification will be delivered in `JSON` format. See the example of a notification for the `payments` topic and the descriptions of the information sent in the table below.

> WARNING
>
> Important
>
> Test payments, created with test credentials, will not send notifications. The only way to test notification reception is through the [Configuration through Your integrations](/developers/en/docs/your-integrations/notifications/webhooks#bookmark_configuration_through_your_integrations).

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

| Attribute | Description | Example in JSON |
| --- | --- | --- |
| **id** | Notification ID | `12345` |
| **live_mode** | Indicates if the URL provided is valid | `true` |
| **type** | Type of notification received according to the previously selected topic (payments, mp-connect, subscription, claim, automatic-payments, etc.) | `payment` |
| **date_created** | Date the notified resource was created | `2015-03-25T10:04:58.396-04:00` |
| **user_id**| Seller identifier | `44444` |
| **api_version** | Value indicating the API version sending the notification | `v1` |
| **action** | Notified event, indicating if it's a resource update or a new creation | `payment.created` |
| **data.id**  | ID of the payment, `merchant_order`, or claim | `999999999` |

> WARNING
>
> Important
>
> To obtain the notification format for topics other than `payment`, such as `point_integration_wh`, `delivery`, `topic_claims_integration_wh`, and `topic_card_id_wh`, consult [Additional information about notifications](/developers/en/docs/your-integrations/notifications/additional-info).

## Necessary actions after receiving a notification

When you receive a notification on your platform, Mercado Pago expects a response to validate that you received it correctly. To do this, you need to return an `HTTP STATUS 200 (OK)` or `201 (CREATED)` status.

The **waiting time** for confirmation of receipt of notifications is **22 seconds**. If this confirmation is not sent, the system will understand that the notification was not received and will **retry sending every 15 minutes** until a response is received. After the third attempt, the interval will be extended, but the attempts will continue.

After responding to the notification and confirming its receipt, you can obtain the complete information of the notified resource by making a request to the corresponding API endpoint. To identify which endpoint to use, check the table below:

----[mpe, mco, mlu, mlc]---- 
| Topic | URL | Documentation |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Get payment](/developers/en/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Search subscriptions](/developers/en/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Search subscriptions plans](/developers/en/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Get invoice data](/developers/en/reference/subscriptions/_authorized_payments_id/get)  |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Get claim details](/developers/en/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Get chargeback](/developers/en/reference/chargebacks/_chargebacks_id/get) |

------------
----[mlm, mlb]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Get payment](/developers/en/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Search subscriptions](/developers/en/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Search subscription plans](/developers/en/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Get invoices data](/developers/en/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Search payment intent](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Get claim details](/developers/en/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Get chargeback](/developers/en/reference/chargebacks/_chargebacks_id/get) |

------------
----[mla]---- 
| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [Get payment](/developers/en/reference/payments/_payments_id/get)  |
| subscription_preapproval | `https://api.mercadopago.com/preapproval/search` | [Search subscriptions](/developers/en/reference/subscriptions/_preapproval_search/get) |
| subscription_preapproval_plan | `https://api.mercadopago.com/preapproval_plan/search` | [Search subscription plans](/developers/en/reference/subscriptions/_preapproval_plan_search/get)  |
| subscription_authorized_payment | `https://api.mercadopago.com/authorized_payments/[ID]` | [Get invoices data](/developers/en/reference/subscriptions/_authorized_payments_id/get)  |
| point_integration_wh| `https://api.mercadopago.com/point/integration-api/payment-intents/{paymentintentid}` | [Search payment intent](/developers/en/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) |
| delivery | `https://api.mercadopago.com/proximity-integration/v1/orders/{shipment_id}` | [Get order](/developers/en/reference/mp_delivery/_proximity-integrationorders_shipment_id/get) |
| topic_claims_integration_wh | `https://api.mercadopago.com/post-purchase/v1/claims/[claim_id]` | [Get claim details](/developers/en/reference/claims/get-claim-details/get) |
| topic_merchant_order_wh | `https://api.mercadopago.com/merchant_orders/[ID]` | [Get order](/developers/en/reference/merchant_orders/_merchant_orders_id/get) |
| topic_chargebacks_wh | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [Get chargeback](/developers/en/reference/chargebacks/_chargebacks_id/get) |

------------

With this information, you will be able to make the necessary updates to your platform, such as updating an approved payment.

## Notifications dashboard

The notification dashboard allows the user to view the events triggered on a specific integration, check the status, and obtain detailed information about these events.

This dashboard will be displayed once you configure your Webhooks notifications, and you can access it anytime by clicking on **Webhooks** within the [Your integrations](/developers/panel/app).

Among the available information, you will find the percentage of notifications delivered, as well as a quick view of which URLs and events are configured.

Additionally, you will find a complete list of the latest notifications sent and their details, such as **delivery status** (success or failure), **action** (action associated with the triggered event), **event** (type of triggered event), and **date and time**. If desired, you can filter these displayed results by **delivery status** and by period (**date and time**).

![notifications dashboard](/images/dashboard/notification-dashboard-es.png)

### Evet details

When you click on one of the listed notifications, you can access the event details. This section provides additional information, allowing you to retrieve lost data in case of notification delivery failure, thereby keeping your system up to date.
 * **Status:** Event status along with the corresponding success or error code.
 * **Event:** Type of event triggered as selected in the notification configuration.
 * **Type:** Topic to which the triggered event belongs as selected during configuration.
 * **Trigger date and time:** Date and time when the event was triggered.
 * **Description:** Detailed description of the event as documented.
 * **Trigger ID:** Unique identifier of the sent notification.
 * **Request:** JSON of the request corresponding to the triggered notification.

![notifications details](/images/dashboard/notification-details-dashboard-es.png)

In case of notification delivery failure, you can view the reasons and correct the necessary information to prevent future issues.