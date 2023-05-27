#!/bin/bash
file_path=$1

xlsx2csv $file_path | cut -d "," -f 2 | awk "NR>=2" > word.list
deno run --allow-net --allow-read scraping_webilio.js > word.csv
python ./edit_xlsx.py $file_path