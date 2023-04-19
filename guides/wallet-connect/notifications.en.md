# Notifications

## Webhooks

Webhook (also known as web callback) is a simple method that makes it easy for an app or system to provide real-time information whenever an event happens, that is, it is a way to passively receive data between two systems through an HTTP POST.

Once configured, the Webhook will be sent whenever one or more registered events occur, avoiding a search job every minute in search of an answer and, consequently, a system overload and data loss whenever there is some situation. 

After receiving a notification on your platform, Mercado Pago will wait for a response to validate that you received it correctly.

> NOTE
>
> Importante
>
> Webhooks notifications can be configured for one or more applications created in your Dashboard.


## Prerequisites

Before setting up Webhooks notifications for Wallet Connect, consider the requirements listed below.

| Requirement  | Description  |
| --- | --- |
| SSL certificate  | Protocol that allows you to establish secure communications over the Internet for activities such as browsing, email, and other data transfers.  |
| Request response  | The endpoint must return a 2XX response code to acknowledge receipt. All response codes outside of 2XXs will trigger exponential retries from Mercado Pago.  |
| Timeout  | To avoid timeout issues, the integrator’ application must return a response before triggering complex logic on its side.  |
| Permission request  | In order to be able to whitelist requests via DNS, requests will come through the api.mercadopago.com endpoint. The integrator must disable CSRF (**Cross-site request forgery**) for api.mercadopago.com, which will allow Mercado Pago requests.  |

## Types of events

There are two different types of events that allow you to receive notifications. These events refer to the update and/or cancellation of an agreement.

### Cancellation of agreement between integrator and Mercado Pago

In this case, the user has the possibility to unsubscribe from an agreement, which causes the existing contract to be cancelled. When this happens, the `payer_token` is invalidated and no further charges are made to the user. If the integrator makes new collection attempts, it will be rejected.

> NOTE
>
> Important
>
> If new attempts to charge are made, they will be rejected.

Check below a code example with the information sent at the time of the request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "11ae6c7564ed497f945f755fcabat8k6",
     type: "wallet_connect",
     entity: "agreement",
     action: "status.updated",
     date: "2021-09-30T23:24:44Z",
     model_version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",
           status: "cancelled"

     }

}'

```
]]]


### Agreement payment method update

In this case, the user can add or update a secondary payment method (by default, Mercado Pago account money is the first payment method). 

Based on payment statuses, it is possible to detect rejected payments and notify the user so that they can perform the update or add a secondary payment method.

Check below a code example with the information sent at the time of the request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "44ae6c7564ed497f945f755fcabat9d4",
     type: "wallet_connect",
     entity: "agreement",
     action: "payment_method.updated",
     date: "2021-09-30T23:24:44Z",
     model_version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",

     }

}' 

```
]]]

### User confirmation of the agreement.

From this event, it is not necessary to rely on the `return_uri` to know if the user has confirmed the agreement or not.

For this, it is possible to make a **GET** request to the endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id/get) and obtain the `agreement_code` and `external_flow_id`. This will allow to proceed with the creation of the Payer token for payment creation.

See below an example of the code with the information sent at the time of the request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-d ‘{ 
     id: “44ae6c7564ed497f945f755fcabat9d4”,
     type: "wallet_connect",
     entity: "agreement",
     action: "status.updated",
     date: "2021-09-30T23:24:44Z",
     model_version: 1,
     version: 0,
     data: { 
           id: "22ae6c1235ed497f945f755fcaba3c6c",
           status: "confirmed_by_user"
     }
}’

```
]]]

In the table below you can check more details about the possible values ​​that are sent in the body of the request for cancellation and update of the payment method of an agreement.

| Field | Value  | Type  | Description  |
| --- | --- | --- | --- |
| id  | UUID/Number  | String  | Unique event ID. This ID prevents duplicate messages from the integrator side.  |
| type  | wallet_connect  | String  | Represents events about the agreement between the integrator and the Mercado Pago user. This value will always be `wallet_connect`.  |
| entity  | agreement  | String  | Entity related to the event. The value will always be `agreement`.  |
| action  | payment_method.updated  | String  | - Indicates that the secondary payment method associated with the contract has been updated. <br> - Can be used by the seller as a way to know if a new charge should be made.  |
| action  | status.updated  | String  | - Indicates that the contract was canceled or confirmed by the user. <br> - It can be used by the integrator to know if the user has confirmed the agreement or if it was canceled and new charges **should not** be made. |
| date  | {{action_date}}  | Date  | An approximate date (in Zulu format) associated with the event.  |
| data  | {  id: {{agreement_id}},  status: {{agreement_status}}  }  | id: String  status: String  | This field can provide extra details about the event based on type and action.  |
| model_version  | 1  | Integer  | Webhook body template version. It will always be `1`.  |
| version  | 0  | Integer  | Version to identify duplicates within the same id. |


## Configuration

The configuration Webhooks configuration is done through the Dashboard. Below we will explain how to indicate the URLs that will be notified and how to configure the events for which notification will be received.

![webhooks](/images/notifications/webhook_es.png)

1. If you still don't have an application created, access your [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and click **Enter** to login if you haven't already be logged in.
2. With the application created, go to the Webhooks Notifications tab in your Dashboard and configure the [URLs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/webhooks) of **production**  and **test** from which notifications will be received. 
3. You will also be able to experiment and test if the indicated URL is receiving notifications correctly, being able to verify the request, the response given by the server and the description of the event.
4. If you need to identify multiple accounts, at the end of the indicated URL you can indicate the parameter `?customer=(sellername) endpoint` to identify the sellers.
5. Next, select the **Wallet Connect** event that you will receive notifications from in `json` format via an `HTTP POST` to the URL specified above. An event is any type of update to the reported object, including status or attribute changes. See the events that can be configured in the table below.

| Notification type  | Action  | Description  |
| --- | --- | --- |
| Agreement confirmation | status.updated | The user confirmed an agreement. |
| Agreement cancellation | status.updated  | Agreement between the integrator and the user of Mercado Pago was canceled by the user. |
| Payment method update  | payment_method.updated  | Payment method updated by the user.  |

