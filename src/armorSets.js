/*
{
    name: "",
    price: "",
    img: "",
    description: "",
    id: ""
}
*/

const armorSets = [
  {
    name: "Alberich's Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/alberich-set-elden-ring-wiki-guide.png",
    description:
      "Set with red glintstones, said to be formed by the blood of sacrifices.",
    id: "alberichSet",
  },
  {
    name: "Albinauric Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_set.png",
    description: "Worn by young Albinaurics.",
    id: "albinauricSet",
  },
  {
    name: "All-Knowing Set",
    price: "18000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/allkknowing.png",
    description: "Armor set with countless eyes and ears.",
    id: "allKnowingSet",
  },
  {
    name: "Aristocrat Set",
    price: "7500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/aristocrat_set.png",
    description: "High quality garb adorned with a golden embroidery.",
    id: "aristocratSet",
  },
  {
    name: "Astrologer Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologer-set-elden-ring-wiki-guide.png",
    description: "Worn by those who look to the cosmos above.",
    id: "astrologerSet",
  },
  {
    name: "Azur's Glintstone Set",
    price: "22000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/azurs_full_set_2.png",
    description: "Worn by the Primeval Sorcer Azur",
    id: "",
  },
  {
    name: "Bandit Set",
    price: "1000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit-set-elden-ring-wiki-guide.png",
    description: "Light for ease of movement, and supple for masking sound.",
    id: "banditSet",
  },
  {
    name: "Banished Knight Set",
    price: "11000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished-knight-set-elden-ring-wiki-guide.png",
    description:
      "Worn by knights who, whether by misfortune or misdeed, were forced to abandon their homes.",
    id: "banishedKnightSet",
  },
  {
    name: "Battlemage Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/battlemage_set.png",
    description: "Attire of a scholar of the Raya Lucaria academy.",
    id: "",
  },
  {
    name: "Beast Champion Set",
    price: "13000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast-champion-set-elden-ring-wiki-guide.png",
    description:
      "Silver Armor Set engraved with tiny beasts. Worn by Bernahl the Recusant.",
    id: "beastChampionSet",
  },
  {
    name: "Black Knife Set",
    price: "19000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_armor_set-elden-ring-wiki-guide.png",
    description: "Scale armor forged by the Black Knife Assassins.",
    id: "blackKnifeSet",
  },
  {
    name: "Blackflame Monk Set",
    price: "9000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blackflame_monk_set.png",
    description: "Attire of the Blackflame Monks.",
    id: "blackflameMonkSet",
  },
  {
    name: "Blaidd's Set",
    price: "12000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blaidd'sset.png",
    description: "Well-worn black armor of the man-wolf Blaidd.",
    id: "blaiddSet",
  },
  {
    name: "Bloodhound Knight Set",
    price: "9500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound-set-elden-ring-wiki-guide.png",
    description:
      "Armor worn by Vargram the Bloody Wolf, one of the first Tarnished to visit the Roundtable Hold",
    id: "bloodhoundKnightSet",
  },
  {
    name: "Bloodsoaked Set",
    price: "800 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodsoaked_set.png",
    description:
      "Amor Set formed from tightly-wound bandages soaked through with blood",
    id: "bloodSoakedSet",
  },
  {
    name: "Blue Cloth Set",
    price: "1500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue-cloth-set-elden-ring-wiki-guide.png",
    description: "The blue color of its fabric symbolizes brisk waters.",
    id: "Blue Cloth Set",
  },
  {
    name: "Blue Silver Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue_silver_set.png",
    description: "Worn by the wolf-back Albinauric Archers.",
    id: "blueSilverSet",
  },
  {
    name: "Briar Set",
    price: "7000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/briar_set.png",
    description: "Set worn by Elemer of the Briar.",
    id: "briarSet",
  },
  {
    name: "Bull-Goat Set",
    price: "11000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bullgate-set-elden-ring-wiki-guide.png",
    description:
      "Set, adorned with a gold bull-goat motif. Provide high poise.    ",
    id: "bullgoatSet",
  },
  {
    name: "Carian Knight Set",
    price: "9000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian-knight-set-elden-ring-wiki-200px.png",
    description:
      "Armor of the enchanted knights that once served the Carian royal family.",
    id: "carianKnightSet",
  },
  {
    name: "Chain Set",
    price: "1300 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/chain_set.png",
    description: "Standard issue for ordinary Soldiers.",
    id: "chainSet",
  },
  {
    name: "Champion Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/champion-set-elden-ring-wiki-guide.png",
    description:
      "Armor reserved for the badlands' bravest, proof that the wearer has slaughtered countless foes.",
    id: "championSet",
  },
  {
    name: "Cleanrot Set",
    price: "8500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrotf.png",
    description:
      "Armor Set of the Cleanrot Knights, celebrated for their undefeated campaign in the Shattering.",
    id: "cleanrotSet",
  },
  {
    name: "Commoner's Set",
    price: "400 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/commoner's_set.png",
    description: "Standard wear for commoners of the Lands Between.",
    id: "commonerSet",
  },
  {
    name: "Confessor's Set",
    price: "800 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/confessor-set-elden-ring-wiki-guide.png",
    description:
      "Black Set for blending in with the darkness. Worn by church confessors.",
    id: "confessorSet",
  },
  {
    name: "Consort's Set",
    price: "1000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/consort's_set.png",
    description: "White silk worn by Tanith, Lady of the Volcano Manor.",
    id: "consortSet",
  },
  {
    name: "Crucible Axe Set",
    price: "10000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knight_set.png",
    description:
      " Armor of one of sixteen ancient knights who served Godfrey, the first Elden Lord",
    id: "crucibleAxeSet",
  },
  {
    name: "Crucible Tree Set",
    price: "10000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible-tree-set-elden-ring-wiki-guide.png",
    description:
      "Armor of the Crucible Knights who served Godfrey, the first Elden Lord.",
    id: "crucibleTreeSet",
  },
  {
    name: "Cuckoo Knight Set",
    price: "6000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cuckoo_knight_set.png",
    description:
      "Attire worn by Raya Lucaria Academy Knights, also called Cuckoo Knights.",
    id: "cuckooKnightSet",
  },
  {
    name: "Depraved Perfumer Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/depraved_perfumer_set.png",
    description: "Attire worn by depraved perfumers.",
    id: "depravedKnightSet",
  },
  {
    name: "Drake Knight Set",
    price: "7000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/drake_knight_set.png",
    description: "The black iron attire worn by drake knights.",
    id: "drakeKnightSet",
  },
  {
    name: "Duelist Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/duelist_set.png",
    description: "Worn by gladiators who were driven from the colosseum.",
    id: "duelistSet",
  },
  {
    name: "Eccentric Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eccentric_set.png",
    description: "Unusually colorful armor set. Worn by the knight Jerren.",
    id: "eccentricSet",
  },
  {
    name: "Elden Lord Set",
    price: "50000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden_lord_set.png",
    description: "Armor set of Godfrey, the first Elden Lord.",
    id: "eldenLordSet",
  },
  {
    name: "Errant Sorcerer Set",
    price: "23000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/errant_sorcerer_set.png",
    description:
      "Worn by Sorcerer Wilhelm, one of the first to visit the Roundtable Hold.",
    id: "errantSorcererSet",
  },
  {
    name: "Exile Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/exile-set-elden-ring-wiki-guide.png",
    description: "Worn by the soldiers sent to the penal colonies.",
    id: "exileSet",
  },
  {
    name: "Festive Set",
    price: "1600 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/festive_set.png",
    description:
      "Worn by dancers at the festivities in Dominula, village of windmills.",
    id: "festiveSet",
  },
  {
    name: "Fia's Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fia_set.png",
    description:
      "Worn by Fia, the Deathbed champion, on her journey after being exiled from her home.",
    id: "fiaSet",
  },
  {
    name: "Finger Maiden Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/finger-maiden-set-elden-ring-wiki-guide.png",
    description: "Set worn by maidens who serve the Two Fingers.",
    id: "fingerMaidenSet",
  },
  {
    name: "Fingerprint Set",
    price: "5000 Runes",
    img: "Attire singed and blistered by fingers.",
    description:
      "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fingerprint_set.png",
    id: "fingerprintSet",
  },
  {
    name: "Fire Monk Set",
    price: "3500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_monk_set_transparent.png",
    description: "Attire of the Fire Monks, guardians of the flame of ruin.",
    id: "fireMonkSet",
  },
  {
    name: "Fire Prelate Set",
    price: "8000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_prelate_set.png",
    description: "Attire of the Fire Prelates, commanders of the Fire Monks.",
    id: "firePrelateSet",
  },
  {
    name: "Fur Set",
    price: "4500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fur_set.png",
    description: "Worn by ancestral follower warriors.",
    id: "furSet",
  },
  {
    name: "Gelmir Knight Set",
    price: "6000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gelmir-set-elden-ring-wiki-guide.png",
    description:
      "Set worn by knights once loyal to Praetor Rykard. Time has yet to dull their luster.",
    id: "gelmirKnightSet",
  },

  {
    name: "General Radahn Set",
    price: "20000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_set.png",
    description: "Armor Set depicting the golden lion. Worn by General Radahn.",
    id: "generalRadahnSet",
  },
  {
    name: "Godrick Foot Soldier Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_foot_soldier_set.png",
    description: "Worn by foot soldiers loyal to Godrick.",
    id: "godrickFootSoldierSet",
  },
  {
    name: "Godrick Knight Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_knight_set.png",
    description: "Armor worn by knights loyal to Godrick the Grafted.",
    id: "godrickKnightSet",
  },
  {
    name: "Godrick Soldier Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_soldier_set.png",
    description: "Worn by soldiers loyal to Godrick the Grafted.",
    id: "godrickSoldierSet",
  },
  {
    name: "Godskin Apostle Set",
    price: "18000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin-apostle-set-elden-ring-wiki-guide.png",
    description:
      "Set made by sewing together patches of smooth skin. Worn by the Godskin Apostles.",
    id: "godskinApostleSet",
  },
  {
    name: "Godskin Noble Set",
    price: "18000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_noble_set.png",
    description:
      "Set made by sewing together patches of smooth skin. Worn by Godskin Nobles.",
    id: "godskinNobleSet",
  },
  {
    name: "Goldmask's Set",
    price: "9999 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/goldmask_set.png",
    description: "Worn rags that just barely cover the body.",
    id: "goldmaskSet",
  },
  {
    name: "Guardian Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/guardian_set.png",
    description: "Worn by the guardians of the Minor Erdtree",
    id: "guardianSet",
  },
  {
    name: "Guilty Set",
    price: "500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/guilty_set.png",
    description: "Attire of those accused of lesser crimes.",
    id: "guiltySet",
  },
  {
    name: "Haligtree Foot Soldier Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree_foot_soldier_set.png",
    description: "Worn by foot soldiers loyal to Malenia",
    id: "haligtreeFootSoldierSet",
  },
  {
    name: "Haligtree Knight Set",
    price: "7500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree_knight_set.png",
    description: "Worn by knights sworn to the Haligtree.",
    id: "haligtreeKnightSet",
  },
  {
    name: "Haligtree Soldier Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree_set.png",
    description: "Worn by soldiers sworn to the Haligtree.",
    id: "haligtreeSoldierSet",
  },
  {
    name: "High Page Set",
    price: "2500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/high_page_set.png",
    description:
      "Clothes of a Page selected for special privilege by the noble they serve.",
    id: "highPageSet",
  },
  {
    name: "Highwayman Set",
    price: "1500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/highwayman_set.png",
    description: "Worn by former foot soldiers who have turned to banditry.",
    id: "highwaymanSet",
  },
  {
    name: "Hoslow's Set",
    price: "15500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hoslow-set-elden-ring-wiki-guide.png",
    description:
      "Garish silver Armor Set decorated with red embellishments. Passed down through the Hoslow family.  ",
    id: "hoslowSet",
  },
  {
    name: "House Marais Set",
    price: "3500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais-set-elden-ring-wiki-guide.png",
    description: "Customarily worn by the head of House Marais.",
    id: "houseMaraisSet",
  },
  {
    name: "Iron Set",
    price: "3750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_set.png",
    description: "Armor reinforced with small metal scales",
    id: "ironSet",
  },
  {
    name: "Juvenile Scholar Set",
    price: "1800 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/juvenile-scholar-set-elden-ring-wiki-guide.png",
    description:
      "Armor Set by young academy scholars, the juveniles birthed anew by the amber egg of Queen Rennala",
    id: "juvenileScholarSet",
  },
  {
    name: "Kaiden Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/kaiden_set-elden-ring-wiki-guide.png",
    description: "Armor worn by Kaiden sellswords.",
    id: "kaidenSet",
  },
  {
    name: "Knight Set",
    price: "2500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/knight-set-elden-ring-wiki-200px.png",
    description:
      "Set Armor of an unknown knight. It is made of thin iron plate.",
    id: "knightSet",
  },
  {
    name: "Land of Reeds Set",
    price: "4250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/samurai-set-elden-ring-wiki-guide.png",
    description: "Worn by warriors of the Land of Reeds.",
    id: "landOfReedsSet",
  },
  {
    name: "Lazuli Sorcerer Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lazuli_sorcerer_set.png",
    description: "Attire worn by Raya Lucarian scholars",
    id: "lazuliSorcererSet",
  },
  {
    name: "Leather Set",
    price: "900 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/leather_set.png",
    description:
      "Lightweight and battle-proven leather armor worn by a savvy soldier.",
    id: "leatherSet",
  },
  {
    name: "Leyndell Foot Soldier Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_foot_soldier_set.png",
    description: "Worn by foot soldiers loyal to Leyndell, Royal Capital.",
    id: "leyndellFootSoldierSet",
  },
  {
    name: "Leyndell Knight Set",
    price: "8250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_knight_set.png",
    description:
      "Armor Set worn by knights sworn to defend the royal capital of Leyndell. Time has yet to dull their luster.",
    id: "leyndellKnightSet",
  },
  {
    name: "Leyndell Soldier Set",
    price: "4200 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/leyndell_soldier_armor.png",
    description:
      "Armor Set worn by knights sworn to defend the royal capital of Leyndell.",
    id: "leyndellSoldierSet",
  },
  {
    name: "Lionel's Set",
    price: "7500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lionel-set-elden-ring-wiki-guide.png",
    description: "Armor Set worn by Lionel the Lionhearted",
    id: "lionelSet",
  },
  {
    name: "Lusat's Set",
    price: "13500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lusat's_set.png",
    description: "Worn by Sorcerer Lusat.",
    id: "lusatSet",
  },
  {
    name: "Malenia's Set",
    price: "30000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia_set.png",
    description:
      "Armor made of unalloyed gold. Worn by Malenia, Blade of Miquella.",
    id: "maleniaSet",
  },
  {
    name: "Malformed Dragon Set",
    price: "10000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malformed-dragon-set-elden-ring-wiki-guide.png",
    description: "Malformed golden armor Set.",
    id: "malformedDragonSet",
  },
  {
    name: "Maliketh's Set",
    price: "32500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/maliketh_set.png",
    description:
      "Beast's armor Set made of black iron and decorated with gold. Worn by Maliketh the Black Blade.",
    id: "malikethSet",
  },
  {
    name: "Marionette Soldier Set",
    price: "1950 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marionette_soldier_set.png",
    description: "Worn by marionette soldiers, crafted to serve the sorcerers.",
    id: "marionetteSoldierSet",
  },
  {
    name: "Mausoleum Foot Soldier Set",
    price: "1100 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mausoleum_foot_soldier_set.png",
    description:
      "Worn by the headless foot soldiers who endlessly guard the Wandering Mausoleum.",
    id: "mausoleumFootSoldierSet",
  },
  {
    name: "Mausoleum Knight Set",
    price: "7700 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mausoleum_knight_set.png",
    description:
      "Armor worn by the headless knights who endlessly guard the Wandering Mausoleum",
    id: "mausoleumKnightSet",
  },
  {
    name: "Mausoleum Soldier Set",
    price: "3700 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mausoleum_soldier_set.png",
    description:
      "Armor worn by headless soldiers who endlessly guard the Wandering Mausoleum",
    id: "mausoleumSoldierSet",
  },
  {
    name: "Mushroom Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mushroom-set-elden-ring-wiki-guide.png",
    description: "Mushrooms found growing all over the body.",
    id: "mushroomSet",
  },
  {
    name: "Night Maiden Set",
    price: "6000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/night_maiden_set.png",
    description: "Worn by the nightmaidens of the Eternal City.",
    id: "nightMaidenSet",
  },
  {
    name: "Night's Cavalry Set",
    price: "9000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/night's_cavalry_set.png",
    description: "Worn by the Night's Cavalry who ride funeral steeds.",
    id: "nightCavalrySet",
  },
  {
    name: "Noble's Set",
    price: "4250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/noble-set-elden-ring-wiki-guide.png",
    description: "Worn by expatriated royalty.",
    id: "nobleSet",
  },
  {
    name: "Nomadic Merchant's Set",
    price: "2750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nomadic_merchant's_set.png",
    description: "Attire of the nomadic merchants",
    id: "nomadicMerchantSet",
  },
  {
    name: "Nox Monk Set",
    price: "5250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_monk_set-elden-ring-wiki-guide.png",
    description: "Worn by the monks of the Eternal City.",
    id: "noxMonkSet",
  },
  {
    name: "Nox Swordstress Set",
    price: "5250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_swordstress_set.png",
    description: "Worn by swordstresses of the Eternal City.",
    id: "noxSwordstressSet",
  },
  {
    name: "Old Aristocrat Set",
    price: "1250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/old_aristocrat_set.png",
    description: "Attire favored by the aged",
    id: "oldAristocratSet",
  },
  {
    name: "Omen Set",
    price: "6666 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/omen_set.png",
    description: "Worn by the loathsome Dungeater.",
    id: "omenSet",
  },
  {
    name: "Omenkiller Set",
    price: "5500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/omenkiller-set-elden-ring-wiki-guide.png",
    description: "Worn by the Omenkillers.",
    id: "omenkillerSet",
  },
  {
    name: "Page Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/page-set-elden-ring-wiki-guide.png",
    description:
      "Worn by pages who serve the nobility and are mindful to keep them out of harm's way.",
    id: "pageSet",
  },
  {
    name: "Perfumer Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/perfumer_set.png",
    description: "Uniform of an Erdtree Capital perfumer.",
    id: "perfumerSet",
  },
  {
    name: "Perfumer Traveler's Set",
    price: "2750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/traveler-set-elden-ring-wiki-guide.png",
    description: "Attire of a traveling perfumer of no renown.",
    id: "perfumerTravelerSet",
  },
  {
    name: "Preceptor's Set",
    price: "6250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/preceptor-set-elden-ring-wiki-guide.png",
    description: "Worn by the magic preceptors who served the Carian royals.",
    id: "preceptorSet",
  },
  {
    name: "Prisoner Set",
    price: "1000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prisoner-set-elden-ring-wiki-guide.png",
    description: "Worn by a prisoner convicted of an appalling crime.",
    id: "prisonerSet",
  },
  {
    name: "Prophet Set",
    price: "300 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prophet-set-elden-ring-wiki-guide.png",
    description:
      "Robes of exiled prophets who foresaw that their faith would end in flames.",
    id: "prophetSet",
  },
  {
    name: "Queen of the Full Moon Set",
    price: "13250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/queen-set-elden-ring-wiki-guide.png",
    description: "Worn by Rennala, Queen of the Full Moon.",
    id: "queenOfTheFoolMoonSet",
  },
  {
    name: "Radahn Foot Soldier Set",
    price: "2000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_foot_soldier_set.png",
    description: "Worn by foot soldiers loyal to Radahn.",
    id: "radahnFootSoldierSet",
  },
  {
    name: "Radahn Soldier Set",
    price: "3250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_soldier_set_fixed.png",
    description:
      "Armor set worn by soldiers who fought by General Radahn's side.",
    id: "radahnSoldierSet",
  },
  {
    name: "Raging Wolf Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody-wolf-armor-set-elden-ring-wiki-guide.png",
    description:
      "Armor worn by Vargram the Bloody Wolf, one of the first Tarnished to visit the Roundtable Hold.",
    id: "ragingWolfSet",
  },
  {
    name: "Raptor's Set",
    price: "4500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raptor's_set.png",
    description: "Worn by the assassins of Ravenmount.",
    id: "raptorSet",
  },
  {
    name: "Raya Lucarian Foot Soldier Set",
    price: "1750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raya_lucarian_foot_soldier_set.png",
    description: "Worn by foot soldiers loyal to Raya Lucaria.",
    id: "rayaLucarianFootSoldierSet",
  },
  {
    name: "Raya Lucarian Soldier Set",
    price: "3250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raya_lucarian_soldier_set.png",
    description: "Armor Set worn by Raya Lucaria Academy soldiers.",
    id: "rayaLucarianSoldierSet",
  },
  {
    name: "Raya Lucarian Sorcerer Set",
    price: "4000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raya-lucarian-set-elden-ring-wiki-guide.png",
    description:
      "Robe worn by Raya Lucaria's magic scholars, those who dedicate.",
    id: "rayaLucarianSorcererSet",
  },
  {
    name: "Redmane Knight Set",
    price: "8250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/redmane_knight_set.png",
    description:
      "Armor set worn by the knights who fought by General Radahn's side.",
    id: "redmaneKnightSet",
  },
  {
    name: "Ronin's Set",
    price: "6250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ronin's_set.png",
    description: "Armor of the man once known as Yura.",
    id: "roninSet",
  },
  {
    name: "Rotten Duelist Set",
    price: "5000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_duelist_set.png",
    description: "Worn by gladiators who were driven from the colosseum.",
    id: "rottenDuelistSet",
  },
  {
    name: "Royal Knight Set",
    price: "9500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_knight.png",
    description: "Worn by Loretta, a knight who served Miquella's Haligtree.",
    id: "royalKnightSet",
  },
  {
    name: "Royal Remains Set",
    price: "16000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_remains_set.png",
    description: "Armor graced with gold human bones.",
    id: "royalRemainsSet",
  },
  {
    name: "Ruler's Set",
    price: "3000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruler-set-elden-ring-wiki-guide.png",
    description: "Luxurious Set worn by lords in a smaller nation.",
    id: "rulerSet",
  },
  {
    name: "Sage Set",
    price: "1250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sage-set-elden-ring-wiki-guide.png",
    description: "Attire of the wise sages who were deemed heretical.",
    id: "sageSet",
  },
  {
    name: "Sanguine Noble Set",
    price: "4500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sanguine_noble_armor_set-elden-ring-wiki-guide.png",
    description: "Worn by the nobles who serve the Lord of Blood.",
    id: "sanguineNobleSet",
  },
  {
    name: "Scaled Set",
    price: "6250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scaled-set-elden-ring-wiki-guide.png",
    description: "Armor Set worn by Old Knight Istvan.",
    id: "scaledSet",
  },
  {
    name: "Shaman Set",
    price: "7777 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shaman_set.png",
    description: "Attire worn by ancestral follower shamans.",
    id: "shamanSet",
  },
  {
    name: "Snow Witch Set",
    price: "21000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/snowwitch-set-elden-ring-wiki-guide.png",
    description: "Once worn by the snowy crone deep in the woods.",
    id: "snowWitchSet",
  },
  {
    name: "Spellblade Set",
    price: "4100 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spellblade-set-elden-ring-wiki-guide.png",
    description: "Worn by Sorcerer Rogier.",
    id: "spellbladeSet",
  },
  {
    name: "Traveler's Set",
    price: "600 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/melinas_set.png",
    description:
      "Worn by young women who set off into the world to confront their fate.",
    id: "travelerSet",
  },
  {
    name: "Traveling Maiden Set",
    price: "650 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/travelling_maiden_set.png",
    description: "Maidens traversed the Lands Between for different reasons.",
    id: "travelingMaidenSet",
  },
  {
    name: "Tree Sentinel Set",
    price: "7500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/tree_sentinel_set_pose.png",
    description:
      "Armor of the heavy cavalry Tree Sentinels who serve the Erdtree.",
    id: "treeSentinelSet",
  },
  {
    name: "Twinned Set",
    price: " 9250 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned-set-elden-ring-wiki-guide.png",
    description: "Armor Set depicting entwined twins of gold and silver.",
    id: "twinnedSet",
  },
  {
    name: "Vagabond Knight Set",
    price: "2500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vagabond-knight-set-elden-ring-wiki-guide.png",
    description: "Armor of a knight banished form their motherland.",
    id: "vagabondKnightSet",
  },
  {
    name: "Veteran's Set",
    price: "11000 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/veteran_set.png",
    description: "Worn by Niall, the great veteran general of Sol.",
    id: "veteranSet",
  },
  {
    name: "Vulgar Militia Set",
    price: "1750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_set.png",
    description: "Worn by lean, mean, and filthy militiamen.",
    id: "vulgarMilitiaSet",
  },
  {
    name: "War Surgeon Set",
    price: "1800 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/war_surgeon_set.png",
    description: "Worn by war surgeons who were effectively mercy killers.",
    id: "warSurgeonSet",
  },
  {
    name: "White Reed Set",
    price: "5500 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/white_reed_set.png",
    description:
      "Worn by the Inabam head disciples of the great swordsman Okina.",
    id: "whiteReedSet",
  },
  {
    name: "Zamor Set",
    price: "4750 Runes",
    img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/zamor-set-elden-ring-wiki-guide.png",
    description:
      "Armor worn by knights of Zamor, hailed as heroes in the War against the Giants. ",
    id: "zamorSet",
  },
];

export default armorSets;
