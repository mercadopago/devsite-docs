# Introduction

The **IPN** (Instant Payment Notification) is a mechanism that allows your application to receive notifications from Mercado Pago informing the status of a certain payment, chargeback and `merchant_order`, through a call HTTP POST to inform about your transactions.

In IPN notifications, only one notification URL can be configured per account (depending on the application, more than one application can use this URL). In addition, there is also the possibility of using this type of notification from the object's `notification_url` field, so the URL can be different for each object or application.

In this documentation, we will explain the necessary settings for receiving IPN notifications (through the Dashboard or when creating payments), as well as showing the necessary actions that you must take for Mercado Pago to validate that the messages were properly received.
