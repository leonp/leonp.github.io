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

Stakeholders were present during the MVP exercise of our research sprint. Naturally enough, they bring their own views and agenda, and want to make sure their pet request is included.

This is particularly problematic when a senior or influential stakeholder (such as a project funder) is present. It may seem right that the person stumping up the cash has a say in the _what_ of the minimum development, but this can result in feature creep at an early stage. Stakeholders aren't the same thing as users. Remember: they're paying for your judgement, expertise etc., not simply your technical ability to develop a list of features.

The MVP should be defined only by the project leader and the developers. The product owner should be disciplined in allowing product features.

## Replacing a mature product

If you're a startup developing a new service you're not taking anything away from anyone. An MVP is an improvement on nothing at all, and if your MVP doesn't work for customers, you can always rip it up and start again.

We were replacing a self-service system that had been in place for nearly a decade. Although it had lots of problems it did, on the whole, work. Users had developed muscle memory around the old product, which was disrupted when we presented them with a new process. Remember: no-one reads what's on the screen in front of them.

Replacing a mature product with something that might change from day to day poses a particular challenge, especially when a large proportion of your users are over 50 and distrust new technology at the best of times.

Taking things away from users is always problematic. You can mitigate this by making little changes often, and developing a website over an app helped as deploying any changes involved updating the site rather than dozens of client installs.

## User testing isn't as good as user using

I conducted all testing, arranging sessions in libraries with around 15 'real', representative users.

I have plenty of experience testing websites using a [simple kiosk testing methodology](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/), so I understand the need to get out of the way, not provide hints and phrase tasks in as neutral a way as possible. However, testing self-service software is more challenging than testing a website as there are additional, environmental factors to consider.

For example, kiosk users have to manoeuvre physical objects while interpreting information on a screen. They may well be in a queue. Or, unlike when they use a website, they may be performing tasks with a couple of children in tow.

Website tests, on the other hand, take place in isolation. The users have more time to think through what they're doing and they don't have the immediate pressure of children or other users standing behind them.

We get by far the most useful feedback once a change is deployed in libraries, so it therefore makes sense to go live as soon as possible. We worked to fortnightly sprints, so we should have been publishing new features at the end of each sprint based on feedback from the last sprint. Instead, we too often went on to the next batch of features to implement on our staging site and only made the changes live once we had completed our MVP.

## Projects are too focused on a final delivery point (AKA the big reveal)

Our project needs to be completed by the end of September. In stakeholders' minds this is a concrete milestone where we'll present the completed product to all 44 libraries. Funding is provided on this basis; everything needs to be done -- and paid for -- by this final date.

As the product owner I should have presented the project more as a set of targets to meet along the road to September (and beyond, ideally). A better approach would be to say that we'll have the product in libraries by March and continue to refine it in the future.

## Conclusion

On the whole, I'm pleased with how the project went. We got a usable web app into libraries in the space of five months. However, by getting an MVP out there earlier we could have refined its UX more efficiently, and snagged various bugs before they became a big problem.

In the future I'd consider a different process:

- Define a true MVP of basic features
- Perform some quick kiosk testing on the MVP adnrefine
- Ship the MVP and act on feedback as soon as possible (in two week sprints in this case)
- Add new features as required
