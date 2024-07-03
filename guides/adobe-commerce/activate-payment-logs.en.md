# How to activate payment logs?

Logs provide comprehensive information about transactions, making it easier to understand the events that occur. Additionally, when making modifications or adding new payment methods, logs help validate the correct functioning of the integration.

The support team may request the submission or verification of logs to track specific information when necessary, so it is important to activate them.

Follow the steps below to activate payment logs.

1. To access the configuration page, click on **Stores > Configuration**:

![Configuration](/images/adobe-commerce/logs-configuration-es.png)

2. In **Settings**, click on the **Sales** menu on the side. In the submenu that opens, select **Payment Methods**.

![Methods](/images/adobe-commerce/logs-payment-method-es.gif)

3. In **Other payment methods**, locate the Mercado Pago plugin and click on the **Configure** button to open the settings.

![Configure](/images/adobe-commerce/logs-configure-es.png)

4. In the plugin configuration screen, select **Basic Settings > Developer Support**.
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
![Support](/images/adobe-commerce/logs-support-es.png)

------------
----[mlb]----
![Suporte](/images/adobe-commerce/logs-support-pt.png)

------------
5. If checked, uncheck the **Use system value** checkbox and enable the **Debug** option by clicking **Yes**.

![Debug](/images/adobe-commerce/logs-debug-es.png)

6. Once this is done, click the **Save Config** button to save the changes.

With this configuration, the Mercado Pago plugin logs are recorded on the server where the store is hosted, allowing an admin user to easily access them.

> NOTE
>
> Note
>
> The generated log files include `payment.log`, along with standard Adobe Commerce logs such as `exception.log` and `system.log`. All these logs can be found in the `src/var/log/` directory.