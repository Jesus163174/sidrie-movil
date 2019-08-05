import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

    private url:string = "http://192.168.0.9:8000/api/v1/";
    constructor(private http: HttpClient) { }
    
    public login(email:string, password:string){
        let endpoint = this.url+"login";
        return this.http.post(endpoint,{email:email,password:password});
    }
    public logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('activo');
    }   
    public getToken(){
        return localStorage.getItem('token');
    }
    public setToken(token){
        localStorage.setItem('token',token);
    }
    public isActive(){
        return localStorage.getItem('activo');
    }
    public setActivate(){
        localStorage.setItem('activo','true');
    }
    public auth(){
        return JSON.parse(localStorage.getItem('user'));
    }
    public saveDataUser(user){
        localStorage.setItem('auth',JSON.stringify(user));
    }

    public showUser(token){
        let endpoint = this.url+"show"
        return this.http.get(endpoint,{
            headers:{
                Authorization:'bearer '+token,
            }
        });
    }
}
