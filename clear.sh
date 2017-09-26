#!/bin/sh
if [ -z $1 ];then
  echo "usage:"
  echo "$0 dirname"
  exit
fi
find $1 -name ".DS_Store" -exec rm -rf {} \;
find $1 -name "._.DS_Store" -exec rm -rf {} \;
