const events = [
	{
		// event name for debugging and logging failures
		name: "school day",
		// conditions for the reminder to show up
		// must be specific enough to no longer trigger once the event is actually attended. mandatory.
		condition() {
			return Time.schoolDay && Object.keys(V.daily.school.attended).length < 5;
		},
		// arriving at any time during this hour brings no penalties to the event
		starthour: 8,
		// the last hour during which the event can still be attended. puts event in top priority tier during that hour. shows a failure message after that hour if condition() is still true.
		endhour: 14,
		// bigger number === higher chance of it being pulled. default is 1.
		priority: 5, // prioritize avoiding truancy
		// text shown in twine markup while event is scheduled
		text: "<<schoolday>>",
		// text shown if condition() is still met, but it's past the time to attend
		failuretext:
			"당신은 오늘 <<print Object.keys(V.daily.school.attended).length === 4 ? '한 개의' : `<<print 5 - Object.keys(V.daily.school.attended).length>>` + '개의'>> 수업을 빼먹었다.",
	},
	{
		// example of a lazy event that will still work
		name: "tomorrow",
		condition() {
			return Time.isSchoolDay(Time.tomorrow) && (!Time.schoolDay || Time.hour > 14);
		},
		text: "내일은 학교에 가야 한다.",
	},
	{
		// fallback event when no others are available
		name: "no school",
		condition() {
			// other school-related events have higher priority anyway
			return true;
		},
		text: "내일은 학교가 쉰다.",
		priority: 0,
	},
	{
		name: "avery date",
		condition() {
			return V.avery_mansion?.schedule !== "away" && V.averydate === 1 && V.averydatedone !== 1 && V.averydateattended !== 1 && Time.weekDay === 7;
		},
		starthour: 20,
		endhour: 20,
		priority: 4,
		text: "당신은 에이버리와 <<print $avery_mansion ? '저택 차고에서': '도무스 가에서'>> <<if Time.hour is 20>><span class='gold'>지금</span> 만나기로 했다.<<else>><<ampm 20 00>>에 만나기로 했다.<</if>>",
		failuretext: "당신은 에이버리와의 데이트에 가지 않았다.",
	},
	{
		name: "avery valentines date",
		condition() {
			return V.avery_valentines?.invite && !V.avery_valentines.done && Time.month === 2 && Time.monthDay === 14;
		},
		get starthour() {
			return V.avery_mansion ? 21 : 20;
		},
		endhour: 24,
		priority: 4,
		text: "당신은 에이버리와 <<if $avery_mansion>>저택 차고에서 <<ampm 21 00>>에<<elseif Time.hour lt 20>>도무스 가에서 <<ampm 20 00>>에<</if>> <span class='pink'>발렌타인 데이 데이트를</span> 가기로 했다.",
		failuretext: "당신은 에이버리와의 발렌타인 데이 데이트에 가지 않았다.",
	},
	{
		name: "community service",
		condition() {
			return V.community_service >= 1 && V.community_service_done !== 1;
		},
		starthour: 6,
		endhour: 20,
		priority: 1,
		text: "바브 스트리트의 경찰서는 당신의 사회봉사 참여를 기다리고 있다.",
		failuretext: "당신은 오늘 사회봉사에 참가하지 않았다.",
	},
	{
		name: "harper appointment",
		condition() {
			return (V.harper_appointments.enabled || V.schoolPsych === 1) && Time.weekDay === 6 && V.daily.harperVisit !== 1;
		},
		priority: 2,
		text: "당신은 오늘 병원에서 의사 하퍼의 진료<<print $harper_appointments.enabled ? '를 받을 수' : '를 예약할 수'>> 있다.",
		failuretext: "당신은 의사 하퍼와의 진료<<print $harper_appointments.enabled ? '를' : ' 예약 기회를'>> 놓쳤다.",
	},
	{
		name: "brothel show",
		condition() {
			return V.brothelshowdata.type !== "none" && V.brothelshowdata.intro && Time.weekDay === 6;
		},
		priority: 3,
		text: "당신은 오늘 창관에서 공연해야 한다.",
	},
	{
		name: "escort job",
		condition() {
			const job = V.brothel_escortjob;
			if (!job) return;
			if (job.done || job.escape || job.missed || !job.accept) return;
			return Time.monthDay === new DateTime(job.date).day;
		},
		get starthour() {
			return new DateTime(V.brothel_escortjob.date).hour;
		},
		get endhour() {
			return this.starthour;
		},
		priority: 6,
		text: "당신은 <<ampm `new DateTime(V.brothel_escortjob.date).hour`>>에 사교 모임 동반 업무가 있다.",
		failuretext: "당신은 사교 모임 동반 업무를 놓쳤다.",
	},
	{
		name: "wren heist",
		condition() {
			return V.wrenHeist === true && V.wrenHeistDance.attended !== true;
		},
		starthour: 19,
		endhour: 20,
		priority: 3,
		text: "렌이 당신을 <<ampm 19 00>>부터 <<ampm 21 00>>까지 다뉴브 가에서 기다린다.",
	},
	{
		name: "smugglers",
		condition() {
			return V.smuggler_known === 1 && V.smuggler_timer === 0;
		},
		starthour: 21,
		endhour: 24,
		priority: 5,
		text: "당신은 밀수업자들이 오늘 밤, 자정 전에 <<switch $smuggler_location>><<case 'forest'>>숲을 통해<<case 'sewer'>>오래된 하수도를 통해<<case 'beach'>>해변 근처의 바위에서<<case 'bus'>>버스에서<<default>><</switch>> 밀수품을 운반한다는 소식을 들었다.",
	},
	{
		name: "remy attacc",
		condition() {
			return V.farm_stage >= 7 && V.farm_attack_timer === 0;
		},
		starthour: 21,
		endhour: 24,
		priority: 3,
		text: "레미는 오늘 밤 <<ampm 21 00>>부터 자정까지 농장을 공격할 것이다.",
	},
	{
		name: "adult shop help",
		condition() {
			return (
				V.adultshopprogress < 22 &&
				V.adultshopintro === 1 &&
				V.adultshopunlocked === undefined &&
				!V.daily.dilapidatedShopHelp &&
				Time.weekDay === 6 &&
				(Time.hour <= 15 || V.adultshopstate === "sydney")
			);
		},
		starthour: 16,
		endhour: 19,
		priority: 6,
		text: "엘크 가에 있는 성인용품점은 오늘 <<ampm 16>>에 리모델링을 재개한다.",
		failuretext: "당신은 오늘 <<if C.npc.Sydney.init>>시드니와 <</if>>성인용품점의 리모델링을 돕지 않았다.",
	},
	{
		name: "science fair",
		condition() {
			return V.scienceproject === "ongoing" && V.scienceprojectdays === 0;
		},
		starthour: 9,
		endhour: 18,
		priority: 5,
		text: "과학 전람회가 <<ampm 9 00>>부터 <<ampm 18 00>>까지, 클리프 가에서 열린다",
		failuretext: "과학 전람회는 끝났다. 당신은 참석하지 않았다.",
	},
	{
		name: "science fair tomorrow",
		condition() {
			return V.scienceprojectdays === 1;
		},
		priority: 2,
		text: "내일, 클리프 가에서 과학 전람회가 열린다",
	},
	{
		name: "maths competition",
		condition() {
			return V.mathsprojectdays === 0 && V.mathsproject === "ongoing";
		},
		starthour: 9,
		endhour: 18,
		priority: 5,
		text: "수학 경시대회가 <<ampm 9 00>>부터 <<ampm 18 00>>까지, 클리프 가에서 열린다",
		failuretext: "수학 경시대회는 끝났다. 당신은 참석하지 않았다.",
	},
	{
		name: "maths competition tomorrow",
		condition() {
			return V.mathsprojectdays === 1;
		},
		priority: 2,
		text: "내일, 클리프 가에서 수학 경시대회가 열린다",
	},
	{
		name: "english play",
		condition() {
			return V.englishPlayDays === 0 && V.englishPlay === "ongoing";
		},
		starthour: 17,
		endhour: 20,
		priority: 5,
		text: "학교의 연극이 <<ampm 17 00>>부터 <<ampm 21 00>>까지, 클리프 가에서 열린다",
		failuretext: "학교 연극의 마지막 무대가 방금 끝났다. 당신은 참석하지 않았다.",
	},
	{
		name: "english play tomorrow",
		condition() {
			return V.englishPlayDays === 1;
		},
		priority: 2,
		text: "내일, 클리프 가에서 학교의 연극 무대가 있다",
	},
];
setup.events = events;

Macro.add("questmarker", {
	handler() {
		const br = () => this.output.append(document.createElement("br"));
		// silence notifications in hopeless cycle and bad ends
		if (V.hc || ["prison", "asylum"].includes(V.location) || V.statFreeze) return;
		const qualifiedEvents = events.filter(ev => ev.condition());
		// display failure messages for missed events
		qualifiedEvents.forEach(ev => {
			if (!ev.failuretext || Time.hour <= (ev.endhour || 24)) return;
			const failvar = ev.name + "fail";
			if (V.daily[failvar]) return;
			V.daily[failvar] = 1;
			const div = document.createElement("div");
			div.classList.add("purple");
			div.append(Wikifier.wikifyEval(ev.failuretext));
			this.output.append(div);
			br();
		});

		let importants = [];
		// find the most important notification
		// first go events about to expire
		importants = qualifiedEvents.filter(ev => ev.endhour === Time.hour);
		// second go events underway (unless they are all-day events that don't have starthour)
		if (!importants.length) importants = qualifiedEvents.filter(ev => between(Time.hour, ev.starthour, ev.endhour == null ? 24 : ev.endhour));
		// third go upcoming and all day events
		if (!importants.length) importants = qualifiedEvents.filter(ev => Time.hour <= (ev.endhour == null ? 24 : ev.endhour));
		if (!importants.length) return;
		// find the highest priority of available events
		let topprio = 0;
		importants.forEach(ev => {
			// make sure priority exists for filtering later
			if (ev.priority == null) ev.priority = 1;
			if (ev.priority > topprio) topprio = ev.priority;
		});
		// pick a random event from highest priority ones
		const pick = importants.filter(ev => ev.priority === topprio).random();
		const div = document.createElement("div");
		div.append(Wikifier.wikifyEval(pick.text));
		this.output.append(div);
		br();

		/* alternatively, here goes the code to display all active events at once rather than the top one. can end up cluttering the sidebar.
		let counter = 0;
		qualifiedEvents.forEach(ev => {
			const div = document.createElement("div");
			if (Time.hour <= (ev.endhour || 24)) {
				div.append(Wikifier.wikifyEval(ev.text));
				this.output.append(div);
				br();
				counter++;
			}
		});
		if (counter > 0) this.output.append(br);
		*/
	},
});
