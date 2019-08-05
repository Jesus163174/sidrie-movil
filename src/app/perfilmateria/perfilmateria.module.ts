import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerfilmateriaPage } from './perfilmateria.page';

import {PerfilmateriaComponent} from '../componentes/perfilmateria/perfilmateria.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilmateriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [PerfilmateriaComponent],
  declarations: [PerfilmateriaPage,PerfilmateriaComponent]
})
export class PerfilmateriaPageModule {}
