Integrating Mercado Pago's Checkout API for cards allows you to offer a complete payment option within the site. The entire experience takes place in your store, so customers avoid exiting your site while making a purchase.

> WARNING
> 
> Important
> 
> Your integration with Mercado Pago's transparent API may be eligible for [PCI SAQ A](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/security/pci-v2#bookmark_advantages_of_a_saq-a). This category of PCI requires fewer requirements from the seller, which speeds up the certification process. To be eligible for this category, its integration must be done using card fields in Iframe format.

**Fields** uses HTML components allows PCI data (`cardNumber`, `securityCode`, and `expirationDate`) to be inaccessible to third parties and processed by Mercado Pago servers, increasing security for buyers, vendors, and acquirers.

![Fields](/images/api/api-integration-introduction-v2-en.png)

There are currently two ways to implement this solution. The first is through the use of **core methods**, where the integrator is responsible for the entire payment flow, allowing greater flexibility for fully customized experiences. The second one uses **cardForm**, a component created by us that facilitates the integration, carrying out some steps of the process automatically.
