#!/bin/zsh
# Post-build: copy index.html into locale subdirectories for SEO-friendly URLs.
# /ja/ serves the same SPA — React reads locale from URL path.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$SCRIPT_DIR/../dist"

LOCALES=(de es fr it ja ko pt-BR ru uk zh-Hans zh-Hant)

for loc in $LOCALES; do
  mkdir -p "$DIST_DIR/$loc"
  cp "$DIST_DIR/index.html" "$DIST_DIR/$loc/index.html"
  echo "  ✓ $loc/index.html"
done

echo "Locale pages created for: ${LOCALES[*]}"
