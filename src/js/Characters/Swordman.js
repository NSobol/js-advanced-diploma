import Character from '../Character';
/* мечник */

export default class Swordman extends Character {
  constructor(level, type = 'Swordman') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.distance = 4;
    this.attackRange = 1;
  }
}