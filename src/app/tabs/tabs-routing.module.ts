import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabPerfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'tabJogos',
        loadChildren: () => import('../jogos/jogos.module').then(m => m.JogosPageModule)
      },
      {
        path: 'tabPartidas',
        loadChildren: () => import('../partidas/partidas.module').then(m => m.PartidasPageModule)
      },
      {
        path: 'tabMarcador',
        loadChildren: () => import('../marcador/marcador.module').then(m => m.MarcadorPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabJogos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabJogos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
