import Bowman from './Characters/Bowman';
import Daemon from './Characters/Daemon';
import Swordman from './Characters/Swordman';
import Magician from './Characters/Magician';
import Undead from './Characters/Undead';
import Vampire from './Characters/Vampire';
import cursors from './cursors';
import themes from './themes';
import Team from './Team';
import GamePlay from './GamePlay';
import GameState from './GameState';
import { generateTeam } from './generators';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = new GameState();
    this.userTeam = new Team();
    this.compTeam = new Team();
    this.compCharacters = [Daemon, Undead, Vampire];
    this.userCharacters = [Bowman, Swordman, Magician];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes[this.gameState.level]);
    this.userTeam.addAll(generateTeam([Bowman, Swordman], 1, 2));
    this.botTeam.addAll(generateTeam(this.botCharacters, 1, 2));
    this.addsTheTeamToPosition(this.userTeam, this.getUserStartPositions());
    this.addsTheTeamToPosition(this.botTeam, this.getBotStartPositions());
    this.gamePlay.redrawPositions(this.gameState.allPositions);
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));
    GamePlay.showMessage(`Уровень ${this.gameState.level}`);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}