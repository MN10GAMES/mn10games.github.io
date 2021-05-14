import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScorerService } from '../scorer.service';

@Component({
  selector: 'app-cappsule',
  templateUrl: './cappsule.component.html',
  styleUrls: ['./cappsule.component.css']
})
export class CappsuleComponent implements OnInit {

  score!: number;
  subscription!: Subscription;

  constructor(private scorer: ScorerService) { }

  ngOnInit(): void {
    this.subscription = this.scorer.current_score.subscribe(score => this.score = score)
  }

  Scoring(){
    this.scorer.changeScore(250);
  }

}
