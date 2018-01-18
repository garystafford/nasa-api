#!/usr/bin/env bash

# Claudia.js Integration Tests against dev stage
# sh ./tests.sh

echo "Starting integration tests..." \
    && claudia test-lambda --version dev --event ./test/event-apod-get.json \
    && claudia test-lambda --version dev --event ./test/event-epic-get.json