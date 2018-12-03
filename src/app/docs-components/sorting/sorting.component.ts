import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { generatedata } from './../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myGrid2') myGrid2: jqxGridComponent;

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

    data: any = generatedata(50);
    customsortfunc = (column: any, direction: string | boolean): void => {
        let sortdata = new Array();
        if (direction == 'ascending') direction = true;
        if (direction == 'descending') direction = false;
        if (direction != null) {
            for (let i = 0; i < this.data.length; i++) {
                sortdata.push(this.data[i]);
            }
        }
        else sortdata = this.data;
        let tmpToString = Object.prototype.toString;
        Object.prototype.toString = (typeof column == 'function') ? column : () => { return this[column] };
        if (direction != null) {
            sortdata.sort(this.compare);
            if (!direction) {
                sortdata.reverse();
            }
        }
        this.source2.localdata = sortdata;
        this.myGrid2.updatebounddata('sort');
        Object.prototype.toString = tmpToString;
    }
    compare = (value1: any, value2: any): any => {
        value1 = String(value1).toLowerCase();
        value2 = String(value2).toLowerCase();
        try {
            let tmpvalue1 = parseFloat(value1);
            if (isNaN(tmpvalue1)) {
                if (value1 < value2) { return -1; }
                if (value1 > value2) { return 1; }
            }
            else {
                let tmpvalue2 = parseFloat(value2);
                if (tmpvalue1 < tmpvalue2) { return -1; }
                if (tmpvalue1 > tmpvalue2) { return 1; }
            }
        }
        catch (error) {
            let er = error;
        }
        return 0;
    };

    source: any = {
        datatype: "xml",
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
        ],
        root: "entry",
        record: "content",
        id: 'OrderID',
        url: './assets/sampledata/orders.xml',
        sortcolumn: 'ShipName',
        sortdirection: 'asc'
    };

    source2: any = {
        localdata: this.data,
        sort: this.customsortfunc,
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);
    dataAdapter2: any = new jqx.dataAdapter(this.source2);

    columns: any[] = [
        { text: 'Ship Name', datafield: 'ShipName', width: 250 },
        { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
        { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
        { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
        { text: 'Ship City', datafield: 'ShipCity', width: 100 },
        { text: 'Ship Country', datafield: 'ShipCountry', width: 100 }
    ]

    columns2: any[] = [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];

    ready = (): void => {
        this.myGrid2.sortby('firstname', 'asc');
    }

    onSort = (event): void => {
        let sortinformation = event.args.sortinformation;
        let sortdirection = sortinformation.sortdirection;
        let sortcolumn = sortinformation.sortcolumn;
        console.log("Sorted by: " + sortcolumn);
    }
}
