import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScorerService {

  private score = new BehaviorSubject(1000)
  current_score = this.score.asObservable();
  actualscore = this.score.getValue();

  constructor() { }

  changeScore(){
    var newscore = this.actualscore + 250;
    this.score.next(newscore);
    this.actualscore = newscore;
  }

}
