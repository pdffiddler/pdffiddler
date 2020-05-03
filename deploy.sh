#!/usr/bin/env sh

# abort on errors
set -e

cd docs && node generateDoc.js

# build
yarn build