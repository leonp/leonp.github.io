---
layout: post
title: Open, modular and API based &#8211; how libraries should handle data, web and apps in the future
---

These are a few notes on what the future of library data &#8211; and how websites and apps access that data &#8211; _should_ look like.

If you work in libraries and aren't sure what that means, let me explain. The library management system (LMS)'s end is nigh. Instead, we'll create queryable databases of library assets and build apps on these databases. These apps will do all the tasks the LMS currently does: stock management, website, self-service, payments.

These changes are already in the air. The Libraries Task Force recently commissioned Canadian company Bibliocommons to write a report on what a national digital library service would look like. Bibliocommons interviewed me (along with several other library folk) while researching their report, and invited a few of us to a workshop at the Department for Culture Media and Sport to present their proposals.

Bibliocommons' model is based on a core database with an open API. In addition, they propose building a connector that talks to current LMS databases. In the future we won't need this connector &#8211; the market's ripe for disruption and someone, somewhere should be looking to build a model free from the current LMS providers.

This is a complex area, so it's worth looking at the current state of things to see what changes need to be made.

## The state we're in: Closed, monolithic, outdated

There are five LMS providers in the UK, all providing a similar product.

In the past, local authorities have bought one of these products, changing every 5 years or so once their contract expired.

LMSs do _lots_ of things, which is convenient for councils as it means they don't have to work at integrating the library system into their existing systems. For example, providers will include an online public access catalogue (OPAC) with their LMS. An OPAC is a separate website where customers can find titles and manage their library account.

It's also convenient for library staff as they have traditionally lacked any modern web or IT knowledge. LMSs have provided a one stop solution to all their requirements.

### An uninnovative, expensive ecosystem that fails to serve customers

These factors have combined to produce products that are painfully outdated and fail to serve customers' needs in the age of Google and Amazon.

The procurement and development process works something like this:

1. The library service looks for a **single product** that can fulfill several complex functions, such as stock management, website and apps. The product also has to work on its own as it's too difficult to integrate into local authority systems, such as the council website.
2. The people responsible for procuring the products have little web, app or IT knowledge. Instead, they tend to come from a library background &#8211; their skills lie in cataloguing, circulation and information management.
3. The providers have no incentive to provide a modern system as the people buying from them have no idea what that looks like. Therefore, the LMS providers sell products whose underlying technology is more than 20 years old, for large sums of money.
4. Because LMSs perform so many different, complex functions, the providers fail to do any of them well. The same companies will provide stock management, website, self-service and sometimes apps _all in one product_.
5. Because there is no incentive for the providers to develop anything new, and because library IT managers tend to know their small part of the IT universe but little else, LMSs use old, library-only systems and protocols, such as SIP.

**I cannot stress how dysfunctional libraries and their library management systems are**. I have had to sit, straight-faced, in meetings with the Suffolk provider and explain why search relevancy is a good idea. The same provider then tried to argue that Google's search is inferior to their relevance free version because Google places adverts at the top of its results.

This market needs smashing, which is why the idea of a connector, although understandable, should be seen as a very temporary measure at best. Ideally, we should be building something better as soon as possible. After all, physical libraries are already under attack &#8211; if their digital presence is also dire, what hope do they have?

## What needs fixing
