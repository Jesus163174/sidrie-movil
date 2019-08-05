import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../servicios/usuarios/autentificacion.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public user = {};
    constructor(
        private authService:AutentificacionService, 
        private loadingController:LoadingController,
        private router:Router
    ) { 
        if(this.authService.isActive() == 'true')
            this.router.navigate(['/home']); 
    }

    ngOnInit() {
    }

    public login(){
        this.authService.login(this.user['email'],this.user['password']).subscribe((result)=>{
            this.authService.setToken(result['token']);
            this.saveDataUser(result['token']);
            this.authService.setActivate();
            this.presentLoadingWithOptions();
            this.router.navigate(['/home']);
        },(error)=>{
            alert("Email o password incorrecto");
            alert("error: "+error.message)
        });
    }
    async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'circles',
          duration: 1000,
          message: 'Logeado correctamente',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
    }
    public saveDataUser(token){
        this.authService.showUser(token).subscribe((result)=>{
            this.authService.saveDataUser(result);
        },(error)=>{
            console.log(error.message);
        });
    }

}
