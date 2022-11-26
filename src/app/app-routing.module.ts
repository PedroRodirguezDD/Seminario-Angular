import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancionesContactoComponent } from './canciones-contacto/canciones-contacto.component';
import { CancionesHomeComponent } from './canciones-home/canciones-home.component';

const routes: Routes=[
    {
        path:'',
        redirectTo: 'canciones',
        pathMatch: 'full'
    },
    {
        path:'canciones',
        component: CancionesHomeComponent
    },
    {
        path:'contacto',
        component: CancionesContactoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }