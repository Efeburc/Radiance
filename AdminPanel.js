import React, { useState } from 'react';
import './ShinyShowcase.css';

// List of all shiny gif filenames (auto-generated, update if new gifs are added)
const SHINY_GIFS = [
  "abomasnow-f.gif","abomasnow-mega.gif","abomasnow.gif","abra.gif","absol-mega.gif","absol.gif","accelgor.gif","aegislash-blade.gif","aegislash.gif","aerodactyl.gif","aggron.gif","aipom-f.gif","aipom.gif","alakazam-f.gif","alakazam-mega.gif","alakazam.gif","alcremie-caramel.gif","alcremie-caramelswirl.gif","alcremie-lemon.gif","alcremie-lemoncream.gif","alcremie-matcha.gif","alcremie-matchacream.gif","alcremie-mint.gif","alcremie-mintcream.gif","alcremie-rainbow.gif","alcremie-rainbowswirl.gif","alcremie-rubycream.gif","alcremie-rubyswirl.gif","alcremie-salted.gif","alcremie-saltedcream.gif","alcremie.gif","alomomola.gif","altaria.gif","amaura.gif","ambipom-f.gif","ambipom.gif","amoonguss.gif","ampharos-mega.gif","ampharos.gif","anorith.gif","applin.gif","araquanid.gif","arbok.gif","arcanine.gif","arceus-bug.gif","arceus-dark.gif","arceus-dragon.gif","arceus-electric.gif","arceus-fairy.gif","arceus-fighting.gif","arceus-fire.gif","arceus-flying.gif","arceus-ghost.gif","arceus-grass.gif","arceus-ground.gif","arceus-ice.gif","arceus-normal.gif","arceus-poison.gif","arceus-psychic.gif","arceus-rock.gif","arceus-steel.gif","arceus-water.gif","arceus.gif","archen.gif","archeops.gif","arctibax.gif","arctovish.gif","ariados.gif","armaldo.gif","aron.gif","arrokuda.gif","articuno-galar.gif","articuno.gif","audino.gif","aurumoth.gif","avalugg.gif","axew.gif","azelf.gif","azumarill.gif","azurill.gif","bagon.gif","baltoy.gif","banette-mega.gif","banette.gif","barboach.gif","barraskewda.gif","basculegion-f.gif","basculegion.gif","basculin-bluestriped.gif","basculin-whitestriped.gif","basculin.gif","bastiodon.gif","bayleef.gif","beartic.gif","beautifly-f.gif","beautifly.gif","beedrill-mega.gif","beedrill.gif","beheeyem.gif","beldum.gif","bellossom.gif","bellsprout.gif","bergmite.gif","bewear.gif","bibarel-f.gif","bibarel.gif","bidoof-f.gif","bidoof.gif","binacle.gif","bisharp.gif","blacephalon.gif","blastoise.gif","blaziken-f.gif","blaziken-mega.gif","blaziken.gif","blissey.gif","blitzle.gif","boldore.gif","bonsly.gif","bouffalant.gif","bounsweet.gif","braixen.gif","braviary.gif","breloom.gif","brionne.gif","bronzong.gif","bronzor.gif","bruxish.gif","budew.gif","buizel-f.gif","buizel.gif","bulbasaur.gif","buneary.gif","burmy-sandy.gif","burmy-trash.gif","burmy.gif","butterfree-f.gif","butterfree.gif","buzzwole.gif","cacnea.gif","cacturne-f.gif","cacturne.gif","calyrex-ice.gif","calyrex.gif","camerupt-f.gif","camerupt.gif","carbink.gif","carkoal.gif","carnivine.gif","carracosta.gif","carvanha.gif","cascoon.gif","castform-rainy.gif","castform-snowy.gif","castform-sunny.gif","castform.gif","caterpie.gif","cawmodore.gif","celebi.gif","celesteela.gif","chandelure.gif","chansey.gif","charizard-megax.gif","charizard.gif","charjabug.gif","charmander.gif","charmeleon.gif","chatot.gif","cherrim-sunshine.gif","cherrim.gif","cherubi.gif","chewtle.gif","chienpao.gif","chikorita.gif","chimchar.gif","chimecho.gif","chinchou.gif","chingling.gif","chiyu.gif","cinccino.gif","cinderace-gmax.gif","clamperl.gif","clauncher.gif","clawitzer.gif","claydol.gif","clefable.gif","clefairy.gif","cleffa.gif","clobbopus.gif","clodsire.gif","cloyster.gif","coalossal-gmax.gif","coalossal.gif","cobalion.gif","cofagrigus.gif","colossoil-f.gif","colossoil.gif","combee-f.gif","combee.gif","combusken-f.gif","combusken.gif","comfey.gif","conkeldurr.gif","corphish.gif","corsola-galar.gif","corsola.gif","corviknight.gif","corvisquire.gif","cosmoem.gif","cosmog.gif","cottonee.gif","crabominable.gif","crabrawler.gif","cradily.gif","cranidos.gif","crawdaunt.gif","cresselia.gif","croagunk-f.gif","croagunk.gif","crobat.gif","croconaw.gif","crustle.gif","cryogonal.gif","cubchoo.gif","cubone.gif","cufant.gif","cursola.gif","cutiefly.gif","cyndaquil.gif","darkrai.gif","darmanitan-galarzen.gif","darmanitan-zen.gif","darmanitan.gif","darumaka.gif","dedenne.gif","deerling-autumn.gif","deerling-summer.gif","deerling-winter.gif","deerling.gif","deino.gif","delcatty.gif","delibird.gif","deoxys-attack.gif","deoxys-defense.gif","deoxys-speed.gif","deoxys.gif","dewgong.gif","dewott.gif","dewpider.gif","dhelmise.gif","dialga-origin.gif","dialga.gif","diancie.gif","diglett-alola.gif","diglett.gif","ditto.gif","dodrio-f.gif","dodrio.gif","doduo-f.gif","doduo.gif","donphan-f.gif","donphan.gif","dracovish.gif","dracozolt.gif","dragalge.gif","dragapult.gif","dragonair.gif","dragonite.gif","drakloak.gif","drampa.gif","drapion.gif","dratini.gif","drednaw-gmax.gif","drednaw.gif","dreepy.gif","drifblim.gif","drifloon.gif","drilbur.gif","drizzile.gif","drowzee.gif","druddigon.gif","dubwool.gif","ducklett.gif","dugtrio-alola.gif","dugtrio.gif","dunsparce.gif","duosion.gif","duraludon.gif","durant.gif","dusclops.gif","dusknoir.gif","duskull.gif","dustox-f.gif","dustox.gif","dwebble.gif","eelektrik.gif","eelektross.gif","eevee-gmax.gif","eevee.gif","eiscue-noice.gif","eiscue.gif","ekans.gif","eldegoss.gif","electabuzz.gif","electivire.gif","electrike.gif","electrode.gif","elekid.gif","elgyem.gif","emboar.gif","emolga.gif","empoleon.gif","entei.gif","escavalier.gif","espeon.gif","eternatus.gif","excadrill.gif","exeggcute.gif","exeggutor-alola.gif","exeggutor.gif","exploud.gif","farfetchd-galar.gif","farfetchd.gif","fearow.gif","feebas.gif","fennekin.gif","feraligatr.gif","ferroseed.gif","ferrothorn.gif","finneon-f.gif","finneon.gif","flaaffy.gif","flabebe-blue.gif","flabebe-orange.gif","flabebe-white.gif","flabebe-yellow.gif","flabebe.gif","flareon.gif","fletchinder.gif","fletchling.gif","floatzel-f.gif","floatzel.gif","floette.gif","florges.gif","fluttermane.gif","flygon.gif","fomantis.gif","foongus.gif","forretress.gif","fraxure.gif","frigibax.gif","frillish-f.gif","frillish.gif","froakie.gif","froslass.gif","frosmoth.gif","furret.gif","gabite-f.gif","gabite.gif","gallade.gif","galvantula.gif","garbodor-gmax.gif","garbodor.gif","garchomp-f.gif","garchomp-mega.gif","garchomp.gif","gardevoir-mega.gif","gardevoir.gif","gastly.gif","gastrodon-east.gif","gastrodon.gif","genesect-burn.gif","genesect-chill.gif","genesect-douse.gif","genesect-shock.gif","genesect.gif","gengar.gif","geodude-alola.gif","geodude.gif","gholdengo.gif","gible-f.gif","gible.gif","gigalith.gif","gimmighoul.gif","girafarig-f.gif","girafarig.gif","giratina-origin.gif","giratina.gif","glaceon.gif","glalie-mega.gif","glalie.gif","glameow.gif","glastrier.gif","gligar-f.gif","gligar.gif","glimmet.gif","gliscor.gif","gloom-f.gif","gloom.gif","golbat-f.gif","golbat.gif","goldeen-f.gif","goldeen.gif","golduck.gif","golem-alola.gif","golem.gif","golett.gif","golurk.gif","goodra-hisui.gif","goodra.gif","goomy.gif","gorebyss.gif","gothita.gif","gothitelle.gif","gothorita.gif","gougingfire.gif","granbull.gif","graveler-alola.gif","graveler.gif","greattusk.gif","greninja.gif","grimer-alola.gif","grimer.gif","grimmsnarl.gif","grookey.gif","grotle.gif","groudon-primal.gif","groudon.gif","grovyle.gif","growlithe.gif","grubbin.gif","grumpig.gif","gulpin-f.gif","gulpin.gif","gumshoos.gif","gurdurr.gif","gyarados-f.gif","gyarados.gif","hakamoo.gif","happiny.gif","hariyama.gif","hatenna.gif","hatterene-gmax.gif","hatterene.gif","haunter.gif","haxorus.gif","heatmor.gif","heatran.gif","helioptile.gif","heracross-f.gif","heracross.gif","herdier.gif","hippopotas-f.gif","hippopotas.gif","hippowdon-f.gif","hippowdon.gif","hitmonchan.gif","hitmonlee.gif","hitmontop.gif","honchkrow.gif","honedge.gif","hooh.gif","hoopa-unbound.gif","hoopa.gif","hoothoot.gif","hoppip.gif","horsea.gif","houndoom-f.gif","houndoom.gif","houndour.gif","huntail.gif","hydrapple.gif","hydreigon.gif","hypno-f.gif","hypno.gif","igglybuff.gif","illumise.gif","impidimp.gif","incineroar.gif","indeedee-f.gif","indeedee.gif","infernape.gif","inkay.gif","inteleon.gif","ironhands.gif","ironmoth.gif","ironthorns.gif","ironvaliant.gif","ivysaur.gif","jangmoo.gif","jellicent-f.gif","jellicent.gif","jigglypuff.gif","jirachi.gif","jolteon.gif","joltik.gif","jumpluff.gif","jynx.gif","kabuto.gif","kabutops.gif","kadabra-f.gif","kadabra.gif","kakuna.gif","kangaskhan.gif","karrablast.gif","kartana.gif","kecleon.gif","keldeo-resolute.gif","keldeo.gif","kingdra.gif","kingler.gif","kirlia.gif","klang.gif","klefki-front.gif","klefki.gif","klink.gif","klinklang.gif","koffing.gif","komala.gif","kommoo.gif","krabby.gif","kricketot-f.gif","kricketot.gif","kricketune-f.gif","kricketune.gif","krokorok.gif","krookodile.gif","kyogre-primal.gif","kyogre.gif","kyurem-black.gif","kyurem-white.gif","kyurem.gif","lairon.gif","lampent.gif","landorus-therian.gif","landorus.gif","lanturn.gif","lapras.gif","larvesta.gif","larvitar.gif","latias-mega.gif","latias.gif","latios-mega.gif","latios.gif","leafeon.gif","leavanny.gif","ledian-f.gif","ledian.gif","ledyba-f.gif","ledyba.gif","lickilicky.gif","lickitung.gif","liepard.gif","lileep.gif","lilligant-hisui.gif","lilligant.gif","lillipup.gif","linoone-galar.gif","linoone.gif","litleo.gif","litten.gif","litwick.gif","lombre.gif","lopunny.gif","lotad.gif","loudred.gif","lucario-mega.gif","lucario.gif","ludicolo-f.gif","ludicolo.gif","lugia.gif","lumineon-f.gif","lumineon.gif","lunala.gif","lunatone.gif","lurantis.gif","luvdisc.gif","luxio-f.gif","luxio.gif","luxray-f.gif","luxray.gif","lycanroc-dusk.gif","lycanroc-midnight.gif","lycanroc.gif","machamp.gif","machoke.gif","machop.gif","magby.gif","magcargo.gif","magearna-original.gif","magearna.gif","magikarp-f.gif","magikarp.gif","magmar.gif","magmortar.gif","magnemite.gif","magneton.gif","magnezone.gif","makuhita.gif","malaconda.gif","malamar.gif","mamoswine-f.gif","mamoswine.gif","manaphy.gif","mandibuzz.gif","manectric-mega.gif","manectric.gif","mankey.gif","mantine.gif","mantyke.gif","maractus.gif","mareep.gif","marill.gif","marowak-alola.gif","marowak.gif","marshadow.gif","marshtomp.gif","masquerain.gif","maushold-four.gif","maushold.gif","mawile-mega.gif","mawile.gif","medicham-f.gif","medicham-mega.gif","medicham.gif","meditite-f.gif","meditite.gif","meganium-f.gif","meganium.gif","melmetal.gif","meloetta-pirouette.gif","meloetta.gif","meltan.gif","meowth-alola.gif","meowth-galar.gif","meowth-gmax.gif","meowth.gif","mesprit.gif","metagross.gif","metang.gif","metapod.gif","mew.gif","mewtwo-mega-x.gif","mewtwo-mega-y.gif","mewtwo-megax.gif","mewtwo-megay.gif","mewtwo.gif","mienfoo.gif","mienshao.gif","mightyena.gif","milcery.gif","milotic-f.gif","milotic.gif","miltank.gif","mimejr.gif","mimikyu-busted.gif","mimikyu.gif","minccino.gif","minior-blue.gif","minior-green.gif","minior-indigo.gif","minior-meteor.gif","minior-orange.gif","minior-violet.gif","minior-yellow.gif","minior.gif","minun.gif","miraidon.gif","misdreavus.gif","mismagius.gif","mollux.gif","moltres.gif","monferno.gif","morelull.gif","morpeko-hangry.gif","morpeko.gif","mothim.gif","mrmime.gif","mrrime.gif","mudbray.gif","mudkip.gif","mudsdale.gif","muk-alola.gif","muk.gif","munchlax.gif","munna.gif","murkrow-f.gif","murkrow.gif","musharna.gif","nacli.gif","naganadel.gif","natu.gif","necrozma-dawnwings.gif","necrozma-duskmane.gif","necrozma-ultra.gif","necrozma.gif","necturna.gif","nidoking.gif","nidoqueen.gif","nidoranf.gif","nidoranm.gif","nidorina.gif","nidorino.gif","nihilego.gif","nincada.gif","ninetales-alola.gif","ninetales.gif","ninjask.gif","noctowl.gif","noibat.gif","nosepass.gif","numel-f.gif","numel.gif","nuzleaf-f.gif","nuzleaf.gif","obstagoon.gif","octillery-f.gif","octillery.gif","oddish.gif","omanyte.gif","omastar.gif","onix.gif","orbeetle-gmax.gif","oricorio-pau.gif","oricorio-pompom.gif","oricorio-sensu.gif","oshawott.gif","overqwil.gif","pachirisu-f.gif","pachirisu.gif","pajantom.gif","palkia.gif","palossand.gif","palpitoad.gif","pancham.gif","pangoro.gif","panpour.gif","pansage.gif","pansear.gif","paras.gif","parasect.gif","patrat.gif","pawniard.gif","pelipper.gif","perrserker.gif","persian-alola.gif","persian.gif","petilil.gif","phanpy.gif","phantump.gif","pheromosa.gif","phione.gif","pichu.gif","pidgeot.gif","pidgeotto.gif","pidgey.gif","pidove.gif","pignite.gif","pikachu-alola.gif","pikachu-f.gif","pikachu-hoenn.gif","pikachu-kalos.gif","pikachu-original.gif","pikachu-partner.gif","pikachu-sinnoh.gif","pikachu-starter-f.gif","pikachu-starter.gif","pikachu-unova.gif","pikachu-world.gif","pikachu.gif","pikipek.gif","piloswine-f.gif","piloswine.gif","pincurchin.gif","pineco.gif","pinsir.gif","piplup.gif","plasmanta.gif","plusle.gif","pokestarblackbelt.gif","pokestarblackdoor.gif","pokestarbrycenman.gif","pokestarf00.gif","pokestarf002.gif","pokestargiant.gif","pokestarhumanoid.gif","pokestarmonster.gif","pokestarmt.gif","pokestarmt2.gif","pokestarsmeargle.gif","pokestarspirit.gif","pokestartransport.gif","pokestarufo.gif","pokestarufo2.gif","pokestarwhitedoor.gif","politoed-f.gif","politoed.gif","poliwag.gif","poliwhirl.gif","poliwrath.gif","ponyta-galar.gif","ponyta.gif","poochyena.gif","popplio.gif","porygon.gif","porygon2.gif","porygonz.gif","primarina.gif","primeape.gif","prinplup.gif","probopass.gif","psyduck.gif","pupitar.gif","purrloin.gif","purugly.gif","pyroar-f.gif","pyroar.gif","pyukumuku.gif","quagsire-f.gif","quagsire.gif","quilava.gif","quilladin.gif","qwilfish.gif","raboot.gif","raichu-alola.gif","raichu-f.gif","raichu.gif","raikou.gif","ralts.gif","rampardos.gif","rapidash.gif","raticate-alola.gif","raticate-f.gif","raticate.gif","rattata-alola.gif","rattata-f.gif","rattata.gif","rayquaza-mega.gif","rayquaza.gif","regice.gif","regidrago.gif","regigigas.gif","regirock.gif","registeel.gif","relicanth-f.gif","relicanth.gif","remoraid.gif","reshiram.gif","reuniclus.gif","rhydon-f.gif","rhydon.gif","rhyhorn-f.gif","rhyhorn.gif","rhyperior-f.gif","rhyperior.gif","ribombee.gif","riolu.gif","rockruff.gif","roggenrola.gif","rolycoly.gif","rookidee.gif","roselia-f.gif","roselia.gif","roserade-f.gif","roserade.gif","rotom-fan.gif","rotom-frost.gif","rotom-heat.gif","rotom-mow.gif","rotom-wash.gif","rotom.gif","rowlet.gif","rowlett.gif","rufflet.gif","runerigus.gif","sableye.gif","salamence-mega.gif","salamence.gif","samurott-hisui.gif","samurott.gif","sandaconda.gif","sandile.gif","sandshrew-alola.gif","sandshrew.gif","sandslash-alola.gif","sandslash.gif","sandygast.gif","sawk.gif","sawsbuck-autumn.gif","sawsbuck-summer.gif","sawsbuck-winter.gif","sawsbuck.gif","scatterbug.gif","sceptile.gif","scizor-f.gif","scizor-mega.gif","scizor.gif","scolipede.gif","scorbunny.gif","scrafty.gif","scraggy.gif","scyther-f.gif","scyther.gif","seadra.gif","seaking-f.gif","seaking.gif","sealeo.gif","seedot.gif","seel.gif","seismitoad.gif","sentret.gif","serperior.gif","servine.gif","seviper.gif","sewaddle.gif","sharpedo.gif","shaymin-sky.gif","shaymin.gif","shedinja.gif","shelgon.gif","shellder.gif","shellos-east.gif","shellos.gif","shelmet.gif","shieldon.gif","shiftry-f.gif","shiftry.gif","shiinotic.gif","shinx-f.gif","shinx.gif","shroomish.gif","shuckle.gif","shuppet.gif","sigilyph.gif","siilvally-rock.gif","silcoon.gif","silicobra.gif","silvally-bug.gif","silvally-dark.gif","silvally-dragon.gif","silvally-electric.gif","silvally-fairy.gif","silvally-fighting.gif","silvally-fire.gif","silvally-flying.gif","silvally-ghost.gif","silvally-grass.gif","silvally-ground.gif","silvally-ice.gif","silvally-poison.gif","silvally-psychic.gif","silvally-rock.gif","silvally-steel.gif","silvally-water.gif","silvally.gif","simipour.gif","simisage.gif","simisear.gif","skarmory.gif","skiddo.gif","skiploom.gif","skitty.gif","skorupi.gif","skuntank.gif","slaking.gif","slakoth.gif","sliggoo-hisui.gif","sliggoo.gif","slowbro-galar.gif","slowbro.gif","slowking-galar.gif","slowking.gif","slowpoke-galar.gif","slowpoke.gif","slugma.gif","slurpuff.gif","smeargle.gif","smoochum.gif","sneasel-f.gif","sneasel.gif","snivy.gif","snom.gif","snorlax.gif","snorunt.gif","snover-f.gif","snover.gif","snubbull.gif","sobble.gif","solgaleo.gif","solosis.gif","solrock.gif","spearow.gif","spheal.gif","spinarak.gif","spinda.gif","spiritomb.gif","spoink.gif","spritzee.gif","squirtle.gif","stakataka.gif","stantler.gif","staraptor-f.gif","staraptor.gif","staravia-f.gif","staravia.gif","starly-f.gif","starly.gif","starmie.gif","staryu.gif","steelix-f.gif","steelix-mega.gif","steelix.gif","steenee.gif","stonjourner.gif","stoutland.gif","stufful.gif","stunfisk.gif","stunky.gif","sudowoodo-f.gif","sudowoodo.gif","suicune.gif","sunflora.gif","sunkern.gif","surskit.gif","swablu.gif","swadloon.gif","swalot-f.gif","swalot.gif","swampert.gif","swanna.gif","swellow.gif","swepa.gif","swinub.gif","swirlix.gif","swoobat.gif","sylveon.gif","tadbulb.gif","taillow.gif","talonflame.gif","tandemaus.gif","tangela.gif","tangrowth-f.gif","tangrowth.gif","tapubulu.gif","tapukoko.gif","tapulele.gif","tatsugiri-droopy.gif","tatsugiri-stretchy.gif","tatsugiri.gif","tauros.gif","teddiursa.gif","tentacool.gif","tentacruel.gif","tepig.gif","terapagos-stellar.gif","terapagos-terastal.gif","terapagos.gif","terrakion.gif","throh.gif","thundurus-therian.gif","thundurus.gif","thwackey.gif","timburr.gif","tinglu.gif","tirtouga.gif","togedemaru.gif","togekiss.gif","togepi.gif","togetic.gif","tomohawk-f.gif","tomohawk.gif","torchic-f.gif","torchic.gif","torkoal.gif","tornadus-therian.gif","tornadus.gif","torterra.gif","totodile.gif","toucannon.gif","toxapex.gif","toxel.gif","toxicroak-f.gif","toxicroak.gif","toxtricity-gmax.gif","toxtricity.gif","tranquill.gif","trapinch.gif","treecko.gif","trevenant.gif","tropius.gif","trubbish.gif","trumbeak.gif","turtonator.gif","turtwig.gif","tympole.gif","tynamo.gif","typenull.gif","typhlosion.gif","tyranitar-mega.gif","tyranitar.gif","tyrantrum.gif","tyrogue.gif","tyrunt.gif","umbreon.gif","unfezant-f.gif","unfezant.gif","unown-b.gif","unown-c.gif","unown-d.gif","unown-e.gif","unown-em.gif","unown-exclamation.gif","unown-f.gif","unown-g.gif","unown-h.gif","unown-i.gif","unown-j.gif","unown-k.gif","unown-l.gif","unown-m.gif","unown-n.gif","unown-o.gif","unown-p.gif","unown-q.gif","unown-question.gif","unown-r.gif","unown-s.gif","unown-t.gif","unown-u.gif","unown-v.gif","unown-w.gif","unown-x.gif","unown-y.gif","unown-z.gif","unown.gif","ursaluna-bloodmoon.gif","ursaluna.gif","ursaring-f.gif","ursaring.gif","uxie.gif","vanillish.gif","vanillite.gif","vanilluxe.gif","vaporeon.gif","venipede.gif","venomoth.gif","venonat.gif","venusaur-f.gif","venusaur.gif","vespiquen.gif","vibrava.gif","victini.gif","victreebel.gif","vigoroth.gif","vikavolt.gif","vileplume-f.gif","vileplume.gif","virizion.gif","vivillon-archipelago.gif","vivillon-continental.gif","vivillon-elegant.gif","vivillon-fancy.gif","vivillon-garden.gif","vivillon-highplains.gif","vivillon-icysnow.gif","vivillon-jungle.gif","vivillon-marine.gif","vivillon-modern.gif","vivillon-monsoon.gif","vivillon-ocean.gif","vivillon-pokeball.gif","vivillon-polar.gif","vivillon-river.gif","vivillon-sandstorm.gif","vivillon-savanna.gif","vivillon-sun.gif","vivillon-tundra.gif","vivillon.gif","volbeat.gif","volcanion.gif","volcarona.gif","volkraken.gif","voltorb-hisui.gif","voltorb.gif","vullaby.gif","vulpix-alola.gif","vulpix.gif","wailmer.gif","wailord.gif","walrein.gif","wartortle.gif","watchog.gif","weavile-f.gif","weavile.gif","weedle.gif","weepinbell.gif","weezing-galar.gif","weezing.gif","whimsicott.gif","whirlipede.gif","whiscash.gif","whismur.gif","wigglytuff.gif","wimpod.gif","wingull.gif","wishiwashi-school.gif","wishiwashi.gif","wobbuffet-f.gif","wobbuffet.gif","wochien.gif","woobat.gif","wooloo.gif","wooper-f.gif","wooper-paldea.gif","wooper.gif","wormadam-sandy.gif","wormadam-trash.gif","wormadam.gif","wurmple.gif","wynaut.gif","wyrdeer.gif","xatu-f.gif","xatu.gif","xerneas.gif","xurkitree.gif","yamask.gif","yamper.gif","yanma.gif","yanmega.gif","yungoos.gif","yveltal.gif","zacian-crowned.gif","zacian.gif","zamazenta-crowned.gif","zamazenta.gif","zangoose.gif","zapdos-galar.gif","zapdos.gif","zebstrika.gif","zekrom.gif","zeraora.gif","zigzagoon-galar.gif","zigzagoon.gif","zoroark-hisui.gif","zoroark.gif","zorua.gif","zubat-f.gif","zubat.gif","zweilous.gif","zygarde-10.gif","zygarde.gif"
];

export function AdminPanel({ users, setUsers, refreshUsers, onlyAdminPage, isAdmin }) {
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', count: 0, shinies: [] });

  const handleEditUser = (idx) => {
    setEditingUser(idx);
  };

  const handleSaveUser = async (idx, user) => {
    const updated = [...users];
    updated[idx] = { ...user, count: user.shinies.length };
    await fetch('https://radiance-backend-production.up.railway.app/api/users', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    setEditingUser(null);
    refreshUsers();
  };

  const handleDeleteUser = async (idx) => {
    if (window.confirm('Delete this user?')) {
      const username = users[idx].username;
      await fetch(`https://radiance-backend-production.up.railway.app/api/users/${encodeURIComponent(username)}`, {
        method: 'DELETE',
      });
      refreshUsers();
    }
  };

  const handleAddUser = async () => {
    if (!newUser.username.trim()) return;
    await fetch('https://radiance-backend-production.up.railway.app/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newUser, count: newUser.shinies.length }),
    });
    setNewUser({ username: '', count: 0, shinies: [] });
    // After adding, refresh and sort alphabetically
    await refreshUsers();
    setUsers(prev => [...prev].sort((a, b) => a.username.localeCompare(b.username)));
  };

  return (
    <div className="admin-panel">
      <h3>Admin Panel</h3>
      {onlyAdminPage && (
        <div className="admin-add-user">
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={e => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Shiny GIFs (comma separated)"
            value={newUser.shinies.join(',')}
            onChange={e => setNewUser({ ...newUser, shinies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}
      <ul className="admin-user-list">
        {users.map((user, idx) => (
          <li key={idx} className="admin-user-item">
            {editingUser === idx ? (
              <AdminUserEdit
                user={user}
                onSave={u => handleSaveUser(idx, u)}
                onCancel={() => setEditingUser(null)}
              />
            ) : (
              <>
                <b>{user.username}</b> ({user.count} shinies)
                {isAdmin && (
                  <>
                    <button onClick={() => handleEditUser(idx)}>Edit</button>
                    {onlyAdminPage && <button onClick={() => handleDeleteUser(idx)}>Delete</button>}
                  </>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AdminUserEdit({ user, onSave, onCancel }) {
  const [editUser, setEditUser] = useState({ ...user });
  const [newShiny, setNewShiny] = useState('');

  const handleAddShiny = () => {
    let shinyObj;
    let gifName = typeof newShiny === 'string' ? newShiny.trim() : (newShiny.gif || '').trim();
    if (!gifName || !SHINY_GIFS.includes(gifName)) {
      alert('Please select a valid shiny gif from the list.');
      return;
    }
    if (typeof newShiny === 'string') {
      shinyObj = { gif: gifName, type: [] };
    } else if (typeof newShiny === 'object') {
      shinyObj = { gif: gifName, type: Array.isArray(newShiny.type) ? newShiny.type : [] };
    } else {
      return;
    }
    setEditUser({
      ...editUser,
      shinies: [...editUser.shinies, shinyObj],
    });
    setNewShiny('');
  };
  const handleDeleteShiny = (i) => {
    setEditUser({ ...editUser, shinies: editUser.shinies.filter((_, idx) => idx !== i) });
  };

  return (
    <div className="admin-edit-user">
      <input
        type="text"
        value={editUser.username}
        onChange={e => setEditUser({ ...editUser, username: e.target.value })}
      />
      <input
        type="number"
        value={editUser.count}
        onChange={e => setEditUser({ ...editUser, count: Number(e.target.value) })}
        min={0}
      />
      <div className="admin-shinies-list">
        {editUser.shinies.map((s, i) => {
          // Support both string and object formats
          const shinyObj = typeof s === 'string' ? { gif: s, type: [] } : s;
          return (
            <span key={i} className="admin-shiny-item">
              {shinyObj.gif}
              {/* Attribute checkboxes for each shiny */}
              <label style={{marginLeft: 6}}><input type="checkbox" checked={shinyObj.type?.includes('secret')}
                onChange={e => {
                  const newTypes = e.target.checked
                    ? [...(shinyObj.type||[]), 'secret']
                    : (shinyObj.type||[]).filter(t => t !== 'secret');
                  const newShinies = editUser.shinies.map((sh, idx) => {
                    if (idx !== i) return sh;
                    // Always convert to object format when editing
                    return { gif: shinyObj.gif, type: newTypes };
                  });
                  setEditUser({ ...editUser, shinies: newShinies });
                }} /> Secret</label>
              <label><input type="checkbox" checked={shinyObj.type?.includes('shiny alpha')}
                onChange={e => {
                  const newTypes = e.target.checked
                    ? [...(shinyObj.type||[]), 'shiny alpha']
                    : (shinyObj.type||[]).filter(t => t !== 'shiny alpha');
                  const newShinies = editUser.shinies.map((sh, idx) => {
                    if (idx !== i) return sh;
                    return { gif: shinyObj.gif, type: newTypes };
                  });
                  setEditUser({ ...editUser, shinies: newShinies });
                }} /> Shiny Alpha</label>
              <label><input type="checkbox" checked={shinyObj.type?.includes('swarm')}
                onChange={e => {
                  const newTypes = e.target.checked
                    ? [...(shinyObj.type||[]), 'swarm']
                    : (shinyObj.type||[]).filter(t => t !== 'swarm');
                  const newShinies = editUser.shinies.map((sh, idx) => {
                    if (idx !== i) return sh;
                    return { gif: shinyObj.gif, type: newTypes };
                  });
                  setEditUser({ ...editUser, shinies: newShinies });
                }} /> Swarm</label>
              <label><input type="checkbox" checked={shinyObj.type?.includes('egg')}
                onChange={e => {
                  const newTypes = e.target.checked
                    ? [...(shinyObj.type||[]), 'egg']
                    : (shinyObj.type||[]).filter(t => t !== 'egg');
                  const newShinies = editUser.shinies.map((sh, idx) => {
                    if (idx !== i) return sh;
                    return { gif: shinyObj.gif, type: newTypes };
                  });
                  setEditUser({ ...editUser, shinies: newShinies });
                }} /> Egg</label>
              <button onClick={() => handleDeleteShiny(i)}>x</button>
            </span>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 8, margin: '0.5rem 0', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Add shiny.gif"
          list="shiny-gif-list"
          value={typeof newShiny === 'string' ? newShiny : newShiny.gif}
          onChange={e => setNewShiny(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddShiny()}
          style={{ minWidth: 180 }}
        />
        <datalist id="shiny-gif-list">
          {SHINY_GIFS.map(gif => (
            <option key={gif} value={gif} />
          ))}
        </datalist>
      </div>
      {/* Attribute checkboxes */}
      <div style={{ display: 'flex', gap: 8, margin: '0.5rem 0', alignItems: 'center' }}>
        <label><input type="checkbox" checked={newShiny.type?.includes('secret')}
          onChange={e => setNewShiny(ns => ({
            gif: typeof ns === 'string' ? ns : ns.gif,
            type: e.target.checked ? [...(ns.type||[]), 'secret'] : (ns.type||[]).filter(t => t !== 'secret')
          }))} /> Secret</label>
        <label><input type="checkbox" checked={newShiny.type?.includes('shiny alpha')}
          onChange={e => setNewShiny(ns => ({
            gif: typeof ns === 'string' ? ns : ns.gif,
            type: e.target.checked ? [...(ns.type||[]), 'shiny alpha'] : (ns.type||[]).filter(t => t !== 'shiny alpha')
          }))} /> Shiny Alpha</label>
        <label><input type="checkbox" checked={newShiny.type?.includes('swarm')}
          onChange={e => setNewShiny(ns => ({
            gif: typeof ns === 'string' ? ns : ns.gif,
            type: e.target.checked ? [...(ns.type||[]), 'swarm'] : (ns.type||[]).filter(t => t !== 'swarm')
          }))} /> Swarm</label>
        <label><input type="checkbox" checked={newShiny.type?.includes('egg')}
          onChange={e => setNewShiny(ns => ({
            gif: typeof ns === 'string' ? ns : ns.gif,
            type: e.target.checked ? [...(ns.type||[]), 'egg'] : (ns.type||[]).filter(t => t !== 'egg')
          }))} /> Egg</label>
      </div>
      <button onClick={handleAddShiny}>Add Shiny</button>
      <button onClick={() => onSave(editUser)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
