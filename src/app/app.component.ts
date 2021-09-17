import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PostService } from './services/post.service';
import { Posters } from './models/posters';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
  
export class AppComponent implements OnInit{

  posters: Posters[]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private postService: PostService) { }
  
  ngOnInit() {
    
    this.postService.getPosters().then((response: any) => {
      this.posters = response.Search
      console.log(response.Search)
    })
  }
}

