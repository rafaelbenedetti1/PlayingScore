import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then( m => m.JogosPageModule)
  },
  {
    path: 'partidas',
    loadChildren: () => import('./partidas/partidas.module').then( m => m.PartidasPageModule)
  },
  {
    path: 'marcador',
    loadChildren: () => import('./marcador/marcador.module').then( m => m.MarcadorPageModule)
  },  {
    path: 'jogar',
    loadChildren: () => import('./jogar/jogar.module').then( m => m.JogarPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
