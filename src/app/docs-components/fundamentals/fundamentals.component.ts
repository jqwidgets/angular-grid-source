import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
declare var formatCode;

@Component({
    selector: 'app-fundamentals',
    templateUrl: './fundamentals.component.html',
    styleUrls: ['./fundamentals.component.css']
})
export class FundamentalsComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

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

    source: any =
        {
            datatype: 'json',
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            id: 'id',
            url: '../../../assets/sampledata/beverages.txt'
        };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Name', datafield: 'name', width: 250 },
            { text: 'Beverage Type', datafield: 'type', width: 250 },
            { text: 'Calories', datafield: 'calories', width: 180 },
            { text: 'Total Fat', datafield: 'totalfat', width: 120 },
            { text: 'Protein', datafield: 'protein', minwidth: 120 }
        ];

    onFilter(): void {
        let filtersinfo = this.myGrid.getfilterinformation();
        console.log(filtersinfo);
    }

    importJqxGridComponent: string = `import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';`;
}
