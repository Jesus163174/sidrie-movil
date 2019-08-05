import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MateriaServicioService} from '../servicios/materias/materia-servicio.service';
@Component({
  selector: 'app-perfilalumnomateria',
  templateUrl: './perfilalumnomateria.page.html',
  styleUrls: ['./perfilalumnomateria.page.scss'],
})
export class PerfilalumnomateriaPage implements OnInit {
    private card:string = null;
    private materia:string = null;
    private datosAlumnoMateria:any = [];
    private datosMateria:any = [];
    private fechaactual = Date.now();
    constructor(private activatedRoute: ActivatedRoute, private materiaS: MateriaServicioService) {
        this.card = this.activatedRoute.snapshot.paramMap.get('card');
        this.materia = this.activatedRoute.snapshot.paramMap.get('materia');
        this.perfilAlumnoMateria(this.materia,this.card);
        this.datosMatter(this.materia);
    }

    ngOnInit() {
        
    }

    private perfilAlumnoMateria(materia,card){
        this.materiaS.perfilMateriaAlumno(materia,card).subscribe((result)=>{
            this.datosAlumnoMateria = result;
        },(error)=>{   
            console.log(error.message)
        });
        
        console.log(this.datosAlumnoMateria)
    }

    private datosMatter(materia){
        this.materiaS.obtenerMateria(materia).subscribe((result)=>{
            this.datosMateria = result;
        },(error)=>{
            console.log(error.message); 
        });
    }


}
