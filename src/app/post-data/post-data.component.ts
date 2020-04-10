import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogPost} from '../BlogPost';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
    querySub:any;
    post:BlogPost;
    commentName:string;
    commentText:string;

  constructor(private postService:PostServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.querySub = this.route.params.subscribe(params =>{
        this.postService.getPostById(params['id']).subscribe(data=>{
                if(data){
                    this.post=data;
                    this.post.views++;
                }
            });
        this.postService.updatePostById(this.post._id, this.post).subscribe();
   });
  }


  ngOnDestroy(){
      if(this.querySub) this.querySub.unsubscribe();
  }


  //submit event handler
  submitComment(){
    this.post.comments.push({
        author:this.commentName,
        comment: this.commentText,
        date: new Date().toDateString()
        });
    this.postService.updatePostById(this.post._id,this.post).subscribe(data=>{
            this.commentName="";
            this.commentText="";
        });

  }
  

}
