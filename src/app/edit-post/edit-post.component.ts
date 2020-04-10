import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {BlogPost} from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
    blogPost:BlogPost;
    tags:String;

  constructor(private postService:PostServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getPostById(this.route.snapshot.params.id).subscribe((data)=>{
                            this.blogPost=data;
                            this.tags=this.blogPost.tags.toString();
                        });

  }

  //handler for form submission
  formSubmit(){
    this.blogPost.tags=this.tags.split(",").map(tag=>tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe(data=>{
        this.router.navigate(['admin']);

    });
  }


  //delete click handler
  deletePost(){
      this.postService.deletePostById(this.blogPost._id).subscribe(data=>{
            this.router.navigate(['admin']);
        });
  }

}

