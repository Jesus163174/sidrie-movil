import { Component, OnInit } from '@angular/core';
import {MateriaServicioService} from '../../servicios/materias/materia-servicio.service';
import {trigger,state,style,transition,animate} from '@angular/animations';
  
@Component({
    selector: 'app-listadomaterias',
    templateUrl: './listadomaterias.component.html',
    styleUrls: ['./listadomaterias.component.scss'],
})

export class ListadomateriasComponent implements OnInit {

    private materias:any = [];
    private cuatrimestre:string = null;
    constructor(private materiasServicio: MateriaServicioService) {
        this.obtenerMaterias();
        this.obtenerCuatrimestreActual();
    }
    ngOnInit() {}

    public obtenerMaterias(){
        this.materiasServicio.obtenerMaterias(1).subscribe((result)=>{
            console.log(result);
            this.materias = result;
        },(error)=>{
            console.log(error.message);
        });
    }
    public obtenerCuatrimestreActual(){
        this.cuatrimestre = this.materiasServicio.obterCuatrimestreActual();
    }

}
