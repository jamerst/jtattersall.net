---
title: Mini-C Compiler
duration: October - November 2019
description: A compiler for a subset of the C language created using the LLVM compiler framework. Coursework for CS325 Compiler Design.
tags: ["C++", "LLVM"]
skills: [""]
summaryImage: {file: "mini-c.webp", alt: "Compiler Code Sample"}
images: []
archived: 0
startDate: 2019-10-01
---

In my final year, I chose the Compiler Design module as one of my optional modules. This module covered the
entire process of implementing a compiler, from parsing and lexing to machine code generation and
optimisation. The coursework for this module involved creating a compiler for a subset of the C language, _Mini-C_.

The compiler was written in C++ using the [LLVM compiler framework](https://llvm.org/"). Three main
phases of the compiler were created:

### Lexing and Parsing

The lexing and parsing phase takes the input source code and transform it into a tree representation called
the Abstract Syntax Tree (AST). This form is easier to manipulate and utilise in later stages than the raw text of
the source code. This was achieved by implementing a recursive-descent predictive LL(2) parser, which allows
the correct grammar production rule to be easily determined by looking ahead by at most 2 symbols.

### Semantic Analysis

The semantic analysis phase takes the AST from the parser and analyses it to check for any semantic errors.
Examples of such errors are referencing out-of-scope or undefined variables, parameter number or type
mismatches, and variable/function redefinitions. This phase is designed to detect all these possible errors,
and return a useful message if an error is found. This is implemented by traversing the AST in a separate pass
once generated, which allows the analysis code to be easily separated from the rest of the compiler, improving
readability.

### Intermediate Representation Generation

The final phase I implemented was the generation of LLVM Intermediate Representation (IR). IR is usually a
lower-level representation of the program, similar to assembly code. LLVM provides a full IR language, which
the compiler I created generates by traversing the analysed AST and generating the corresponding IR instructions
for each node of the tree. LLVM handles the creation of actual machine code, which would be very complex to
perform manually, and would not be feasible in the timescale for the module.

This was my first introduction to C++, which I found challenging, but also gained confidence with quickly. A
significant amount of work was required to complete the compiler, so this improved my experience with C++
significantly. It also improved my understanding of all programming languages by allowing me to understand how
source code is transformed into machine code to be executed.

Unfortunately the source code for this project is not publicly available due to plagiarism concerns.