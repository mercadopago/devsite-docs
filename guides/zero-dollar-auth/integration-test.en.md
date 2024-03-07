# Integration Validation

To verify that your Zero Dollar Auth integration is valid, please consider the following recommendations.

## Add "X-Test-Token: true" header

It is important to add the **X-Test-Token: true** header to all card token curls. This will indicate to the API that it should process the ZDA consumption in the test (Sandbox) environment.

## Simulate approvals and rejections in testing

To simulate approvals, use the specific card `4074090000000004` in the [/v1/payments](/developers/en/docs/zero-dollar-auth/integration) curl. 

To simulate rejects, you can use any other test card.

## Perform transactions with open card data

In order to perform transactions with open card data directly in the API call,, it is necessary for the merchant to comply with the [PCI Compliant](/developers/en/docs/security/pci) requirements. Otherwise, this data cannot be processed in the backend of your application.

