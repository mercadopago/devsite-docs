# Configure notifications

If you wish, you can receive notifications from Webhooks. These are sent from our Integrations API to your receiving system through an `HTTP POST` call in relation to the status changes presented by a payment intent.

To integrate Webhook notifications, follow the instructions shown in [this documentation](/developers/en/docs/mp-point/additional-content/notifications/webhooks).

> WARNING
>
> Important
>
> The `notification_url` field mentioned in the notifications documentation is not supported by the integrations API.

## Examples of notification statuses

Once you have implemented the notifications and made the necessary adjustments, they will have the following format:

#### Finished Status:

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "approved",
  "type": "credit_card"
},
"state": "FINISHED",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"payment": {
  "id": 123456789,
  "state": "approved",
  "type": "credit_card"
},
"state": "FINISHED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----

```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "payment": {
   "id": 123456789,
   "state": "approved",
   "type": "credit_card"
 },
 "state": "FINISHED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Canceled Status:

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "CANCELED",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "CANCELED",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----

```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "CANCELED",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------

#### Error Status:

----[mla]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "ERROR",
"additional_info": {
  "external_reference": "information",
  "ticket_number": "39SHDKKDJ"
}
}
```
------------

----[mlb]----
```json
{
"amount": 100,
"caller_id": 09876543,
"client_id": 1234567890,
"created_at": "2021-11-29 17:10:37",
"id": "abcdef123-8ab5-4139-9aa3-abcd123",
"state": "ERROR",
"additional_info": {
  "external_reference": "information"
}
}
```
------------

----[mlm]----

```json
{
 "amount": 100,
 "caller_id": 09876543,
 "client_id": 1234567890,
 "created_at": "2021-11-29 17:10:37",
 "id": "abcdef123-8ab5-4139-9aa3-abcd123",
 "state": "ERROR",
 "additional_info": {
   "external_reference": "information"
 }
}
```
------------