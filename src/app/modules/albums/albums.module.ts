import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import {RouterModule, Routes} from '@angular/router';
import {FavoritesPageComponent} from './pages/favorites-page/favorites-page.component';
import {AlbumsPageComponent} from './pages/albums-page/albums-page.component';

const routes: Routes = [
  {path: 'favorites', component: FavoritesPageComponent},
  {path: ':name', component: AlbumsPageComponent},
];

@NgModule({
  declarations: [AlbumCardComponent, AlbumsPageComponent, FavoritesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AlbumsModule { }
