import { Component, AfterViewInit } from '@angular/core';
declare var formatCode;

@Component({
    selector: 'app-default-functionality',
    templateUrl: './default-functionality.component.html',
    styleUrls: ['./default-functionality.component.css']
})

export class DefaultFunctionalityComponent implements AfterViewInit {

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }

        let buttons = document.getElementsByClassName('jqx-button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute('type');
        }
    }

    source: any = {
        datatype: 'xml',
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: 'Products',
        record: 'Product',
        id: 'ProductID',
        url: './assets/sampledata/products.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    cellsrenderer = (row, columnsfield, value, defaulthtml, columnproperties, rowdata) => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        } else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    }

    columns: any[] = [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', align: 'right', cellsalign: 'right' },
        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
    ];

    columngroups: any[] = [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ]  
}
