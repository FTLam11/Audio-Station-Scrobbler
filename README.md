# Audio-Station-Scrobbler

Not being able to scrobble tracks with Audio Station is no bueno. After brainstorming some crazy ideas, I conjured up a scheme. Read through the entire README before you try anything, thanks!

## Authorization

This section details how to obtain an API account and obtain the necessary information to scrobble your music.

### Create API Account

To use the Last.fm API, [sign up for an account](http://www.last.fm/api/account/create). Zang, now you have your own **API key** and **API secret**. Set the **callback URL** to:

    localhost:3000

### Grant Application Permissions

Complete the following URL with your **API key** and open it up in your browser.

    http://www.last.fm/api/auth/?api_key=xxx

Log in if neccesary and grant your application permission to your account. Last.fm will redirect to the callback URL. It will be in one of the following URL formats:

    <callback_url>/?token=xxx

or

    <callback_url>&token=xxx

Take note of this **authorization token**, it is tied to your user account and **API key**. The token is valid for 60 minutes.

### Craft API Signature

Obtaining a **session key** and scrobbling are both requests that require an **API signature**. To get a **session key**, complete the following URL with your **API key**, **authorization token**, and **API secret**.

    http://localhost:3000/auth/q?api_key=xxx&token=xxx&secret=xxx

Audio Station Scrobbler will request a **session key** from Last.fm. Provided all the information you provided is correct, your **API key**, **API secret**, and **session key* will be stored in the environment of your Synology NAS. Sweet, now you can make scrobble requests. 

## Scrobbling

#
