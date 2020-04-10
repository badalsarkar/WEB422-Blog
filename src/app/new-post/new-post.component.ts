import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';
import {BlogPost} from '../BlogPost';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
    blogPost:BlogPost= new BlogPost();
    tags:String;

  constructor(private postService:PostServiceService, private router:Router) { }

  ngOnInit(): void {
  }


  //form submit method
  formSubmit(){
    this.blogPost.tags=this.tags.split(",").map(tag=>tag.trim());
    this.blogPost.isPrivate=false;
    this.blogPost.postDate=new Date().toDateString();
    this.blogPost.postedBy="WEB422 Student";
    this.blogPost.views=0;
    this.postService.newPost(this.blogPost).subscribe(data=>{
            this.router.navigate(['admin']);
        });


  }

}
