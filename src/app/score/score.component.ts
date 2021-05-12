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

  constructor(private scorer: ScorerService) { 
  }

  max_score!: number;

  ngOnInit(): void {
    this.subscription = this.scorer.current_score.subscribe(score => this.score = score)
    this.max_score = 3500;
  }

}
