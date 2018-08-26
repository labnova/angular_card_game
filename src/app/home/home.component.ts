import { Component, OnInit } from '@angular/core';
import {Deck} from '../_models/Deck';
import { Player } from '../_models/player';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'js-blackjack';
  public gameStarted=false;
  public gameEnded=false;
  public players = [];
  public viewFeedbackForm = false;


  ngOnInit() {

    this.players.push(new Player('Dealer'));


  }

  startGame(event) {
   this.gameStarted=true;
   this.gameEnded=false;
   this.players.push(new Player(event.playerName));

   const deck = new Deck(false);
   deck.shuffle();
   deck.deal(this.players, 2);
  }

  endGame() {
    this.gameEnded = true;
  }

  showFeedback() {
    this.viewFeedbackForm=true;
  }

  hideFeedbackForm() {
    this.viewFeedbackForm = false;
  }
}
