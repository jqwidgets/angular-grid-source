import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { generatedata } from './../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-data-export',
    templateUrl: './data-export.component.html',
    styleUrls: ['./data-export.component.css']
})
export class DataExportComponent implements AfterViewInit {

    @ViewChild('myGrid') myGrid: jqxGridComponent;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        localdata: generatedata(100, false),
        datatype: 'array',
        datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'date', type: 'date' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ]
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns: any[] = [
        { text: 'First Name', datafield: 'firstname', width: 130 },
        { text: 'Last Name', datafield: 'lastname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 200 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
        { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
        { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
        { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
    ];
    excelBtnOnClick() {
        this.myGrid.exportdata('xls', 'jqxGrid');
    };
    xmlBtnOnClick() {
        this.myGrid.exportdata('xml', 'jqxGrid');
    };
    csvBtnOnClick() {
        this.myGrid.exportdata('csv', 'jqxGrid');
    };
    tsvBtnOnClick() {
        this.myGrid.exportdata('tsv', 'jqxGrid');
    };
    htmlBtnOnClick() {
        this.myGrid.exportdata('html', 'jqxGrid');
    };
    jsonBtnOnClick() {
        this.myGrid.exportdata('json', 'jqxGrid');
    };
    pdfBtnOnClick() {
        this.myGrid.exportdata('pdf', 'jqxGrid');
    };
}
