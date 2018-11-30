import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
declare var formatCode;

@Component({
    selector: 'app-filtering',
    templateUrl: './filtering.component.html',
    styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myGrid2') myGrid2: jqxGridComponent;
    @ViewChild('myGrid3') myGrid3: jqxGridComponent;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        localdata: [
            ['Maria Anders', 'Sales Representative', 'Berlin', 'Germany'],
            ['Ana Trujillo', 'Owner', 'Mxico D.F.', 'Mexico'],
            ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico']
        ],
        datafields: [
            { name: 'ContactName', type: 'string', map: '0' },
            { name: 'Title', type: 'string', map: '1' },
            { name: 'City', type: 'string', map: '2' },
            { name: 'Country', type: 'string', map: '3' }
        ],
        datatype: 'array'
    };

    source2: any = {
        localdata: [
            { firstname: "Andrew", lastname: "Burke", productname: "White Chocolate Mocha", quantity: 5, price: 3.8 },
            { firstname: "Andrew", lastname: "Wilson", productname: "Espresso con Panna", quantity: 1, price: 5 },
            { firstname: "Nancy", lastname: "Fuller", productname: "Caffe Latte", quantity: 1, price: 3.5 },
            { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.2 },
            { firstname: "Mayumi", lastname: "Davolio", productname: "Caffe Espresso", quantity: 1, price: 3.6 },
            { firstname: "Beate", lastname: "Saavedra", productname: "Caffe Latte", quantity: 2, price: 3.5 },
            { firstname: "Beate", lastname: "Nodier", productname: "White Chocolate Mocha", quantity: 6, price: 3.8 },
            { firstname: "Petra", lastname: "Winkler", productname: "Doubleshot Espresso", quantity: 5, price: 4.6 },
            { firstname: "Andrew", lastname: "Rossi", productname: "Caffe Latte", quantity: 2, price: 3.5 },
            { firstname: "Nancy", lastname: "Saavedra", productname: "Cappuccino", quantity: 1, price: 3.8 },
            { firstname: "Regina", lastname: "Wilson", productname: "Doubleshot Espresso", quantity: 7, price: 4.6 },
            { firstname: "Mayumi", lastname: "Bjorn", productname: "Black Tea", quantity: 1, price: 3.8 },
            { firstname: "Beate", lastname: "Petersen", productname: "Caffe Latte", quantity: 2, price: 3.5 },
            { firstname: "Saavedra", lastname: "Fuller", productname: "Black Tea", quantity: 6, price: 3.8 }
        ],
        datatype: 'array'
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);
    dataAdapter2: any = new jqx.dataAdapter(this.source2);
    dataAdapter3: any = new jqx.dataAdapter(this.source2);

    columns: any[] = [
        { text: 'Contact Name', datafield: 'ContactName' },
        { text: 'Contact Title', datafield: 'Title' },
        { text: 'City', datafield: 'City' },
        { text: 'Country', datafield: 'Country' }
    ];

    columns2: any[] = [
        { text: 'First Name', datafield: 'firstname', width: 160 },
        { text: 'Last Name', datafield: 'lastname', width: 160 },
        { text: 'Product', datafield: 'productname', width: 170 },
        { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    updatefilterconditions = (type: string, defaultconditions: any): string[] => {
        let stringcomparisonoperators = ['CONTAINS', 'DOES_NOT_CONTAIN'];
        let numericcomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        let datecomparisonoperators = ['LESS_THAN', 'GREATER_THAN'];
        let booleancomparisonoperators = ['EQUAL', 'NOT_EQUAL'];
        switch (type) {
            case 'stringfilter':
                return stringcomparisonoperators;
            case 'numericfilter':
                return numericcomparisonoperators;
            case 'datefilter':
                return datecomparisonoperators;
            case 'booleanfilter':
                return booleancomparisonoperators;
        }
    };

    ready = (): void => {
        let localizationObject = {
            filterstringcomparisonoperators: ['contains', 'does not contain'],
            // filter numeric comparison operators.
            filternumericcomparisonoperators: ['less than', 'greater than'],
            // filter date comparison operators.
            filterdatecomparisonoperators: ['less than', 'greater than'],
            // filter bool comparison operators.
            filterbooleancomparisonoperators: ['equal', 'not equal']
        }
        this.myGrid.localizestrings(localizationObject);
    }

    addfilter = (): void => {
        // create a filter group for the FirstName column.
        let fNameFiltergroup = new jqx.filter();
        // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
        let filter_or_operator = 1;
        // create a string filter with `contains` condition.
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // create second filter.
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // add the filters to the filter group.
        fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
        fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
        // add the filter group to the `firstname` column in the Grid.
        this.myGrid2.addfilter('firstname', fNameFiltergroup);
        // create a filter group for the Quantity column.
        let quantityFilterGroup = new jqx.filter();
        // create a filter.
        filter_or_operator = 1;
        let filtervaluenum = 3;
        filtercondition = 'less_than';
        let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervaluenum, filtercondition);
        quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
        // add the filter group to the `quantity` column in the Grid.
        this.myGrid2.addfilter('quantity', quantityFilterGroup);
        // apply the filters.
        this.myGrid2.applyfilters();
    };

    addfilter2 = (): void => {
        // create a filter group for the FirstName column.
        let fNameFiltergroup = new jqx.filter();
        fNameFiltergroup.operator = 'or';
        // operator between the filters in the filter group. 1 is for OR. 0 is for AND.
        let filter_or_operator = 1;
        // create a string filter with `contains` condition.
        let filtervalue = 'Beate';
        let filtercondition = 'contains';
        let fNameFilter1 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // create second filter.
        filtervalue = 'Andrew';
        filtercondition = 'starts_with';
        let fNameFilter2 = fNameFiltergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // add the filters to the filter group.
        fNameFiltergroup.addfilter(filter_or_operator, fNameFilter1);
        fNameFiltergroup.addfilter(filter_or_operator, fNameFilter2);
        // add the filter group to the `firstname` column in the Grid.
        this.myGrid3.addfilter('firstname', fNameFiltergroup);
        // create a filter group for the Quantity column.
        let quantityFilterGroup = new jqx.filter();
        quantityFilterGroup.operator = 'or';
        // create a filter.
        filter_or_operator = 1;
        let filtervaluenum = 3;
        filtercondition = 'less_than';
        let quantityFilter1 = quantityFilterGroup.createfilter('numericfilter', filtervaluenum, filtercondition);
        quantityFilterGroup.addfilter(filter_or_operator, quantityFilter1);
        // add the filter group to the `quantity` column in the Grid.
        this.myGrid3.addfilter('quantity', quantityFilterGroup);
        // apply the filters.
        this.myGrid3.applyfilters();
    };

    ready2 = (): void => {
        this.addfilter();
    };

    ready3 = (): void => {
        this.addfilter2();
    }

}
