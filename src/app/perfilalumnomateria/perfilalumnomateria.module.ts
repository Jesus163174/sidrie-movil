import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilalumnomateriaPage } from './perfilalumnomateria.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilalumnomateriaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilalumnomateriaPage]
})
export class PerfilalumnomateriaPageModule {}
