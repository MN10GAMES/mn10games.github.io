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
  show: boolean = false;
  subscription2!: Subscription;
  ready!: boolean;

  constructor(private scorer: ScorerService) { }

  ngOnInit(): void {
    this.subscription = this.scorer.current_score.subscribe(score => this.score = score)
    this.subscription2 = this.scorer.readyness.subscribe(ready => this.ready = ready)
  }

  Scoring(){
    this.scorer.changeScore(250);
  }

  ScoringShowing(){
    this.show = true;
    this.scorer.changeScore(250);
  }

  Hide1(){
    this.show = false;
  }

  Hide2(){
    this.ready = false;
  }

}
