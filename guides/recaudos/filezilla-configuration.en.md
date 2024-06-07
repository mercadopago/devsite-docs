# SFTP Client

Although you can choose to use another SFTP provider, in this documentation, we will address the configuration of the FileZilla client, an open-source SFTP provider that allows you to manage file uploads and downloads easily.

To set it up, follow the instructions below:

1. From the menu, select **File > Site Manager**.
2. Click on **New Site** and enter the desired name for the site.
3. Select the SFTP protocol.
4. Enter the domain `sftp.mercadolibre.io` for production or `sftp-qa.mercadolibre.io` for testing.
5. In "Login Type", choose **Key file**.
6. Enter the username provided by Mercado Pago during SFTP setup. For example, `user_seller_sftp_ml`.
7. Click **Connect**.
After this, the following directories will be displayed:
- Self-Service-Input
- Self-Service-Output

## Uploading a file 
In the FileZilla panel, you'll find two windows. The one on the left represents your computer, and the one on the right represents the SFTP server. Therefore, uploading files can be done by dragging and dropping the content you want to upload into the server window.

> WARNING
>
> Important
>
> If you activated your notifications, remember to enter an email or username with which you can test receiving them.

![1](/images/recaudos/filezilla1.png)

## Downloading a result file

A result file contains the processing of the loaded debt and/or bulk link files. To download a result file, drag and drop the file from the right window, corresponding to the SFTP server, to the left, corresponding to your computer.

This way, the file will automatically be available in your directory.

![2](/images/recaudos/filezilla2.png)