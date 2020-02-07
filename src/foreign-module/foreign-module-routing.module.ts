import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForeignModulePage } from './foreign-module.page';
import {Foreignpage1Component} from './foreignpage1/foreignpage1.component';
import {Foreignpage2Component} from './foreignpage2/foreignpage2.component';

const foreignRoutes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(foreignRoutes)],
  exports: [RouterModule],
})
export class ForeignModulePageRoutingModule {}
