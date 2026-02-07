#!/bin/bash

set -e

SOURCE_DIR="/Users/tom/Documents/Coding/13 portfolio site/portfolio/src/lib/images/"
DEST="b2-api:tommercer-me-data-public"

rclone sync "$SOURCE_DIR" "$DEST" \
  --exclude "sync.sh" \
  --exclude "*.md" \
  --progress \
  --verbose

echo "Sync completed successfully!"