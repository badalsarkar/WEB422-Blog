import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogPost} from '../BlogPost';
import {PostServiceService} from '../post-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})



export class BlogComponent implements OnInit {
    blogPosts: Array<BlogPost>;
    page:number=1;
    tag:string=null;
    category:string=null;
    querySub:any;



    constructor(private postService:PostServiceService, private route:ActivatedRoute) { 

    }


  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
     if(params['tag']){
         this.tag = params['tag'];
         this.category = null;
     }
     else{
         this.tag = null;
     }

     if(params['category']){
         this.category = params['category'];
         this.tag = null;
     }
     else{
         this.category = null;
     }
     this.getPage(+params['page'] || 1);
    });
  }



  //get all blog posts
  getPage(num){
      this.postService.getPosts(num,this.tag,this.category).subscribe((data)=>{
                            if(data.length>0){
                                this.blogPosts=data;
                                this.page=num;
                            }
                        });

  }


  ngOnDestroy(){
      if(this.querySub) this.querySub.unsubscribe();
  }


}
