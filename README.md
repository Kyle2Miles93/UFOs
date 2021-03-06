# UFOs

## Purpose of the Analysis

In this analysis, I endeavored to make a webpage using HTML and JavaScript
to compile information about UFO sightings in the United States. It employs a dashboard 
with filters with different fields: **country, state, shape, city, and date** of the UFO sighting.

In doing so:
* the info became accessible
* ready for further visualization and/or and analysis.
* I helped an imaginary client, Dana, in building the dashboard for her website.
* Now the dataset is visually appealing and employed on the worldwide web.
  - Data is therefore accessible to the public for futher analysis and hubbub. 

## Results
To use the webpage, simply type a field in one of the filters on the left-hand side of the page. They
are filled in with examples of possible input:

![UFO webpage](https://github.com/Kyle2Miles93/UFOs/blob/main/UFOs%20webpage.png)

As you can see, there are five fields to narrow your search of UFO sightings.

1) date
2) city
3) state
4) country
5) shape (of UFO)

***Note***: In the dataset, the date range only goes from January 1st, 2010 to January 13th, 2010

The results will be filtered like this:

![filtered for date](https://github.com/Kyle2Miles93/UFOs/blob/main/date-filtered-UFOs.png)

the date filters our results for UFO sightings on 1/13/2010 from our dataset.

And here is a result from a field filtered for light in the "**shape**" field with the 1/13/2010 date filter in place:

![shape & date](https://github.com/Kyle2Miles93/UFOs/blob/main/light_date_ufos.png)

There is only one result with these two filters filled this way.

## Summary

Some drawbacks in using this webpage:
* it *only* filters for sightings, but doesn't do much else.
* there is only a home page which contains the dashboard, but no other links or info on other pages.
* there is no filter for **duration** of the sighting, even though duration is one of the attributes in the dataset. 

Considering these limitations, here are some suggestions 
to improve the website:

* create a dropdown menu for info on the different filter fields.
  - this would inform the public more about what they're searching for
  - it would allow for laypeople to understand the dataset further
* create some data visualizations
  - charts for sightings in a specific area for each filtered result
  - heat or marker maps to show more info visually on the site of the spotting.
  - analytics for how many sightings there are currently, instead of just for 2010.
    - a.k.a an updated webpage that pulls the most current data from a UFO API??? 
  - acquire a whole new dataset with sightings from other countries and which include dates from other months besides January.

