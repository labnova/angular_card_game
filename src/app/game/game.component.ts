import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../_models/Player';
import {Deck} from '../_models/Deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
    console.log(this.player);
  }

}
