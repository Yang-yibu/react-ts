#!/usr/bin/env bash

#ts-node-dev --respawn --transpileOnly src/server/app.ts

cross-env NODE_ENV=development gulp
