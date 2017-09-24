# WeatherMug

<a href="https://www.cloudflare.com/apps/UX1LSxAe0WeI/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install WeatherMug"
    border="0"
    width="150">
</a>

## Screenshots

Current Conditions

![alt text](https://github.com/nathan78906/WeatherMug/raw/master/media/20170923231554694.png "Current Conditions")

Weather Alert

![alt text](https://github.com/nathan78906/WeatherMug/raw/master/media/20170923231643354.png "Weather Alert")

Widget on Website

![alt text](https://github.com/nathan78906/WeatherMug/raw/master/media/20170924035914320.png "Widget on Website")

## Inspiration

We made this small app so people can always be updated with the latest weather & alerts while they're browsing the web. People nowadays are busy with their lives that they don't have time to check the weather that often. One example of this is the recent hurricanes that hit the United States. Many residents of Houston were warned about the hurricane many days in advance but few chose to take precautions. Our app would help to inform them of weather alerts constantly by being on a lot of sites they visit.

## What it does

WeatherMug displays current weather information automatically based on your current location and displays any active weather alerts for your location. 

## How we built it

To get the location of the user, we used the `ipapi.co` api which provided the city and state of the user based on IP address. We then used the location to get current weather information & alerts using the wunderground weather api. We also used cloudflare to easily integrate our widget onto different websites.

## Challenges we ran into

The wunderground location api was buggy, so we had to look into alternatives. 

## Accomplishments that we're proud of

We learned new technologies and tools throughout the development process. This is our first time making a working application for a hackathon so we're proud of that as well. 

## What we learned

We learned how to use cloudflare apps to create simple widgets for websites.

## What's next for WeatherMug

Improving the UI and getting website owners to use our widget. 
