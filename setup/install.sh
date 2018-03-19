#/bin/sh
#Installing yarn, ruby and gulp dependencies
echo -e '\e[38;5;82mInstalling yarn dependencies:'
yarn
echo -e '\e[38;5;82mInstalling Ruby gems:'
bundle install
echo -e'\e[38;5;82mSetting gulp files:'
gulp Setup
echo -e '\e[38;5;82mAll done, run gulp to stat browser preview'

