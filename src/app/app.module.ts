import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFromComponent } from './components/reactive-from/reactive-from.component';

const routes: Route[] = [
  {
    path: '',
    component: TdFormComponent,
  },
  {
    path: 'reactive-component',
    component: ReactiveFromComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TdFormComponent,
    ReactiveFromComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
