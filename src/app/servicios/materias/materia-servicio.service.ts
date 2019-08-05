import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {AutentificacionService} from '../../servicios/usuarios/autentificacion.service';
@Injectable({
  providedIn: 'root'
})

export class MateriaServicioService {
    private materias = [];
    private perfilAM = [];
    private url:string = "http://192.168.0.9:8000/api/v1/";
    constructor(private http:HttpClient,private auth:AutentificacionService) { 
        
    }
    public obterCuatrimestreActual(){
        return "Cuatrimestre Mayo - Agosto 2019";
    }
    public obtenerMaterias(usuario_id){
        let user = 1;
        let endpoint = this.url+"teacher/"+user;
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+this.auth.getToken()
            }
        });
    }
    public obtenerMateria(materia){
        let endpoint = this.url+"classes/"+materia+"/data";
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+this.auth.getToken()
            }
        });
    }
    public perfilMateriaAlumno(materia,alumno){
        let endpoint = this.url+"students/"+alumno;
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+this.auth.getToken()
            }
        });
    }
}
