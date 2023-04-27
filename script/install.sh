#!/bin/sh +x

#	install.sh
#
#	duo-bypass
#
#	Script for installing the duo-bypass script
#
#	Created by Nils Streedain on 4/26/23.

# Install Homebrew dependencies
brew bundle --file=<(curl -fsSL https://raw.githubusercontent.com/nilsstreedain/duo-bypass/main/script/Brewfile)

# Install script to /usr/local/bin/ folder
sudo curl https://raw.githubusercontent.com/nilsstreedain/duo-bypass/change-domain/script/duo-bypass -sSLo "/usr/local/bin/duo-bypass"

# Give script executable permission
sudo chmod +x /usr/local/bin/duo-bypass
