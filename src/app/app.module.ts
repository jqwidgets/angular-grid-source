import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { DocsComponent } from './docs/docs.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DefaultFunctionalityComponent } from './demos-components/default-functionality/default-functionality.component';
import { DataEditingComponent } from './demos-components/data-editing/data-editing.component';
import { DataExportComponent } from './demos-components/data-export/data-export.component';
import { NestedGridsComponent } from './demos-components/nested-grids/nested-grids.component';
import { RefreshDataComponent } from './demos-components/refresh-data/refresh-data.component';
import { RowDetailsComponent } from './demos-components/row-details/row-details.component';
import { VirtualPagingComponent } from './demos-components/virtual-paging/virtual-paging.component';
import { VirtualScrollingComponent } from './demos-components/virtual-scrolling/virtual-scrolling.component';

import { ApiReferenceComponent } from './docs-components/api-reference/api-reference.component';
import { DataBindingDocsComponent } from './docs-components/data-binding-docs/data-binding-docs.component';
import { EditingComponent } from './docs-components/editing/editing.component';
import { FilteringComponent } from './docs-components/filtering/filtering.component';
import { FundamentalsComponent } from './docs-components/fundamentals/fundamentals.component';
import { GettingStartedComponent } from './docs-components/getting-started/getting-started.component';
import { GroupingComponent } from './docs-components/grouping/grouping.component';
import { SortingComponent } from './docs-components/sorting/sorting.component';
import { PagingComponent } from './docs-components/paging/paging.component';

import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        DemosComponent,
        DocsComponent,
        FooterComponent,
        PageNotFoundComponent,
        DefaultFunctionalityComponent,
        DataEditingComponent,
        DataExportComponent,
        NestedGridsComponent,
        RefreshDataComponent,
        RowDetailsComponent,
        VirtualPagingComponent,
        VirtualScrollingComponent,
        ApiReferenceComponent,
        DataBindingDocsComponent,
        EditingComponent,
        FilteringComponent,
        FundamentalsComponent,
        GettingStartedComponent,
        GroupingComponent,
        SortingComponent,
        PagingComponent,
        jqxGridComponent,
        jqxTabsComponent,
        jqxButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
