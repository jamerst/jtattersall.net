---
title: JobHunt
duration: April 2021 - Present
description: A self-hosted web-app for collecting and collating job advertisements
tags: ["C#", "ASP.NET Core", "React", "TypeScript"]
skills: ["c#", "aspnetcore", "docker", "react", "ts", "sql", "ef"]
summaryImage: {file: "jobhunt.svg", alt: "JobHunt Logo"}
images: []
archived: false
startDate: 2021-04-21
---

JobHunt is a self-hosted web app which collects and collates jobs posted on the Indeed platform. It is designed to make it easier to find jobs by automatically categorising and filtering jobs. I also personally find it interesting to collect long-term data on posted jobs.

The origins of JobHunt are in a simple Python script I wrote to scrape the Indeed website whilst searching for a graduate role after finishing university in summer 2020. Around a year later I decided to resurrect the idea and build it into a more substantial web-app using C#, React and TypeScript. I wasn't looking for a job at this time, but I wanted to gain more experience with TypeScript and React and this app felt like it was just substantial enough to give me a bit of a challenge.

Building the app was certainly more work than I expected - building all the required features for interacting with a system entirely through a web-app always takes longer than I imagine! Still, after a couple of weeks the initial app was completed, and I started collecting data.

JobHunt is fully open-source and can be found on [my GitHub](https://github.com/jamerst/JobHunt).

Development of JobHunt has continued, gradually adding new features as and when I come up with them. Some of the notable changes made include:

### OData
Originally JobHunt only had very basic search features, so in late 2021 I decided to upgrade the searching significantly using OData. I was inspired by the power of the search system used in projects from my day job, so I wanted to bring a similar feature to JobHunt.

However, whilst the system used in projects for my day job was powerful, it was cumbersome to implement and maintain with a large amount of boilerplate and _questionable_ design decisions. As a result I was keen to avoid this with JobHunt, so I wanted a system that was both more flexible and lower maintenance.

Soon after I encountered OData whilst working on a work project to integrate with the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/). OData is a standard/protocol for REST APIs that allows powerful querying using a standardised language. This is somewhat similar to GraphQL, but more standardised. OData has a standardised language for filtering and projecting data, so it is ideal for creating systems that offer essentially infinite querying options.

I decided that OData was a good fit for what I wanted to accomplish because it requires very little server-side code. The [OData library for ASP.NET Core](https://github.com/OData/AspNetCoreOData) handles all the models and translates OData queries to LINQ expressions, which can then be used to query a database using Entity Framework Core.

With the back-end of the system mostly handled, my attention turned to the front-end. Unfortunately this is where things got much more complicated as I was unable to find an existing solution for constructing OData queries with a user interface. Due to this I decided to try building my own interface to build the queries and display the results in a table.

This turned out to be my biggest challenge yet, and one that I vastly underestimated. I did eventually succeed though, and this interface became ODataGrid. For more information on the building of ODataGrid see the dedicated project page.

### Page Change Tracking
I discovered quite early on that there was a slight flaw with my job collecting strategy: it was only able to collect jobs posted on Indeed. This is a slight flaw because some companies don't post jobs on Indeed, instead choosing to post jobs on dedicated pages of their website or on their own recruitment sites.

I decided I wanted to account for this, so I added a feature to watch and track the content of webpages. Initially this was quite basic, simply generating a hash of the page contents and comparing it to one stored in the database. I found this wasn't particularly useful though as it was difficult to remember what was on the page previously.

To address this I switched to a more advanced comparison strategy using the [AngleSharp.Diffing](https://github.com/AngleSharp/AngleSharp.Diffing) library. This allows for much more advanced comparison by pinpointing the specific elements in the document which have changed. This proved to be more complex than originally thought due to lots of weird edge cases, but I eventually succeeded in improving the system. The new system now uses colour coding to clearly identify which elements have changed, and also stores screenshots of each page when it has changed. This allows humans to easily find and locate the differences, and provides an archive of content to allow viewing even if external content like images are later removed.

### Duplicate Jobs
Another thing I noticed as time went on was the large number of duplicate jobs posted. Currently of the ~9500 jobs archived by my JobHunt instance, a whopping 52% are duplicates.

I decided that I wanted to automatically identify the duplicates in order to have a link between them, however this isn't as simple as you may think at a glance. This is because the posted jobs usually aren't completely identical - they have slight differences such as dates, salaries or job title. This means that a different comparison method needs to be used - something that give a quantitative value for the similarity of two pieces of text.

Enter [trigrams](https://en.wikipedia.org/wiki/Trigram_search)! I hadn't encountered trigrams before, for anyone else who hasn't they essentially split a string of text into substrings of 3 characters, then computing the distinct set of all these substrings. A quantitative value for similarity can then be found by comparing the contents of these sets.

As it also happens, Postgres (the database used by JobHunt) has a [trigram module](https://www.postgresql.org/docs/current/pgtrgm.html), so this allows trigram searching on the job descriptions to be performed very efficiently. My initial attempts at implementing this didn't perform particularly well, but with the addition of indexes and some trickery to ensure that the index is utilised correctly I was able to improve the performance significantly to the extent that it doesn't have any noticeable overhead.

### Indeed APIs
Originally Indeed used the deprecated [Publisher Jobs API](https://developer.indeed.com/docs/publisher-jobs/) to fetch the job data from Indeed. This was more reliable than purely scraping, but had some drawbacks, namely that salary and full job descriptions were not included in the returned data. To fetch the missing data I had to resort to completely unofficial and undocumented API endpoints used by the Indeed front-end.

This worked okay for a while, but Indeed later secured the job description endpoint with a CAPTCHA, which obviously caused issues for JobHunt.

Luckily Indeed had also started implementing some new APIs by this point, including a GraphQL API. The Indeed GraphQL API is very large and has no public documentation, but I was able to locate the necessary queries using a GraphQL explorer such as [GraphiQL](https://cloud.hasura.io/public/graphiql). Moving to the GraphQL API also came with some advantages:

- Improved efficiency - the job data can now all be fetched in a single API call
- Additional data - the GraphQL exposes some additional information, including internal job tags, which are automatically added as categories in JobHunt

The GraphQL API seems to be reliable for now, though I would like Indeed to offer an official API for this just for stability.

### Future Features
JobHunt is not yet feature complete, there are always more features I would like to add (_when I get around to it..._).

The currently planned features include a more in-depth dashboard and full statistics view with the ability to compare datasets.