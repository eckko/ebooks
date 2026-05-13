#!/usr/bin/env bash

ebook-convert \
  books/$1/src/index.html \
  books/$1/dist/$1.epub \
  --cover books/$1/src/images/cover.png \
  --language en \
  --tags "fiction, ebook" \
  --chapter "//*[(name()='h1')]" \
  --level1-toc "//h:h1" \
  --max-toc-links 100 \
  --no-default-epub-cover \
  --epub-version 3

echo "Created: books/$1/dist/$1.epub"
