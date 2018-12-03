import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { generatedata } from './../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-refresh-data',
    templateUrl: './refresh-data.component.html',
    styleUrls: ['./refresh-data.component.css']
})
export class RefreshDataComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        localdata: generatedata(100, false),
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
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'First Name', dataField: 'firstname', width: 130 },
        { text: 'Last Name', dataField: 'lastname', width: 130 },
        { text: 'Product', dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
    ];

    refreshBtnOnClick(): void {
        this.source.localdata = generatedata(500, false);
        // passing 'cells' to the 'updatebounddata' method will refresh only the cells values when the new rows count is equal to the previous rows count.
        this.myGrid.updatebounddata('cells');
    }

    clearBtnOnClick(): void {
        this.myGrid.clear();
    }
}
