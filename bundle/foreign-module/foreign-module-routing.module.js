import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForeignModulePage } from './foreign-module.page';
import { Foreignpage1Component } from './foreignpage1/foreignpage1.component';
import { Foreignpage2Component } from './foreignpage2/foreignpage2.component';
const foreignRoutes = [
    {
        path: '',
        component: ForeignModulePage
    },
    {
        path: 'foreignpage1',
        component: Foreignpage1Component
    },
    {
        path: 'foreignpage2',
        component: Foreignpage2Component
    }
];
let ForeignModulePageRoutingModule = class ForeignModulePageRoutingModule {
};
ForeignModulePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(foreignRoutes)],
        exports: [RouterModule],
    })
], ForeignModulePageRoutingModule);
export { ForeignModulePageRoutingModule };
//# sourceMappingURL=foreign-module-routing.module.js.map