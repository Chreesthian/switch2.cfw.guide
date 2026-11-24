---
title: "Blocking Nintendo"
---

# Blocking Nintendo

To avoid being blacklisted by Nintendo and losing access to homebrew, it is very important to keep your console disconnected from Nintendo's online services at all times. This is due to Nintendo's "FunctionBlackList".

The safest way to avoid being blacklisted would be to simply remain unconnected from any network, however to homebrew the Switch 2, a payload must be delivered from another device on the same local network. Therefore, we must find a way to have network access while still preventing the console from connecting to Nintendo's servers.

### FunctionBlackList

The FunctionBlackList is a system implemented by Nintendo which will blacklist entrypoints that are used to exploit the console when it connects to their online services. This blacklist can be updated without a reboot or update of the console's firmware.

If your console connects to Nintendo's servers after **12th November 2026**, it will be blacklisted, and you will lose the ability to use homebrew.

Luckily, there are ways to prevent your console from connecting to Nintendo's servers, such as using DNS-based blocking methods like 90DNS.

### What is 90DNS?

90DNS is a custom <Definition term="DNS">A DNS (Domain Name System) is a system that translates human-readable domain names into IP addresses.</Definition> service designed to block Nintendo's servers and prevent your console from being blacklisted. It redirects requests to Nintendo's servers to a non-existent address, effectively preventing any communication with Nintendo's online services.

Unfortunately, some ISPs will hijack DNS requests, which can bypass the 90DNS blocking method. This means that even if you have set up 90DNS correctly, your console might still be able to reach Nintendo's servers.

## Testing 90DNS

A simple way to test if 90DNS is working is to try applying the DNS settings on a secondary device and viewing a test page ([90dns.test](http://90dns.test)). If the page loads correctly, it indicates that the DNS blocking is functioning as expected.

1. Connect your secondary device to the network you intend to use with your Nintendo Switch 2.
1. Open your secondary device's network settings.
1. Find the **DNS settings** option in your network settings.
1. Set the primary and secondary DNS to the addresses listed below in <Definition term="order of proximity">For example, if you live in Europe you would set the primary DNS to the French server.</Definition> to your location.
    - `207.246.121.77` (USA)
    - `163.172.141.219` (France)
1. Save the DNS settings and reconnect to the network.
1. Open a web browser on the secondary device and navigate to [http://90dns.test](http://90dns.test) to verify that the DNS blocking is working correctly.

If successful, you should see a message saying "You are successfully connected to 90DNS. Happy hacking!".

If you do not see this message, then the DNS blocking is not working correctly, and it is not safe to use 90DNS on your console. You may need to set up an isolated network specifically for your console, however that is out of the scope of this guide.

## Entering network settings

::: warning

If you are using **Airplane Mode** to block Wi-Fi access, make sure that any registered networks are either powered off or out of range.

:::

Once we have confirmed that 90DNS is working, we can now apply the DNS settings to our Nintendo Switch 2.

When connecting to a new network, we will intentionally enter an incorrect password to prevent the console from connecting to the internet before we can configure the DNS settings.

1. On your Nintendo Switch 2, go to **System Settings** -> **Internet** -> **Internet Settings**.
1. Remove or edit any existing network connections, including Wired.
    - To edit an existing network, select it and choose **Change Settings**, before proceeding to [the next section](#configuring-dns-and-ipv6-settings).
1. Select a network with a password that you want to connect to.
    - To use a network without a password, choose the **Manual Setup** option instead and enter the network name manually, before proceeding to [the next section](#configuring-dns-and-ipv6-settings).
1. Enter an incorrect password at least 8 characters long and press **OK**.
1. After the connection fails, press **OK** to close the error message and **Close** to dismiss the error details.
1. When asked to re-enter the password, choose **View Settings**.

## Configuring DNS and IPv6 Settings

1. Disable **IPv6 Connection**.
1. Change **DNS Settings** to **Manual**.
1. Enter the primary and secondary DNS addresses in <Definition term="order of proximity">For example, if you live in Europe you would set the primary DNS to the French server.</Definition> to your location.
    - `207.246.121.77` (USA)
    - `163.172.141.219` (France)
1. Double check that you <Definition term="disabled IPv6">For those familiar with Switch hacking, this is a new setting in the Switch 2!</Definition>.
1. Save the settings but **do not** connect to the network yet.
1. Restart your console to refresh the DNS cache.

Now that the DNS settings have been configured, and the console has been restarted, you should be able to connect to the network safely.

::: tip

Continue to [Choosing Your Entrypoint](/guide/choosing-your-entrypoint/)

:::