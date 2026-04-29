#!/bin/bash

# Path to the cards directory and output file
CARDS_DIR="contributors"
OUTPUT_FILE="scripts/contributors.js"

# Check if the cards directory exists
if [ ! -d "$CARDS_DIR" ]; then
  echo "Error: Directory $CARDS_DIR does not exist."
  exit 1
fi

# Detect most recently added contributor HTML via git log
LATEST=$(git log --diff-filter=A --name-only --pretty=format: -- "$CARDS_DIR/*.html" | grep -m1 "\.html$" | sed "s|$CARDS_DIR/||")

# Write latest contributor to its own file
echo "const latestContributor = \"$LATEST\";" > "scripts/latest.js"

# Write the contributor array (clean — no latestContributor variable)
echo "const contributorFiles = [" > "$OUTPUT_FILE"
find "$CARDS_DIR" -type f -name "*.html" | sed "s|^$CARDS_DIR/|  \"|; s|$|\",|" >> "$OUTPUT_FILE"
echo "];" >> "$OUTPUT_FILE"

echo "$OUTPUT_FILE generated successfully with $(ls -1 $CARDS_DIR/*.html | wc -l | xargs) files."
echo "Latest contributor: $LATEST"

