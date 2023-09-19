---
title: Intrusion Detection System
duration: October - November 2018
description: A multithreaded C application for detecting suspicious packets. Coursework for CS241 Operating Systems and Networks.
tags: ["C", "Multithreading", "Networking"]
skills: ["c"]
summaryImage: {file: "idsniff.webp", alt: "Sample program output"}
images: [{file: "idsniff.webp", alt: "Sample program output"}]
archived: true
startDate: 2018-10-01
---

The coursework task for CS241 Operating Systems and Networks was to create an program which would
examine all packets flowing through a system to check for suspicious activity. This was done using
the [libpcap](https://www.tcpdump.org/) library for intercepting the packets and POSIX
threads for multithreading. The system had a couple of extra features beyond the specification,
including live output statistics, full logging and configurable thread count. A full report was also
written detailing my choices when designing and implementing the system.

I was able to create a very efficient solution by creating a threadpool-based program utilising semaphores instead
of mutex locks to avoid the use of inefficient busy-wait loops. I tested the system under a high load of streaming 8K
video on YouTube, producing thousands of packets per second which the program was able to easily handle.

The final result was fully functional and received a mark of 97%, for which I also received the 2nd place prize for best
coursework in the year group.

This project improved my confidence and ability of programming in C massively, as it was relatively
complex and non-trivial, especially compared to earlier work I had done in C.

Unfortunately the source code for this project is not publicly available due to plagiarism concerns.

A sample output of the program is shown below.