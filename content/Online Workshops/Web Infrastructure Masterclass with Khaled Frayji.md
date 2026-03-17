# DNS & Web Hosting: Meeting Notes

## Overview

**Topics Covered:**

- How DNS works and connects everything on the internet
- How websites go live
- Essential knowledge for freelancers working independently

---

## Core Concepts

### Domain Names

A domain is an address that redirects users to a specific website.

**Domain Priority:** `.com` domains generally have better reach than `.net` and other extensions.

### Web Hosting

Web hosting is the server that stores the files and assets of your website.

### DNS (Domain Name System)

DNS connects your domain name to the correct server by transforming IP addresses into human-readable names.

---

## Domain Registrars

A **domain registrar** is a company that sells and manages domain names.

**Examples:**

- Namecheap
- GoDaddy
- Hostinger
- Bluehost
- TPP Wholesale (Australia)
- Lebanon's LBDNS (for .lb domains)

**Best Practice:** Domain and hosting can be purchased separately from different vendors, but it's preferable to buy them from the same registrar for easier configuration and adjustment.

---

## Do You Need Web Hosting?

### No Hosting Required

If you use **Next.js, React, Node.js, or static sites**, you do NOT need traditional hosting.

You can deploy on:

- Vercel
- Netlify
- Cloudflare Pages

These platforms provide both hosting AND serverless backend functionality.

### Hosting Required

If you use:

- PHP
- WordPress
- Laravel
- Custom servers

Then **yes, you need shared hosting.**

---

## DNS Records Cheat Sheet

1. **A (Address)** - Maps a domain name (FQDN) to an IPv4 address. Translates domain names to IP addresses. Points to the main route to check which IP address hosts the website.
    
2. **AAAA (Quad A)** - Maps to an IPv6 address (smartphones prefer IPv6 when available).
    
3. **ANAME** - Allows you to point the root of your domain to a hostname or FQDN.
    
4. **CNAME (Canonical Name)** - An alias that points to another domain or subdomain (never an IP address). Points to subdomains like `www.`. Useful when you want to change IP addresses over time without affecting user bookmarks.
    
5. **SOA (Start of Authority)** - Stores domain information and directs how a DNS zone propagates to secondary name servers.
    
6. **NS (Name Server)** - Specifies which name servers are authoritative for a domain or subdomains. If hosting differs from domain registrar, this must be edited in both places. Should NOT point to a CNAME.
    
7. **MX (Mail Exchange)** - Maps where to deliver email for a domain. Should point to a mail server name, not an IP address.
    
8. **TXT (Text)** - Allows administrators to add human and machine-readable notes for email validation, site/ownership verification, framework policies, etc. No specific formatting required.
    
9. **SRV (Service)** - Allows services like instant messaging or VoIP to be directed to a separate host and port location.
    
10. **SPF (Sender Policy Framework)** - Helps prevent email spoofing and limits spammers.
    
11. **PTR (Pointer)** - Reverse of A and AAAA records; maps IP addresses to domain names. Requires domain authority and must exist in reverse zones, not with other DNS record types.
    
12. **QUICK TIP** - Always check for typos when entering DNS record information, especially IP addresses. Use the Zone Config File to verify your work.
    

**Note for Beginners:** DNS records are advanced options. For small projects, A records and CNAME are mostly what needs changing.

---

## Connecting a Domain to a Website

**Example: Hosting on Vercel**

1. Add the domain inside Vercel
2. Vercel provides A/CNAME records
3. Add these records to your DNS manager
4. Wait for propagation (5 minutes to 48 hours)
5. SSL installs automatically

---

## SSL & HTTPS

### What is SSL?

**SSL (Secure Sockets Layer)** is a security certificate installed on your domain to encrypt the connection between the user and the website.

When a website has SSL, all data sent (forms, logins, payments) becomes encrypted and protected.

**SSL = Trust + Security**

### What is HTTPS?

**HTTPS = HTTP + SSL**

Your website uses the secure version of HTTP.

Browsers display:

- 🔒 **Secure** (with SSL)
- ⚠️ **Not Secure** (without SSL)

**With SSL → your website becomes HTTPS**  
**Without SSL → your website stays HTTP (not secure)**

---

## Subdomains

Each subdomain is essentially a separate project with different code. When you create a subdomain of an already connected domain, it automatically connects.

**Example:** If `tecktalkslb.com` is already connected and running, you can deploy a different project as `shop.tecktalkslb.com` and it will automatically work.

---

## Managing DNS Settings

### Same Registrar & Host

When the domain registrar also hosts the website, all DNS settings can be edited from the same platform.

### Different Registrar & Host

When the website is hosted on a different platform than where the domain was registered, settings must be edited from the hosting platform, which can be slightly more complex.

### Two Management Options:

1. **Manage** - Edit domain settings
2. **File Explorer** - Access files and folders necessary for hosting (where you'll find `public_html`)

### Understanding public_html

`public_html` is the directory where all your project files exist on traditional hosting servers. Knowing these details can help with greater understanding of how web hosting works.

### Legacy vs. Modern Deployment

**Before:** Manual process of updating website files in `public_html` (difficult and time-consuming)  
**Now:** CI/CD pipelines handle deployment. Simply use `git add`, `git commit`, and `git push` - GitHub automatically updates the files. This is the standard practice nowadays.

---

## Important Warnings

⚠️ **DNS RECORDS ARE ADVANCED OPTIONS AND MUST NOT BE EDITED BY BEGINNERS.**

For small projects, focus on A records and CNAME records only.