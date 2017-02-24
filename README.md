# Audio-Station-Scrobbler

Not being able to scrobble tracks with Audio Station is no bueno. After brainstorming some crazy ideas, I conjured up a scheme. Read through the entire README before you try anything, thanks! Time for some storytelling.

I sniffed the network traffic while using Audio Station and noted HTTP request patterns during playback of each song. Here is the low-down:

* Lyric modules are an Audio Station built-in feature. With a lyric module installed, Audio Station makes queries for each song and displays lyrics if found. A variety of [Synology Lyric modules](https://bitbucket.org/franklai/synologylyric/overview) are publically available. I ninja'd a new scrobble request into one of the lyric modules. My modified lyric module is found [here](https://github.com/FTLam11/lyrical_fronk).
* This repository contains a simple Node server that saves a Last.FM session and scrobbles music. 

## I. Installing and Running Server Code

### System Requirements

* Your Synology NAS must have NodeJS v4 or above installed. It can be installed via Package Center, or you can download the source code from [NodeJS](https://nodejs.org/en/download/) and include it in your $PATH.
* My Synology NAS is running **DSM 6.02-8451 Update 9** and **Audio Station 6.02-3093**. I have not tested other versions of DSM and Audio Station, but I assume this scrobbler will work if Audio Station has the lyric plugin feature.
* [SSH](https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/system_terminal) must be enabled on your Synology NAS. 
* Check t3h g00gles to find a suitable terminal client for your operating system. **You need root privileges for your Synology NAS.** Refer to this [tutorial](https://www.synology.com/en-us/knowledgebase/DSM/tutorial/General/How_to_login_to_DSM_with_root_permission_via_SSH_Telnet) for an example.

### Cloning/Downloading Server Repository

I have no clue what your system environment is like, but I'll attempt to provide detailed steps with **minimal overhead**. If you know what you're doing (ipkg is setup, Git is installed, etc...), just clone this repository to your NAS and skip this section. Otherwise, follow along below:

1. [Download this repository](https://github.com/FTLam11/Audio-Station-Scrobbler/archive/master.zip) to your computer.
2. Extract it and upload the entire folder to your NAS. I [created a shared folder](https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/file_share_create) and uploaded to there.

### Configuration

1. SSH into your NAS. Run `sudo -i` to switch to the root user. Navigate into the directory uploaded from the previous section.
2. Install dependencies by running `npm install`. Start the server by running `npm start`.
3. In DSM, go to **Control Panel** > **Task Scheduler**. You will create a task to automatically run the server whenever your NAS boots up.
4. Click **Create** -> **Triggered Task** -> **User-defined script**. 
5. In the **General** tab, enter a task name and then check the **Enabled** box.
6. In the **Task Settings** tab, edit and paste the following: 

    `exec /usr/local/bin/node path_to_scrobbler_directory/bin/server.js`

    For example, in my environment this is:

    `exec /usr/local/bin/node /volume1/code/Audio-Station-Scrobbler/bin/server.js`

7. Click **OK** to save this task.

Keep your SSH connection open so the server can continue to run for now. It's necessary for the following section.

## II. Last.fm Authorization

This section explains how to obtain an API account and get the necessary information to scrobble your music.

### Create API Account

To use the Last.fm API, [sign up for an account](http://www.last.fm/api/account/create). The only field that matters is **Callback URL**. Set **Callback URL** to:

    local_address_of_your_nas:3000

Zang, now you have your own **API key** and **API secret**.

### Grant Application Permissions

Complete the following URL with your **API key** and open it up in your browser.

    http://www.last.fm/api/auth/?api_key=xxx

Log in if neccesary and grant your application permission to your account. Last.fm will redirect to the callback URL you specified earlier. Take note of the displayed **authorization token**, it is tied to your user account and **API key** and is valid for 60 minutes.

### Get Session Key

Complete the following URL with your **API key**, **authorization token**, and **API secret**. Open the URL in your browser.

    local_address_of_your_nas:3000/auth/q?api_key=xxx&token=xxx&secret=xxx

Your NAS will request a **session key** from Last.fm. Assuming all the information you provided is correct, your **API key**, **API secret**, and **session key** will be stored your NAS environment. According to Last.fm, the lifetime of session keys are infinite.

You can close your SSH connection now. Proceed to plugin installation.

## III. Install Plugin

Install the plugin from this [repository](https://github.com/FTLam11/lyrical_fronk). It is **required**. The plugin feeds song information to the scrobbling server.

## IV. Restart Server

Restart your NAS in order for the scrobbling server to automatically run in the background. That's all folks, get scrobbling!

## Limitations/Known Issues

* 

## To-Dos

* Update "Now Playing"
* Add stop script
* Implement scrobbling delay 

## Contribution

Is something broken? Does this README need to be updated? Open an issue, or even better, help me fix my shit! Suggestions and improvements are welcome!

* Clone this repository
* Create a new feature or fix branch
* Write tests to accompany your feature or fix in the **test** folder
* Develop your feature or fix
* Commit early and often
* Run `npm test`
* Pass your tests and mine
* Push up your branch and submit a pull request

# AAAHHHHHHH SHIIIIIEEEEEEEEEETTTTTTTTTT
