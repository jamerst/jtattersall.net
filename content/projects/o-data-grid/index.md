---
title: ODataGrid
duration: November 2021 - Present
description: An advanced React component for building OData queries and integrating OData APIs with the MUI Data Grid
tags: ["React", "TypeScript", "OData", "MUI"]
skills: ["react", "ts", "odata"]
summaryImage: {file: "o-data-grid.png", alt: "ODataGrid example showing query builder and data grid"}
images: [
    {file: "o-data-grid.png", alt: "Example of the ODataGrid interface used in JobHunt"}
]
archived: false
startDate: 2021-11-21
---

ODataGrid is an advanced React component which builds upon the [MUI Data Grid](https://mui.com/x/react-data-grid/) component to provide support for OData APIs. This allows user interfaces for OData APIs to be easily created with minimal code.

OData is a standard/protocol for REST APIs that allows powerful querying using a standardised language for filtering, projecting and sorting. This is somewhat similar to GraphQL, but more standardised.

ODataGrid uses the pagination, sorting and column visibility features built in to the MUI Data Grid and automatically makes the appropriate OData API call whenever these parameters are modified. It also provides an advanced query building user interface for constructing infinitely complex OData queries inspired by query builder interfaces like [jQuery QueryBuilder](https://querybuilder.js.org/). It also adds some additional features to the data grid along the way, including responsive column visibility and browser history integration.

Like most of my other projects ODataGrid is open-source and can be found on [my GitHub](https://github.com/jamerst/o-data-grid).

The component was originally created as part of the search improvement work on another of my projects, [JobHunt]({{< ref "/projects/jobhunt" >}}). Once the initial version was completed, I decided it was a potentially useful component for others to utilise, so I released it as an [independent package on NPM](https://www.npmjs.com/package/o-data-grid).

This project was probably my most challenging yet. I initially underestimated the complexity of the project, especially around the query builder component. Building the component so that it is performant and works correctly was very difficult, but also very rewarding. A significant amount of TypeScript work was required, which vastly improved my knowledge and confidence with it. ODataGrid was also the first NPM package I created, which also allowed me to gain some more experience with JavaScript build systems (and the horror that comes with them).

The first big hurdle was the performance of the query building component. The initial implementation I created just used prop drilling, which created significant performance problems due to the nested nature of the query builder component tree - whenever a single expression of the query was modified it would cause that entire branch of the tree to be re-rendered. The solution to this was to use a proper state management library, and in this case I chose to use [Recoil](https://recoiljs.org/).

Recoil is an experimental state management library for React, but I chose to use it over stable solutions such as [Redux](https://redux.js.org/) for simplicity. I found Recoil much easier to understand, and I haven't encountered any issues with it despite not being stable.

To allow further optimisation the query builder data is stored in a somewhat unconventional format. The tree structure of expressions in the query is stored separately from the expressions themselves by using two different atoms and linking data using unique identifiers. This improves performance noticeably by avoiding unnecessary re-rendering of the tree branch whenever an individual expression is modified. [Immutable.js](https://immutable-js.com/) is used to implement this by providing data structures which are immutable and return a new copy when modified.

I was never entirely happy with the initial implementation of ODataGrid due to bugs, performance issues, limitations around controlling the state of the query builder, and code quality which simply isn't up to my usual standards. With the release of MUI X v6 I decided to refactor the component to address these issues. The main approach to this has been to utilise the [API reference](https://mui.com/x/api/data-grid/data-grid/) feature of the MUI Data Grid, which has allowed the code to be better separated and more compact.

Work on the new ODataGrid version is slowly progressing and is (hopefully) close to completion.