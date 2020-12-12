---
title: Scientific Code Optimisation
duration: February - March 2019
description: Optimising an N-body simulation program using various techniques. Coursework for CS257 Advanced Computer Architecture.
tags: ["C", "Multithreading", "Vectorisation"]
skills: [""]
summaryImage: {file: "cs257.webp", alt: "Screenshot of program visualisation"}
images: []
video: "cs257.webm"
archived: false
startDate: 2019-02-01
---

The coursework task for CS257 Advanced Computer Architecture was to optimise some existing code which
ran an N-body simulation, albeit very slowly. Optimisations were attempted using many techniques,
including multithreading, vectorisation, algorithmic optimisations and loop optimisations. Some of
these optimisations had multiple different implementations, and results were collected for all
versions, and their relative performances were compared in the report created about the optimisation
process. The final version used AVX and FMA for vectorisation, an approximation for the reciprocal
square root, OpenMP for multithreading and the GCC `-O3` optimisation flag. The scaling
of performance for this final version with problem size was also investigated in the report.

This project further improved my confidence in C, and introduced me to vectorisation extensions and
OpenMP. The final result gave a peak speedup of 140&times; and received a mark of 80%.

Unfortunately the source code for this project is not publicly available due to plagiarism concerns.

A video of the program visualisation is shown below.