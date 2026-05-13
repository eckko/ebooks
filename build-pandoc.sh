#!/usr/bin/env bash

chapters=()
while IFS= read -r chapter; do
  [ -n "$chapter" ] && chapters+=("$1/src/$chapter")
done < "$1/chapters.txt"

pandoc \
  "${chapters[@]}" \
  --metadata-file="$1/metadata.yaml" \
  --css="$1/src/styles.css" \
  -o "$1/dist/$1.epub" \
  --epub-cover-image="$1/src/images/cover.jpg"

echo "Created: dist/$1.epub"
