---
title: AutoBright
duration: August 2016 - April 2018
description: A Windows application to dim monitor backlights on a schedule determined by sunrise/sunset times via DDC/CI.
tags: ["Visual Basic", "DDC/CI", "WinAPI"]
skills: []
summaryImage: {file: "autobright.webp", alt: "AutoBright logo"}
images: [{file: "settings.png", alt: "AutoBright settings"}]
archived: true
startDate: 2016-08-01
---

AutoBright is a small Windows application which exists to dim the backlight brightness of external
monitors based upon the time of day. This project was very much inspired by f.lux, but I found that
I was still experiencing eye fatigue even with f.lux in use due to the brightness of my monitors.
There are existing applications available which reduce brightness by applying a partially
transparent black overlay to the screen, but the disadvantage of this is that they reduce contrast
significantly, so can make the image look rather odd. In order to get around this, I decided to
write a program which would instead alter the backlight brightness setting on the monitor itself
using a protocol known as DDC/CI.

There are a few disadvantages to this approach, namely that monitor support for the protocol can be
unpredictable, and that it requires the use of Windows APIs, which I found were very badly
documented and were actually bugged when it came to checking monitor support. Due to this,
development was rather difficult, requiring me to search and ask for help on many online forums, and
the end result is far from perfect, with the application just crashing instantly on some systems,
which I am unable to fix due to it being caused by the specific hardware, but for the systems it
does work correctly on, it is a very useful tool and good companion to f.lux.

This project is no longer actively maintained as my daily OS is now Linux-based, and I have a much simpler
[alternative backlight dimming solution](https://gist.github.com/jamerst/8bf86f2660fd69413be229b28b73093c)
utilising redshift hook scripts.

Source code and binaries are available on my GitHub [here](https://github.com/jamerst/AutoBright).