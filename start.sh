#!/bin/sh
yarn typeorm migration:run
yarn build
yarn start