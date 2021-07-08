# What are Subscriptions?

Mercado Pago subscriptions allow you to receive recurring payments by credit and debit card. The availability of payment methods varies according to the form of integration.

## Available Roles

There are two roles involved: 
1. The __seller__ or __collector__,  who is the owner of the subscription and creditor of the amounts due.
1. The __payer__, who will pay the amounts automatically from the chosen payment methods.

> NOTE
> 
> Do you want to create subscriptions quickly and easily?
> 
> Enter the [Subscriptions](https://www.mercadopago[FAKER][URL][DOMAIN]/subscription-plans) section on your Mercado Pago account panel, set the data you need and that's it!


## Key concepts

In order to integrate subscriptions, you need to know four key concepts: 

| Concept | Description |
| --- |	--- |
| Plan o template | It is a template that allows you to define, among other attributes, the title, amount and frequency of subscriptions created by the seller. It serves to establish general characteristics in the subscriptions that are created from this entity. It is important to clarify that no payment method is set up here yet. |
| Subscription or pre-approval | Payer authorization for recurring payments with a defined payment method that will be the basis for creating installments according to the recurrence that is defined. It has similar characteristics to the template, since a subscription can be created from a plan. |
| Authorized payment | It is the installment of a subscription that is generated and charged based on the defined recurrence. The subscription engine schedules and generates payments automatically. |
| Verification payment | This is a minimum charge, which is made at the time of the payer's subscription only to verify that the card used to pay the subscription is a valid one. This amount is immediately refunded to the payer. |
| Billing date | This is the date that the seller can set for receiving the charges for a subscription with a monthly payment frequency. |

------------
### Next steps
> LEFT_BUTTON_REQUIRED_EN
>
> Requirements to integrate
>
> View all the necessary requirements to start integrating.
>
> [Requirements to integrate](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/subscriptions/previous-requirements)
