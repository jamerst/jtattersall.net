---
title: NightLightDarkroom
duration: September 2019
description: An Android application for emulating f.lux's "Darkroom" mode blue light filter with a quick-setting toggle.
tags: ["Java", "Android", "Magisk"]
skills: ["java", "android"]
summaryImage: {file: "NightLightDarkroom.svg", alt: "NightLightDarkroom App Icon"}
images: []
archived: false
startDate: 2019-09-01
---

When I recently got a new phone, the Pixel 3a, I found that the screen was quite intense to use late
at night, unlike my previous phone. To help alleviate this, I created a simple Android app to
emulate the "Darkroom" mode of [f.lux](https://justgetflux.com/), which shows just the
red channel of all colours.

The app adds a quick-settings tile to toggle this behaviour, with a simple settings app, which works
by setting the system Night Light feature to a colour temperature of 0K. This isn't usually
supported by default, in fact the lowest colour temperature supported by default on my Pixel 3a was
&asymp;2600K, which was personally far too high and reduced the effectiveness of the blue light
filter significantly. To solve this, I created a [module](https://github.com/jamerst/magisk-intense-night-light)
for the root solution [Magisk](https://github.com/topjohnwu/Magisk) which overrides the minimum temperature
option set by the ROM creator.

This was the first Android app I wrote from scratch, so it further broadened my knowledge of
developing for Android that I had already gained from working on open source projects such as
[Vinyl Music Player](https://github.com/AdrienPoupa/VinylMusicPlayer). It also taught me
many things about the internal workings of Android when creating the Magisk module, which I found
particularly interesting.

Both the [Darkroom app](https://github.com/jamerst/NightLightDarkroom) and
[Magisk module](https://github.com/jamerst/magisk-intense-night-light) are open-source and available for download on GitHub.