import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-principal', 
    pathMatch: 'full',
  },
  {
    path: 'pagina-principal', 
    loadChildren: () =>
      import('./pagina-principal/pagina-principal.module').then(
        (m) => m.PaginaPrincipalPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
