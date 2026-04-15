function trinit_plants()
{
	if (!setup.trPlants)
	{
		setup.trPlants = [
				{
					name: "red_rose",
					plural: "red roses",
					name_ko: "붉은 장미",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "white_rose",
					plural: "white roses",
					name_ko: "백장미",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "orchid",
					plural: "orchids",
					name_ko: "난초",
					post:1,
					unit_ko: "촉",
					unit_post:0,
				},

				{
					name: "daisy",
					plural: "daisies",
					name_ko: "데이지",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "tulip",
					plural: "tulips",
					name_ko: "튤립",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lotus",
					plural: "lotus",
					name_ko: "연꽃",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lily",
					plural: "lilies",
					name_ko: "백합",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "poppy",
					plural: "poppies",
					name_ko: "양귀비",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},
				
				{
					name: "apple",
					plural: "apples",
					name_ko: "사과",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "orange",
					plural: "oranges",
					name_ko: "오렌지",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "banana",
					plural: "bananas",
					name_ko: "바나나",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lemon",
					plural: "lemons",
					name_ko: "레몬",
					post:0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "blood_lemon",
					plural: "blood lemons",
					name_ko: "블러드 레몬",
					post:0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "pear",
					plural: "pears",
					name_ko: "배",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "strawberry",
					plural: "strawberries",
					name_ko: "딸기",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "peach",
					plural: "peaches",
					name_ko: "복숭아",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "plum",
					plural: "plums",
					name_ko: "자두",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "mushroom",
					plural: "mushrooms",
					name_ko: "버섯",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "wolfshroom",
					plural: "wolfshrooms",
					name_ko: "늑대 버섯",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "wild_honeycomb",
					plural: "wild honeycombs",
					name_ko: "야생 벌집",
					post:0,
					unit_ko: "개",
					unit_post:1,
			},

				{
					name: "wild_carrot",
					plural: "carrots",
					name_ko: "야생 당근",
					post: 0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "onion",
					plural: "onions",
					name_ko: "양파",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "garlic_bulb",
					plural: "garlic bulbs",
					name_ko: "마늘",
					post: 2,
					unit_ko: "통",
					unit_post:0,
				},

				{
					name: "potato",
					plural: "potatoes",
					name_ko: "감자",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "strange_flower",
					plural: "strange flowers",
					name_ko: "이상한 꽃",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "truffle",
					plural: "truffles",
					name_ko: "송로버섯",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "bottle_of_milk",
					plural: "bottles of milk",
					name_ko: "우유를 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "chicken_egg",
					plural: "chicken eggs",
					name_ko: "계란",
					post: 0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "bottle_of_breast_milk",
					plural: "bottles of breast milk",
					name_ko: "모유를 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "bottle_of_semen",
					plural: "bottles of semen",
					name_ko: "정액을 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "cabbage",
					plural: "cabbages",
					name_ko: "양배추",
					post: 1,
					unit_ko: "포기",
					unit_post:1,
				},

				{
					name: "turnip",
					plural: "turnips",
					name_ko: "순무",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "broccoli",
					plural: "broccoli",
					name_ko: "브로콜리",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "ghostshroom",
					plural: "ghostshrooms",
					name_ko: "유령버섯",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "blackberry",
					plural: "blackberries",
					name_ko: "블랙베리",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "carnation",
					plural: "carnations",
					name_ko: "카네이션",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "bird_egg",
					plural: "bird eggs",
					name_ko: "새 알",
					post: 2,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "baby_bottle_of_breast_milk",
					plural: "baby bottles of breast milk",
					name_ko: "모유를 넣은 젖병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "baby bottle of breast milk",	/* .singular로 _ 없는 표현이 있어 추가: 필요시 통합할것 */
					plural: "baby bottles of breast milk",
					name_ko: "모유를 넣은 젖병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "plumeria",
					plural: "plumerias",
					name_ko: "플루메리아",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "oyster_pearl",
					plural: "oyster pearls",
					name_ko: "진주",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},
				{
					name: "oyster pearl",	/* .singular로 _ 없는 표현이 있어 추가: 필요시 통합할것 */
					plural: "oyster pearls",
					name_ko: "진주",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "bread",
					plural: "pieces of bread",
					name_ko: "빵",
					post:0,
					unit_ko: "덩이",
					unit_post:0,
				},

				{
					name: "flour",
					plural: "spoonfuls of flour",
					name_ko: "밀가루",
					post:1,
					unit_ko: "컵",
					unit_post:1,
				},

				{
					name: "salt",
					plural: "pinches of salt",
					name_ko: "소금",
					post:0,
					unit_ko: "컵",
					unit_post:0,
				},

				{
					name: "vegetable_oil",
					plural: "spoonfuls of vegetable oil",
					name_ko: "야채유",
					post:1,
					unit_ko: "병",
					unit_post:1,
				},

				{
					name: "pizza",
					plural: "pizzas",
					name_ko: "피자",
					post:1,
					unit_ko: "판",
					unit_post:1,
				},

				{
					name: "tomato",
					plural: "tomatoes",
					name_ko: "토마토",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "cheese",
					plural: "pieces of cheese",
					name_ko: "치즈",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "macaroni_cheese",
					plural: "servings of macaroni and cheese",
					name_ko: "마카로니 앤 치즈",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "pasta",
					plural: "servings of pasta",
					name_ko: "파스타",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "cauliflower_cheese",
					plural: "servings of cauliflower cheese",
					name_ko: "콜리플라워 치즈",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "wheat",
					plural: "cups of wheat",
					name_ko: "밀",
					post:2,
					unit_ko: "컵",
					unit_post:2,
				},

				{
					name: "prawn_bisque",
					plural: "servings of prawn bisque",
					name_ko: "새우 비스크",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "cream",
					plural: "spoonfuls of cream",
					name_ko: "크림",
					post:0,
					unit_ko: "스푼",
					unit_post:0,
				},

				{
					name: "chelsea_bun",
					plural: "Chelsea buns",
					name_ko: "첼시 번",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "honey",
					plural: "spoonfuls of honey",
					name_ko: "꿀",
					post:2,
					unit_ko: "병",
					unit_post:2,
				},

				{
					name: "butter",
					plural: "spoonfuls of butter",
					name_ko: "버터",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "naan_bread",
					plural: "pieces of naan bread",
					name_ko: "난",
					post:0,
					unit_ko: "개",
					unit_post:0,
				},

				{
					name: "pastry",
					plural: "pieces of pastry",
					name_ko: "페이스트리",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "quiche",
					plural: "servings of quiche",
					name_ko: "키슈",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "bacon",
					plural: "rashers of bacon",
					name_ko: "베이컨",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "mince_pie",
					plural: "mince pies",
					name_ko: "민스파이",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "sugar",
					plural: "spoonfuls of sugar",
					name_ko: "설탕",
					post:0,
					unit_ko: "컵",
					unit_post:0,
				},

				{
					name: "sausage_roll",
					plural: "sausage rolls",
					name_ko: "소세지 롤",
					post:2,
					unit_ko: "접시",
					unit_post:2,
				},

				{
					name: "sausage",
					plural: "sausages",
					name_ko: "소세지",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "potato_pancake",
					plural: "potato pancakes",
					name_ko: "감자 팬케이크",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "onion_bhaji",
					plural: "onion bhajis",
					name_ko: "양파 바지",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "chilli_pepper",
					plural: "chilli peppers",
					name_ko: "고추",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "samosa",
					plural: "samosas",
					name_ko: "사모사",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "sweet_and_sour_chicken",
					plural: "servings of sweet and sour chicken",
					name_ko: "스위트 앤 사우어 치킨",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "chicken",
					plural: "servings of chicken",
					name_ko: "닭",
					post:0,
					unit_ko: "마리",
					unit_post:0,
				},

				{
					name: "pepper",
					plural: "peppers",
					name_ko: "피망",
					post:0,
					unit_ko: "개",
					unit_post:0,
				},

				{
					name: "kedgeree",
					plural: "servings of kedgeree",
					name_ko: "케저리",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "rice",
					plural: "cups of rice",
					name_ko: "쌀",
					post:2,
					unit_ko: "컵",
					unit_post:2,
				},

				{
					name: "haddock",
					plural: "haddock",
					name_ko: "해덕",
					post:0,
					unit_ko: "마리",
					unit_post:0,
				},

				{
					name: "honeyed_pork",
					plural: "servings of honeyed pork",
					name_ko: "꿀로 졸인 돼지고기",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "beef_wellington",
					plural: "servings of beef wellington",
					name_ko: "비프 웰링턴",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "salmon_wellington",
					plural: "servings of salmon wellington",
					name_ko: "연어 웰링턴",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "hamburger",
					plural: "hamburgers",
					name_ko: "햄버거",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "cheeseburger",
					plural: "cheeseburgers",
					name_ko: "치즈버거",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "chips",
					plural: "packets of chips",
					name_ko: "감자칩",
					post:0,
					unit_ko: "봉지",
					unit_post:0,
				},

				{
					name: "cheese_topped_trout",
					plural: "servings of cheese topped trout",
					name_ko: "치즈를 얹은 송어",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "salmon",
					plural: "salmon",
					name_ko: "연어",
					post:1,
					unit_ko: "마리",
					unit_post:1,
				},

				{
					name: "trout",
					plural: "trout",
					name_ko: "송어",
					post:1,
					unit_ko: "마리",
					unit_post:1,
				},

				{
					name: "spaghetti_bolognese",
					plural: "servings of spaghetti bolognese",
					name_ko: "볼로네제 스파게티",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "lasagne",
					plural: "servings of lasagne",
					name_ko: "라자냐",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "carbonara",
					plural: "servings of carbonara",
					name_ko: "카르보나라",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "chicken_tikka_masala",
					plural: "servings of chicken tikka masala",
					name_ko: "치킨 티카 마살라",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "chilli_con_carne",
					plural: "servings of chilli con carne",
					name_ko: "칠리 콘 카르네",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "rich_biscuit",
					plural: "rich biscuits",
					name_ko: "리치 비스켓",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "shortbread",
					plural: "pieces of shortbread",
					name_ko: "쇼트브레드",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "melting_moment",
					plural: "melting moments",
					name_ko: "멜팅 모먼츠",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "choc_chip_cookie",
					plural: "chocolate chip cookies",
					name_ko: "초콜릿 칩 쿠키",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "cocoa_powder",
					plural: "cups of cocoa powder",
					name_ko: "코코아 파우더",
					post:1,
					unit_ko: "컵",
					unit_post:1,
				},

				{
					name: "chocolate",
					plural: "slabs of chocolate",
					name_ko: "초콜릿",
					post:0,
					unit_ko: "개",
					unit_post:0,
				},

				{
					name: "jammie_dodger",
					plural: "jammie dodgers",
					name_ko: "재미 도저",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "jam",
					plural: "cups of jam",
					name_ko: "잼",
					post:0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "apple_strudel",
					plural: "apple strudels",
					name_ko: "사과 슈트루델",
					post:2,
					unit_ko: "접시",
					unit_post:2,
				},

				{
					name: "soufflé",
					plural: "soufflés",
					name_ko: "수플레",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "tart",
					plural: "tarts",
					name_ko: "타르트",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "lemon_meringue_pie",
					plural: "lemon meringue pies",
					name_ko: "레몬 머랭 파이",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "sponge_cake",
					plural: "sponge cakes",
					name_ko: "스펀지 케이크",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "swiss_roll",
					plural: "Swiss rolls",
					name_ko: "스위스 롤",
					post:2,
					unit_ko: "접시",
					unit_post:2,
				},

				{
					name: "scone",
					plural: "scones",
					name_ko: "스콘",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "brownie",
					plural: "brownies",
					name_ko: "브라우니",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "carrot_cake",
					plural: "carrot cakes",
					name_ko: "당근 케이크",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "crème_brulee",
					plural: "pots of crème brulee",
					name_ko: "크렘브륄레",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "date",
					plural: "dates",
					name_ko: "대추",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "sticky_toffee_pudding",
					plural: "sticky toffee puddings",
					name_ko: "끈적한 토피 푸딩",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "chicken_vindaloo",
					plural: "servings of chicken vindaloo",
					name_ko: "치킨 반달루",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "flapjack",
					plural: "flapjack squares",
					name_ko: "플랩 잭",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "cherry",
					plural: "cherries",
					name_ko: "체리",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "belgian_bun",
					plural: "Belgian buns",
					name_ko: "벨기에 번",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "lime",
					plural: "limes",
					name_ko: "라임",
					post:0,
					unit_ko: "개",
					unit_post:0,
				},

				{
					name: "linguine",
					plural: "servings of linguine",
					name_ko: "링귀니",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "steak",
					plural: "servings of steak",
					name_ko: "스테이크",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "full_english_breakfast",
					plural: "full English breakfasts",
					name_ko: "영국식 정통 아침식사",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "apple_crumble",
					plural: "servings of apple crumble",
					name_ko: "애플 크럼블",
					post:2,
					unit_ko: "접시",
					unit_post:2,
				},

				{
					name: "bakewell_tart",
					plural: "bakewell tarts",
					name_ko: "베이크웰 타르트",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "cod",
					plural: "cod",
					name_ko: "대구",
					post:1,
					unit_ko: "마리",
					unit_post:1,
				},

				{
					name: "fish_and_chips",
					plural: "servings of fish and chips",
					name_ko: "피쉬 앤 칩스",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "clam",
					plural: "clams",
					name_ko: "조개",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "clam_chowder",
					plural: "servings of clam chowder",
					name_ko: "크램 차우더",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},{
					name: "cheese_and_crackers",
					plural: "servings of cheese and crackers",
					name_ko: "치즈 앤 크래커",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "bangers_and_mash",
					plural: "servings of bangers and mash",
					name_ko: "소세지와 으깬 감자",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "yorkshire_pudding",
					plural: "yorkshire puddings",
					name_ko: "요크셔 푸딩",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "stuffing",
					plural: "stuffing balls",
					name_ko: "스터핑",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "roast_dinner",
					plural: "servings of roast dinner",
					name_ko: "선데이 로스트",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "crumpet",
					plural: "crumpets",
					name_ko: "크럼핏",
					post:1,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "orange_juice",
					plural: "glasses of orange juice",
					name_ko: "오렌지 주스",
					post:1,
					unit_ko: "잔",
					unit_post:1,
				},

				{
					name: "lemonade",
					plural: "glasses of lemonade",
					name_ko: "레몬에이드",
					post:1,
					unit_ko: "잔",
					unit_post:1,
				},

				{
					name: "banana_bread",
					plural: "loaves of banana bread",
					name_ko: "바나나 빵",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "red_wine",
					plural: "bottles of red wine",
					name_ko: "레드와인",
					post:0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "white_wine",
					plural: "bottle of white wine",
					name_ko: "화이트와인",
					post:0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "poached_pear",
					plural: "poached pears",
					name_ko: "데친 배",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "peach_panzanella",
					plural: "servings of peach panzanella",
					name_ko: "복숭아 팡젤넬라",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "plum_pudding",
					plural: "servings of plum pudding",
					name_ko: "자두 푸딩",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "spinach",
					plural: "spinach leaves",
					name_ko: "시금치",
					post:1,
					unit_ko: "단",
					unit_post:1,
				},

				{
					name: "salad",
					plural: "servings of salad",
					name_ko: "샐러드",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "arancini",
					plural: "arancini balls",
					name_ko: "아란치니",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "wolfbrew",
					plural: "bottles of wolfbrew",
					name_ko: "울프 브루",
					post:1,
					unit_ko: "잔",
					unit_post:1,
				},

				{
					name: "ghostbrew",
					plural: "bottles of ghostbrew",
					name_ko: "고스트 브루",
					post:1,
					unit_ko: "잔",
					unit_post:1,
				},

				{
					name: "beef",
					plural: "servings of beef",
					name_ko: "소고기",
					post:1,
					unit_ko: "덩이",
					unit_post:1,
				},

				{
					name: "pork",
					plural: "servings of pork",
					name_ko: "돼지고기",
					post:1,
					unit_ko: "덩이",
					unit_post:1,
				},
				
				{
					name: "cauliflower",
					plural: "cauliflowers",
					name_ko: "콜리플라워",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "oats",
					plural: "cups of oats",
					name_ko: "귀리",
					post:1,
					unit_ko: "컵",
					unit_post:1,
				},

				{
					name: "prawn",
					plural: "prawns",
					name_ko: "새우",
					post:1,
					unit_ko: "마리",
					unit_post:1,
				},

				{
					name: "omelette",
					plural: "omelettes",
					name_ko: "오믈렛",
					post:0,
					unit_ko: "접시",
					unit_post:0,
				},

				{
					name: "porridge",
					plural: "servings of porridge",
					name_ko: "포리지",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "turnip_soup",
					plural: "servings of turnip soup",
					name_ko: "순무 수프",
					post:1,
					unit_ko: "접시",
					unit_post:1,
				},

				{
					name: "valentines_chocolate",
					plural: "slabs of valentines chocolate",
					name_ko: "발렌타인 초콜릿",
					post:0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "pink_rose",
					plural: "pink roses",
					name_ko: "분홍 장미",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},
		];
	}
}
window.trinit_plants = trinit_plants;
