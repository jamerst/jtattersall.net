---
title: OpenLD
duration: October 2019 - May 2020
description: A web-based system for creating lighting designs collaboratively with live-editing functionality. Created as my final year project at the University of Warwick.
tags: ["C#", "ASP.NET Core", "React.js"]
skills: ["c#", "aspnetcore", "docker", "react", "signalr", "js", "sql"]
summaryImage: {file: "openld.svg", alt: "OpenLD Logo"}
images: [
    {file: "openld_home.png", alt: "OpenLD Home"},
    {file: "openld_editor.png", alt: "OpenLD Editor"},
    {file: "openld_library.png", alt: "OpenLD Fixture Library"},
    {file: "openld_exported.png", alt: "Drawing exported from OpenLD"},
    {file: "er.png", alt: "Entity-Relationship Diagram"},
    {file: "dissertation.png", alt: "Dissertation on the process of creating OpenLD"}
]
archived: false
startDate: 2019-10-02
---

OpenLD is a collaborative CAD system for creating lighting designs. It allows multiple people to work on a CAD
document simultaneously using live-editing functionality, which allows lighting designers to more easily
collaborate with other team members when working on a design. It was created as my final year project at the
University of Warwick, and was the subject of my dissertation, which covered the design, implementation, and
evaluation of the system, which was awarded a first class mark.

Lighting design is the process of arranging lights to enhance performances such as concerts or plays. During my
work with the university technical theatre society, I realised a problem with the existing tools that lighting
designers were using - they do not allow easy collaboration. Creating a design often requires collaboration with
other team members and specialists in areas such as rigging or electrical, however existing solutions do not
easily
permit this. With existing solutions, designs are created offline on the designer's computer, and so are not
easily accessible by others on-demand. This means that multiple people cannot work on a drawing simultaneously:
they must instead wait to receive a copy from the designer in order to contribute to it.

OpenLD addresses these problems by providing a Google Docs style collaborative editor for lighting designs. This
allows the drawing to be shared and contributed to by an unlimited number of people on-demand, requiring only an
internet connection and web browser. OpenLD also streamlines the user interface compared to existing solutions,
which are notoriously difficult to master due to the complexity of their user interface. OpenLD seeks to improve
this by utilising common design patterns, ensuring UI controls are well-sized and grouped, and ensuring that
controls to interact with the drawing are visible, and not hidden inside menu systems.

OpenLD is written using C# and JavaScript, consisting of an ASP.NET Core back-end and React.js front-end. This
was by far the biggest project I'd undertaken so far, so it was a huge challenge, especially when implementing
the edit synchronisation features. This was my first major project using ASP.NET Core and React.js, so this
improved my experience and confidence with both significantly. I also used Docker to containerise the system for
easy development and deployment by ensuring a consistent environment with all dependencies properly configured
and installed.

The source code for OpenLD is available on my [GitHub](https://github.com/jamerst/openld).

A demo of the final working prototype is also available at [https://www.openld.jtattersall.net/](https://www.openld.jtattersall.net/).

_Please note that this demo is hosted on a free, very low-power, Google Cloud Platform instance, which
affects performance noticeably, particularly for response times. <br>I recommend using a Chromium-based browser for performance reasons._

Screenshots of the system, an exported drawing, and related materials are shown below.