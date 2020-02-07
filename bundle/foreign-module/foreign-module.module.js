import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForeignModulePageRoutingModule } from './foreign-module-routing.module';
import { Foreignpage1Component } from './foreignpage1/foreignpage1.component';
import { Foreignpage2Component } from './foreignpage2/foreignpage2.component';
import { ForeignModulePage } from "./foreign-module.page";
let ForeignModule = class ForeignModule {
};
ForeignModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ForeignModulePageRoutingModule
        ],
        declarations: [ForeignModulePage, Foreignpage1Component, Foreignpage2Component]
    })
], ForeignModule);
export { ForeignModule };
//# sourceMappingURL=foreign-module.module.js.map