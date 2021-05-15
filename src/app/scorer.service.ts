import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScorerService {

  private score = new BehaviorSubject(1000)
  current_score = this.score.asObservable();
  actualscore = this.score.getValue();

  ready = new BehaviorSubject(false)
  readyness = this.ready.asObservable();

  shown = false

  max_score: number = 3500;

  constructor() { }

  changeScore(amount:number){
    if(this.actualscore < 3500){
      var newscore = this.actualscore + amount;
      this.score.next(newscore);
      this.actualscore = newscore;
      if(this.actualscore >= this.max_score && this.shown == false){
        this.ready.next(true);
        this.shown = true;
      }
    }
  }
}
