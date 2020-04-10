import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './post/post.component';
import {PostTableComponent} from './post-table/post-table.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {NewPostComponent} from './new-post/new-post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'post', component: PostComponent},
    {path: 'post/:id', component: PostComponent},
    {path: 'admin', component:PostTableComponent },
    {path: 'admin/newPost', component: NewPostComponent},
    {path: 'admin/post/:id', component: EditPostComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
