function filter_available(weapon) {
  return !weapon.unreleased
}

angular.module('splatApp').weapons = function ($scope) {
$scope.weaponSets = [{
  type: "Shooters",
  weapons: [
    {
      name: "Splattershot Jr.",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_First_00.png",
      sub: "Splat Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 1,
      inkSaver: "Middle",
      inkPerShot: 0.5
    },
    {
      name: "Splattershot",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Normal_00.png",
      sub: "Burst Bomb",
      special: "Splashdown",
      specialCost: 180,
      level: 2,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: "Splat Dualies",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Normal_00.png",
      sub: "Burst Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Tentatek Splattershot",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Normal_01.png",
      sub: "Splat Bomb",
      special: "Inkjet",
      specialCost: 190,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: "Aerospray MG",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Blaze_00.png",
      sub: "Suction Bomb",
      special: "Curling-Bomb Launcher",
      specialCost: 170,
      level: 6,
      inkSaver: "Middle",
      inkPerShot: 0.55
    },
    {
      name: "N-ZAP '85",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_QuickMiddle_00.png",
      sub: "Suction Bomb",
      special: "Ink Armor",
      specialCost: 200,
      level: 9,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Splattershot Pro",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Expert_00.png",
      sub: "Point Sensor",
      special: "Ink Storm",
      specialCost: 180,
      level: 10,
      inkSaver: "High",
      inkPerShot: 2
    },
    {
      name: "Enperry Splat Dualies",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Normal_01.png",
      sub: "Curling Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 11,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Dualie Squelchers",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Dual_00.png",
      sub: "Point Sensor",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 12,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: ".52 Gal",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Gravity_00.png",
      sub: "Point Sensor",
      special: "Baller",
      specialCost: 180,
      level: 14,
      inkSaver: "Middle",
      inkPerShot: 1.3
    },
    {
      name: "Jet Squelcher",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Long_00.png",
      sub: "Toxic Mist",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 17,
      inkSaver: "Middle",
      inkPerShot: 1.6
    },
    {
      name: "L-3 Nozzlenose",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_TripleQuick_00.png",
      sub: "Curling Bomb",
      special: "Baller",
      specialCost: 180,
      level: 18,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: ".96 Gal",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Heavy_00.png",
      sub: "Sprinkler",
      special: "Ink Armor",
      specialCost: 180,
      level: 21,
      inkSaver: "Middle",
      inkPerShot: 2.5
    },
    {
      name: "Splash-o-matic",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Precision_00.png",
      sub: "Toxic Mist",
      special: "Inkjet",
      specialCost: 180,
      level: 25,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Dapple Dualies",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Short_00.png",
      sub: "Squid Beakon",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 0.9
    },
    {
      name: "Aerospray RG",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Blaze_01.png",
      sub: "Sprinkler",
      special: "Baller",
      specialCost: 180,
      level: 28,
      inkSaver: "Middle",
      inkPerShot: 0.55
    },
    {
      name: "H-3 Nozzlenose",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_TripleMiddle_01.png",
      sub: "Point Sensor",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 29,
      inkSaver: "High",
      inkPerShot: 1.8
    },
    {
      name: "Custom Splattershot Jr.",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_First_01.png",
      sub: "Autobomb",
      special: "Ink Storm",
      specialCost: 180,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 0.5,
      unreleased: true
    },
    {
      name: "N-ZAP '89",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_QuickMiddle_01.png",
      sub: "Autobomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 11,
      inkSaver: "Middle",
      inkPerShot: 0.8,
      unreleased: true
    },
    {
      name: "Custom Dualie Squelchers",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Dual_01.png",
      sub: "Splat Bomb",
      special: "Ink Armor",
      specialCost: 190,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 1,
      unreleased: true
    },
    {
      name: "Forge Splattershot Pro",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Expert_01.png",
      sub: "Suction Bomb",
      special: "Bubble Blower",
      specialCost: 180,
      level: 20,
      inkSaver: "High",
      inkPerShot: 2,
      unreleased: true
    },
    {
      name: ".52 Gal Deco",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Gravity_01.png",
      sub: "Curling Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 22,
      inkSaver: "Middle",
      inkPerShot: 1.3,
      unreleased: true
    },
    {
      name: "L-3 Nozzlenose D",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_TripleQuick_01.png",
      sub: "Burst Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 23,
      inkSaver: "Middle",
      inkPerShot: 1,
      unreleased: true
    },
    {
      name: "Custom Jet Squelcher",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Long_01.png",
      sub: "Burst Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 1.6,
      unreleased: true
    },
    {
      name: "Neo Splash-o-matic",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Precision_01.png",
      sub: "Burst Bomb",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 0.8,
      unreleased: true
    },
    {
      name: ".96 Gal Deco",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_Heavy_01.png",
      sub: "Splash Wall",
      special: "Splashdown",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 2.5,
      unreleased: true
    },
    {
      name: "Dapple Dualies Nouveau",
      shotUnit: "shots",
      image: "img/weapons/Wst_Twins_Short_01.png",
      sub: "Toxic Mist",
      special: "Ink Storm",
      specialCost: 180,
      level: 29,
      inkSaver: "Middle",
      inkPerShot: 0.9,
      unreleased: true
    },
    {
      name: "H-3 Nozzlenose D",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_TripleMiddle_01.png",
      sub: "Sprinkler",
      special: "Ink Armor",
      specialCost: 190,
      level: 30,
      inkSaver: "High",
      inkPerShot: 1.8,
      unreleased: true
    }
    ]
  },
  {
    type: "Rollers/Brushes",
    weapons: [
      {
        name: "Splat Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Normal_00.png",
        sub: "Curling Bomb",
        special: "Splashdown",
        specialCost: 180,
        level: 3,
        inkSaver: "Middle",
        inkPerShot: 10,
        shotUnit: "flicks"
      },
      {
        name: "Inkbrush",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushMini_00.png",
        sub: "Splat Bomb",
        special: "Splashdown",
        specialCost: 170,
        level: 5,
        inkSaver: "Middle",
        inkPerShot: 2
      },
      {
        name: "Carbon Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Compact_00.png",
        sub: "Autobomb",
        special: "Ink Storm",
        specialCost: 180,
        level: 7,
        inkSaver: "Middle",
        inkPerShot: 6
      },
      {
        name: "Octobrush",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushNormal_00.png",
        sub: "Autobomb",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        inkPerShot: 3.2
      },
      {
        name: "Krak-On Splat Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Normal_01.png",
        sub: "Squid Beakon",
        special: "Baller",
        specialCost: 180,
        level: 12,
        inkSaver: "Middle",
        inkPerShot: 10
      },
      {
        name: "Dynamo Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Heavy_00.png",
        sub: "Ink Mine",
        special: "Sting Ray",
        specialCost: 180,
        level: 20,
        inkSaver: "High",
        swimPenalty: true,
        inkPerShot: 18
      },
      {
        name: "Flingza Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Hunter_00.png",
        sub: "Splash Wall",
        special: "Splat-Bomb Launcher",
        specialCost: 180,
        level: 24,
        inkSaver: "Middle",
        inkPerShot: 8
      },
      {
        name: "Inkbrush Nouveau",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushMini_01.png",
        sub: "Ink Mine",
        special: "Baller",
        specialCost: 180,
        level: 7,
        inkSaver: "High",
        inkPerShot: 2,
        unreleased: true
      },
      {
        name: "Carbon Roller Deco",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Compact_01.png",
        sub: "Sprinkler",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        inkPerShot: 6,
        unreleased: true
      },
      {
        name: "Octobrush Nouveau",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushNormal_01.png",
        sub: "Squid Beakon",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 15,
        inkSaver: "Middle",
        inkPerShot: 3.2,
        unreleased: true
      },
      {
        name: "Gold Dynamo Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Heavy_01.png",
        sub: "Toxic Mist",
        special: "Ink Armor",
        specialCost: 180,
        level: 25,
        inkSaver: "High",
        inkPerShot: 18,
        unreleased: true
      },
      {
        name: "Foil Flingza Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Hunter_01.png",
        sub: "Suction Bomb",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 28,
        inkSaver: "Middle",
        inkPerShot: 8,
        unreleased: true
      }
  ]
},
{
  type: "Blasters/Brellas",
  weapons: [
    {
      name: "Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterMiddle_00.png",
      sub: "Toxic Mist",
      special: "Splashdown",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      inkPerShot: 10
    },
    {
      name: "Rapid Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLight_00.png",
      sub: "Ink Mine",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 13,
      inkSaver: "Middle",
      inkPerShot: 7
    },
    {
      name: "Luna Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterShort_00.png",
      sub: "Splat Bomb",
      special: "Baller",
      specialCost: 180,
      level: 19,
      inkSaver: "High",
      inkPerShot: 9
    },
    {
      name: "Custom Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterMiddle_01.png",
      sub: "Autobomb",
      special: "Inkjet",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 10
    },
    {
      name: "Clash Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLightShort_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 170,
      level: 30,
      inkSaver: "Middle",
      inkPerShot: 5
    },
    {
      name: "Splat Brella",
      shotUnit: "shots",
      image: "img/weapons/Wst_Umbrella_Normal_00.png",
      sub: "Sprinkler",
      special: "Ink Storm",
      specialCost: 180,
      level: 9,
      inkSaver: "Middle",
      inkPerShot: 5
    },
    {
      name: "Sorella Brella",
      shotUnit: "shots",
      image: "img/weapons/Wst_Umbrella_Normal_01.png",
      sub: "Toxic Mist",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Luna Blaster Neo",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterShort_01.png",
      sub: "Ink Mine",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 24,
      inkSaver: "High",
      inkPerShot: 9,
      unreleased: true
    },
    {
      name: "Clash Blaster Neo",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLightShort_01.png",
      sub: "Sprinkler",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 30,
      inkSaver: "Middle",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Rapid Blaster Deco",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLight_01.png",
      sub: "Suction Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 7,
      unreleased: true
    }
  ]
},
{
  type: "Sloshers",
  weapons: [
    {
      name: "Slosher",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Strong_00.png",
      sub: "Suction Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      inkPerShot: 7
    },
    {
      name: "Tri-Slosher",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Diffusion_00.png",
      sub: "Burst Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 6
    },
    {
      name: "Slosher Deco",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Strong_01.png",
      sub: "Sprinkler",
      special: "Baller",
      specialCost: 190,
      level: 8,
      inkSaver: "Middle",
      inkPerShot: 7,
      unreleased: true
    },
    {
      name: "Tri-Slosher Nouveau",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Diffusion_01.png",
      sub: "Splat Bomb",
      special: "Autobomb Launcher",
      specialCost: 180,
      level: 17,
      inkSaver: "Middle",
      inkPerShot: 6,
      unreleased: true
    }
  ]
},
{
  type: "Chargers/Splatlings",
  weapons: [
    {
      name: "Splat Charger",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Normal_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 3,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "Heavy Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Standard_00.png",
      sub: "Sprinkler",
      special: "Sting Ray",
      specialCost: 180,
      level: 8,
      inkSaver: "Middle",
      inkPerShot: 22.5
    },
    {
      name: "Splatterscope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_NormalScope_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "Firefin Splat Charger",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Normal_01.png",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Long_00.png",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 20,
      inkSaver: "High",
      inkPerShot: 25,
      swimPenalty: true
    },
    {
      name: "Goo Tuber",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Keeper_00.png",
      sub: "Suction Bomb",
      special: "Splashdown",
      specialCost: 180,
      level: 22,
      inkSaver: "Middle",
      inkPerShot: 15
    },
    {
      name: "Mini Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Quick_00.png",
      sub: "Burst Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 23,
      inkSaver: "Middle",
      inkPerShot: 15
    },
    {
      name: "Firefin Splatterscope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_NormalScope_01.png",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 25,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K Scope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_LongScope_00.png",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 30,
      inkSaver: "High",
      inkPerShot: 25,
      swimPenalty: true
    },
    {
      name: "Heavy Splatling Deco",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Standard_01.png",
      sub: "Splash Wall",
      special: "Bubble Blower",
      specialCost: 180,
      level: 12,
      inkSaver: "Middle",
      inkPerShot: 22.5,
      unreleased: true
    },
    {
      name: "Zink Mini Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Quick_01.png",
      sub: "Curling Bomb",
      special: "Ink Storm",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Long_01.png",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 25,
      unreleased: true
    },
    {
      name: "Custom Goo Tuber",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Keeper_01.png",
      sub: "Curling Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 28,
      inkSaver: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K Scope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_LongScope_01.png",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 30,
      inkSaver: "High",
      inkPerShot: 25,
      unreleased: true
    },
  ]
}
]

}
