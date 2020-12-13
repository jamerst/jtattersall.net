---
title: Robot Maze
duration: October - December 2017
description: A Java project to guide a robot through a virtual maze for CS118 Programming for Computer Scientists coursework.
tags: ["Java"]
skills: ["java"]
summaryImage: {file: "prim.png", alt: "Screenshot of maze"}
images: [{file: "prim.png", alt: "Solved maze"}, {file: "loopy.png", alt: "Solved maze with loops"}]
archived: true
startDate: 2020-12-12
---

The Robot Maze was the coursework for the introductory programming module CS118 in my first year. It
consisted of two parts, the first of which was simpler and intended as a gentle introduction to
programming, and the second was a little more advanced, intended to test actual skills more. The aim
for both parts was to program the logic that the robot could use to navigate through the maze. The
logic used in the first part was intentionally flawed and designed to show how seemingly sound
theory doesn't always work in practice, whereas the second part built upon this to create a more
efficient and effective algorithm, with the final part being to create an algorithm which could
traverse the maze once, and remember the path through the maze which lead to the goal, and then
recreate the same path each time the robot was run afterwards.

This project was my first project in Java, and so was a very good learning experience. I did struggle
in some parts, but I eventually managed to create an almost perfectly working solution using an
adapted version of Trémaux's algorithm. My solution did fail in some cases when the starting square
had multiple exit options, as I wasn't recording the first move taken by the robot, so then the path
taken may not have been possible to recreate as the other path may have been chosen instead.
However, overall it worked well, though I feel I could have improved the final part so that it could
find the most efficient route in mazes with multiple possible routes using a pathfinding algorithm
such as Dijkstra's.

Unfortunately the source code for this project is not publicly available due to plagiarism concerns.