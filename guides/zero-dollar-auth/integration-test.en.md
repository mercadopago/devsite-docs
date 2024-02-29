# Integration testing

To test the Zero Dollar Auth validation, follow the instructions below.

## Add "X-Test-Token: true" header

It is important to add the **X-Test-Token: true** header to all card token curls, indicating to Payments to process the ZDA consumption in the SandBox environment. For approvals, use the specific card `4074090000000004` in the card token curl. To simulate rejects, you can use any other test card.

## Perform transactions with open card data

In order to perform transactions with open card data, it is necessary for the merchant to comply with the [PCI Compliant](/developers/en/docs/security/pci) requirements. Otherwise, this data cannot be processed in the backend of your application.