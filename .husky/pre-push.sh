#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

yarn test:coverage
yarn clean:coverage
