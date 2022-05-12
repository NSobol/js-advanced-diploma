import Character from '../Character';
/* скелет */

export default class Undead extends Character {
  constructor(level, type = 'Undead') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
    this.distance = 4;
    this.attackRange = 1;
  }
}
