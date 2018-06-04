#!/usr/bin/env bash

fonts_directory="$HOME/.local/share/fonts"

if [ ! -d ${fonts_directory} ]; then
  echo 'Creating Fonts directory...'
  mkdir -p ${fonts_directory}
fi

file_path="$HOME/.local/share/fonts/FiraCode-Regular.ttf"

if [ ! -e ${file_path} ]; then
  fira_code_url="https://github.com/tonsky/FiraCode/blob/master/distr/ttf/FiraCode-Regular.ttf?raw=true"

  echo 'Fetching "Fira Code"...'
  wget -O ${file_path} ${fira_code_url}

  echo 'Rebuilding Fonts cache...'
  fc-cache -f

  echo 'Done!'
fi
