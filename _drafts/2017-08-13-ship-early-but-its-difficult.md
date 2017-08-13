---
title: "Lessons learned: Ship early (but it&#8217;s easier said than done)"
layout: default
category: web
description: "Shipping early is a cliché, but a good approach to follow. But it&#8217;s difficult to do when you&#8217;re updating a mature product and you already have a captive audience."
article: true
---

So we've nearly installed [our new self-service app](/2016/12/managing-self-service-project/) in all 44 Suffolk libraries, a project we began in February 2016 but actually developed over a relatively short period of five months.

This is a good time to think about what we could have done better. In this post I'm only considering the app itself, not the nuts and bolts of enclosures, disposal, scheduling, and Windows 10 etc. etc. (Lesson zero: stick to the app itself and work hard to avoid managing Windows 10 updates on underpowered tablets).

The first lesson is quite simple, and can be expressed as a short cliché:

> Ship early and ship often

In other words, develop a _minimum viable product_ (MVP) (another cliché), publish it and start getting feedback. More importantly, make sure you [act on the feedback](/2017/04/small-v-big-user-studies-acting-on-feedback/).

We (or rather, I) did lots of user testing, and this did snag a few obvious problems. We also piloted an earlyish version of the app in 4 'beta' libraries, which unearthed a couple of big bugs and enabled us to test a particular part of the process.

I suspect this was more agile than most software development projects in the real world of the public sector and well established organisations (although I may be wrong). However, it would have been better to have defined a true MVP (say something that just checked books in and out) and worked from there. Our MVP was too big, based on too long a wishlist of stakeholder ideas. By the time we released the first version we were already trying to do too many things. Consequently, we were firefighting too many change requests and bugs.

When you're up against a big backlog things like UX can suffer as the focus is on simply developing and fixing features in a short amount of time. As long as it works it'll do -- let's move on to the next job.

Looking back, there were a few reasons for this.

## Flawed MVP exercise

Stakeholders were present during the minimal viable product exercise of our research sprint. Naturally enough, they bring their own views and agenda, and want to make sure their pet request is included.

This is particularly problematic when a senior or influential stakeholder (such as a project funder) is present. It may seem right that the person stumping up the cash has a say in the _what_ of the development, but this can result in feature creep. Stakeholders aren't the same thing as users. Remember: they're paying for your judgement, expertise etc., not simply your technical ability to develop a list of features.

The MVP should be defined only by the project leader and the developers. The product owner should be disciplined in allowing product features.

## Replacing a mature product

If you're a startup developing a new service you're not taking anything away from anyone. An MVP is an improvement on nothing at all. And if you're MVP doesn't do anything for customers, you can always rip it up and start again.

We were replacing a self-service system that had been in place for nearly a decade. Although it had lots of problems it did, on the whole, work. Replacing that with something that might change from day to day poses a particular challenge (especially when a large proportion of your users are over 50 and distrust new technology at the best of times.)

Taking things away from users is always problematic. You can mitigate this by making little changes often, but there's no easy way to remove features, or to provide an initially ropey experience.

## User testing isn't as good as user using

## Projects are too focused on a final delivery point (AKA the big reveal)
