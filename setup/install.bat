@echo off
title Installing yarn, ruby and gulp dependencies
echo Installing yarn dependencies:
call yarn
echo Installing Ruby gems:
call bundle install
echo Setting gulp files:
call gulp Setup
echo All done, run 'gulp' to stat browser preview
echo off
