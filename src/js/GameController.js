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
    this.botTeam = new Team();
    this.botCharacters = [Daemon, Undead, Vampire];
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
    if (this.gameState.level === 5 || this.userTeam.members.size === 0) {
      return;
    }

    // Реализация атаки
    if (this.gameState.selected !== null && this.getChar(index) && this.isBotChar(index)) {
      if (this.isAttack(index)) {
        this.getAttack(index, this.gameState.selected);
      }
    }

    // перемещение персонажа игрока
    if (this.gameState.selected !== null && this.isMoving(index) && !this.getChar(index)) {
      if (this.gameState.isUsersTurn) {
        this.getUsersTurn(index);
      }
    }

    // Если не валидный ход, то показываем сообщение об ошибке
    if (this.gameState.selected !== null && !this.isMoving(index) && !this.isAttack(index)) {
      if (this.gameState.isUsersTurn && !this.getChar(index)) {
        GamePlay.showError('Недопустимый ход');
      }
    }

    // Если ячейка пустая то при клике на неё return
    if (!this.getChar(index)) {
      return;
    }

    // Если клик на бота, то показываем сообщение об ошибке
    if (this.getChar(index) && this.isBotChar(index) && !this.isAttack(index)) {
      GamePlay.showError('Это не ваш персонаж');
    }

    // Если клик на персонажа игрока, то выделяем клетку желтым
    if (this.getChar(index) && this.isUserChar(index)) {
      this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-green'));
      this.gamePlay.cells.forEach((elem) => elem.classList.remove('selected-yellow'));
      this.gamePlay.selectCell(index);
      this.gameState.selected = index;
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    // Если в ячейке персонаж игрока, то при наведении на ячейку курсор = pointer
    if (this.getChar(index) && this.isUserChar(index)) {
      this.gamePlay.setCursor(cursors.pointer);
    }
    // Если валидный диапазон перемещения, то при наведении выделяем ячейку зелёным
    if (this.gameState.selected !== null && !this.getChar(index) && this.isMoving(index)) {
      this.gamePlay.setCursor(cursors.pointer);
      this.gamePlay.selectCell(index, 'green');
    }
    // При наведении на персонажа показываем инфо
    if (this.getChar(index)) {
      const char = this.getChar(index).character;
      const message = `\u{1F396}${char.level}\u{2694}${char.attack}\u{1F6E1}${char.defence}\u{2764}${char.health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
    // Если валидный диапазон атаки, то при наведении выделяем ячейку красным
    if (this.gameState.selected !== null && this.getChar(index) && !this.isUserChar(index)) {
      if (this.isAttack(index)) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.selectCell(index, 'red');
      }
    }
    // Если не валидные диапазоны атаки и перемещения и бот, то при наведении курсор = notallowed
    if (this.gameState.selected !== null && !this.isAttack(index) && !this.isMoving(index)) {
      if (!this.isUserChar(index)) {
        this.gamePlay.setCursor(cursors.notallowed);
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}