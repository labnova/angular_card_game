import { Component, OnInit } from '@angular/core';
import {Player} from '../_models/Player';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {
  public dealer : Player;

  constructor() { }

  ngOnInit() {
  }

}
