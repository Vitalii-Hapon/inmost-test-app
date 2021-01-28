import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {TagsPageComponent} from './pages/tags-page/tags-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    {path: '', redirectTo: '/tags', pathMatch: 'full'},
    {path: 'tags', component: TagsPageComponent},
    {
      path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then((m) => m.AlbumsModule),
    },
    {path: '**', component: NotFoundPageComponent}
  ],
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
})
export class AppRoutingModule {
}
