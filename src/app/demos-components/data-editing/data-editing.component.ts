import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { generatedata } from '../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-data-editing',
    templateUrl: './data-editing.component.html',
    styleUrls: ['./data-editing.component.css']
})
export class DataEditingComponent implements AfterViewInit {
    @ViewChild('beginEdit') beginEdit: ElementRef;
    @ViewChild('endEdit') endEdit: ElementRef;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        localdata: generatedata(500, false),
        datatype: 'array',
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
        {
            text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
            validation: (cell: any, value: any): any => {
                if (value == '')
                    return true;
                let year = value.getFullYear();
                if (year >= 2017) {
                    return { result: false, message: 'Ship Date should be before 1/1/2017' };
                }
                return true;
            }
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 150) {
                    return { result: false, message: 'Quantity should be in the 0-150 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            }
        },
        {
            text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            validation: (cell: any, value: number): any => {
                if (value < 0 || value > 15) {
                    return { result: false, message: 'Price should be in the 0-15 interval' };
                }
                return true;
            },
            createeditor: (row: number, cellvalue: any, editor: any): void => {
                editor.jqxNumberInput({ digits: 3 });
            }
        }
    ];
    cellBeginEditEvent(event: any): void {
        let args = event.args;
        this.beginEdit.nativeElement.innerHTML = 'Event Type: cellbeginedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }
    cellEndEditEvent(event: any): void {
        let args = event.args;
        this.endEdit.nativeElement.innerHTML = 'Event Type: cellendedit, Column: ' + args.datafield + ', Row: ' + (1 + args.rowindex) + ', Value: ' + args.value;
    }
}
