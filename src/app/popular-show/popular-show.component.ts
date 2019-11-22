import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, keyframes } from '@angular/animations';

import { RestuarantsService } from '../services/restuarants.service';
import { RestuarantDetailService } from '../services/restuarant-detail.service';

@Component({
  selector: 'app-popular-show',
  templateUrl: './popular-show.component.html',
  styleUrls: ['./popular-show.component.css'],
  
  animations: [

    // animation triggers go here
    trigger("slideChangeMain", [
      state("previous", style({
        display: 'block',
        left: '-50%',
        top: '40%',
      })),
      state("current", style({
        display: 'block',
        left: '50%',
        top: '10%',
      })),
      state("next", style({
        display: 'block',
        left: '150%',
        top: '40%',
      })),     
      state("other", style({
        display: 'none',
      })),    
      transition("current => *", [
        //query('.main', [animate('1s')])
        animate('0.5s ease-in-out')
      ]),
      transition("* => current", [
        //query('.main', [animate('1s')])
        animate('0.5s ease-in-out')
      ]),
    ])

/*
    trigger('flipSubImage', [
      state("current", style({
        display: 'block',
        transform: 'perspective(400px) rotateY(0deg)',
      })),
      state("next", style({
        transform: 'perspective(400px) rotateY(360deg)',
        display: 'block',
      })),
      state("previous", style({
        transform: 'perspective(400px) rotateY(-360deg)',
        display: 'block',
      })),
      state("other", style({
        display: 'none',
      })),
      transition("* => *", [
         animate('0.5s ease-in-out')
      ])
    ])
*/
  ]
  
  /*
  animations: [
    trigger('slideChange', [
      state("other", style({
        display: 'none',
      })),
      transition('current => next', [
        query('.main', style({left: '50%'})),
        query('.main', animate('1s', style({left: '150%'}))),
      ]),
      transition('current => previous', [
        query('.main', style({left: '50%'})),
        query('.main', animate('1s', style({left: '-50%'}))),
      ]),
      transition('next => current', [
        query('.main', style({left: '150%'})),
        query('.main', animate('1s', style({left: '50%'}))),
      ]),
      transition('previous => current', [
        query('.main', style({left: '-50%'})),
        query('.main', animate('1s', style({left: '50%'}))),
      ]),
    ])
  ]
  */
})
export class PopularShowComponent implements OnInit {

  slidesState: string[] = [];

  currentSlideIndex: number;
  previousSlideIndex: number;
  nextSlideIndex: number;

  restaurants: any[];
  menuItems = [];
  randomPopulars = [0,1,2,3];

  constructor(
    private restaurantsService: RestuarantsService,
    private restuarantDetailService: RestuarantDetailService
  ) { }

  ngOnInit() {
    this.restaurantsService.getRestuarants()
      .subscribe((data: any[]) => {
        console.log(data);
        this.restaurants = data;
        for(let i = 0; i < this.restaurants.length; i++){
          this.slidesState[i] = 'other';
        }

        this.currentSlideIndex = 0;
        this.nextSlideIndex = 1;
        this.previousSlideIndex = this.slidesState.length - 1;
        this.slidesState[this.currentSlideIndex] = 'current';
        this.slidesState[this.nextSlideIndex] = 'next';
        this.slidesState[this.previousSlideIndex] = 'previous';
      });

    this.restuarantDetailService.getMenu()
      .subscribe((data: any[]) => {
        console.log(data);
        for(let menu of data){
          this.menuItems.push(menu);
        }
      });
  }

  generateRandom(){
    for(let i = 0; i < 4; i++){
      let random = Math.floor(Math.random() * 14);
      this.randomPopulars[i] = random;
    }

  }

  showPrevious(){
    this.generateRandom();
    //change next slide index
    this.slidesState[this.nextSlideIndex] = 'other';
    this.slidesState[this.currentSlideIndex] = 'next';
    this.nextSlideIndex = this.currentSlideIndex;

    //change current slide index
    this.slidesState[this.previousSlideIndex] = 'current';
    this.currentSlideIndex = this.previousSlideIndex;

    //change previous slide index
    this.previousSlideIndex -= 1;
    if(this.previousSlideIndex < 0){
      this.previousSlideIndex = this.slidesState.length - 1;
    }
    this.slidesState[this.previousSlideIndex] = 'previous';

    console.log(this.slidesState);
  }

  showNext(){
    this.generateRandom();
    //change previous slide index
    this.slidesState[this.previousSlideIndex] = 'other';
    this.slidesState[this.currentSlideIndex] = 'previous';
    this.previousSlideIndex = this.currentSlideIndex;

    //change current slide index
    this.slidesState[this.nextSlideIndex] = 'current';
    this.currentSlideIndex = this.nextSlideIndex;

    //change next slide index
    this.nextSlideIndex += 1;
    if(this.nextSlideIndex >= this.slidesState.length){
      this.nextSlideIndex = 0;
    }
    this.slidesState[this.nextSlideIndex] = 'next';

    console.log(this.slidesState);
  }

}
