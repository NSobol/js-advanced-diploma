import Character from '../Character';
/* лучник */

export default class Bowman extends Character {
  constructor(level, type = 'Bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    this.distance = 2;
    this.attackRange = 2;
  }
}