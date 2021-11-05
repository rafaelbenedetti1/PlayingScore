import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogar',
  templateUrl: './jogar.page.html',
  styleUrls: ['./jogar.page.scss'],
})
export class JogarPage implements OnInit {

  Jogador: string[] = [];
  Score: number[] = [];
  QtdJogadores: number;

  constructor() {
    this.Jogador[0] = "Pietro";
    this.Jogador[1] = "Lucca";
    this.Score[0] = 0;
    this.Score[1] = 0;
    this.QtdJogadores = 2;
  }

  updateTotalPlayers(value) {
    this.QtdJogadores = value;
  }

  increment(player) {
    this.Score[player]++;
  }

  decrement(player) {
    this.Score[player]--;
  }

  ngOnInit() {
  }

}
