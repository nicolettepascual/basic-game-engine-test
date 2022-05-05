import Hero from './Hero';
import Enemy from './Enemy';
import Boss from './Boss';

export const getCharacterDetails = (character) => {
    if (character instanceof Hero) {
        return Config.hero;
    } else if (character instanceof Boss) {
        return Config.boss;
    } else if (character instanceof Enemy) {
        return Config.enemy;
    }
}

export const Config = {
    hero: {
        maxHealth: 100,
        hitDamage: 50,
        experienceToNextLevel: 150
    },
    enemy: {
        maxHealth: 30,
        hitDamage: 15,
        experienceGiven: 50
    },
    boss: {
        maxHealth: 130,
        hitDamage: 70,
        experienceGiven: 100
    }
}

export default class GamePlay {
    static fight(firstCharacter, secondCharacter) {
        // Fight is executed only if one of the characters is Hero. Otherwise nothing happens.
        if (!(firstCharacter instanceof Hero) && !(secondCharacter instanceof Hero)) {
            return;
        } else {
            firstCharacter.attack(firstCharacter, secondCharacter);
            // as long as one of the characters is alive
            while (!firstCharacter.isDead && !secondCharacter.isDead) {
                if (secondCharacter.turn < firstCharacter.turn) {
                    // let 2nd character attack
                    secondCharacter.attack(secondCharacter, firstCharacter);
                } else {
                    firstCharacter.attack(firstCharacter, secondCharacter);
                }
            }
            const winner = firstCharacter.isDead ? secondCharacter : firstCharacter;
            const loser = firstCharacter.isDead ? firstCharacter : secondCharacter;
            this.gainExperience(winner, loser)

            if (loser instanceof Hero && loser.lifes > 0) {
                this.fight(firstCharacter, secondCharacter);
            }

        }
    }

    static gainExperience(winner, loser) {
        if (winner instanceof Hero && loser instanceof Boss) {
            winner.bossDefeated();
        }

        if (winner instanceof Hero) {
            winner.increaseXp(loser);
        }

        if (loser instanceof Hero) {
            loser.heroDefeated();
        }
    }
}
