import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {AutentificacionService} from '../../servicios/usuarios/autentificacion.service';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
    private estudiantes = [];
    private url:string="http://192.168.0.9:8000/api/v1/";
    constructor(
        private http: HttpClient,
        private auth:AutentificacionService
    ) { }

    public obtenerEstudiantes(tipo,materia){
        let endpoint = this.url+"classes/"+materia+"/"+tipo+"/students";
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+this.auth.getToken(),
            }
        });
    }
    public agregarAlumno(matricula,estatus,materia){
        let endpoint = this.url+"studentclass";
        return this.http.post(endpoint,{card_id:matricula,status:estatus,class_id:materia},{
            headers:{
                Authorization:'bearer '+this.auth.getToken(),
            }
        })
    }
    public  obtenerEstudiante(matricula){
        let endpoint = this.url+"students/"+matricula;
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+this.auth.getToken(),
            }
        })
    }
}
