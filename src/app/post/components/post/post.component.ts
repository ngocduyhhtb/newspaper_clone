import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post.model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  newPosts: Post[] = [];
  loading: boolean = false;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getNewsAboutCovid();
  }

  getNewsAboutCovid(): void {
    this.loading = true;
    this.postService.getNewsAboutCovid().subscribe((res: any) => {
      this.newPosts = res.articles;
      this.loading = false;
    })
  }
}
