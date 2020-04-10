import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories:Array<any>;

    private categoryService;

  constructor(private postService:PostServiceService) { }

  ngOnInit(): void {
  this.categoryService=this.postService.getCategories().subscribe(data=>{
                if(data.length>0){
                    this.categories=data;
                }
            });
            
    
  }


  ngOnDestroy(){
    this.categoryService.unsubscribe();
  }

}
