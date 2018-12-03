import { Component, AfterViewInit } from '@angular/core';
import { generatedata } from '../../../assets/sampledata/generatedata';
declare var formatCode;

@Component({
    selector: 'app-editing',
    templateUrl: './editing.component.html',
    styleUrls: ['./editing.component.css']
})
export class EditingComponent implements AfterViewInit {

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        localdata: generatedata(50, false),
        datatype: 'array',
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'date', type: 'date' },
            { name: 'available', type: 'bool' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
        { text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd' },
        {
            text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
            initeditor: (row, cellvalue, editor) => {
                editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
            }
        },
        {
            text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            createeditor: (row, cellvalue, editor) => {
                editor.jqxNumberInput({ digits: 3 });
            }
        }
    ];

    columns2: any[] = [
        { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
        { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
        { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
        { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
        {
            text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, cellsalign: 'right', cellsformat: 'd',
            validation: function (cell, value) {
                var year = value.getFullYear();
                if (year >= 2013) {
                    return { result: false, message: "Ship Date should be before 1/1/2013" };
                }
                return true;
            }
        },
        {
            text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right', columntype: 'numberinput',
            validation: function (cell, value) {
                if (value < 0 || value > 100) {
                    return { result: false, message: "Quantity should be in the 0-100 interval" };
                }
                return true;
            },
            initeditor: function (row, cellvalue, editor) {
                editor.jqxNumberInput({ decimalDigits: 0 });
            }
        },
        {
            text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
            validation: function (cell, value) {
                if (value < 0 || value > 15) {
                    return { result: false, message: "Price should be in the 0-15 interval" };
                }
                return true;
            },
            initeditor: function (row, cellvalue, editor) {
                editor.jqxNumberInput({ digits: 3 });
            }
        }
    ];
}
