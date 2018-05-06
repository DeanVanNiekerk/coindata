
const data = require('./coins.json');

class Coins {

    constructor() {
        this.data = data;
    }

    getAll() {
        return this.data;
    }

    getCoin(symbol, attribute) {

        let coin = data.find(c => c.symbol.toLowerCase() === symbol.toLowerCase());

        if(typeof coin === 'undefined')
            return null;

        if(typeof attribute === 'undefined')
            return coin;

        return coin[attribute];
    }
}

module.exports = new Coins();
