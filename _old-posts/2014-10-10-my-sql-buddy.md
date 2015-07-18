---
layout: post
title: You don't have to use PHPmyadmin
category: work
---

I installed <a href="http://elementaryos.org/">elementary</a> recently, an OS X&#8211;ish Ubuntu variant. Installing a new distro means `sudo apt-get install`ing the same bits and pieces of software, including <abbr title="Linux Apache MySQL PHP">LAMP</abbr>.

I normally install PHPmyadmin to access MySQL, but haven't been able to get it to work this time round. This prompted me to try some alternatives, including <a href="http://sqlbuddy.com/">SQL Buddy</a>.

The good thing about SQL Buddy is you just extract the ZIP and put it in your web folder. Visit `localhost/mysqlbuddy` and login with your Apache username and password. That's it.

I have no idea whether SQL Buddy does all the things PHPmyadmin does, but I only really need it to create databases and users. As it's a lot simpler and easier to install I'll be using it in the future.
