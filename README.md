# Weather-Journal App Project

## Overview

This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI.

There is a client component and a server component.
The client is under the folder website.
The server side is in server.js

## Instructions

```
git clone <thisRepository>
cd <toTheClonedDirectory>
node server.js
```

The server can be monitored in the terminal
For the client, open a browser to localhost:8000

## Additional

- Enter the zip code and how you're feeling and click on the generate button
- The client will:
  -- get the weather information from OpenWeatherMap.org
  -- Post the weather and user data to the server
  -- retrieve from the server the stored information
  -- Update the UI with that information (in the Most Recent Entry area)

The server side will handle the post ("/new") and the get ("/weather")
