# Audio-Station-Scrobbler

Not being able to scrobble tracks with Audio Station is no bueno. After brainstorming some crazy ideas, I conjured up a scheme. Read through the entire README before you try anything, thanks!

## Create API Account

To use the Last.fm API, [sign up for an account](http://www.last.fm/api/account/create). Zang, now you have your own **API Key** and **API Secret**. Set the **callback URL** to:

    localhost:3000/auth

## Grant Application Permissions

Complete the following URL with your **API Key** and open it up in your browser.

    http://www.last.fm/api/auth/?api_key=xxx

Log in if neccesary and grant your application permission to your account. Last.fm will redirect to the callback URL. It will be in one of the following URL formats:

    <callback_url>/?token=xxx

or

    <callback_url>&token=xxx

Take note of this authorization token, it is tied to your user account and **API Key**. The token is valid for 60 minutes.

## Craft API Signature

Getting a **session key** as well as making scrobble requests require you to generate an API signature **every single time**. To get a session key navigate to __ in your browser.



