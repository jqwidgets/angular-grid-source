import { Component, AfterViewInit } from '@angular/core';
declare var $;
declare var formatCode;

@Component({
    selector: 'app-api-reference',
    templateUrl: './api-reference.component.html',
    styleUrls: ['./api-reference.component.css']
})
export class ApiReferenceComponent implements AfterViewInit {

    ngAfterViewInit() {
        $(".documentation-option-type-click").click(function (event) {
            $(event.target).parents('tr').next().find(".property-content").toggle();
        });

        let codeSpans = document.getElementsByClassName('code');

        for (let i = 0; i < codeSpans.length; i++) {
            codeSpans[i].innerHTML = formatCode(codeSpans[i].innerHTML);
        }
    }
}
