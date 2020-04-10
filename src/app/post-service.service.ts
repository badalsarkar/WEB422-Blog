import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogPost} from './BlogPost';



const perPage=6;



@Injectable({
  providedIn: 'root'
})



export class PostServiceService {

  constructor(private http:HttpClient) { }


  //get all posts
  getPosts(page, tag, category): Observable<BlogPost[]>{
      var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
      if(category){
        url=url+"&category="+category;
      }

      if(tag){
        tag=tag.trim();
        if(tag.charAt(0)=="#"){
            tag=tag.slice(1);
            url=url+"&tag="+tag;
        }
        else{
            url=url+"&tag="+tag;
        }
      }

      return this.http.get<BlogPost[]>(url);

  }


    //get post by id
    getPostById(id): Observable<BlogPost>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts/${id}`;
        return this.http.get<BlogPost>(url);
    }



    //get categories
    getCategories(): Observable<any>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/categories`;
        return this.http.get<any>(url);
    }




    getTags(): Observable<string []>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/tags`;
        return this.http.get<string []>(url);
    }



    getAllPosts(): Observable<BlogPost[]>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts?page=1&perPage=Number.MAX_SAFE_INTEGER`;
        return this.http.get<BlogPost[]>(url);
        }

    //post new post
    newPost(data: BlogPost):Observable<any>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts`;
        return this.http.post<any>(url, data);
    }


    //update post by id
    updatePostById(id:String, data:BlogPost):Observable<any>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts/${id}`;
        return this.http.put<any>(url, data);
        }




    //delete post by id
    deletePostById(id:String):Observable<any>{
        var url=`https://guarded-hamlet-87251.herokuapp.com/api/posts/${id}`;
        return this.http.delete<any>(url);
    }




}
