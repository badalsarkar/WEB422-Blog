import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';
import {BlogPost} from '../BlogPost';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
    blogPosts:Array<BlogPost>=[];

  constructor(private postService:PostServiceService, private router:Router) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data)=>{
                            if(data.length>0){
                                this.blogPosts=data;
                            }
                        });

  }


  //click handler
    rowClicked(e,id){
        this.router.navigate(['/admin/post', id]);
  }

}//for class

