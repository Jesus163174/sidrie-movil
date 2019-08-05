import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {EstudiantesService} from '../servicios/estudiantes/estudiantes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-estudiantes',
  templateUrl: './modal-estudiantes.component.html',
  styleUrls: ['./modal-estudiantes.component.scss'],
})
export class ModalEstudiantesComponent implements OnInit {
    private tipoEstudiante = {
        'oyente':'Estudiantes Oyentes',
        'proceso':'Estudiantes en proceso de Insc.',
        'inscritos':'Estudiantes Inscritos',
        'convalidantes':'Estudiantes Convalidantes'
    }
    private title:string = null;
    private materia:string = null;
    private tipo:string  = null;
    private estudiantes:any = [];
    private contador:number = 0;
    private nuevoEstudiante:string = null;
    constructor( 
        private navParams: NavParams, 
        private modal: ModalController,
        private estudianteS:EstudiantesService,
        private router:Router
    ) { 
        this.tipo     = this.navParams.get('tipoEstudiante')
        this.materia  = this.navParams.get('materia')
        this.title    = this.tipoEstudiante[this.tipo];
        this.obtenerEstudiantes(this.tipo,this.materia);
    }

    ngOnInit() {}

    public obtenerEstudiantes(tipo,materia){
        //this.estudiantes = this.estudianteS.obtenerEstudiantes(tipo,materia);
        this.estudianteS.obtenerEstudiantes(tipo,materia).subscribe((result)=>{
            console.log(result);
            this.estudiantes = result;
            this.contador = Object.keys(this.estudiantes).length;
        },(error)=>{
            console.log(error.message);
        })
        this.contador = Object.keys(this.estudiantes).length;
    }
    public perfilAlumnoMateria(cardalumno){
        this.router.navigate([`/perfilalumnomateria/${cardalumno}/${this.materia}`]);
        this.modal.dismiss({
            'dismissed': true
        });
    }
    public agregarAlumno(){
        this.router.navigate([`agregaralumnos/${this.tipo}/${this.materia}`]);
        this.modal.dismiss({
            'dismissed': true
        });
    }

    dismissModal(){
        this.modal.dismiss({
            'dismissed': true
        });
    }

}
