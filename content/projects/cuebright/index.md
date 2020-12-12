---
title: CueBright
duration: August 2017
description: A Windows application to control the colour and brightness of a Corsair CUE-enabled keyboard using command-line arguments.
tags: ["Visual Basic", "3rd Party APIs"]
skills: [""]
summaryImage: {file: "cuebright.png", alt: "CueBright logo"}
images: []
archived: true
startDate: 2017-08-01
---

CueBright is a small Windows application that allows the colour and brightness of a Corsair CUE
compatible keyboard to be set using command line arguments. I created this application because I
wanted to reduce the brightness of my keyboard backlight when AutoBright reduced the brightness of
my monitors. I did this by adding an external program integration option to AutoBright, where an
external program can be started with command line arguments, however, the standard Corsair Utility
Engine doesn't provide the option to set properties using command line arguments, so I had to write
my own application to do this.

CueBright was written in Visual Basic, and used the [CUE.NET](https://github.com/DarthAffe/CUE.NET) library to communicate with CUE.

This project is no longer actively maintained as my daily OS is now Linux-based. The excellent
[ckb-next](https://github.com/ckb-next/ckb-next) open source driver can be used instead, which offers support for
manipulating settings from the command line out of the box.

Source code and binaries are available on my GitHub [here](https://github.com/jamerst/CueBright).