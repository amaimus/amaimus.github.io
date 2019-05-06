import { Component, OnInit } from '@angular/core';
import { EVENTS } from './events.json';
declare var $: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  title: string = "Timeline"
  events: object = EVENTS
  constructor() { }

  ngOnInit() {
    $('.ui.accordion').accordion();
  }

  modal(id){
    $('#' + id).modal('show');
    console.log(id);
  }


}
