import Character from '../Character';
/* маг */

export default class Magician extends Character {
  constructor(level, type = 'Magician') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
    this.attackRange = 4;
  }
}
