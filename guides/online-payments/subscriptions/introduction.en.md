---
indexable: false
---

# Introduction

## What are subscriptions?

Mercado Pago subscriptions allow you to receive recurring payments by credit and debit card. The availability of payment methods varies according to the form of integration.

## Available Roles

There are two roles involved: 
1. The __seller__ or __collector__,  who is the owner of the subscription and creditor of the amounts due.
1. The __payer__, who will pay the amounts automatically from the chosen payment methods.

>Do you want to create subscriptions quickly and easily?
Enter the <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/subscription-plans" target="_blank">Subscriptions</a> section on your Mercado Pago account panel, configure the data you need and that's it!!


## Key concepts

In order to integrate subscriptions, you need to know four key concepts: 

Concept |	Description
------------------- 	|	--------
`Plan o template` | It is a template that allows you to define, among other attributes, the title, amount and frequency of subscriptions created by the seller. It serves to establish general characteristics in the subscriptions that are created from this entity. It is important to clarify that no payment method is configured here yet.|
`Subscription or pre-approval` | Payer authorization for recurring payments with a defined payment method that will be the basis for creating installments according to the recurrence that is defined. It has similar characteristics to the template, since a subscription can be created from a plan. .|  
`Authorized payment` | It is the installment of a subscription that is generated and charged based on the defined recurrence. The subscription engine schedules and generates payments automatically. |  
`Validation payment` | These are one-time minimum payments per subscription to verify that the payer's card is valid. A refund of that payment is then made. |  


------------
### Next steps
> LEFT_BUTTON_REQUIRED_EN
>
> Requirements to integrate
>
> View all the necessary requirements to start integrating.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/previous-requirements/)
