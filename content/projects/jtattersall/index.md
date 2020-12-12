---
title: jtattersall.net
duration: June 2018 - Present
description: This very website. Created to provide an online portfolio for information about my interests and projects.
tags: ["HTML", "CSS", "JavaScript", "Hugo"]
skills: [""]
summaryImage: {file: "logo.svg", alt: "Website logo"}
images: []
archived: false
startDate: 2018-06-01
---

My online portfolio. A static site created using HTML, CSS and JavaScript, with fully bespoke styling.
Designed to be accessible and usable on almost any device, with or without JavaScript. Hosted on
[Netlify](https://www.netlify.com/). The site was previously hosted on AWS S3, which was surprisingly
affordable, but I changed to Netlify to allow easy SSL support and easier site updating using
Continuous Integration.

Originally the site heavily utilised jQuery for interactivity, but for version 2, I rewrote the site to
instead use pure vanilla JavaScript. The main reason for this was to improve performance and eliminate the
large jQuery script file. The site runs noticeably smoother with pure vanilla JavaScript, especially for fade
in/out effects, which use native CSS transition animations in the rewritten version. The process of
eliminating jQuery was actually simpler than expected, as most common jQuery operations are easily replicated
using just the native browser API.

In version 2, I also created my own simple image gallery to better showcase images relating to projects. This
is designed such that the site is still usable even with JavaScript disabled by utilising
`noscript` tags to store the images, then using JavaScript to extract the images when it is
enabled. This allows both JavaScript enabled and disabled pages to be created without duplicating any content.

Source code available on my GitHub [here](https://github.com/jamerst/jtattersall.net).