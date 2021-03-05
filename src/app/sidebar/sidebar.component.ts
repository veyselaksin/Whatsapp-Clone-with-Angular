import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  conversations=[
    {name:"David", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"James", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Murat", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Sevda", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Helin", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Veysel", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Yusuf", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Macit", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Ayşe", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Eda", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Derya", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Işık", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Eylül", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Hamza", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Murat", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Emre", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Arda", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Macide", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Cemile Nur", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Hamza Nur", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Elif", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Davut", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:false},
    {name:"Avuz", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
    {name:"Selim", time:"8:21 PM", latestMessage:"Good Morning!", latestMessageRead:true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
