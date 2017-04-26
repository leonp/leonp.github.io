---
title: Managing a project to design and install library self-service software
img: mvp.jpg
alt: A board with post-its of product features sorted into categories
excerpt: "I conceived a new library self-service system, commissioned and helped run a design sprint exploring ideas and managed the project from start to finish."
---

## Overview

I conceived a new library self-service system, commissioned and help run a design sprint exploring ideas and managed the project from start to finish.

## Background

In 2015 Suffolk Libraries began to think about replacing its aging self-service kiosks. The kiosks consisted of a client running on Windows XP PCs, and had given us several problems:

- XP was no longer supported by Microsoft
- The software was slow and buggy
- Support was expensive and variable, provided by a 3rd party
- The machines were dated: large, ugly and not particularly easy to use

The IT team looked at using existing replacements, but found them unsatisfactory:

- They all ran on Windows clients, meaning we’d have to update and manage the software on dozens of kiosks
- The providers made us buy both the software and the hardware
- The hardware seemed overly designed for its basic purpose of checking books in and out
- The software appeared dated, and not particularly user-friendly
- They were expensive

I therefore thought about what we’d want from an ideal system:

- Decoupled hardware and software, so we could choose what hardware to use, and swap out faulty components when necessary
- Affordability
- Easy to manage software

The obvious solution to our problem was a website. This offers several advantages over a client:

- It can run on any device and any OS with a web browser
- You don’t have to update any client software: update the website and all instances are update
- Responsive design means it’s easy to scale your software to any screen

So what form would this website take? Would it be viable? What should we be looking for? I decided to run a design sprint to find out.

## Research phase: A design sprint

I chose one of the best digital agencies in the UK to carry out some research into what a web app might do, and look like.

I worked with [Clearleft](https://clearleft.com/) over a week, interviewing staff and customers, investigating the feasibility and technical aspects of our proposed approach. We did lots of different activities, some structured, some more free form.

At the end of the week we had:

- A detailed report
- Web app mock ups

We’d use these for the next phase of the project.

Read more: [A 5 day sprint with Clear Left exploring library self-service machine software](/2016/02/5-day-sprint-clear-left-self-service/)

## Procurement phase

Having decided on the web app approach we needed to find a developer to build it.

Our Clearleft report provided the basis of a request for proposal. Instead of providing a long checklist of technical targets, I identified ten or so important features the app would need to provide, such as:

- Platform and OS agnosticism
- Clear user feedback
- User-friendly error handling
- The ability to work offline (perhaps using [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers))

We invited three developers to submit proposals and scored each against how well we thought they’d be able to meet my ten requirements. We weighted what we thought were the most important, and also scored on value for money, clarity and how dependable we felt they’d be.

Read more: [Build user requirements into your requests for proposal and avoid long functional check lists](/2017/02/functional-vs-user-testing/)

## Development phase

Having carried out a research phase and armed with an app mock up, I felt we could jump straight into developing our app at last.

We’re following a sprint methodology, which consists of agreeing work, doing it over two weeks, reviewing it and then agreeing a new sprint. It means we can change ideas that don’t work relatively easy, and re-prioritse features &#8211; we only have a finite amount of money and time.

I test our prototypes regularly on customers. I’ve also installed kiosks running our web app in four ‘beta’ libraries to get some real, scary feedback.

## Summary

Commissioning our own web app has several advantages:

- Decoupling software and hardware
- Better value
- Flexibility to create kiosks in different ways
- Product ownership
- Easier to manage and deploy

However, there are some disadvantages. Firstly, running a project like this involves a lot of work; it’s a lot easier to buy an off the shelf product. However, libraries should be looking to [improve library user interfaces](/2015/12/kill-the-lms-future-digital-experience/), and sometimes that means getting things done ourselves.
