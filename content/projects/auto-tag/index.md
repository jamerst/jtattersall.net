---
title: AutoTag
duration: August 2018 - Present
description: A C# application for automatically tagging and renaming TV episodes and films based on the filename.
tags: ["C#", "Web APIs", "Metadata tagging"]
skills: ["c#"]
summaryImage: {file: "auto_tag.webp", alt: "AutoTag logo"}
images: [{file: "v2.png", alt: "AutoTag v2 interface"}]
archived: false
startDate: 2018-08-01
---

AutoTag is a utility written in C# for automatically tagging and renaming TV show episodes or films. AutoTag
was inspired by an application I had been using for several years,
[Auto TV Tagger](https://sourceforge.net/projects/autotvtagger/), which performs the
same function, but I always had a few issues with it, namely that it often failed to give useful
error messages and couldn't handle invalid file name characters, meaning that I had to manually tag
some files, which was annoying. I was unable to find any other alternatives which fulfilled my
requirements of both renaming and tagging automatically, so I decided to create my own solution
instead.

Despite being my first C# project, development of AutoTag went smoothly and quickly, probably due to
the fact that C# basically only differs from Visual Basic.NET in syntax. I did struggle to get some
of the API working due to quite poor documentation, but because the source code for the wrapper was
available, I could work it out quite easily from that. This project also taught me about the use of
<code>async</code> and <code>await</code> instead of the BackgroundWorker method I had previously
been using, which I actually found to be much easier to work with than the BackgroundWorker.

In summer 2020, I released version 3, which is a rewrite of AutoTag using .NET Core. This allows AutoTag to be
run natively on Linux, without Mono. AutoTag v3 also has a fully-functional command-line interface, which is
useful when tagging files on my headless media server. However, v3 has only a command-line interface, not a
graphical interface. This is because creating a cross-platform GUI is currently quite difficult due to the poor
documentation of any frameworks that support both Windows and Linux. AutoTag v3 has been designed such that
the core functionality is separated, which should allow a GUI version to be more easily created in the future.

AutoTag uses data from [thetvdb.com](https://www.thetvdb.com/) and
[themoviedb.org](https://www.themoviedb.org/) using their free APIs, accessed through the
[TvDbSharper](https://github.com/HristoKolev/TvDbSharper) and
[TMDbLib](https://github.com/LordMike/TMDbLib) wrappers. File name parsing is provided by a part of
[SubtitleFetcher](https://github.com/pheiberg/SubtitleFetcher) and file tagging is provided by
[taglib-sharp](https://github.com/mono/taglib-sharp).

Source code and binaries are available on my GitHub [here](https://github.com/jamerst/AutoTag).