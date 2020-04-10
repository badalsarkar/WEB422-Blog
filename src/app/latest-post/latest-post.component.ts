import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {BlogPost} from '../BlogPost';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.css']
})
export class LatestPostComponent implements OnInit {
    posts:Array<BlogPost>;

    private latestPostService;
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
  this.latestPostService= this.postService.getPosts(1,null,null).subscribe(data=>{
                    if(data.length>3){
                        this.posts=data.slice(0,3);
                    }
                    else{
                        this.posts=data;
                    }
              });
  }



  ngOnDestroy(){
    this.latestPostService.unsubscribe();
  }



}
