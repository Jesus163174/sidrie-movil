import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import {ModalEstudiantesComponent} from '../modal-estudiantes/modal-estudiantes.component';
import {MateriaServicioService} from '../servicios/materias/materia-servicio.service';
@Component({
  selector: 'app-perfilmateria',
  templateUrl: './perfilmateria.page.html',
  styleUrls: ['./perfilmateria.page.scss'],
})
export class PerfilmateriaPage implements OnInit {
    private materia:any = [];
    private fechaactual = Date.now();
    private materia_id:string = null;
    constructor(
        private modal:ModalController,
        private activatedRoute: ActivatedRoute,
        private materiaServicio: MateriaServicioService
    ) {
        this.materia_id = this.activatedRoute.snapshot.paramMap.get('materia');
        this.obtenerMateria(this.materia_id);
    }

    ngOnInit() {
    }

    async mostrarEstudiantesInscritos(){
        const modal = await this.mostrarComponente('inscritos');
        return await modal.present();
    }

    async mostrarEstudiantesOyentes(){
        const modal = await this.mostrarComponente('oyente');
        return await modal.present();
    }

    async mostrarEstudiantesProceso(){
        const modal = await this.mostrarComponente('proceso');
        return await modal.present();
    }
    async mostrarEstudiantesConvalidantes(){
        const modal = await this.mostrarComponente('convalidantes');
        return await modal.present();
    }

    async mostrarComponente(tipoEstudiante){
        return await this.modal.create({
            component: ModalEstudiantesComponent,
            componentProps:{
                'tipoEstudiante':tipoEstudiante,
                'materia':this.materia_id
            }
        });
    }

    public obtenerMateria(materia){
        this.materiaServicio.obtenerMateria(materia).subscribe((result)=>{
            console.log(result);
            this.materia = result;
        },(error)=>{
            console.log(error.message)
        });
    }

}
