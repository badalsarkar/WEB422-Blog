import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostcardComponent } from './postcard/postcard.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { LatestPostComponent } from './latest-post/latest-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent } from './post-data/post-data.component';
import { PagingComponent } from './paging/paging.component';
import { FooterPostComponent } from './footer-post/footer-post.component';
import { PostTableComponent } from './post-table/post-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostcardComponent,
    SearchWidgetComponent,
    LatestPostComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostComponent,
    PostTableComponent,
    EditPostComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
