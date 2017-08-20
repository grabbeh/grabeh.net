I recently bought an Acer C270 Chromebook and having undertaken the straightforward process of using Crouton to install Ubuntu/Unity, I found I had to take a few more steps to make the machine usable for Node.js development.

I thought I'd outline the steps below I took. Clearly some steps may not be applicable depending on the preferred setup.

**Terminal**

    sudo apt-get install gnome-terminal

**Google Chrome**

    wget https://dl.google.com/linux/direct/google-chrome-  stable_current_amd64.deb

    sudo dpkg -i google-chrome*.deb

    sudo apt-get -f install

You may need to add '--user-data-dir' to the end of the /usr/bin/google-chrome file also so that Chrome runs.

Also 'python -c "import gnomekeyring;gnomekeyring.change_password_sync('login', 'MYPASSWORD', '');"' can be used to disable the request for a keyring password.

**Node.js**

    wget http://nodejs.org/dist/v0.10.22/node-v0.10.22.tar.gz

    tar -xvzf node-v0.10.22.tar.gz

    cd node-v0.10.22

    apt-get install build-essential g++

    ./configure

    make

    sudo make install

    node -v

**Git**

    sudo apt-get install git

**Fonts**

The font on Gnome Terminal was bunched up. This was fixed by installing a new font package as follows:

    sudo apt-get install ttf-ubuntu-font-family

**Sublime Text 2**

    sudo add-apt-repository ppa:webupd8team/sublime-text-2

    sudo apt-get update

    sudo apt-get install sublime-text

**Switching to Chromebook keyboard**

The key mappings in Ubuntu 12.04 are different to the default ones for the Chromebook. I therefore used xmodmap to update/switch around certain keys.

    xmodmap -e "keycode 94 shift = backslash bar"

    xmodmap -e "keycode 51 shift = numbersign asciitilde"

    xmodmap -e  "keycode 11 shift = 2 quotedbl"

    xmodmap -e "keycode 48 shift = apostrophe at"

I also added a delete key and made the search key into caps lock with the following:

    xmodmap -e "keycode 22 shift = BackSpace Delete"

    xmodmap -e "keycode 133 = Caps_Lock"

Bear in mind that the above commands are session specific so to persist them you should create a file called '.xinitrc' file in your home directory, with 'xmodmap .Xmodmap' in, then xmodmap -pke > .Xmodmap in same directory to save revised .Xmodmap file in that directory.

Alternatively, you can just call .xmodmap ~/Xmodmap on each session startup.

On remapping the Delete key I couldn't get the Alt + Backspace combination to work so used shift instead.

I also mapped delete in Sublime Text 2 to shift + backspace by editing the existing binding in .sublime-keymap to the following:

    { "keys": ["shift+backspace"], "command": "right_delete" }

I'm very happy with the new Chromebook and the above additions have helped no end to make using Unity/Ubuntu via Crouton a good environment for me to develop in (maybe one day I'll master Vim but not today).
