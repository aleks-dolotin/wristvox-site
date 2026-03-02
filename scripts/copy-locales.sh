#!/bin/sh
# Post-build: copy index.html into locale subdirectories for SEO-friendly URLs.
# /ja/ serves the same SPA — React reads locale from URL path.
# POSIX sh for compatibility with GitHub Actions (Ubuntu) and macOS.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$SCRIPT_DIR/../dist"

for loc in de es fr it ja ko pt-BR ru uk zh-Hans zh-Hant; do
  mkdir -p "$DIST_DIR/$loc"
  cp "$DIST_DIR/index.html" "$DIST_DIR/$loc/index.html"
  echo "  ✓ $loc/index.html"
done

echo "Locale pages created."
