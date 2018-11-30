import { Component, AfterViewInit } from '@angular/core';
declare var formatCode;

@Component({
    selector: 'app-grouping',
    templateUrl: './grouping.component.html',
    styleUrls: ['./grouping.component.css']
})
export class GroupingComponent implements AfterViewInit {

    constructor() { }

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
            ['Antonio Moreno', 'Owner', 'Mxico D.F.', 'Mexico'],
            ['Thomas Hardy', 'Sales Representative', 'London', 'UK'],
            ['Christina Berglund', 'Order Administrator', 'Lule', 'Sweden'],
            ['Hanna Moos', 'Sales Representative', 'Mannheim', 'Germany'],
            ['Frdrique Citeaux', 'Marketing Manager', 'Strasbourg', 'France'],
            ['Martn Sommer', 'Owner', 'Madrid', 'Spain'],
            ['Laurence Lebihan', 'Owner', 'Marseille', 'France'],
            ['Elizabeth Lincoln', 'Accounting Manager', 'Tsawassen', 'Canada'],
            ['Victoria Ashworth', 'Sales Representative', 'London', 'UK'],
            ['Patricio Simpson', 'Sales Agent', 'Buenos Aires', 'Argentina']
        ],
        datafields: [
            { name: 'ContactName', type: 'string', map: '0' },
            { name: 'Title', type: 'string', map: '1' },
            { name: 'City', type: 'string', map: '2' },
            { name: 'Country', type: 'string', map: '3' }
        ],
        datatype: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Contact Name', datafield: 'ContactName' },
        { text: 'Contact Title', datafield: 'Title' },
        { text: 'City', datafield: 'City' },
        { text: 'Country', datafield: 'Country' }
    ];
}
