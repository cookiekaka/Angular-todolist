import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';
import { TodoComponent } from './todo/todo.component';

// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoxComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
