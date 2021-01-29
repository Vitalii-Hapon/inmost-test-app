import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule, Provider} from '@angular/core';
import {MaterialsModule} from './modules/materials/materials.module';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {TagsPageComponent} from './pages/tags-page/tags-page.component';
import {TagCardComponent} from './components/tag-card/tag-card.component';
import {TagFilterPipe} from './pipes/filter.pipe';
import { HeaderComponent } from './components/header/header.component';
import {HttpInterceptorService} from './interceptors/http-interceptor.service';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorService,
  multi: true
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TagsPageComponent,
    TagCardComponent,
    TagFilterPipe,
    NotFoundPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
})
export class AppModule {
}
