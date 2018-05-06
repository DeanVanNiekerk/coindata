
const coins = require('../dist/index');

describe('Coins', function () {

    it('getAll - is array', function () {
        let list = coins.getAll();
        expect(Array.isArray(list)).toBe(true);
    });

    it('getAll - more than 1', function () {
        let list = coins.getAll();
        expect(list.length).toBeGreaterThan(0);
    });

    it('getAll - valid attributes', function () {
        
        let list = coins.getAll();

        const expectedKeys = ['rank', 'symbol', 'name', 'maxSupply', 'logoUrl32x32', 'links'];
        const actualKeys = Object.keys(list[0]);
        
        expect(actualKeys).toEqual(expectedKeys);
    });

    it('getCoin - matches on search', function () {
        let coin = coins.getCoin('btc');
        let excepted = {
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
        };

        expect(coin).toEqual(excepted);
    });

    it('getCoin - only requested attributes', function () {
        let name = coins.getCoin('btc', 'name');
        expect(name).toEqual('Bitcoin');
    });

    it('getCoin - no match return null', function () {
        let coin = coins.getCoin('gammy');
        expect(coin).toBeNull();
    });

});