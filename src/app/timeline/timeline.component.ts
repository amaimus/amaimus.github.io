import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  title:string = "Timeline"
  events: object = [
    {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quisquam. Blanditiis soluta nihil cumque qui, in illum mollitia. Perspiciatis omnis dolores, aut aliquid ab corporis eum delectus sint, corrupti iusto tenetur alias, facilis quisquam autem harum perferendis quo natus vitae unde quis sit nesciunt. At temporibus delectus quo laudantium voluptate!",
    time: "July 2002",
    title: "Lorem ipsum dolor sit amet"},
    {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quisquam. Blanditiis soluta nihil cumque qui, in illum mollitia. Perspiciatis omnis dolores, aut aliquid ab corporis eum delectus sint, corrupti iusto tenetur alias, facilis quisquam autem harum perferendis quo natus vitae unde quis sit nesciunt. At temporibus delectus quo laudantium voluptate!",
    time: "July 2001",
    title: "Lorem ipsum dolor sit amet"},
    {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quisquam. Blanditiis soluta nihil cumque qui, in illum mollitia. Perspiciatis omnis dolores, aut aliquid ab corporis eum delectus sint, corrupti iusto tenetur alias, facilis quisquam autem harum perferendis quo natus vitae unde quis sit nesciunt. At temporibus delectus quo laudantium voluptate!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quisquam. Blanditiis soluta nihil cumque qui, in illum mollitia. Perspiciatis omnis dolores, aut aliquid ab corporis eum delectus sint, corrupti iusto tenetur alias, facilis quisquam autem harum perferendis quo natus vitae unde quis sit nesciunt. At temporibus delectus quo laudantium voluptate!",
    time: "July 2000",
    title: "Lorem ipsum dolor sit amet"},
    {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quisquam. Blanditiis soluta nihil cumque qui, in illum mollitia. Perspiciatis omnis dolores, aut aliquid ab corporis eum delectus sint, corrupti iusto tenetur alias, facilis quisquam autem harum perferendis quo natus vitae unde quis sit nesciunt. At temporibus delectus quo laudantium voluptate!",
    time: "July 1999",
    title: "Lorem ipsum dolor sit amet"}]
  constructor() { }

  ngOnInit() {
  }

}
