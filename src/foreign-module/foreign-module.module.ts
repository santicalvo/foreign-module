import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForeignModulePageRoutingModule } from './foreign-module-routing.module';


import {Foreignpage1Component} from './foreignpage1/foreignpage1.component';
import {Foreignpage2Component} from './foreignpage2/foreignpage2.component';
import {ForeignModulePage} from "./foreign-module.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForeignModulePageRoutingModule
  ],
  declarations: [ForeignModulePage, Foreignpage1Component, Foreignpage2Component]
})
export class ForeignModule {}
