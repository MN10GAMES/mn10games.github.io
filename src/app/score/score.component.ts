import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScorerService } from '../scorer.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score!: number;
  subscription!: Subscription;
  subscription2!: Subscription;
  ready!: boolean;

  constructor(private scorer: ScorerService) { 
  }

  max_score!: number;

  ngOnInit(): void {
    this.subscription = this.scorer.current_score.subscribe(score => this.score = score)
    this.subscription2 = this.scorer.readyness.subscribe(ready => this.ready = ready)
    this.max_score = 3500;
  }

  hide(){
    this.ready = false;
  }
}
