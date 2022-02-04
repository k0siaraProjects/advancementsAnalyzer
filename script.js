var sound = new Audio("https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/14/Challenge_complete.ogg");
var biomes = ["badlands", "bamboo_jungle", "beach", "birch_forest", "cold_ocean", "dark_forest", "deep_cold_ocean", "deep_frozen_ocean", "deep_lukewarm_ocean", "deep_ocean", "desert", "dripstone_caves", "eroded_badlands", "flower_forest", "forest", "frozen_ocean", "frozen_river", "frozen_peaks", "grove", "ice_spikes", "jagged_peaks", "jungle", "lukewarm_ocean", "lush_caves", "meadow", "mushroom_fields", "ocean", "old_growth_birch_forest", "old_growth_pine_taiga", "old_growth_spruce_taiga", "plains", "river", "savanna", "savanna_plateau", "snowy_beach", "snowy_taiga", "snowy_plains", "snowy_slopes", "sparse_jungle", "stony_shore", "stony_peaks", "sunflower_plains", "swamp", "taiga", "warm_ocean", "windswept_forest", "windswept_gravelly_hills", "windswept_hills", "windswept_savanna", "wooded_badlands"];
var monsters = ["blaze", "cave_spider", "creeper", "drowned", "elder_guardian", "ender_dragon", "enderman", "endermite", "evoker", "ghast", "guardian", "hoglin", "husk", "magma_cube", "phantom", "piglin", "piglin_brute", "pillager", "ravager", "shulker", "silverfish", "skeleton", "slime", "spider", "stray", "vex", "vindicator", "witch", "wither", "wither_skeleton", "zoglin", "zombie", "zombie_villager", "zombified_piglin"];
var netherBiomes = ["basalt_deltas", "crimson_forest", "nether_wastes", "soul_sand_valley", "warped_forest"];
var food = ["apple", "baked_potato", "beetroot", "beetroot_soup", "bread", "carrot", "chorus_fruit", "cooked_chicken", "cooked_cod", "cooked_mutton", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "dried_kelp", "enchanted_golden_apple", "glow_berries", "golden_apple", "golden_carrot", "honey_bottle", "melon_slice", "mushroom_stew", "poisonous_potato", "potato", "pufferfish", "pumpkin_pie", "rabbit_stew", "raw_beef", "raw_chicken", "raw_cod", "raw_mutton", "raw_porkchop", "raw_rabbit", "raw_salmon", "rotten_flesh", "spider_eye", "steak", "suspicious_stew", "sweet_berries", "tropical_fish"];
var animals = ["axolotl", "bee", "cat", "chicken", "cow", "donkey", "fox", "goat", "hoglin", "horse", "llama", "mooshroom", "mule", "ocelot", "panda", "pig", "rabbit", "sheep", "strider", "turtle", "wolf"];
var cats = ["tabby", "tuxedo", "red", "siamese", "british_shorthair", "calico", "persian", "ragdoll", "white", "jellie", "black"];
var advancements;

function find(type, div)
{
    for(let i=0; i < type.length; i++)
    {
        if(advancements.search(type[i]) == -1)
        {
            document.getElementById(div).innerHTML += type[i] + "<br/>";
        }
    }
}

function analyze()
{
    advancements = document.getElementById("paste").value;
    find(biomes, "adventuringTime");
    find(monsters, "monstersHunted");
    find(netherBiomes, "hotTouristDestinations");
    find(food, "aBalancedDiet");
    find(animals, "twoByTwo");
    find(cats, "aCompleteCatalogue");
    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "block";
    sound.volume = 0.3;
    sound.play();
}