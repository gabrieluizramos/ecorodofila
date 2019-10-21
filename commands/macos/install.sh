#!/bin/sh

echo "Setting up Homebrew"
if test ! $(which brew); then
  echo "Installing homebrew"
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
  echo "Homebrew already instaled"
  echo "Updating Homebrew"
  brew update
fi

brew install services
brew install rabbitmq
