// @ts-check
// prettier-ignore

function initSpecialClothes() {
	/* name: should ALWAYS match the clothing item's setup "name" property.
	 * sets: whoch setup sets the clothes are a part of. Sets are defined in the object after this one.
	 * hint, requirements: Should ONLY be used if item is not part of its own set, and we know for sure it never will be, such as with simple items like the daisy and flower crown.
	 * Otherwise, hint and requirements should be part of the sets setup further down.
	*/
	setup.specialClothes = [
		{ name: "witch dress",					sets: ["halloween", "witch"] },
		{ name: "witch hat",					sets: ["halloween", "witch"] },
		{ name: "witch shoes",					sets: ["halloween", "witch"] },
		{ name: "gothic witch dress",			sets: ["halloween", "witch"] },
		{ name: "gothic witch hat",				sets: ["halloween", "witch"] },
		{ name: "starry witch hat",				sets: ["halloween", "witch"] },
		{ name: "broomstick", 					sets: ["halloween", "witch"] },
		{ name: "vampire jacket", 				sets: ["halloween", "vampire"] },
		{ name: "classy vampire jacket",		sets: ["halloween", "vampire"] },
		{ name: "mummy facewrap", 				sets: ["halloween", "mummy"] },
		{ name: "mummy top", 					sets: ["halloween", "mummy"] },
		{ name: "mummy skirt", 					sets: ["halloween", "mummy"] },
		{ name: "scarecrow shirt", 				sets: ["halloween", "scarecrow"] },
		{ name: "scarecrow hat", 				sets: ["halloween", "scarecrow"] },
		{ name: "skeleton mask", 				sets: ["halloween", "skeleton"] },
		{ name: "skeleton outfit", 				sets: ["halloween", "skeleton"] },
		{ name: "futuristic bodysuit", 			sets: ["halloween", "future_suit"] },
		{ name: "futuristic shades", 			sets: ["halloween", "future_suit"] },
		{ name: "mini pumpkin", 				sets: ["halloween", "pumpkin"] },
		{ name: "pumpkin dress", 				sets: ["halloween", "pumpkin"] },
		{ name: "pumpkin hat", 					sets: ["halloween", "pumpkin"] },

		{ name: "christmas dress", 				sets: ["christmas"] },
		{ name: "christmas shirt", 				sets: ["christmas"] },
		{ name: "christmas trousers",			sets: ["christmas"] },
		{ name: "jingle-bell dress", 			sets: ["christmas"] },
		{ name: "sleeveless jingle-bell dress", sets: ["christmas"] },
		{ name: "christmas hat", 				sets: ["christmas"] },
		{ name: "christmas leg warmers", 		sets: ["christmas"] },
		{ name: "christmas boots", 				sets: ["christmas"] },
		{ name: "mini snowman", 				sets: ["christmas"] },
		{ name: "reindeer slippers", 			sets: ["christmas"] },
		{ name: "candy cane", 					sets: ["christmas"] },

		{ name: "rose", 						sets: ["valentines", "flowers"], requirements: () => V.gwylanSeen?.includes("rose"), hint: "장미로부터 입맞춤을 받는다" },
		{ name: "rose wedding veil", 			sets: ["valentines", "rose_wedding"] },
		{ name: "long rose wedding veil", 		sets: ["valentines", "rose_wedding"] },
		{ name: "rose wedding dress", 			sets: ["valentines", "rose_wedding"] },
		{ name: "mini rose wedding dress", 		sets: ["valentines", "rose_wedding"] },
		{ name: "rose wedding suit", 			sets: ["valentines", "rose_wedding"] },
		{ name: "frilly rose wedding suit", 	sets: ["valentines", "rose_wedding"] },
		{ name: "gift wrap top", 				sets: ["valentines", "wrap"] },
		{ name: "gift wrap bottom", 			sets: ["valentines", "wrap"] },
		{ name: "gift wrappings", 				sets: ["valentines", "wrap"] },
		{ name: "gift wrap footwrap", 			sets: ["valentines", "wrap"] },
		{ name: "gift wrap bow", 				sets: ["valentines", "wrap"] },

		{ name: "slut shirt", 					sets: ["bad_end", "underground_brothel"] },
		{ name: "cow bell", 					sets: ["bad_end", "underground_farm", "transformation"] },
		{ name: "cow bra", 						sets: ["bad_end", "underground_farm"] },
		{ name: "cow panties", 					sets: ["bad_end", "underground_farm"] },
		{ name: "cow socks", 					sets: ["bad_end", "underground_farm"] },
		{ name: "cow sleeves", 					sets: ["bad_end", "underground_farm"] },
		{ name: "loincloth", 					sets: ["bad_end", "loincloth"] },
		{ name: "feathered hair clip", 			sets: ["bad_end", "bird", "transformation"] },
		{ name: "feather necklace", 			sets: ["bad_end", "bird", "transformation"] },
		{ name: "prison shirt", 				sets: ["bad_end", "prison"] },
		{ name: "prison trousers", 				sets: ["bad_end", "prison"] },
		{ name: "prison jumpsuit", 				sets: ["bad_end", "prison"] },
		{ name: "unbound straightjacket", 		sets: ["bad_end", "asylum"] },

		{ name: "initiate's robe", 				sets: ["temple", "temple_initiate"] },
		{ name: "monk's habit", 				sets: ["temple", "temple_monk_and_nun"] },
		{ name: "nun's habit", 					sets: ["temple", "temple_monk_and_nun"] },
		{ name: "nun's veil", 					sets: ["temple", "temple_monk_and_nun"] },
		{ name: "long nun's habit", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "long nun's veil", 				sets: ["temple", "temple_monk_and_nun"] },
		{ name: "novice nun's habit", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "novice nun's veil", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "lolita nun's habit", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "lolita nun's veil", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "avowed nun's habit", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "avowed nun's veil", 			sets: ["temple", "temple_monk_and_nun"] },
		{ name: "evangelist's uniform", 		sets: ["temple", "temple_evangelist"] },
		{ name: "confessor's robe", 			sets: ["temple", "temple_confessor"] },
		{ name: "confessor's habit", 			sets: ["temple", "temple_confessor"] },
		{ name: "exorcist's cassock", 			sets: ["temple", "temple_exorcist"] },
		{ name: "exorcist's habit", 			sets: ["temple", "temple_exorcist"] },
		{ name: "monk's sparring habit", 		sets: ["temple", "temple_sparring"] },
		{ name: "nun's sparring habit", 		sets: ["temple", "temple_sparring"] },

		{ name: "sexy nun's habit", 			sets: ["temple", "temple_sexy"] },
		{ name: "sexy nun's gloves", 			sets: ["temple", "temple_sexy"] },
		{ name: "sexy nun's stockings", 		sets: ["temple", "temple_sexy"] },
		{ name: "sexy nun's veil", 				sets: ["temple", "temple_sexy"] },
		{ name: "sexy nun's ornate veil", 		sets: ["temple", "temple_sexy"] },
		{ name: "sexy priest's vestments", 		sets: ["temple", "temple_sexy"] },

		{ name: "holy stole", 					sets: ["temple", "holy_stole"] },
		{ name: "long holy stole", 				sets: ["temple", "holy_stole"] },

		{ name: "holy pendant", 				sets: ["temple", "pendant", "holy_pendant"] },
		{ name: "stone pendant", 				sets: ["temple", "pendant", "stone_pendant"] },
		{ name: "dark pendant", 				sets: ["pendant", "dark_pendant"] },

		{ name: "rag top", 						sets: ["historic", "museum_rags"] },
		{ name: "rag skirt", 					sets: ["historic", "museum_rags"] },
		{ name: "vintage pantsuit", 			sets: ["historic", "vintage"] },
		{ name: "vintage skirtsuit", 			sets: ["historic", "vintage"] },
		{ name: "bowler hat", 					sets: ["historic", "vintage"] },
		{ name: "military beret", 				sets: ["historic", "vintage"] },
		{ name: "chain tunic", 					sets: ["historic", "chain_tunic"] },
		{ name: "chain leggings", 				sets: ["historic", "chain_tunic"] },
		{ name: "chain boots", 					sets: ["historic", "chain_tunic"] },

		{ name: "serafuku", 					sets: ["foreign_school"] },
		{ name: "classic serafuku", 			sets: ["foreign_school"] },
		{ name: "gakuran", 						sets: ["foreign_school"] },
		{ name: "sailor ribbon", 				sets: ["foreign_school"] },
		{ name: "serafuku dress", 				sets: ["foreign_school"] },

		{ name: "belly dancer's top", 			sets: ["brothel"] },
		{ name: "belly dancer's bottoms", 		sets: ["brothel"] },
		{ name: "belly dancer's veil", 			sets: ["brothel"] },
		{ name: "belly dancer's shoes", 		sets: ["brothel"] },
		{ name: "harem vest", 					sets: ["brothel"] },
		{ name: "harem pants", 					sets: ["brothel"] },

		{ name: "chef hat", 					sets: ["chef"] },
		{ name: "chef jacket", 					sets: ["chef"] },

		{ name: "esoteric spectacles", 			sets: ["hookah"] },

		{ name: "islander mask", 				sets: ["mask", "islander"] },
		{ name: "fox mask", 					sets: ["mask", "fox", "fox_mask"] },

		{ name: "fedora", 						sets: ["fedora"] },

		{ name: "catsuit", 						sets: ["catsuit"] },

		{ name: "daisy", 						sets: ["flowers"], requirements: () => V.plants_known?.includes("daisy"), hint: "데이지 씨앗을 찾는다" },
		{ name: "flower crown", 				sets: ["flowers"], requirements: () => V.robinSeen?.includes("flowerCrown") || V.specialClothesEvents?.includes("flowerCrownGH"), hint: "누군가에게 특별한 상대가 된다" },

		{ name: "janet dress",					sets: ["janet"] },

		{ name: "swan lake dress",				sets: ["dance_studio"] },
		{ name: "fancy swan lake dress",		sets: ["dance_studio"] },
		{ name: "swan feathers",				sets: ["dance_studio"] },
		{ name: "swan tiara",					sets: ["dance_studio"] },
		{ name: "ballet shoes",					sets: ["dance_studio"] },

		{ name: "spirit mask", 					sets: ["shrine", "fox", "transformation"] },
		{ name: "shrine maiden robes", 			sets: ["shrine", "fox"] },

		{ name: "jasper pendant", 				sets: ["jasper", "fox"] },

		{ name: "butterfly dress",				sets: ["butterfly"] },
		{ name: "butterfly bow",				sets: ["butterfly"] },

		{ name: "succubus top",					sets: ["succubus"] },
		{ name: "succubus lower back wings",	sets: ["succubus", "transformation"] },
		{ name: "succubus gloves",				sets: ["succubus"] },
		{ name: "succubus heels",				sets: ["succubus"] },

		{ name: "sage witch hat", 				sets: ["sage_witch_hat"] },
		{ name: "familiar collar",				sets: ["familiar_collar"] },
	];

	/* must match set names above.
	 * text: display name for links. Be sure to change as appropriate if adding new items to an existing set.
	 * requirements: function that resolves to true or false based on provided parameter. Optional.
	 * hint: hint string that displays in shops.
	 * shop: for future support for unlockable clothes in other shops.
	 * subsetOf: Designates a set that can't be talked about unless all of its subsets are talked about first. Example: the "halloween" set can't be talked about until all individual halloween costumes are talked about first. Also for controlling hint text in the feat boost menu. Optional.
	 * feat: whether the set can be unlocked with the special clothes feat booster.
	 * icon: icon to use. For clothing items that need a coloured icon, use "clothes" and provide item's slot and setup index, as well as desired colour. Yes I know it's annoying that the parameter uses the spelling 'color' but it's standard to have code use the american spelling.
	 */

	/* To prevent a set from contributing to Gwylan love and remove talk option, simply remove "forest" from shops array.
	 * It can still be available in the forest shop despite this. Will be automatically removed from Gwylan love calculation even if already talked about in a save.
	 */
	setup.specialClothesSets = {
		// Holiday sets
		// Halloween
		halloween: {
			text: "collection of Halloween costumes",
			requirements: () => Time.hasDatePassed(10, 21),
			hint: "10월 21일부터 판매한다",
			shop: ["forest"],
			feat: false,
			icon: "food/halloween.png",
		},
		witch: {
			text: "witch costume",
			requirements: () => V.tentacletrait >= 1,
			hint: "촉수에 익숙해진다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 7,
			iconColor: "black",
			iconAccColor: "green",
		},
		vampire: {
			text: "vampire costume",
			requirements: () => V.syndromekylar >= 1,
			hint: "질투 많은 연인의 갈망에 굴복한다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 106,
			iconColor: "red",
		},
		mummy: {
			text: "mummy costume",
			requirements: () => V.specialClothesEvents?.includes("cocoon"),
			hint: "거미줄에 감싸인다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes/mummy_facewrap.png",
		},
		scarecrow: {
			text: "scarecrow costume",
			requirements: () => V.specialClothesEvents?.includes("farm_defended"),
			hint: "모든 밭을 공격으로부터 완벽하게 방어한다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes/scarecrow_hat.png",
		},
		skeleton: {
			text: "skeleton costume",
			requirements: () => V.crypt_intro === 1,
			hint: "지하 묘지를 발견한다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes/skeleton_mask.png",
		},
		future_suit: {
			text: "futuristic bodysuit costume",
			requirements: () => V.tenyclusPlayCount >= 7,
			hint: "기묘한 아케이드 게임에 과하게 빠져든다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 108,
			iconColor: "black",
			iconAccColor: "red",
		},
		pumpkin: {
			text: "pumpkin costume",
			requirements: () => Object.values(V.plants).filter(food => food.recipe).length >= 15,
			hint: "15개의 레시피를 배운다",
			shop: ["forest"],
			subsetOf: ["halloween"],
			feat: true,
			featCost: 2,
			icon: "clothes/pumpkin_dress.png",
		},
		// Christmas
		christmas: {
			text: "Christmas clothes",
			requirements: () => Time.hasDatePassed(12, 18) || V.specialClothesEvents?.includes("skulduggery_gift"),
			hint: "12월 18일부터 판매한다. 혹은, 곤경에 빠진 가족에게 관대한 선물을 남긴다",
			shop: ["forest"],
			feat: true,
			featCost: 5,
			icon: "clothes/christmas_hat.png",
		},
		// Valentines
		valentines: {
			text: "collection of Valentine's Day clothes",
			requirements: () => Time.hasDatePassed(2, 7),
			hint: "2월 7일부터 판매한다",
			shop: ["forest"],
			feat: false,
			icon: "gift_vday.png",
		},
		rose_wedding: {
			text: "rose wedding attire",
			requirements: () => V.kylarSeen?.includes("basement"),
			hint: "강제 결혼식에서 도망친다",
			shop: ["forest"],
			subsetOf: ["valentines"],
			feat: true,
			featCost: 8,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 79,
			iconColor: "white",
			iconAccColor: "red",
		},
		wrap: {
			text: "gift wrappings",
			requirements: () => V.robinSeen?.includes("unwrap") || V.gwylanSeen?.includes("steal_wrap"),
			hint: "옷을 훔치고 특수한 벌을 받는다",
			shop: ["forest"],
			subsetOf: ["valentines"],
			feat: true,
			featCost: 3,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 185,
			iconColor: "pink",
		},

		// Bad end or stockholm syndrome sets
		bad_end: {
			text: "collection of clothes from unsavory places",
			shop: ["forest"],
			feat: false,
			icon: "cage.png",
		},
		underground_brothel: {
			text: "slut shirt",
			requirements: () => V.undergroundbrothelescaped,
			hint: "지하 창관의 노예생활에서 살아남는다",
			shop: ["forest", "adult"],
			subsetOf: ["bad_end", "fox"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 27,
			iconColor: "pink",
			iconAccColor: "black",
		},
		underground_farm: {
			text: "cow print set",
			requirements: () => V.livestock_intro !== undefined,
			hint: "가축이 된다",
			shop: ["forest", "adult"],
			subsetOf: ["bad_end", "transformation"],
			feat: true,
			featCost: 15,
			icon: "tf_cow.png",
		},
		loincloth: {
			text: "loincloth",
			requirements: () => V.syndromeeden === 1 || V.syndromewolves === 1,
			hint: "외로운 사냥꾼과 친구가 되거나, 늑대 무리의 일원이 된다",
			shop: ["forest"],
			subsetOf: ["bad_end", "fox"],
			feat: true,
			featCost: 2,
			icon: "clothes",
			iconSlot: "under_lower",
			iconIndex: 21,
			iconColor: "white",
		},
		bird: {
			text: "feathered hair clip",
			requirements: () => V.syndromebird === 1,
			hint: "새와 사랑에 빠진다",
			shop: ["forest"],
			subsetOf: ["bad_end", "transformation"],
			feat: true,
			featCost: 15,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 31,
			iconColor: "tan",
		},
		prison: {
			text: "prison clothes",
			requirements: () => V.prison_intro === 1,
			hint: "감옥에 보내진다",
			shop: ["forest"],
			subsetOf: ["bad_end"],
			feat: true,
			featCost: 10,
			icon: "clothes/prison_jumpsuit.png",
		},
		asylum: {
			text: "straightjacket",
			requirements: () => V.asylumescaped === 1,
			hint: "정신병원에서 탈출한다",
			shop: ["forest"],
			subsetOf: ["bad_end"],
			feat: true,
			featCost: 10,
			icon: "clothes/straightjacket.png",
		},

		// Temple
		temple: {
			text: "collection of temple attire",
			shop: ["forest", "temple"],
			feat: false,
			icon: "wolf.png",
		},
		temple_initiate: {
			text: "initiate's robe",
			requirements: () => ["initiate","monk","priest"].includes(V.temple_rank),
			hint: "순결함을 증명한다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 5,
			icon: "clothes/initiate_robes.png",
		},
		temple_monk_and_nun: {
			text: "monk and nun habits",
			requirements: () => ["monk","priest"].includes(V.temple_rank),
			hint: "사원에서의 계급을 올린다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 10,
			icon: "clothes/monks_habit.png",
		},
		temple_evangelist: {
			text: "evangelist's uniform",
			requirements: () => V.specialClothesEvents?.includes("temple_solicitation"),
			hint: "사원을 위한 기부금을 성공적으로 모금한다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 10,
			icon: "clothes/evangelist_uniform.png",
		},
		temple_confessor: {
			text: "confessor's uniforms",
			requirements: () => V.temple_confessor_intro,
			hint: "사원의 가장 높은 존재와 안면을 튼다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 12,
			icon: "clothes/confessor_robes.png",
		},
		temple_exorcist: {
			text: "exorcist's uniforms",
			requirements: () => V.jordan_ritual_dance === 4,
			hint: "이교도 의식을 방해한다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 12,
			icon: "clothes/exorcist_cassock.png",
		},
		temple_sparring: {
			text: "sparring uniforms",
			requirements: () => V.prof?.whip >= 1000 || V.prof?.baton >= 1000,
			hint: "사원의 신성한 무기 중 하나를 완벽히 다룬다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 12,
			icon: "clothes/monk's_sparring_habit.png",
		},
		temple_sexy: {
			text: "lewd religious attire",
			requirements: () => V.world_corruption_reduced >= 30,
			hint: "부패를 충분히 제거한다",
			shop: ["forest", "adult"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 12,
			icon: "clothes/sexy_nuns_habit.png",
		},
		holy_stole: {
			text: "holy stole",
			requirements: () => V.grace >= 100,
			hint: "사원에 충분한 헌신을 한다",
			shop: ["forest", "temple"],
			subsetOf: ["temple"],
			feat: true,
			featCost: 4,
			icon: "clothes",
			iconSlot: "neck",
			iconIndex: 19,
			iconColor: "purple",
		},

		// Pendant trio
		pendant: {
			text: "three pendants",
			shop: ["forest"],
			feat: false,
			icon: "altar.gif",
		},
		holy_pendant: {
			text: "holy pendant",
			requirements: () => V.soup_kitchen_known === 1,
			hint: "무료 급식소를 발견한다",
			shop: ["forest", "temple"],
			subsetOf: ["pendant", "temple"],
			feat: true,
			featCost: 15,
			icon: "clothes/holy_pendant.png",
		},
		stone_pendant: {
			text: "stone pendant",
			requirements: () => V.stone_pendant_found === 1,
			hint: "사원의 헐거운 돌멩이 아래를 찾아본다",
			shop: ["forest", "temple"],
			subsetOf: ["pendant", "temple"],
			feat: true,
			featCost: 15,
			icon: "clothes/stone_pendant.png",
		},
		dark_pendant: {
			text: "dark pendant",
			requirements: () => V.loft_known === 1,
			hint: "베일리가 무서워하는 곳을 발견한다",
			shop: ["forest", "temple"],
			subsetOf: ["pendant"],
			feat: true,
			featCost: 15,
			icon: "clothes/dark_pendant.png",
		},

		// Museum and paintings
		historic: {
			text: "collection of historic outfits",
			shop: ["forest"],
			feat: false,
			icon: "museum.png",
		},
		museum_rags: {
			text: "rags from the museum",
			// Second case is for legacy compatibility, because the museum rags were previously feat-locked for some reason
			requirements: () => V.museum_horse_success && V.museum_stool_success || V.feats?.currentSave["Pain Rider"] !== undefined && V.feats?.currentSave.Submerged !== undefined,
			hint: "역사적인 고문도구들을 완벽하게 시연한다",
			shop: ["forest"],
			subsetOf: ["historic"],
			feat: true,
			featCost: 3,
			icon: "clothes/rag_top.png",
		},
		vintage: {
			text: "vintage suits",
			requirements: () => V.museumAntiques?.paintings?.paintingward === "museum",
			hint: "노인장의 회상을 돕는다",
			shop: ["forest"],
			subsetOf: ["historic"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 69,
			iconColor: "forest-green",
			iconAccColor: "tan",
		},
		chain_tunic: {
			text: "chain tunic",
			requirements: () => V.hcEndings?.includes("S"),
			hint: "마녀와 그녀의 간수에 대한 많은 이야기를 알게 된다",
			shop: ["forest"],
			subsetOf: ["historic"],
			feat: true,
			featCost: 50,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 170,
			iconColor: "black",
			iconAccColor: "white",
		},

		// Special event sets
		foreign_school: {
			text: "foreign school clothes",
			requirements: () => V.headdrive === 1,
			hint: "교장 선생님의 비밀을 밝힌다",
			shop: ["forest", "school"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 125,
			iconColor: "blue",
			iconAccColor: "white",
		},
		brothel: {
			text: "dancer's outfits",
			requirements: () => V.brothelshowdata?.intro,
			hint: "창관의 쇼에서 주역을 제안받는다",
			shop: ["forest", "adult"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 34,
			iconColor: "red",
		},
		chef: {
			text: "chef uniform",
			requirements: () => V.chef_state >= 9,
			hint: "당신의 크림 빵으로 유명해진다",
			shop: ["forest"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 9,
			iconColor: "white",
			iconAccColor: "white",
		},
		hookah: {
			text: "esoteric spectacles",
			requirements: () => V.hookah_state >= 2,
			hint: "가게의 주인 자리를 물려받는다",
			shop: ["forest"],
			feat: true,
			featCost: 10,
			icon: "clothes",
			iconSlot: "face",
			iconIndex: 31,
			iconColor: "black",
		},
		islander: {
			text: "islander mask",
			requirements: () => V.islander_mask >= 100,
			hint: "타향의 목재로 물건을 만든다",
			shop: ["forest"],
			subsetOf: ["mask"],
			feat: true,
			featCost: 5,
			icon: "clothes/islander_mask.png",
		},
		fox_mask: {
			text: "fox mask",
			requirements: () => V.auriga_artefact !== undefined,
			hint: "특권층의 파티에 참석한다",
			shop: ["forest"],
			subsetOf: ["mask", "fox"],
			feat: true,
			featCost: 5,
			icon: "clothes/foxmask.png",
		},
		fedora: {
			text: "fedora",
			requirements: () => V.specialClothesEvents?.includes("smuggling"),
			hint: "바텐더 일을 하며 이야기를 엿듣고 진행 중인 범죄의 존재를 알아낸다",
			shop: ["forest"],
			feat: true,
			featCost: 2,
			icon: "clothes/fedora.png",
		},
		catsuit: {
			text: "catsuit",
			requirements: () => V.catsuit_found,
			hint: "수송품을 약탈한다",
			shop: ["forest"],
			feat: true,
			featCost: 15,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 75,
			iconColor: "black",
		},
		janet: {
			text: "janet dress",
			requirements: () => V.janet_book_read === 1,
			hint: "고전적인 로맨스 속에서 자신을 잃는다",
			shop: ["forest"],
			feat: true,
			featCost: 5,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 189,
			iconColor: "white",
			iconAccColor: "red",
		},
		dance_studio: {
			text: "swan lake dress",
			requirements: () => V.danceStudio?.jobOffered,
			hint: "특별한 춤 일자리를 제안받는다",
			shop: ["forest"],
			feat: true,
			featCost: 5,
			icon: "dancestudio.png",
		},
		sage_witch_hat: {
			text: "strange witch hat",
			requirements: () => V.gwylanSeen?.includes("ritual_sex"),
			hint: "사적인 회합에 참여한다",
			shop: ["forest"],
			feat: false,
			icon: "clothes/witch_hat_sage.png",
		},
		familiar_collar: {
			text: "familiar collar",
			requirements: () => V.gwylanSeen?.includes("familiar_collar"),
			hint: "마침내, 당신의 것이 되었다",
			shop: ["forest"],
			feat: false,
			icon: "clothes/familiar_collar.png",
		},

		// Misc
		shrine: {
			text: "spirit mask and shrine robe",
			requirements: () => V.fox >= 6 || V.moorLuck !== undefined,
			hint: "충분히 여우가 되거나, 황무지의 외딴 사원에 기도한다",
			shop: ["forest"],
			subsetOf: ["fox", "transformation"],
			feat: true,
			featCost: 15,
			icon: "clothes",
			iconSlot: "head",
			iconIndex: 48,
			iconColor: "white",
			iconAccColor: "red",
		},
		jasper: {
			text: "jasper pendant",
			requirements: () => V.gwylanSeen?.includesAny("request_gold_accessories", "chastity_gold"),
			hint: "즉석 과학 수업을 듣는다",
			shop: ["forest"],
			subsetOf: ["fox"],
			feat: true,
			featCost: 15,
			icon: "clothes",
			iconSlot: "neck",
			iconIndex: 39,
		},
		butterfly: {
			text: "butterfly costume",
			requirements: () => V.backgroundTraits?.includes("plantlover"),
			hint: "꿀에 중독된다",
			shop: ["forest"],
			feat: true,
			featCost: 10,
			icon: "clothes",
			iconSlot: "upper",
			iconIndex: 192,
			iconColor: "tangerine",
		},
		succubus: {
			text: "succubus costume",
			requirements: () => V.demon >= 6 || Object.values(V.virginTaken)?.flat().length >= 15,
			hint: "충분히 불순해지거나, 15명의 첫 경험을 취한다",
			shop: ["forest"],
			subsetOf: ["transformation"],
			feat: true,
			featCost: 15,
			icon: "clothes",
			iconSlot: "lower",
			iconIndex: 183,
			iconColor: "purple",
		},
		// The flowers set is made up of items that all have different unlock requirements, which individually wouldn't really be worth an entire conversation option or feat entry.
		flowers: {
			text: "flowers",
			shop: ["forest"],
			feat: true,
			featCost: 3,
			icon: "clothes/flower_crown.png"
		},

		// Sets for talking only
		transformation: {
			text: "collection of eerie accessories",
			shop: ["forest"],
			subsetOf: ["fox"],
			feat: false,
			icon: "transformation.png"
		},
		mask: {
			text: "masks",
			shop: ["forest"],
			subsetOf: ["fox"],
			feat: false,
			icon: "clothes/islander_mask.png"
		},
		fox: {
			text: "fox-themed items",
			shop: ["forest"],
			feat: false,
			icon: "clothes/foxmask.png",
		},
	};
}
window.initSpecialClothes = initSpecialClothes;

function specialClothesUpdate() {
	// Runs in start2 and when $objectVersion.specialClothes is incremented in backcomp.
	if (V.specialClothes === undefined || !Array.isArray(V.specialClothes)) {
		// Initialise from setup, or convert old system to new system
		V.specialClothes = [];
		setup.specialClothes.forEach(item => {
			if (!V.specialClothes.some(entry => entry.name === item.name)) V.specialClothes.push({ name: item.name, unlocked: 0 });
		});
	}

	// This array is used for any clothes that can't conveniently use existing story vars for unlock requirements or alt unlocks. Keeps them all in one place. Do not abuse this to be lazy. >:( -->
	if (!V.specialClothesEvents) V.specialClothesEvents = [];

	/* The following lines are for backwards compatibility with older saves.
	 * When adding new items, don't forget to also update $objectVersion.specialClothes in versionUpdate.
	 * Cleared out as of version 0.5.5.0, as the object was changed to an array and the above initialisation was forced to re-run. Use below as template for adding any new clothes.
	 * Remember to add the clothes to 'initSpecialClothes' above, with the requirements and groupings needed.
	 */

	if (!V.specialClothes.some(item => item.name === "flower crown")) V.specialClothes.push({ name: "flower crown", unlocked: 0 });
	if (!V.specialClothes.some(item => item.name === "sage witch hat")) V.specialClothes.push({ name: "sage witch hat", unlocked: 0 });
	if (!V.specialClothes.some(item => item.name === "jasper pendant")) V.specialClothes.push({ name: "jasper pendant", unlocked: 0 });
	if (!V.specialClothes.some(item => item.name === "familiar collar")) V.specialClothes.push({ name: "familiar collar", unlocked: 0 });

	// Delete any entries that do not have a matching setup object.
	V.specialClothes.forEach((clothing, index) => {
		if (!setup.specialClothes.some(item => item.name === clothing.name)) V.specialClothes.deleteAt(index);
	});
}
window.specialClothesUpdate = specialClothesUpdate;
DefineMacro("specialClothesUpdate", specialClothesUpdate);

function specialClothesRefresh() {
	/* Runs on version update, when entering the forest shop, and when new clothes are unlocked in-passage */
	/* values:
	 * 0: locked
	 * 1: unlocked with cheats but true unlock requirements not met
	 * 2: unlocked with feat booster but true unlock requirements not met (this value and up contributes to Gwylan love)
	 * 3: unlocked by meeting requirement or event trigger (can then be talked about with Gwylan, which provides more love)
	 * see 'initSpecialClothes' above for group names and requirements
	 */

	// For any clothes with unlock value <= 2, set to 3 if requirements have been met
	V.specialClothes
		.filter(clothing => clothing.unlocked <= 2)
		.forEach(clothing => {
			const baseItem = setup.specialClothes.find(item => item.name === clothing.name);
			// Check if the individual item has its own requirement first
			if (baseItem?.requirements && baseItem.requirements()) {
				clothing.unlocked = 3;
			}
			// Then check set requirements
			baseItem?.sets.forEach(set => {
				const baseItemSet = setup.specialClothesSets[set];
				if (baseItemSet?.requirements && baseItemSet.requirements()) clothing.unlocked = 3;
			});
		});

	if (getUnlockedSpecialSets().length >= getSpecialSets().length / 2) wikifier("earnFeat", "'Curious Attire'");
	if (getUnlockedSpecialSets().length >= getSpecialSets().length) wikifier("earnFeat", "'Wicked Wardrobe'");

	statusCheck("Gwylan");
}
window.specialClothesRefresh = specialClothesRefresh;
DefineMacro("specialClothesRefresh", specialClothesRefresh);

/**
 * @param {"item" | "set"} nameSpace Whether to unlock clothes by individual name or by set
 * @param {string} name Clothing name or set name
 * @param {1 | 2 | 3} unlockLevel Unlock level, 1 = bypassed with cheats, 2 = unlocked with feat booster, 3 = unlocked with requirement or by in-passage call
 */
function specialClothesUnlock(nameSpace = "set", name, unlockLevel = 3) {
	let toUnlock = [];
	const toUnlockMessages = [];
	if (nameSpace === "set") {
		if (!getSpecialSets().includes(name)) {
			return Errors.report(`ERROR: invalid ${nameSpace} name ${name} provided for special clothing unlock function`);
		}
		// Array of all special clothes that have provided type
		toUnlock = setup.specialClothes.filter(special => special.sets.includes(name));
	} else if (nameSpace === "item") {
		if (!setup.specialClothes.some(special => special.name === name)) {
			return Errors.report(`ERROR: invalid ${nameSpace} name ${name} provided for special clothing unlock function`);
		}
		// Array of 1 with only the special clothes item with the provided name
		toUnlock.push(setup.specialClothes.find(special => special.name === name));
	} else {
		return Errors.report(`ERROR: invalid ${nameSpace} name ${name} provided for special clothing unlock function`);
	}

	// Unlock clothing items
	toUnlock.forEach(item => {
		const newItem = V.specialClothes.find(clothes => clothes.name === item?.name && clothes.unlocked < unlockLevel);
		if (newItem) {
			newItem.unlocked = unlockLevel;
			toUnlockMessages.pushUnique(newItem.name);
		}
	});

	const group = nameSpace === "set" ? name : null;
	specialClothesRefresh();
	return specialClothesUnlockText(toUnlockMessages, group);
}
window.specialClothesUnlock = specialClothesUnlock;
DefineMacroS("specialClothesUnlock", specialClothesUnlock);

/**
 * @param {string[]} toUnlock Array of items being unlocked
 * @param {string?} group Optional set name
 */
function specialClothesUnlockText(toUnlock, group) {
	let output = "";
	if (V.forest_shop_intro === 1) {
		if (toUnlock.length) {
			output += "<<shopicon 'forest'>>";
			if (group === "halloween") {
				output += '<span class="orange">할로윈 의상</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br>';
				return output;
			}
			if (group === "christmas") {
				output += '<span class="green">크리스마스 의상</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br>';
				return output;
			}
			if (group === "valentines") {
				output += `<span class="pink">발렌타인 데이 의상</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br>`;
				return output;
			}
			if (toUnlock.length === 1) {
				const clothingObject = setup.clothes.all.find(item => item.name === toUnlock[0]);
				const pluralText = clothingObject.plural === 1 ? "" : "";
				if (clothingObject.name === "familiar collar") {
					output += `<span class="forest-green">당신의 목걸이</span>를 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다. 당신이 원하든, 그렇지 않든.</span><br><br>`;
					return output;
				}
				output +=
					'<span class="gold">' +
					"숲 속 가게에서 새로운 옷을 구매할 수 있게 되었다!</span><br><br>";
				return output;
			}


			
			const fullSetBeingUnlocked =
				group && setup.specialClothes.filter(clothes => clothes.sets.includes(group)).every(item => toUnlock.includes(item.name));
			if (fullSetBeingUnlocked) {
				switch (group) {
					case "witch":
					case "vampire":
					case "mummy":
					case "scarecrow":
					case "skeleton":
					case "pumpkin":
						output +=
							'<span class="orange">' + group + ' 코스튬</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "future_suit":
						output +=
							'<span class="orange">초현대적 바디수트</span>를 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "foreign_school":
						output += '<span class="blue">외국 학교의 교복</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "brothel":
						output += `<span class="lewd">벨리 댄서 상의와 하렘 조끼</span>를 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>`;
						break;
					case "underground_farm":
						output +=
							'<span class="lewd">소 무늬 의류와 카우벨</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다.</span><br><br>';
						break;
					case "chain_tunic":
						output += '<span class="grey">낡은 사슬 갑옷 세트</span>를 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "vintage":
						output += '<span class="green">빈티지 정장</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "temple_initiate":
						output += `<span class="purple">입문자의 로브</span>를 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>`;
						break;
					case "temple_monk_and_nun":
						output += '<span class="gold">수도사복과 수녀복</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "temple_confessor":
						output += `<span class="black">고해사제의 제복</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다...</span><br><br>`;
						break;
					case "temple_sexy":
						output +=
							'<span class="lewd">섹시한 사제복과 수녀복</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "butterfly":
						output += '<span class="teal">나비 의상</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "succubus":
						output += '<span class="lewd">서큐버스 의상</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					case "bird":
						output += '<span class="brown">깃털 머리 장식</span>을 <span class="gold">숲 속 가게에서 구매할 수 있게 되었다!</span><br><br>';
						break;
					default:
						output +=
							'<span class="gold">숲 속 가게의 새 옷이 해금되었다:</span> <span class="teal">' +
							formatList(toUnlock, " 그리고 ", true).toUpperFirst() +
							"!</span><br><br>";
						break;
				}
			} else {
				output +=
					'<span class="gold">숲 속 가게의 새 옷이 해금되었다: </span> <span class="teal">' +
					formatList(toUnlock, " 그리고 ", true).toUpperFirst() +
					"!</span><br><br>";
			}
		}
	}
	return output;
}

/**
 * @param {Function?} filterfn array filter
 */
function getSpecialSets(filterfn = null) {
	if (typeof filterfn !== "function") filterfn = () => true;
	const specialSets = Object.keys(setup.specialClothesSets);
	const filteredSets = specialSets.filter(set => filterfn(setup.specialClothesSets[set]));

	return filteredSets;
}
window.getSpecialSets = getSpecialSets;

/**
 * @param {Array} from Which array to use. In feats.js, this is used on a converted special clothes name list for importing feats from saves that use the old system.
 */
function getUnlockedSpecialSets(from = V.specialClothes.filter(c => c.unlocked >= 3).map(c => c.name)) {
	const groupTracker = new Map(); // { total: X, unlocked: Y }

	setup.specialClothes.forEach(item => {
		item.sets.forEach(group => {
			if (!groupTracker.has(group)) groupTracker.set(group, { total: 0, unlocked: 0 });
			const groupData = groupTracker.get(group);
			groupData.total++;
			if (from.includes(item.name)) groupData.unlocked++;
		});
	});

	return [...groupTracker].flatMap(([groupName, { total, unlocked }]) => (unlocked === total ? groupName : []));
}
window.getUnlockedSpecialSets = getUnlockedSpecialSets;

// Does NOT need to be updated with new clothes. Adds spaces to old spaceless names to actually match clothing setup names. Required for updating localStorage object.
function updateSpecialClothesNames(object) {
	const ConversionObject = {
		name: {
			witchdress: "witch dress",
			witchhat: "witch hat",
			witchshoes: "witch shoes",
			broomstick: "broomstick",
			vampirejacket: "vampire jacket",
			classyvampirejacket: "classy vampire jacket",
			mummyfacewrap: "mummy facewrap",
			mummytop: "mummy top",
			mummyskirt: "mummy skirt",
			scarecrowshirt: "scarecrow shirt",
			scarecrowhat: "scarecrow hat",
			skeletonmask: "skeleton mask",
			skeletonoutfit: "skeleton outfit",
			futuristicbodysuit: "futuristic bodysuit",
			minipumpkin: "mini pumpkin",
			christmasdress: "christmas dress",
			christmasshirt: "christmas shirt",
			christmastrousers: "christmas trousers",
			jinglebelldress: "jingle-bell dress",
			sleevelessjinglebelldress: "sleeveless jingle-bell dress",
			christmashat: "christmas hat",
			christmaslegwarmers: "christmas leg warmers",
			minisnowman: "mini snowman",
			rose: "rose",
			serafuku: "serafuku",
			classicserafuku: "classic serafuku",
			gakuran: "gakuran",
			sailorribbon: "sailor ribbon",
			slutshirt: "slut shirt",
			"bellydancer'stop": "belly dancer's top",
			"bellydancer'sbottoms": "belly dancer's bottoms",
			"bellydancer'sveil": "belly dancer's veil",
			"bellydancer'sshoes": "belly dancer's shoes",
			haremvest: "harem vest",
			harempants: "harem pants",
			loincloth: "loincloth",
			chefhat: "chef hat",
			fedora: "fedora",
			daisy: "daisy",
			catsuit: "catsuit",
			holypendant: "holy pendant",
			darkpendant: "dark pendant",
			stonependant: "stone pendant",
			holystole: "holy stole",
			cowbell: "cow bell",
			cowbra: "cow bra",
			cowpanties: "cow panties",
			cowsocks: "cow socks",
			cowsleeves: "cow sleeves",
			featheredhairclip: "feathered hair clip",
			esotericspectacles: "esoteric spectacles",
			spiritmask: "spirit mask",
			shrinemaidenrobes: "shrine maiden robes",
			ragtop: "rag top",
			ragskirt: "rag skirt",
			islandermask: "islander mask",
			foxmask: "fox mask",
			"sexynun'shabit": "sexy nun's habit",
			"sexynun'sgloves": "sexy nun's gloves",
			"sexynun'sstockings": "sexy nun's stockings",
			"sexynun'sveil": "sexy nun's veil",
			"sexynun'sornateveil": "sexy nun's ornate veil",
			"sexypriest'svestments": "sexy priest's vestments",
		},
		convert(obj) {
			return Object.keys(obj).map(key => this.name[key]);
		},
	};
	return ConversionObject.convert(object);
}
window.updateSpecialClothesNames = updateSpecialClothesNames;
