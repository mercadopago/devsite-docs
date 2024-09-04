# How to measure the your integration quality

To offer both sellers and buyers the best experience, Mercado Pago conducts an evaluation of your integration, taking into account necessary security and quality standards.

Below, you will find all the information required to understand how this measurement is conducted, allowing you to make the most of our tool to maintain a constant quality improvement process.

## What is a quality measurement?

Quality measurement is a certification process by wich you can make sure that your integration meets the quality requirements to provide both the customer and the seller the best experience with Mercado Pago.

## What aspects does quality measurement evaluate?

The measurement process analyzes several fields associated with fundamental aspects that a Mercado Pago integration must have, regardless of the integrated product.

You can see these evaluated attributes and their significance below:

| Aspects | Description |
|---|---|
| Buyer Experience | To grow and maintain the user rate in your integration, you must offer a good payment experience. The suggestions provided by Mercado Pago in the quality measurement will guide you to achieve the best results. |
| Financial Reconciliation | Consistency in the financial verification of transactions registered in Mercado Pago aims to maintain data integrity in your system, making it important to implement necessary measures and suggested best practices in your measurement results. |
| Payment Approval | To ensure a good payment approval rate, it is important to validate each field highlighted as needing improvement, as well as implementing best practices suggested by Mercado Pago. This way, our fraud tools will have more elements to conduct a detailed evaluation. |
| Scalability | When measuring the quality of your integration, ensure you have the most updated versions of our APIs and official libraries for better results. |
| Security | At Mercado Pago, we aim to ensure the confidentiality of each piece of data involved in a purchase process. The improvements indicated or best practices suggested in your measurement results will allow you to obtain necessary data safely and reliably. |

## How to measure the quality of your integration?

Depending on the integrated solution, your integration evaluation can be conducted in two different ways: manual or automatic.

> WARNING
>
> Important
>
> In both cases, having a `payment ID` (payment identifier) made with **production credentials** is a mandatory requirement, and will enable the correct evaluation of the integration's functionality.

### Automatic measurement

Between the 1st and 7th of each month, Mercado Pago conducts an automatic evaluation of all applications integrated with **Checkout Pro, Checkout ----[mla, mlm, mlu, mco, mlc, mpe]----API------------ ----[mlb]----Transparente------------, Checkout Bricks, and Mercado Pago Point** that have a productive `payment ID`.

> NOTE
>
> Note
>
> Integrations with **QR Code** will not be automatically evaluated. To learn how to measure the quality of those integrations, go to "Manual Measurement", or to [Requirements for going to production with QR Code](/developers/en/docs/qr-code/integration-test/attended-model/go-to-production). On the other hand, integrations with **Plugins and Platforms** can be evaluated neither manually nor automatically.

**The automatic measurement process is conducted monthly, even if you have previously performed a manual measurement yourself**. Over time and based on applied improvements, integrations may have configuration changes. Mercado Pago seeks to ensure your work with our solutions becomes increasingly satisfying by offering various options to achieve ideal quality.

You can find the results of this automatic measurement within the [Application details](/developers/en/docs/your-integrations/application-details). Like with the manual measurement, you can view your application's score, understand the necessary actions identified, and note suggested best practices. For more details, refer to [How to read your measurement results?](/developers/en/docs/integration-quality#howtoreadyourevaluationresults)

### Manual measurement

You can perform a manual evaluation of your integration, as long as your integration has a `payment ID` of a productive payment. This can be useful for new integrations that are making their way to production away from the period when Mercado Pago conducts its automatic measurement, or for integrations that have applied suggested improvements and wish to verify their impact.

> WARNING
>
> Important
>
> Remember that even if you have performed a manual measurement, Mercado Pago will conduct an automatic measurement from the 1st to the 7th of each month, except for integrations with QR Code, which only allow manual measurments, and with Plugins and Platforms, which can't perform any type of measurment.

To manually measure the quality of your integration, access the [Your Integrations](/developers/panel/app) menu. There, you will have 2 options to access the measurement tool:

 * You can locate the desired application and, from the **">"** button, enter the screen from which you can evaluate your integration.
  ![Your integrations](/homologator/integration-quality-your-integrations-es.png)
 * You can select the desired application and, from the [Application details](/developers/en/docs/your-integrations/application-details), click **Start measurement** within the "Status" panel, for a first measurement, or **Measure again** for a re-evaluation if you've done one before.
  ![Application Details](/homologator/integration-quality-aplication-details-es.png)

Once inside the **"Measure the Quality of Your Integration"** section, follow the steps below.

1. Enter the `payment ID` of the last productive payment made with [production credentials](/developers/en/docs/your-integrations/credentials) of the application you wish to evaluate. 

2. Finally, click on **Measure quality** again.

By doing this, the manually quality measurement will be performed. Access [How to read your evaluation results?](/developers/en/docs/integration-quality#howtoreadyourevaluationresults) to know how to interpret it and maintain your integration aligned with Mercado Pago standards.

## How to read your evaluation results?

Whether you conducted a manual quality measurement or received the results of your automatic evaluation, you will find the following screen in the [Application details](/developers/panel/app):

![measurement results](/homologator/integration-quality-results-es.png)

1. **Score**: indicates how safe your application's configuration is and if it is aligned with Mercado Pago's best integration practices. The **minimum score** for your application to meet the requirements is **73**, but **we recommend achieving 100 points to enhance the user experience and increase the payment approval rate**.
2. **Last Measurement Date** and **payment ID**: indicates the day and time of the last measurement and the `payment ID` on which the application's quality score is based.
3. **Evaluated Aspects**: indicates the score obtained for each evaluated aspect. Click on them to find out which improvement opportunities were identified in the process and how you can address them. Consult the section [How to improve the quality of your integration?](/developers/en/docs/integration-quality#howtoimprovethequalityofyourintegration) for more optimization possibilities.
4. **Measure Again**: once you have applied the improvement opportunities, you can manually measure your integration's quality again or, if preferred, wait for the automatic monthly measurement conducted by Mercado Pago.

## How to improve the quality of your integration?

As a result of measuring the quality of your integration, our tool will highlight various points allowing you to optimize performance and improve both the seller's and buyer's experience. These may include:

* **Mandatory Actions:** these are requirements that must be met to ensure integration quality and thus accumulate improvement points. For example, activating [Webhooks notifications](/developers/en/docs/your-integrations/notifications/webhooks) or sending an external reference that allows payment correlation between Mercado Pago and the integrating system.
* **Recommended Actions:** these can help improving your integration's score in the quality measurement, but do not prevent you from securing it. An example of these actions could be sending all buyer-relevant information to improve payment validation and security, thus reducing the chances of rejections by our fraud prevention engine.
* **Best Practices:** these are recommendations that, although not affecting the measurement quality score, aim at improving certain aspects of your integration. For example, adding MercadoPago.js V2 SDKs to your project or maintaining your system updated according to various events received through notifications.

The actions and best practices suggested by Mercado Pago will always depend on each particular integration and the integrated solution. While here we provide information on some of them, you should consider the information returned by our tool in the quality measurement results to know specifically how to optimize your integration's functionality and, consequently, your score.