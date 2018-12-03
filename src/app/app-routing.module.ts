import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { DocsComponent } from './docs/docs.component';
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

const routes: Routes = [{
        path: '', component: HomeComponent
    }, {
        path: 'home', redirectTo: '/'
    }, {
        path: 'demos',
        component: DemosComponent,
        children: [{
            path: 'default-functionality', component: DefaultFunctionalityComponent
        }, {
            path: 'data-editing', component: DataEditingComponent
        }, {
            path: 'data-export', component: DataExportComponent
        }, {
            path: 'refresh-data', component: RefreshDataComponent
        }, {
            path: 'row-details', component: RowDetailsComponent
        }, {
            path: 'nested-grids', component: NestedGridsComponent
        }, {
            path: 'virtual-scrolling', component: VirtualScrollingComponent
        }, {
            path: 'virtual-paging', component: VirtualPagingComponent
        }, {
            path: '', redirectTo: 'default-functionality', pathMatch: 'full'
        }]
    }, {
        path: 'docs',
        component: DocsComponent,
        children: [{
            path: 'getting-started', component: GettingStartedComponent
        }, {
            path: 'fundamentals', component: FundamentalsComponent
        }, {
            path: 'data-binding', component: DataBindingDocsComponent
        }, {
            path: 'sorting', component: SortingComponent
        }, {
            path: 'filtering', component: FilteringComponent
        }, {
            path: 'paging', component: PagingComponent
        }, {
            path: 'grouping', component: GroupingComponent
        }, {
            path: 'editing', component: EditingComponent
        }, {
            path: 'api-reference', component: ApiReferenceComponent
        }, {
            path: '', redirectTo: 'getting-started', pathMatch: 'full'
        }]
    }, {
        path: '**', component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
