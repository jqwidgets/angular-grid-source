import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
declare var formatCode;
declare var $;

@Component({
    selector: 'app-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
})
export class PagingComponent implements AfterViewInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    constructor() { }

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

    source: any = {
        localdata: [
            ['Alfreds Futterkiste', 'Maria Anders', 'Berlin', 'Germany'],
            ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mxico D.F.', 'Mexico'],
            ['Antonio Moreno Taquera', 'Antonio Moreno', 'Mxico D.F.', 'Mexico'],
            ['Around the Horn', 'Thomas Hardy', 'London', 'UK'],
            ['Berglunds snabbkp', 'Christina Berglund', 'Lule', 'Sweden'],
            ['Blauer See Delikatessen', 'Hanna Moos', 'Mannheim', 'Germany'],
            ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Strasbourg', 'France'],
            ['Blido Comidas preparadas', 'Martn Sommer', 'Madrid', 'Spain'],
            ['Bon app', 'Laurence Lebihan', 'Marseille', 'France'],
            ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Tsawassen', 'Canada'],
            ['B`s Beverages', 'Victoria Ashworth', 'London', 'UK'],
            ['Cactus Comidas para llelet', 'Patricio Simpson', 'Buenos Aires', 'Argentina'],
            ['Centro comercial Moctezuma', 'Francisco Chang', 'Mxico D.F.', 'Mexico'],
            ['Chop-suey Chinese', 'Yang Wang', 'Bern', 'Switzerland'],
            ['Comrcio Mineiro', 'Pedro Afonso', 'Sao Paulo', 'Brazil'],
            ['Consolidated Holdings', 'Elizabeth Brown', 'London', 'UK'],
            ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Aachen', 'Germany'],
            ['Du monde entier', 'Janine Labrune', 'Nantes', 'France'],
            ['Eastern Connection', 'Ann Devon', 'London', 'UK'],
            ['Ernst Handel', 'Roland Mendel', 'Graz', 'Austria']
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

    pagerrenderer = () => {
        let element = $("<div style='margin-top: 5px; width: 100%; height: 100%;'></div>");
        let paginginfo = this.myGrid.getpaginginformation();
        for(let i = 0; i <paginginfo.pagescount; i++) {
            // add anchor tag with the page number for each page.
            let anchor = $("<a style='padding: 5px; color: blue;'>" + i + "</a>");
            anchor.appendTo(element);
            anchor.click((event) => {
                // go to a page.
                let pagenum = parseInt($(event.target).text());
                this.myGrid.gotopage(pagenum);
            });
        }
        return element;
    }
}
