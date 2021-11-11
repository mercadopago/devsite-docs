# PCI DSS

At Mercado Pago we ensure the Confidentiality, Availability and Integrity of all our processes following the best market practices so that you can use all our products safely. 

In addition, for Mercado Pago to be able to operate with credit and debit cards, we must comply with one of the most demanding security standards in the payment industry: Payment Card Industry Data Security Standard.

## Definition and context
If you have ever stored, processed or transmitted card data in your company, you have probably heard of PCI. From Mercado Pago we want to help you and simplify the task of understanding these regulations and the different associated responsibilities.

As a Service Provider, we must meet regulatory and security responsibilities vis-à-vis card brands and acquirers, but even so, security throughout the payment process is the obligation of both parties. Merchants and / or e-commerce platforms that are integrated with payment processors such as Mercado Pago must meet minimum security requirements to mitigate risks of fraud and information leakage, securing user data.

PCI DSS (Payment Card Industry Data Security Standard) is an international security standard that must be met by all entities that store, process or transmit card data.

PCI regulations establish a basic level of protection for cardholders (cardholders) and help reduce fraud and data breaches within the entire payments ecosystem. 
Compliance with PCI regulations involves 3 important aspects:
- Securely transmit the information corresponding to cardholder data.
- Store data according to the best security practices in the industry, under 12 regulatory requirements that are included in the PCI Standard.
- Annual validation of compliance with the security controls and evaluation forms proposed by the PCI Council. 

We recommend that you visit the [official PCI site](https://www.pcisecuritystandards.org/) for more information. Here is a summary of the objectives of PCI security controls.

**Objective** | **Requirement**
------------- | ---------------
CREATE AND MAINTAIN SECURE SYSTEMS AND NETWORK | Install and maintain a firewall configured to protect cardholder data. Do not use vendor-supplied defaults for system passwords and other security parameters.|
PROTECT THE DATA OF THE CARD HOLDERS | Protect the stored cardholder data. Encrypt the transmission of cardholder data on open or public networks.
MAINTAIN A VULNERABILITY MANAGEMENT PROGRAM | Protect all systems against malicious software and regularly update antivirus software. Develop and maintain secure systems and applications.
SOLID CONTROL MEASURES APPLYING ACCESS | Restrict access to data accordance with the need to know who has the organization. Identify and authenticate access to system components. Restrict physical access to cardholder data.
MONITOR AND PERIODICALLY VERIFY NETWORKS | Track and monitor all access to network resources and cardholder data. Periodically verify security systems and processes.
HAVE AN INFORMATION SECURITY POLICY | Have a policy that includes information security for all personnel. |

> Read the PCI DSS - Data Security Standard document for more details. The document is available in the [document library of the PCI official site](https://www.pcisecuritystandards.org/document_library).

For each of the twelve PCI requirements, there are basically four different levels of compliance, typically based on the volume of card transactions your processes organization annually, and each level has a set of obligations.

* **Level 1:** (i) Organizations that process more than 6 million transactions per year for Visa or MasterCard, or more than 2.5 million for American Express; (ii) organizations in which there has been a data breach; (iii) organizations considered level 1 by any card association.
    * Annual Compliance Report (ROC) by a Qualified Security Assessor (QSA) or Internal Auditor.
    * Quarterly Network Scanning by Approved Vendor (ASV).
    * Compliance Certification (AOC).
    <br>
* **Level 2**: Organizations that process between 1 and 6 million transactions per year.
    * Corresponding annual PCI Self-Assessment Questionnaire (SAQ).
    * Quarterly Network Scanning by Approved Vendor (ASV).
    * Compliance Certification (AOC) for each of two corresponding SAQs.
    <br>
* **Level 3**: Organizations that process between 20,000 and 1 million online transactions per year and organizations that process less than 1 million transactions in total.
    * Corresponding annual PCI Self-Assessment Questionnaire (SAQ).
    * Quarterly Network Scanning by Approved Vendor (ASV).
    * Compliance Certification (AOC) for each of two corresponding SAQs.
    <br>
* **Level 4**: Organizations that process less than 20,000 online transactions per year and organizations that process up to 1 million total transactions per year. 
    * Corresponding annual PCI Self-Assessment Questionnaire (SAQ).
    * Quarterly Network Scanning by Approved Vendor (ASV).
    * Compliance Certification (AOC) for each of two corresponding SAQs.

> The [SAQ (Self-Assessment Questionnaire)](https://www.pcisecuritystandards.org/pci_security/completing_self_assessment) is a PCI self-assessment form that must be completed by those businesses or service providers that are not eligible to complete a Level 1 Compliance Report, and whose purpose is to validate regulatory compliance through a series of controls summarized in "yes" or "no" questions.


## Compliance

Mercado Pago is responsible for ensuring the cardholder data information once they enter its environment, so it is important that businesses and/or e-commerce platforms comply with the appropriate security controls to transmit them correctly. As a service provider, Mercado Pago can validate compliance by requesting evidence of the corresponding PCI documentation according to the product used.

Mercado Pago considerably simplifies the burden of compliance with this regulation for organizations that adopt Checkout Pro since they use a field that originates directly from our servers in a secure area for the entry of card data from the client. In this way, most of the PCI DSS requirements fall on Mercado Pago and it will considerably reduce its efforts in security controls.

To comply with PCI DSS, demonstrate your compliance, and in turn protect your customers' card details, it is important to use secure payment integrations like Checkou Pro to ensure that cardholder data does not reach your servers.

As we saw in the previous sections, for level 1, it is necessary to perform an audit with an external consultant. On the other hand, for levels 2 to 4, there are different types of SAQ depending on which payment integration method you use. We Recommend that you complete the corresponding SAQ according to the type of Checkout chosen due to the obligations imposed by the PCI regulations. 

Here we summarize what type of SAQ you must complete for each solution integration offered by Mercado Pago.

**Solution** | **SAQ**
------ | ------
Checkout Pro | A
Web Tokenize Checkout | A-EP
Checkout Transparente | D

> See the **SAQ Instructions and Guidelines document** [official PCI library](https://www.pcisecuritystandards.org/document_library) for details of the description of each SAQ.


