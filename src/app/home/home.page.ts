import { Component } from '@angular/core';
import {AutentificacionService} from '../servicios/usuarios/autentificacion.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private auth:AutentificacionService,private router: Router){
        if(this.auth.isActive() != 'true')
            this.router.navigate(['/login']);

    }



}
