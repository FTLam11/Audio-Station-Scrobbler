# Audio-Station-Scrobbler

Not being able to scrobble tracks with Audio Station is no bueno. After brainstorming some crazy ideas, I conjured up a scheme. Read through the entire README before you try anything, thanks! Time for some storytelling.

I sniffed the network traffic while using Audio Station and noted HTTP request patterns during playback of each song. The workaround for scrobbling when playing music via Audio Station is a two-part scheme:

* Lyric modules can be installed in Audio Station. With a lyric module installed, Audio Station makes lyric queries for each song and displays them. Luckily, the [Synology Lyric repository](https://bitbucket.org/franklai/synologylyric/overview) is conveniently available. I ninja'd a new scrobble request into one of the lyric modules. My lyric module is found [here](https://github.com/FTLam11/lyrical_fronk).
* This repository contains a simple Node server that saves a Last.FM session and scrobbles music. 

## Installing and Running Server Code

### System Requirements

* Your Synology NAS needs to have NodeJS v4 or above installed. It can be installed via Package Center, or you can download the source code from [NodeJS](https://nodejs.org/en/download/) and include it in your $PATH.
* My Synology NAS is running **DSM 6.02-8451 Update 9** and **Audio Station 6.02-3093**. I have not tested other versions of DSM and Audio Station, but I assume this scrobbler will work if Audio Station has the lyric plugin feature.
* You need to [enable SSH](https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/system_terminal) on your Synology NAS. 
* You'll be SSH'ing into your Synology NAS, so an SSH client will be required as well. Check t3h g00gles for a suitable SSH client for your operating system. **You need admin privileges for your Synology NAS.** Refer to this help [article](https://www.synology.com/en-us/knowledgebase/DSM/tutorial/General/How_to_login_to_DSM_with_root_permission_via_SSH_Telnet) for an example.

### Configuration

After installing Node and SSH'ing into your Synology NAS, you might need to edit *scrobbler.sh*. Run this command to determine where Node resides:

    which node

Replace the line 10 with the following:

    exec node_location bin/server.js_location

For example, in my environment this line is:

    exec /usr/local/bin/node /usr/fronk/Audio-Station-Scrobbler/bin/server.js

Put `scrobbler.sh` in `/usr/local/etc/rc.d`. This starts the server automatically when your Synology NAS boots up. Likewise, the server process shuts down along with your NAS.

Navigate to the root directory of Audio Station Scrobbler and run these commands. Create a file to store your Last.FM API and session info:

    touch env.js

Install the required dependencies:

    npm install
    logger: default parameters error out in Node v4

## Authorization

This section explains how to obtain an API account and get the necessary information to scrobble your music. The specific API method used is [auth.getSession](https://www.last.fm/api/show/auth.getSession).

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

Take note of this **authorization token**, it is tied to your user account and **API key**. The token is valid for 60 minutes. Don't worry about expiration, you can request new tokens.

### Craft API Signature

SSH into machine? Manually edit env.js?

Obtaining a **session key** and scrobbling are both requests that require an **API signature**. To get a **session key**, complete the following URL with your **API key**, **authorization token**, and **API secret**.

    http://localhost:3000/auth/q?api_key=xxx&token=xxx&secret=xxx

Audio Station Scrobbler will request a **session key** from Last.fm. Provided all the information you provided is correct, your **API key**, **API secret**, and **session key* will be stored in the environment of your Synology NAS. Sweet, now you can make scrobble requests. 

## Scrobbling

This section explains how to update the "Now Playing" status of your profile and how to scrobble your music. The API methods used are:

* [track.updateNowPlaying](https://www.last.fm/api/show/track.updateNowPlaying)
* [track.scrobble](https://www.last.fm/api/show/track.scrobble)

### Install plugin

Install the plugin from this [repository](https://github.com/FTLam11/lyrical_fronk).

## Contribution

Suggestions and improvements are welcome!

* Clone this repository
* Create a new feature or fix branch
* Write tests to accompany your feature or fix in the **test** folder
* Develop your feature or fix
* Commit early and often
* Run **npm test**
* Pass your tests and mine
* Push up your branch and submit a pull request

# AAAHHHHHHH SHIIIIIEEEEEEEEEETTTTTTTTTT
