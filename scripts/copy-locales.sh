#!/bin/sh
# Post-build: copy HTML pages into locale subdirectories for SEO-friendly URLs.
# Each /locale/ serves the same SPA — React reads locale from URL path.
# POSIX sh for compatibility with GitHub Actions (Ubuntu) and macOS.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$SCRIPT_DIR/../dist"

for loc in de es fr it ja ko pt-BR ru uk zh-Hans zh-Hant; do
  mkdir -p "$DIST_DIR/$loc/support" "$DIST_DIR/$loc/privacy"
  cp "$DIST_DIR/index.html" "$DIST_DIR/$loc/index.html"
  cp "$DIST_DIR/support/index.html" "$DIST_DIR/$loc/support/index.html"
  cp "$DIST_DIR/privacy/index.html" "$DIST_DIR/$loc/privacy/index.html"
  echo "  ✓ $loc/ (main + support + privacy)"
done

echo "Locale pages created."
