#!/bin/bash

# Set the content directory and template file
CONTENT_DIR="./content"
TEMPLATE="content/template.html"

# Loop through all .md files in the content directory
for file in "$CONTENT_DIR"/*.md; do
  # Get the filename without extension
  filename=$(basename "$file" .md)

  # Convert to HTML with Pandoc
  pandoc "$file" -o "$CONTENT_DIR/$filename.html" \
    --template="$TEMPLATE" \
    --standalone
done

echo "✅ All Markdown files in $CONTENT_DIR have been converted to HTML."
