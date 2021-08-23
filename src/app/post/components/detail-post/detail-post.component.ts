import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from "../../model/post.model";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
  post!: Post;
  suggestPost!: Post[];

  constructor() {
  }

  ngOnInit(): void {
    const {data: {post, suggestPost}} = history.state;
    this.post = post;
    this.suggestPost = suggestPost;
  }
}
