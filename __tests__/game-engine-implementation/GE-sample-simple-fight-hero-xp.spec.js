const { describe, test, expect } = global;
import GamePlay from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';

describe('GE-sample-simple-fight-hero-xp', function () {

    test('If hero will defeat the enemy and will gain experience', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);
        /** If his opponent was Enemy or Boss he gets the amount of experience points 
        * defined in configuration array, multiplied by the level of the opponent */
        expect(hero.experience).toBe(200);
        expect(hero.health).toBe(140);
        expect(hero.level).toBe(2);

        /** another gameplay with new hero and enemy instances */
        GamePlay.fight(hero, enemy);

        /** When Hero collects enough experience points 
         * he can advance to the next level. */
        expect(hero.experience).toBe(400);
        expect(hero.level).toBe(3);

        /** When Hero advances to the next level, his maxHealth 
         * and hitDamage properties should be recalculated. */
        expect(hero.maxHealth).toBe(300);
        expect(hero.hitDamage).toBe(150);
    })

});
