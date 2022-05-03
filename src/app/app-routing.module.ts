import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* imports agregados */
import { AboutComponent } from './about/about.component';
import { GalleriaComponent } from './galleria/galleria.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { VideoComponent } from './video/video.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'miembros', component: MiembrosComponent},
  {path: 'video', component: VideoComponent},
  {path: 'galleria', component: GalleriaComponent},


  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'buscador/:nombreh', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
