import React from 'react';

import Demon from '../img/01-Asylum-Demon.jpg'
import Taurus from '../img/02-Taurus-Demon.jpg'
import Hellkite from '../img/03-Hellkite-Dragon.jpg'
import Gargoyles from '../img/04-Bell-Gargoyles.jpg'
import Capra from '../img/05-Capra-Demon.jpg'
import Moonlight from '../img/06-Moonlight-Butterfly.jpg'
import Gaping from '../img/07-Gaping-Dragon.jpg'
import Stray from '../img/08-Stray-Demon.jpg'
import Chaos from '../img/09-Chaos-Witch-Quelaag.jpg'
import Great from '../img/10-Great-Grey-Wolf-Sif.jpg'
import Hydra from '../img/28-Hydra.jpg'
import Iron from '../img/11-Iron-Golem.jpg'
import Crossbreed from '../img/12-Crossbreed-Priscilla.jpg'
import Ornstein from '../img/13-Ornstein-and-Smough.jpg'
import Gwyndolin from '../img/14-Dark-Sun-Gwyndolin.jpg'
import Artorias from '../img/25-Artorias-the-Abysswalker.jpg'

function Bosses() {
  return (
    <main className="container">

        <div className="accordion" id="chapters">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                    Asylum Demon
                </button>
              </h2>
              <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                <div className="accordion-body">
                    <p>The very first of all Dark Souls bosses that you will have to face is the Asylum Demon. If you chose the Black Fire Bombs as your starting item, then you can kill the Asylum Demon with just 4 bombs.<br></br>If you didn’t choose the Black Fire Bombs, then you will just have to hack at him slowly until he falls.</p>
                    <img src={Demon} alt="img_pru"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="false" aria-controls="chapter-2">
                Taurus Demon
                </button>
              </h2>
              <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>The Taurus Demon is an optional Dark Souls boss if you selected the Master Key as your starting item.
                    <br></br>
                    Before summoning the Taurus Demon, be sure to clear out the skeleton archers at the top of the tower behind you when you step on the bridge.
                    <br></br>
                    Once the Taurus Demon spawns, run back and climb the tower – drop down and slash him for a nice damage boost. Alternatively, you can get very close to him and hope that he jumps off the bridge by himself.</p>
                    <img src={ Taurus } alt="img_pru"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
                Hellkite Dragon / The Bridge Wyvern (Optional)
                </button>
              </h2>
              <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>Of all optional Dark Souls bosses, the Hellkite Dragon is perhaps one you don’t want to skip. The most important thing you want to do during this battle is cut off his tail, once you’ve done this you will receive the Drake Sword which is an incredibly strong weapon early on in the game that will help you progress much faster. Stand on the bridge and lure him down, then start hacking at his tail.</p>
                    <img src={Hellkite} alt="img_pru"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
                Bell Gargoyles
                </button>
              </h2>
              <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
                <div className="accordion-body">
                    <p>
                    The Bell Gargoyles, yes, there are 2 of them. Once you get the first Bell Gargoyle down to about 50% health, a second one will join the fight. Be sure to take down the first one soon as possible so you can more easily survive the boss battle.
                    <br></br>
                    If you are having trouble beating the Bell Gargoyles, you can use Humanity to become human and summon Solaire before the fight to help you. This will make the fight much easier.
                    <br></br>
                    Once defeated, climb the tower and ring the bell.
                    </p>
                    <img src={ Gargoyles } alt="img_pru"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                Capra Demon (Optional)
                </button>
              </h2>
              <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>The Capra Demon is completely optional, and quite a frustrating boss to fight early on in the game.
              <br></br>
              Once you traverse through the fog you will be greeted with 2 poison dogs, and the boss charging at you. The problem? You are in a tiny room which makes it extremely difficult to run or fight properly.
              <br></br>
              Your best bet is to try to run on the left side and up the stairs. From there you can take care of the poison dogs before focusing on the boss.
              <br></br>
              There is a cheap way to beat the Capra Demon, and that is by throwing a bunch of Dung Pies over the wall before traversing through the fog</p>
                    <img src={ Capra } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-6">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">
                Moonlight Butterfly (Optional)
                </button>
              </h2>
              <div id="chapter-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    The Moonlight Butterfly is one of the easiest Dark Souls bosses to fight. You can become human using Humanity and summon Beatrice and she can shoot the boss for you if you are playing a melee className.
                    <br></br>
                    Once the Moonlight Butterfly lands, just smack it a few times with your weapon of choice to defeat it.
                    </p>
                    <img src={ Moonlight } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-7">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-7" aria-expanded="false" aria-controls="chapter-7">
                Gaping Dragon
                </button>
              </h2>
              <div id="chapter-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    The Gaping Dragon is also optional if you selected the Master Key at the start of the game, however, he is relatively easy to beat and gives you 20,000 souls.
                    <br></br>
                    For this boss, you can summon Solaire and Lautrec (his summoning stone is hidden behind the pillar by the last staircase) which should make this battle easy. Be sure to avoid his deadly grip though, that attack hurts a lot and can catch you by surprise.
                    <br></br>
                    Once killed, you will get the Blighttown Key and if you took out his tail you will get the Dragon King Greataxe as well.
                    </p>
                    <img src={ Gaping } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-8">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-8" aria-expanded="false" aria-controls="chapter-8">
                Stray Demon (Optional)
                </button>
              </h2>
              <div id="chapter-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Of all Dark Souls bosses, the Stray Demon is just a reskin of the Asylum Demon you faced early on in the game. He is basically just a tougher Asylum Demon that you should have no problem killing.
                    <br></br>
                    If you want an easy kill, stay out of his range and throw Dung at him. This should bring him to about 25% HP if you wait long enough. Alternatively, you can use a weapon that causes bleeding such as the Bandit’s Knife for an easy kill.
                    </p>
                    <img src={ Stray } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-9">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-9" aria-expanded="false" aria-controls="chapter-9">
                Chaos Witch Quelaag
                </button>
              </h2>
              <div id="chapter-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>Summon Mildred before this fight to make things a bit easier. The Chaos Witch Quelaag is a fire using spider that you don’t want to take lightly.
                    <br></br>
                    Stay close to her head to more easily avoid her sword attack, just be careful and roll away from her AOE attack when she bends down.
                    <br></br>
                    If Mildred survives the fight, she will claim half of the souls you earn for killing Quelaag</p>
                    <img src={ Chaos } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-10">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-10" aria-expanded="false" aria-controls="chapter-10">
                Great Grey Wolf Sif
                </button>
              </h2>
              <div id="chapter-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Perhaps one of the most recognizable Dark Souls bosses you’ll encounter. A chunky wolf wielding a sword in its mouth.
                    <br></br>
                    Defeating the Great Grey Wolf Sif is essential as you need to collect the Covenant of Artorias for a later stage in the game.
                    <br></br>
                    To reach Sif you must first purchase the Crest of Artorias from the first blacksmith you encounter (Andre of Astora) for 20,000 souls. Alternatively you can reach him by using the ladder at the Hydra mini boss battle.
                    </p>
                    <img src={ Great } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-11">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-11" aria-expanded="false" aria-controls="chapter-11">
                Hydra (Optional)
                </button>
              </h2>
              <div id="chapter-11" className="accordion-collapse collapse" aria-labelledby="heading-11" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    The Hydra boss is a mini-boss and is completely optional. You are bound to encounter the Hydrat at one point in time though throughout your playthrough.
                    <br></br>
                    The Hydra sit below a ladder in Darkroot Basin and will shoot at you from time to time. To defeat the Hydra, you just need to keep avoiding it and wait until it drop’s a head on the ground. Hit the heads with all you got to chop them off.
                    </p>
                    <img src={ Hydra } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-12">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-12" aria-expanded="false" aria-controls="chapter-12">
                Iron Golem
                </button>
              </h2>
              <div id="chapter-12" className="accordion-collapse collapse" aria-labelledby="heading-12" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Before fighting him, use some Gold Pine Resin to add a lightning effect to your weapon. The Iron Golem is weak against lightning and can be taken down pretty easily.
                    <br></br>
                    What makes the Iron Golem one of the easiest bosses in Dark Souls is that if you are in human form, you can summon a companion to help you, and the companion can take down the Iron Golem solo, without your help. You should have no problems defeating this Dark Souls boss.
                    </p>
                    <img src={ Iron } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-13">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-13" aria-expanded="false" aria-controls="chapter-13">
                Crossbreed Priscilla (Optional)
                </button>
              </h2>
              <div id="chapter-13" className="accordion-collapse collapse" aria-labelledby="heading-13" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Priscilla is one of the optional Dark Souls bosses that will only attack you if you attack her first. Chopping off her tail with giving you Priscilla’s Dagger which afflicts bleed damage.
                    <br></br>
                    There are 2 phases to this battle but you must be sure to stay fully healed during phase 1. Phase 2 is considerably easier to do, however, Priscilla will swap between phases more than once if you don’t kill her quick enough.
                    <br></br>
                    If you have fire attacks, use them. Priscilla is weak against fire and will go down pretty quickly. Alternatively, use throwing knives to unstealth her.
                    </p>
                    <img src={ Crossbreed } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-14">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-14" aria-expanded="false" aria-controls="chapter-14">
                Ornstein and Smough
                </button>
              </h2>
              <div id="chapter-14" className="accordion-collapse collapse" aria-labelledby="heading-14" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    These 2 bosses can be incredibly difficult to kill, and depending on who you kill last will determine your reward. Killing Ornstein (the small guy) first is the easier path to take, but killing Smough (the big guy) first will grant you a better reward.
                    <br></br>
                    It is highly recommended you summon Solaire in to this battle as that will help a lot with tanking one enemy.
                    <br></br>
                    Avoid using lightning attacks, as it won’t help at all, however, fire attacks can be very beneficial.
                    </p>
                    <img src={ Ornstein } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-15">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-15" aria-expanded="false" aria-controls="chapter-15">
                Dark Sun Gwyndolin (Optional)
                </button>
              </h2>
              <div id="chapter-15" className="accordion-collapse collapse" aria-labelledby="heading-15" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Gwyndolin is quite a confusing boss to deal with. You will find yourself just running and if you reach him quickly enough, you can do some damage.
                    <br></br>
                    The goal with defeating Gwyndolin is to get close whilst avoiding his attacks, then hitting him as you charge towards him. Rinse and repeat this until he is dead.
                    <br></br>
                    Easy kill: Shoot Gwyndolin with a ranged attack from 2 pillars away whilst avoiding his attacks.
                    </p>
                    <img src={ Gwyndolin } alt="img_pru"></img>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-16">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-16" aria-expanded="false" aria-controls="chapter-16">
                Artorias the Abysswalker
                </button>
              </h2>
              <div id="chapter-16" className="accordion-collapse collapse" aria-labelledby="heading-16" data-bs-parent="#chapters">
              <div className="accordion-body">
                    <p>
                    Artoria the Abysswalker is a melee fighter that is super quick, but easy to dodge. Be sure to be light on your feet as you will need to dodge Artorias’ attacks frequently.
                    <br></br>
                    Use a weapon with a long reach, such as a Halbert to take care of the job. Artorias should not give you too much trouble if you are light-footed.
                    </p>
                    <img src={ Artorias } alt="img_pru"></img>
                </div>
              </div>
            </div>
        </div>

    </main>
  );
}

export default Bosses;
