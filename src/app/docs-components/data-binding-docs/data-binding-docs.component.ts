import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { generatedata } from './../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-data-binding-docs',
    templateUrl: './data-binding-docs.component.html',
    styleUrls: ['./data-binding-docs.component.css']
})
export class DataBindingDocsComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    arraySource: any = {
        localdata: generatedata(50),
        datatype: 'array',
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'total', type: 'number' }
        ]
    };
    xmlSource: any = {
        datatype: 'xml',
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:CustomerID',
        url: './assets/sampledata/customers.xml'
    };
    jsonSource: any = {
        datatype: 'json',
        datafields: [
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'calories', type: 'int' },
            { name: 'totalfat', type: 'string' },
            { name: 'protein', type: 'string' }
        ],
        id: 'id',
        url: './assets/sampledata/beverages.txt'
    };
    tsvSource: any = {
        datatype: 'tab',
        datafields: [
            { name: 'Year', type: 'int' },
            { name: 'HPI', type: 'float' },
            { name: 'BuildCost', type: 'float' },
            { name: 'Population', type: 'float' },
            { name: 'Rate', type: 'float' }
        ],
        url: './assets/sampledata/homeprices.txt'
    };
    csvSource: any = {
        datatype: "csv",
        datafields: [
            { name: 'Date', type: 'date' },
            { name: 'S&P 500', type: 'float' },
            { name: 'NASDAQ', type: 'float' }
        ],
        url: './assets/sampledata/nasdaq_vs_sp500.txt'
    };
    refreshSource: any = {
        localdata: generatedata(50, false),
        datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
        datatype: 'array'
    };

    arrayDataAdapter: any = new jqx.dataAdapter(this.arraySource);
    xmlDataAdapter: any = new jqx.dataAdapter(this.xmlSource);
    jsonDataAdapter: any = new jqx.dataAdapter(this.jsonSource);
    tsvDataAdapter: any = new jqx.dataAdapter(this.tsvSource)
    csvDataAdapter: any = new jqx.dataAdapter(this.csvSource)
    refreshDataAdapter: any = new jqx.dataAdapter(this.refreshSource)

    arrayColumns: any[] = [
        { text: 'Name', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', width: 120 },
        { text: 'Product', datafield: 'productname', width: 180 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
    ];
    xmlColumns: any[] = [
        { text: 'Company Name', datafield: 'CompanyName', width: 250 },
        { text: 'Contact Name', datafield: 'ContactName', width: 150 },
        { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
        { text: 'City', datafield: 'City', width: 120 },
        { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
        { text: 'Country', datafield: 'Country', width: 100 }
    ];
    jsonColumns: any[] = [
        { text: 'Name', datafield: 'name', width: 250 },
        { text: 'Beverage Type', datafield: 'type', width: 250 },
        { text: 'Calories', datafield: 'calories', width: 180 },
        { text: 'Total Fat', datafield: 'totalfat', width: 120 },
        { text: 'Protein', datafield: 'protein', minwidth: 120 }
    ];
    tsvColumns: any[] = [
        { text: 'Year', datafield: 'Year' },
        { text: 'HPI', datafield: 'HPI', cellsformat: 'f2' },
        { text: 'Build Cost', datafield: 'BuildCost', cellsformat: 'f2' },
        { text: 'Population', datafield: 'Population', cellsformat: 'f2' },
        { text: 'Rate', datafield: 'Rate', cellsformat: 'f5', minwidth: 100 }
    ];
    csvColumns: any[] = [
        { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
        { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
        { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }
    ];
    refreshColumns: any[] = [
        { text: 'First Name', dataField: 'firstname', width: 130 },
        { text: 'Last Name', dataField: 'lastname', width: 130 },
        { text: 'Product', dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
    ];

    refreshBtnOnClick(): void {
        this.refreshSource.localdata = generatedata(50);
        // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
        this.myGrid.updatebounddata('cells');
    }
}
