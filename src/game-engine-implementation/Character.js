import { getCharacterDetails } from '../../src/game-engine-implementation/GamePlay';
export default class Character {
    maxHealth;
    health;
    level;
    hitDamage;
    isDead;
    type;
    turn; // updates as long as fight is on going; secondCharacter turn should always match firstCharacter's

    constructor(level) {
        this.maxHealth = this.getCharacter().maxHealth * level;
        this.health = this.maxHealth;
        this.level = level;
        this.hitDamage = this.getCharacter().hitDamage * level;
        this.isDead = false;
        this.turn = 0;
    }

    getCharacter() {
        return getCharacterDetails(this);
    }

    attack(character, opponent) {
        character.turn += 1;
        this.takeAHit(opponent, character.hitDamage);
    }

    takeAHit(character, damage) {
        character.health -= damage;
        if (character.health < 0) {
            character.health = 0;
            this.die(character);
        } else if (character.health == 0) {
            this.die(character);
        }
    }

    die(character) {
        character.isDead = true;
    }
}