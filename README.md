# coindata

> List of crypto currencies with metadata

[![Build Status](https://travis-ci.org/DeanVanNiekerk/coindata.svg?branch=master)](https://travis-ci.org/DeanVanNiekerk/coindata)
[![npm](https://img.shields.io/npm/v/coinlist.svg)](https://www.npmjs.com/package/coindata)


## Install

```shell
npm install coindata
```

## Usage

```js
const coindata = require('coindata');

// Get complete list of coins
let coins = coindata.getAll();

// Get a single coin
let coin = coindata.getGet('btc');

// Get a specifc attriubte
let name = coins.get('btc', 'name');
```

## Json Format

```json
{
        "rank": 1,
        "symbol": "BTC",
        "name": "Bitcoin",
        "maxSupply": 21000000,
        "logoUrl32x32": "https://coinkraal.io/api/coins/BTC/logo",
        "links": [
            {
                "name": "reddit",
                "url": "https://www.reddit.com/r/bitcoin"
            },
            {
                "name": "website",
                "url": "https://bitcoin.org/"
            },
            {
                "name": "sourceCode",
                "url": "https://github.com/bitcoin/"
            },
            {
                "name": "explorer",
                "url": "https://blockchain.info/"
            }
        ]
    }
```

## License

MIT © Dean van Niekerk