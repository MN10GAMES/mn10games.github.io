import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScorerService } from '../scorer.service';

@Component({
  selector: 'app-fkm',
  templateUrl: './fkm.component.html',
  styleUrls: ['./fkm.component.css']
})
export class FkmComponent implements OnInit {

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
