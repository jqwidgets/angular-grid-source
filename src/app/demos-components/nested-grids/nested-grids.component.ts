import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
declare var formatCode;

@Component({
    selector: 'app-nested-grids',
    templateUrl: './nested-grids.component.html',
    styleUrls: ['./nested-grids.component.css']
})
export class NestedGridsComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    ngAfterViewInit() {
        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }

    source: any = {
        datafields: [
            { name: 'FirstName' },
            { name: 'LastName' },
            { name: 'Title' },
            { name: 'Address' },
            { name: 'City' }
        ],
        root: 'Employees',
        record: 'Employee',
        id: 'EmployeeID',
        datatype: 'xml',
        url: './assets/sampledata/employees.xml'
    };

    employeesAdapter: any = new jqx.dataAdapter(this.source);

    ordersSource: any = {
        datafields: [
            { name: 'EmployeeID', type: 'string' },
            { name: 'ShipName', type: 'string' },
            { name: 'ShipAddress', type: 'string' },
            { name: 'ShipCity', type: 'string' },
            { name: 'ShipCountry', type: 'string' },
            { name: 'ShippedDate', type: 'date' }
        ],
        root: 'Orders',
        record: 'Order',
        datatype: 'xml',
        url: './assets/sampledata/orderdetails.xml'
    };

    ordersDataAdapter = new jqx.dataAdapter(this.ordersSource, { autoBind: true });

    photoRenderer = (row: number, column: any, value: string): string => {
        let name = this.myGrid.getrowdata(row).FirstName;
        let imgurl = './assets/' + name.toLowerCase() + '.png';
        let img = '<div style="background: white;"><img style="margin: 2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
        return img;
    }

    renderer = (row: number, column: any, value: string): string => {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    }

    columns: any[] = [
        { text: 'Photo', width: 50, cellsrenderer: this.photoRenderer },
        { text: 'First Name', datafield: 'FirstName', cellsrenderer: this.renderer },
        { text: 'Last Name', datafield: 'LastName', cellsrenderer: this.renderer },
        { text: 'Title', datafield: 'Title', cellsrenderer: this.renderer },
        { text: 'Address', datafield: 'Address', cellsrenderer: this.renderer },
        { text: 'City', datafield: 'City', cellsrenderer: this.renderer }
    ];

    nestedGrids: any[] = [];
    // create nested grid.
    initRowDetails = (index: number, parentElement: any, gridElement: any, record: any): void => {
        let id = record.uid.toString();
        let nestedGridContainer = parentElement.children[0];
        this.nestedGrids[index] = nestedGridContainer;
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = id;
        let filtercondition = 'equal';
        let filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // fill the orders depending on the id.
        let orders = this.ordersDataAdapter.records;
        let ordersbyid = [];
        for (let i = 0; i < orders.length; i++) {
            let result = filter.evaluate(orders[i]['EmployeeID']);
            if (result)
                ordersbyid.push(orders[i]);
        }
        let ordersSource = {
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        let nestedGridAdapter = new jqx.dataAdapter(ordersSource);
        if (nestedGridContainer != null) {
            let settings = {
                theme: 'material',
                width: '95%',
                height: '90%',
                source: nestedGridAdapter,
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName' },
                    { text: 'Ship Address', datafield: 'ShipAddress' },
                    { text: 'Ship City', datafield: 'ShipCity' },
                    { text: 'Ship Country', datafield: 'ShipCountry' },
                    { text: 'Shipped Date', datafield: 'ShippedDate' }
                ]
            };
            jqwidgets.createInstance(`#${nestedGridContainer.id}`, 'jqxGrid', settings);
        }
    }

    rowdetailstemplate: any = {
        rowdetails: '<div id="nestedGrid" style="margin: 10px;"></div>', rowdetailsheight: 200, rowdetailshidden: true
    };

    ready = (): void => {
        this.myGrid.showrowdetails(1);
    };
}
