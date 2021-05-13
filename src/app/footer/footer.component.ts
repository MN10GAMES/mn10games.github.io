import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScorerService } from '../scorer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
