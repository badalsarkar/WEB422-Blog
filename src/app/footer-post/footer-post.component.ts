import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../BlogPost';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-footer-post',
  templateUrl: './footer-post.component.html',
  styleUrls: ['./footer-post.component.css']
})



export class FooterPostComponent implements OnInit {
  posts:Array<BlogPost>;

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
      this.postService.getPosts(1,null,null).subscribe(data=>{
                    if(data.length>3){
                        this.posts=data.slice(0,3);
                    }
                    else{
                        this.posts=data;
                    }
              });
  }

}




