import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'swiperone',
    loadChildren: () => import('./swiperone/swiperone.module').then( m => m.SwiperonePageModule)
  },
  {
    path: 'swipertwo',
    loadChildren: () => import('./swipertwo/swipertwo.module').then( m => m.SwipertwoPageModule)
  },
  {
    path: 'swiperthree',
    loadChildren: () => import('./swiperthree/swiperthree.module').then( m => m.SwiperthreePageModule)
  },
  {
    path: 'swiperfour',
    loadChildren: () => import('./swiperfour/swiperfour.module').then( m => m.SwiperfourPageModule)
  },
  {
    path: 'swiperfive',
    loadChildren: () => import('./swiperfive/swiperfive.module').then( m => m.SwiperfivePageModule)
  },
  {
    path: 'pagination',
    loadChildren: () => import('./pagination/pagination.module').then( m => m.PaginationPageModule)
  },
  {
    path: 'thumbgallery',
    loadChildren: () => import('./thumbgallery/thumbgallery.module').then( m => m.ThumbgalleryPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'testmain',
    loadChildren: () => import('./testmain/testmain.module').then( m => m.TestmainPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
