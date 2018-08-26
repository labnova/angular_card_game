import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';

import {ConstantsService} from  '../_services/constants.service';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() data:any;
  @Output() start = new EventEmitter();
  public acesHigh: boolean;
  public states: object;
  public easyMode: boolean;
  public playerName : string;

  constructor(public CONSTANTS:ConstantsService) { }

  ngOnInit() : void { }

  startGame(playerForm: FormGroup) :void {
    if(playerForm.valid) {
      this.start.emit({
        playerName: this.playerName,
        acesHigh: this.acesHigh,
        easyMode: this.easyMode
      });
    } else {
      playerForm.controls.name.markAsTouched();
    }

  }

  toggleAces() : void {
    this.acesHigh = !this.acesHigh;
  }

  toggleMode(): void {
    this.easyMode = !this.easyMode;
  }

  setPlayerName(name: string): void {
    this.playerName=name;
  }

}
