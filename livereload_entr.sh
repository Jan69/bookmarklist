#!/bin/sh
printf "%s\n%s\n%s\n" index.pug index.js links.txt|entr node .
