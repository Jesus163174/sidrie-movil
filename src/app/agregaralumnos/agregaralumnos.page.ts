import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EstudiantesService} from '../servicios/estudiantes/estudiantes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregaralumnos',
  templateUrl: './agregaralumnos.page.html',
  styleUrls: ['./agregaralumnos.page.scss'],
})
export class AgregaralumnosPage implements OnInit {
    private tipo:string    = null;
    private materia:string = null;
    private alumno = {};
    private buscar = {};
    private encontrado = false;
    private alumnoEncontrado:any =  [];
    constructor(
        private activatedRoute: ActivatedRoute,
        private estudianteS: EstudiantesService,
        private router: Router
    ) {
        this.tipo    = this.activatedRoute.snapshot.paramMap.get('tipoalumno');
        this.materia = this.activatedRoute.snapshot.paramMap.get('materia');
    }

    ngOnInit() {
    }

    public buscarAlumno(){
        console.log(this.buscar);
        this.estudianteS.obtenerEstudiante(this.buscar['matricula']).subscribe((result)=>{
            console.log(result);
            this.encontrado = true;
            this.alumnoEncontrado = result;
        },(error)=>{
            console.log("error: "+error.message);
        });
    }

    public agregarAlumno(){
        this.estudianteS.agregarAlumno(this.alumnoEncontrado.card,this.tipo,this.materia).subscribe((res)=>{
            this.router.navigate([`perfilmateria/${this.materia}`]);
        },(error)=>{
           alert(error.message);
        });
    }

}
