export function generatedata(rowscount?: number, hasNullValues?: boolean): any[] {
    let data = new Array();
    if (rowscount == undefined) rowscount = 100;
    let firstNames =
        [
            'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'
        ];

    let lastNames =
        [
            'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'
        ];

    let productNames =
        [
            'Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'
        ];

    let priceValues =
        [
            '2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
        ];

    for (let i = 0; i < rowscount; i++) {
        let row = {};
        let productindex = Math.floor(Math.random() * productNames.length);
        let price = parseFloat(priceValues[productindex]);
        let quantity = 1 + Math.round(Math.random() * 10);

        row['id'] = i;
        row['reportsto'] = Math.floor(Math.random() * firstNames.length);
        if (i % Math.floor(Math.random() * firstNames.length) === 0) {
            row['reportsto'] = null;
        }

        row['available'] = productindex % 2 == 0;
        if (hasNullValues == true) {
            if (productindex % 2 != 0) {
                let random = Math.floor(Math.random() * rowscount);
                row['available'] = i % random == 0 ? null : false;
            }
        }
        row['firstname'] = firstNames[Math.floor(Math.random() * firstNames.length)];
        row['lastname'] = lastNames[Math.floor(Math.random() * lastNames.length)];
        row['name'] = row['firstname'] + ' ' + row['lastname'];
        row['productname'] = productNames[productindex];
        row['price'] = price;
        row['quantity'] = quantity;
        row['total'] = price * quantity;

        let date = new Date();
        date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
        date.setHours(0, 0, 0, 0);
        row['date'] = date;

        data[i] = row;
    }

    return data;
}
