---
title: "{{ replace .Name "-" " " | title }}"
duration: {{ dateFormat "January 2006" .Date }}
description: Description
tags: [""]
skills: [""]
summaryImage: {file: "", alt: ""}
images: [{file: "", alt: ""}]
archived: 0
startDate: {{ dateFormat "2006-01-02" .Date }}
---