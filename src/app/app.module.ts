import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulmaComponent } from './components/bulma/bulma.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { Globals} from './model/Global';
import { BoardService } from './services/board.service';
import { ParentViewComponent } from './components/_sub/parent-view/parent-view.component';
import { ChildViewComponent } from './components/_sub/child-view/child-view.component';
import { SiblingViewComponent } from './components/_sub/sibling-view/sibling-view.component';
//import { RangePipe} from './model/DataUtility';

@NgModule({
  declarations: [
    AppComponent,
    BulmaComponent,
    SidebarComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    ContactComponent,
    AboutusComponent,
    TopbarComponent,
    ParentViewComponent,
    ChildViewComponent,
    SiblingViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [Globals, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
