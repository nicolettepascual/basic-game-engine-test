import Character from './Character';
import { Config, getCharacterDetails } from '../../src/game-engine-implementation/GamePlay';

export default class Hero extends Character {
    experience;
    lifes;

    constructor(level) {
        super(level);
        // When Hero is initiated, regardless of his level, he always starts with 2 lifes and 0 experience;
        this.experience = 0;
        this.lifes = 2;
    }

    bossDefeated() {
        this.lifes += 1;
    }

    heroDefeated() {
        this.lifes -= 1;
        if (this.lifes > 0) {
            this.health = this.maxHealth * 0.7;
            this.isDead = false;
        }
    }

    increaseXp(defeated) {
        const defeatedCharType = getCharacterDetails(defeated);
        if (defeated instanceof Hero) {
            this.experience += defeated.experience / 2;
        } else {
            this.experience += defeatedCharType.experienceGiven * defeated.level;
        }
        this.increaseLevel();
    }

    increaseLevel() {
        if (this.experience >= (Config.hero.experienceToNextLevel * this.level)) {
            this.level += 1;
            this.recalculateSkills();
        }
    }

    /** When Hero advances to the next level, 
     * his maxHealth and hitDamage properties should be recalculated. */
    recalculateSkills() {
        this.maxHealth = Config.hero.maxHealth * this.level;
        this.hitDamage = Config.hero.hitDamage * this.level;
    }
}
