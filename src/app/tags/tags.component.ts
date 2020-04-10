import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
    tags: Array<string>;

    private tagService;

  constructor(private postService:PostServiceService) { }

  ngOnInit(): void {
  this.tagService=this.postService.getTags().subscribe(data=>{
            if(data.length>0){
                this.tags=data;
            }
        });
  }



  ngOnDestryo(){
    this.tagService.unsubscribe();
  }


}
