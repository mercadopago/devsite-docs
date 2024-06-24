# Integration quality

In order to offer both the seller and the buyer the best experience, it is important to validate your integration quality according to the Mercado Pago standards before going to production.
You will find all the necessary information you need to homologate your integration below.

## What is homologation?

The homologation is a process by wich you can certify your integration and make sure that your development is within the quality requirements to offer both the customer and the seller the best experience with Mercado Pago.

## What aspects does the homologation assess?

The homologation process analizes a series of fields associated with 5 fundamental aspects that must be taken into consideration in a Mercado Pago integration. 
You can see the assessed attributes and the importance of each of them below.

| **Aspects**                | **Description**                                                                                                                                                                                                                                                                                                                                |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   Payments Approval    | In order to guarantee a good payment approval rate, it is important to validate each one of the fields marked as necessary improvements, as well as to implement the suggested good practices in your homologation results. By doing so, you will provide our fraude prevention tools the information to make a more detailed assessment.  |
| User Experience        | If you want to grow and maintain the user rate in your integration, you must be able to offer a good payment experience. The Mercado Pago suggestions, given as a result of your homologation, will help you obtain the bests results.                                                                                                     |
| Security               | In Mercado Pago we seek to ensure the confidenciality of the data involved in the purchase process. The improvements and good practices given as a result of your homologation will allow you to obtain the necessary data in a secure and reliable way.                                                                                   |
| Scalability            | When you do homologate your integration, you must make sure to be using the updated version of our APIs and official libraries, wich will assure you the bests results.                                                                                                                                                                    |
| Financial Conciliation | With the consistency of the financial verification in the transactions registered with Mercado Pago we intend to maintain the integrity of your system data. That’s why it is important to implement the necessary measures and the good practices suggested as a result of your homologation.                                             |

## How to homologate my integration?

To measure the quality of your application, follow the steps below.

----[mla, mlm, mlu, mco, mlc, mpe]----

> WARNING
>
> Important
>
> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment.
> <br><br>
> It is necessary that the application is registered with an integration of a product from those where the measuring tool is available. For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout API,](/developers/en/docs/checkout-api/landing) [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) and [Mercado Pago Point.](/developers/en/docs/mp-point/landing)

------------
----[mlb]----

> WARNING
>
> Important
>
> Before starting the evaluation, make sure that the application has been approved in the production environment, including the completion of at least one productive payment.
> <br><br>
> It is necessary that the application is registered with an integration of a product from those where the measuring tool is available. For now, the integration quality measuring tool is only available for integrations with [Checkout Pro,](/developers/en/docs/checkout-pro/landing) [Checkout Transparente,](/developers/en/docs/checkout-api/landing) [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) and [Mercado Pago Point.](/developers/en/docs/mp-point/landing)

------------

1. In the [Devsite](/developers/en/docs), click on [Your integrations](https://www.mercadopago.com.br/developers/panel/app) menu.
2. In the [Developer dashboard](https://www.mercadopago.com.br/developers/panel/app), find the desired application and click on **Evaluate quality**. You can also access the homologation tool directly from the [details of your application](/developers/en/guides/additional-content/your-integrations/application-details), clicking on **Evaluate quality** from the "Status" card.
3. On the **Integration quality** screen, click **Evaluate quality** and enter the `payment ID` of a recent payment made with production [credentials](/developers/en/guides/additional-content/your-integrations/credentials) of the application you wish to homologate. Finally, click on **Evaluate quality** again.

> Whenever possible, use the last productive `payment ID` identified in the application in question.

Ready! The quality measurement has been performed. Now, you can learn your score and which are the aspects you can improve of your homologation.

## How to read your homologation's results?

Once you’ve measured your integration’s quality, you will find the next screen:

![homologation-screen](/homologator/integration-quality-screen-es.png)

1. **Score**: indicates how safe your application's configuration is and is in line with Mercado Pago's best integration practices. The minimum score to fullfill the requirements is 75. Either way, remember that as close as your score is to a 100, it would improve the user experience and your payment approval rates.


2. **Payment ID** and **Last update**: `payment ID` on which the application quality score is based and date of last update of the application's quality score.
3. **Pending improvements**: indicates which are the improvement opportunities identified in the process, and how to fix them. Click on them to see the details.

> WARNING
>
> Important
>
> Actions indicated as **required** must be completed to add points that will improve the quality of your integration, while those indicated as **best practices** are recommended but will not impact the score.

4. **Update score**: Once you make all the necessary changes, you can mesure your integration’s quality again, before going to production.