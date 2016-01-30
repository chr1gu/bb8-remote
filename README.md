# BB-8 Remote Controller

Control your droid with your computers keyboard

## Prerequisites

- NPM
- NodeJs

## Setup

1. Clone/download repository
2. Run `npm install`
3. Get your droid's Uuid (BLE address) by running `node ./node_modules/noble/examples/advertisement-discovery.js`
3. Edit `index.js` and change the `uuid` parameter to reflect your droid's BLE address

## Run the remote control

1. Make sure, bluetooth is enabled
2. Run `node index.js`
