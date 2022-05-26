# Migration from V1 to V0

As of March 8, 2022 a new version of the signature engine related to the entities below will be available with new features.

* **Plan** (identified by /v1/plan in v1 and now by `preapproval_plan` in v0)
* **Subscription** (identified by /v1/subscriptions in v1 and now by `preapproval` in v0)
* **Invoice** (identified by /v1/invoices in v1 and now by `authorized_payments` in v0)

The new version has a superior architecture with much more functionality and has email notifications sent with each status update at:

* Subscriptions (creation and cancellation);
* Subscription charge;
* Change of plans.

In addition to email notifications, the new version also has [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/webhooks/webhooks) for `plans`, `subscriptions` and `invoices`.

> WARNING
>
> Important
>
> Unlike Webhooks notifications, which you need to set up, sending emails is automatically enabled by default. However, you can request manual shutdown of this functionality through Integrations.

## Migration

Migration to this engine is required, as **version 1 will no longer be available from March 8, 2022 onwards**.

The migration will happen automatically and all migrated plans, subscriptions and invoices will remain active with a new ID. To verify the new migrated IDs, you can use the **endpoint** below which will remain public at your disposal until July 2022.

Once you have the new ID, you can update your plan IDs, subscriptions and invoices as you wish.

[[[
```curl
curl --location 
--request GET 'https://api.mercadopago.com/subscriptions/migrations/<RESOURCE>/<ID>
```
]]]

| - | Resource | ID |
| :--- | :--- | :--- |
| Request | `plan` <br/> `subscription` <br/>`invoice` | Unique identifier |
| Response | `preapproval` <br/> `preapproval_plan` <br/> `authorized_payment`| Unique identifier |

> NOTE
>
> Important
>
> We will notify you by email when the due date for your migration is reached. It is important that you schedule and have the changes prepared for the migration, as all `Plans` and `Subscriptions` with status **cancelled**, **inactive** and/or **finished**, as well as `Invoices` older than six months will not be migrated.