import Character from '../Character';
/* демон */

export default class Swordman extends Character {
  constructor(level, type = 'Swordman') {
    super(level, type);
    this.attack = 10;
    this.defence = 40;
    this.distance = 1;
    this.attackRange = 4;
  }
}
