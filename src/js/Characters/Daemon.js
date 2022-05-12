import Character from '../Character';
/* демон */

export default class Daemon extends Character {
  constructor(level, type = 'Daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
    this.attackRange = 4;
  }
}