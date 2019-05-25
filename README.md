# American Health Mapper

American Health Mapper is a tool designed and built in response to the Social Determinants of Health Challenge.  AHM is a platform that allows healthcare researchers the ability to easily visualize, organize, and explore cartographic healthcare data.


## Social Determinants of Health Challenge

https://www.ahrq.gov/cpi/about/profile/index.html 
https://www.ahrq.gov/sdoh-challenge/index.html


## Functionality:
AHM's main features include:
* A map display with: 
  * A control panel allowing a variety of data to be displayed as choropleths, bivariate choropleths, and pin markers.
  * The control panel will allow maps to be viewed at varying levels of granularity (state, county, census tract).
  * Preloaded relevant datasets that can be explored though the control panel.
  * The ability to upload and save additional datasets to be viewed on the map.
  * The ability to save a particular map configuration.
  * The ability to split screen the maps.
  * Tooltips showing detail about a particular region on hover.
  * The ability to export the map as a pdf, geojson, or topojson.
* A table display showing the data used to generate the map.
* A histogram display showing the distribution of the data and related statistics.
* A correlation display showing the relationship between multiple regional attributes.
* A snapshot display that freezes the map display and allows a title and annotations to be added before being saved or exported.
* User authentication allowing a user to:
  * Label and save data views.
  * Organize saved data views into folders and add tags.
  * Free text search bar to find saved data views.
  * Upload custom data sets that can be saved for later use.
  * Allow users to set their maps and datasets as public or private.
  * Allow users to share maps and datasets publicly or anonymously.
  * Save format settings to be applied to different data sets.
* A landing page showing popular public maps, users, and datasets.
* An exploration page with:
  * Free text search of other user's public content.
  * Browse other user's public content by keyword, title, or user.
  * The ability to add keywords to other users' content.
  * The ability to upvote or downvote other users' content.


## Technology:
AHM is a web application built in JavaScript and Python.  The frontend is a Single Page Application written in JavaScript and leveraging [Leaflet JS](https://leafletjs.com/).  The backend is a REST API using Python and the [Flask](http://flask.pocoo.org/) framework.


## Dataset Ideas:
* Doctors per capita
* Distance to hospitals
* Income
* Crime rate
* High school graduation rate
* Grocery stores
* Drug use
* Age
* Race
* Political party
* Health insurance
* Education level
* Climate
* Religion
* Medicaid expansion
* Health insurance cost
* Medicaid rate
* Med schools
* Doctor salary
* Gender
* Methodone clinics
* Abortion clinics
* School lunches
* Morbidity
* Obesity
* Infant mortality
* Cancer rate
* Life expectancy
* Birth defect rate
* Drug use
