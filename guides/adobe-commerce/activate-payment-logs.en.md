# How to activate payment logs

Logs provide comprehensive information about transactions, making it easier to understand the events that occurred. Additionally, when making modifications or adding new payment methods, logs help validate the correct functioning of the integration.

The support team may request the submission or verification of logs to trace specific information when necessary. Therefore, it is important to keep them active. To do this, follow the step-by-step instructions below:

1. To access the configuration page, click on the **Stores** menu on the side and then on **Configuration**:

![Configuration](/images/adobe-commerce/logs-configuration-es.png)

2. In the configuration, click on the **Sales** menu on the side. In the submenu that opens, select **Payment Methods**.

![Methods](/images/adobe-commerce/logs-payment-methods-es.gif)

3. In "Other Payment Methods," locate the Mercado Pago plugin and click the **Configure** button to open the settings.

![Configure](/images/adobe-commerce/logs-configure-es.png)

4. In the plugin configuration screen, select the **Basic Settings** option and then click on **Developer Support**.

![Support](/images/adobe-commerce/logs-support-es.png)

5. If it is checked, uncheck the **Use system value** checkbox and enable the "Debug" option by selecting **Yes**.

![Debug](/images/adobe-commerce/logs-debug-es.png)

6. Once this is done, click the **Save Config** button to save the modification.

With this configuration, the Mercado Pago plugin will record logs on the server where the store is hosted, allowing an admin user of the store to access them directly on the server.

> NOTE
>
> Note
>
> The generated log files include `payment.log`, along with standard Adobe Commerce logs such as `exception.log` and `system.log`. All these logs can be found in the `src/var/log/` directory.