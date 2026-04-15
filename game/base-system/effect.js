function effectsWater(waterType = "liquid") {
	const fragment = document.createDocumentFragment();

	const sWikifier = text => {
		fragment.append(Wikifier.wikifyEval(text + " "));
	};
	const span = (text, colour) => {
		const element = document.createElement("span");
		if (colour) element.classList.add(colour);
		element.textContent = text + " ";
		fragment.append(element);
	};
	const br = () => fragment.append(document.createElement("br"));

	let wetIntro = 0;
	let squidArousal = 0;

	switch (V.squidcount) {
		case 1:
			sWikifier('<span class="purple">당신은 오징어가 당신의 질을 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 100 "genitals">>');
			break;
		case 2:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 질과 가슴을 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 100 "breasts">><<arousal 100 "genitals">>'
			);
			break;
		case 3:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 질과 <<breasts>>을 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 200 "breasts">><<arousal 100 "genitals">>'
			);
			break;
		case 4:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 질과 <<breasts>>, 엉덩이를 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 200 "breasts">><<arousal 100 "genitals">><<arousal 100 "bottom">>'
			);
			break;
		default:
			if (V.squidcount >= 5) {
				squidArousal = V.squidcount * 30;
				sWikifier(`<span class="purple">당신은 ${V.squidcount}마리의 오징어들의 당신의 질, <<breasts>>, 엉덩이 그리고 다른 부분들을 희롱하는 것을 느낀다.</span>
				<<garousal>><<arousal ${squidArousal} "breasts">><<arousal ${squidArousal} "genitals">><<arousal ${squidArousal} "bottom">>`);
			}
			break;
	}
	if (!V.worn.upper.type.includes("naked") && !waterproofCheck(V.worn.upper)) {
		if (V.upperwet >= 100 && V.upperwetstage < 3) {
			V.upperwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 옷에 스며들어, 당신의 속옷을 드러낸다.</span>`);
		} else if (V.upperwet < 90 && V.upperwetstage >= 3) {
			V.upperwetstage = 2;
			sWikifier(`<span class="green">당신의 옷이 말라서, 당신의 속옷을 감춘다.</span>`);
		} else if (V.upperwet >= 80 && V.upperwetstage < 2) {
			V.upperwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 옷이 젖었다.</span>`);
		} else if (V.upperwet < 70 && V.upperwetstage >= 2) {
			V.upperwetstage = 1;
			sWikifier(`<span class="green">당신의 옷이 말라간다.</span>`);
		} else if (V.upperwet >= 50 && V.upperwetstage < 1) {
			V.upperwetstage = 1;
			sWikifier(`<span class="blue">당신의 옷이 축축하다.</span>`);
		} else if (V.upperwet < 40 && V.upperwetstage >= 1) {
			V.upperwetstage = 0;
			sWikifier(`<span class="green">당신의 옷이 말랐다.</span>`);
		}
	}

	if (!V.worn.lower.type.includes("naked") && !waterproofCheck(V.worn.lower)) {
		if (V.lowerwet >= 100 && V.lowerwetstage < 3) {
			V.lowerwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 옷에 스며들어, 당신의 속옷을 드러낸다.</span>`);
		} else if (V.lowerwet < 90 && V.lowerwetstage >= 3) {
			V.lowerwetstage = 2;
			sWikifier(`<span class="green">당신의 옷이 말라서, 당신의 속옷을 감춘다.</span>`);
		} else if (V.lowerwet >= 80 && V.lowerwetstage < 2) {
			V.lowerwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 옷이 젖었다.</span>`);
		} else if (V.lowerwet < 70 && V.lowerwetstage >= 2) {
			V.lowerwetstage = 1;
			sWikifier(`<span class="green">당신의 옷이 말라간다.</span>`);
		} else if (V.lowerwet >= 50 && V.lowerwetstage < 1) {
			V.lowerwetstage = 1;
			sWikifier(`<span class="blue">당신의 옷이 축축하다.</span>`);
		} else if (V.lowerwet < 40 && V.lowerwetstage >= 1) {
			V.lowerwetstage = 0;
			sWikifier(`<span class="green">당신의 옷이 말랐다.</span>`);
		}
	}

	if (!V.worn.under_lower.type.includes("naked") && !playerChastity() && !waterproofCheck(V.worn.under_lower)) {
		if (V.underlowerwet >= 100 && V.underlowerwetstage < 3 && V.pantiesSoaked) {
			V.underlowerwetstage = 3;
			if (V.lowerwetstage === 3 || V.worn.lower.type.includes("naked")) {
				// If clothing above underwear is also wet, or missing
				wetIntro = 2;
				sWikifier(`<span class="lewd">당신의 체액이 속옷에 스며들어, 당신의 질을 드러낸다.</span>`);
			} else if (setup.clothes.lower[clothesIndex("lower", V.worn.lower)].skirt === 1) {
				sWikifier(
					`<span class="lewd">당신의 체액이 속옷에 스며들어, 당신의 하의 아래에서 질이 공기 중에 드러난다.</span>`
				);
			} else {
				span(`당신의 체액이 속옷에 스며든다.`, "lewd");
			}
		} else if (V.underlowerwet >= 100 && V.underlowerwetstage < 3) {
			V.underlowerwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">당신의 체액이 속옷에 스며들어, 당신의 질을 드러낸다.</span>`);
		} else if (V.underlowerwet < 90 && V.underlowerwetstage >= 3) {
			V.underlowerwetstage = 2;
			sWikifier(`<span class="green">당신의 속옷이 말라서, 질을 감춘다.</span>`);
		} else if (V.underlowerwet >= 80 && V.underlowerwetstage < 2) {
			V.underlowerwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 속옷이 젖었다.</span>`);
		} else if (V.underlowerwet < 70 && V.underlowerwetstage >= 2) {
			V.underlowerwetstage = 1;
			sWikifier(`<span class="green">당신의 속옷이 말라간다.</span>`);
		} else if (V.underlowerwet >= 50 && V.underlowerwetstage < 1) {
			V.underlowerwetstage = 1;
			sWikifier(`<span class="blue">당신의 속옷이 축축하다.</span>`);
		} else if (V.underlowerwet < 40 && V.underlowerwetstage >= 1) {
			V.underlowerwetstage = 0;
			sWikifier(`<span class="green">당신의 속옷이 말랐다.</span>`);
		}
	}

	if (!V.worn.under_upper.type.includes("naked") && !V.worn.under_upper.type.includes("chastity") && !waterproofCheck(V.worn.under_upper)) {
		if (V.underupperwet >= 100 && V.underupperwetstage < 3) {
			V.underupperwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 속옷에 스며들어, <<breasts>>을 노출시킨다.</span>`);
		} else if (V.underupperwet < 90 && V.underupperwetstage >= 3) {
			V.underupperwetstage = 2;
			sWikifier(`<span class="green">당신의 속옷이 말라서, <<breasts>>을 감춘다.</span>`);
		} else if (V.underupperwet >= 80 && V.underupperwetstage < 2) {
			V.underupperwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 속옷이 젖었다.</span>`);
		} else if (V.underupperwet < 70 && V.underupperwetstage >= 2) {
			V.underupperwetstage = 1;
			sWikifier(`<span class="green">당신의 속옷이 말라간다.</span>`);
		} else if (V.underupperwet >= 50 && V.underupperwetstage < 1) {
			V.underupperwetstage = 1;
			sWikifier(`<span class="blue">당신의 속옷이 축축하다.</span>`);
		} else if (V.underupperwet < 40 && V.underupperwetstage >= 1) {
			V.underupperwetstage = 0;
			sWikifier(`<span class="green">당신의 속옷이 말랐다.</span>`);
		}
	}

	if (!V.possessed) {
		if (wetIntro >= 2) {
			sWikifier("<<exposure>>");
			if (V.exhibitionism >= 55) {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 아래를 쳐다보고 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있어서 음란한 황홀감을 느낀다."
						: "당신은 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 느끼며 음란한 황홀감을 느낀다."
				);
			} else {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 경악에 차서 내려다본다."
						: "당신은 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 느끼며 경악한다."
				);
			}
			sWikifier("<<covered>>");
			br();
			if (V.makeupWashed) br();
		} else if (wetIntro >= 1) {
			if (V.exhibitionism >= 35) {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 아래를 쳐다보고 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것 같아서 음란한 황홀감을 느낀다."
						: "당신은 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것을 느끼며 음란한 황홀감을 느낀다."
				);
			} else {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것을 불안해하며 내려다본다."
						: "당신은 당신의 옷이 이제 당신의 몸에 딱 달라붙어, 투명해지려는 것을 느낀다."
				);
			}
			br();
			if (V.makeupWashed) br();
		}
	}
	return fragment;
}

Macro.add("effectswater", {
	handler() {
		const fragment = effectsWater(this.args[0]);
		if (fragment) this.output.append(fragment);
	},
});

function effectsMakeup() {
	const fragment = document.createDocumentFragment();

	const span = (text, colour) => {
		const element = document.createElement("span");
		if (colour) element.classList.add(colour);
		element.textContent = text + " ";
		fragment.append(element);
	};

	if (V.makeupWashed) {
		delete V.makeupWashed;
		span(`당신의 화장이 씻겨져${V.beauty >= (V.beautymax / 7) * 4 ? " 내려가 당신의 본래 미모를 드러낸다" : " 내려갔다"}.`, "teal");
		fragment.append(document.createElement("br"));
	}

	if (V.makeup.mascara && V.makeup.mascara_running < painToTearsLvl(V.pain) && !V.makeup.mascara.includes("waterproof")) {
		V.makeup.mascara_running = painToTearsLvl(V.pain);
	}

	return fragment;
}

function effects() {
	const fragment = document.createDocumentFragment();

	const sWikifier = text => {
		fragment.append(Wikifier.wikifyEval(text + " "));
	};
	const element = (element, text, colour) => {
		const result = document.createElement(element);
		if (colour) result.classList.add(colour);
		result.textContent = text + " ";
		fragment.append(result);
	};
	const br = () => fragment.append(document.createElement("br"));

	// Depricated as of current
	// if (V.newVersionData) sWikifier("<<newversionnotification>>");

	sWikifier("<<autoTakePillCheck>>");
	fragment.append(effectsWater());
	fragment.append(effectsMakeup());

	V.speechcycle++;
	if (V.speechcycle >= 7) V.speechcycle = 0;

	if (Weather.bodyTemperature < setup.WeatherTemperature.minTemperature + 1 && !Weather.BodyTemperature.isIncreasing()) {
		element("span", `당신은 매우 춥고, 저체온증에 걸리려 하고 있다!`, "red");
		br();
	} else if (Weather.bodyTemperature > setup.WeatherTemperature.maxTemperature - 1 && !Weather.BodyTemperature.isDecreasing()) {
		element("span", `당신은 극심하게 더우며, 열사병에 걸리려 하고 있다!`, "red");
		br();
	}

	if (!T.inWater && V.squidcount) {
		element("span", `오징어${V.squidcount > 1 ? "들이" : "가"} drop${V.squidcount > 1 ? "" : "s"} 물을 찾아, 당신에게서 떨어진다.`, "blue");
		V.squidcount = 0;
	}

	if (V.scienceproject === "ongoing" && V.scienceprojectdays === 0 && !V.scienceprojectwarning) {
		V.scienceprojectwarning = 1;
		element("span", `과학 전람회가 클리프 가의 시청에서 오늘 ${ampm(9, 0)}부터 ${ampm(18, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.mathsproject === "ongoing" && V.mathsprojectdays === 0 && !V.mathsprojectwarning) {
		V.mathsprojectwarning = 1;
		element("span", `수학 경시대회가 클리프 가의 시청에서 오늘 ${ampm(9, 0)}부터 ${ampm(18, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.englishPlay === "ongoing" && V.englishPlayDays === 0 && !V.englishPlayWarning) {
		V.englishPlayWarning = 1;
		element("span", `학교 연극이 클리프 가에서 오늘 밤 ${ampm(17, 0)}부터 ${ampm(21, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.studyBooks?.rented !== "none" && V.book_rent_timer === 0 && !V.studyBookDueWarning && Time.schoolTerm) {
		V.studyBookDueWarning = 1;
		element("span", `당신은 반납 기한이 오늘까지인 책을 가지고 있다.`, "gold");
	}

	if (V.innocencemessage === "start") {
		delete V.innocencemessage;
		element("span", "깊은 평화감이 머릿속에 솟아오른다. 좀 전까지만 해도 마음이 상해있었으나, 지금 와서는 그 이유가 기억나지 않는다.", "red");
		element("i", "당신의 트라우마가 순수함으로 대체되었다. 트라우마는 계속해서 축적되고, 순수함이 바닥난다면 다시 돌아올 것이다.");
	} else if (V.innocencemessage === "end") {
		delete V.innocencemessage;
		element("span", "당신은 끔찍한 사실을 자각하고 말았다. 여태까지 견뎌온 학대를 더는 무시할 수 없게 되었다.", "red");
		element("i", "순수함이 트라우마로 대체되었다.");
	}

	if (V.eventskipoverrule) V.eventskipoverrule = 0;

	if (V.underwatercheck > 0) {
		V.underwatercheck--;
	} else if (V.underwater === 1) {
		V.underwater = 0;
		V.oxygen = Math.clamp(V.oxygen, 0, V.oxygenmax);
		if (V.oxygen < V.oxygenmax) {
			V.oxygenRecovery = true;
		}
	}
	if (V.oxygenRecovery && V.underwater === 0 && V.combat === 0) {
		sWikifier(
			`<span class="lblue">공기 (회복 중):</span>
			<<dynamicblock id=oxygen-caption>>
				<<oxygencaption>>
			<</dynamicblock>>`
		);
	}

	sWikifier("<<updateHallucinations>>");

	if (V.controlled === 0 && V.flashbacks >= 1) {
		switch (V.location) {
			case "town":
				if (V.flashbacktownready === 1) {
					delete V.flashbacktownready;
					sWikifier("<<flashbacktown>>");
				}
				break;
			case "home":
				if (V.flashbackhomeready === 1) {
					delete V.flashbackhomeready;
					sWikifier("<<flashbackhome>>");
				}
				break;
			case "beach":
				if (V.flashbackbeachready === 1) {
					delete V.flashbackbeachready;
					sWikifier("<<flashbackbeach>>");
				}
				break;
			case "underground":
				if (V.flashbackundergroundready === 1) {
					delete V.flashbackundergroundready;
					sWikifier("<<flashbackunderground>>");
				}
				break;
			case "school":
				if (V.flashbackschoolready === 1) {
					delete V.flashbackschoolready;
					sWikifier("<<flashbackschool>>");
				}
				break;
		}
	}

	// eslint-disable-next-line no-undef
	if (isPregnancyEnding()) {
		sWikifier(
			`<span class="red">당신의 양수가 터졌다.</span> ${
				["asylum", "prison", "hospital"].includes(V.location) ? "당신은 도와줄 사람을 찾아야 한다, 당장!" : "당신은 병원으로 가야만 한다, 당장!"
			} <<ggstress>>`
		);
		br();
	}

	if (V.effectsmessage && !V.statFreeze && !V.silenceNotifications) {
		delete V.effectsmessage;

		if (V.recovered_from_pregnancy) {
			delete V.recovered_from_pregnancy;
			element("span", "당신은 자궁에 익숙한 비어있는 느낌이 돌아온 것을 느낀다.", "green");
		}

		if (V.skulduggerymessage) {
			const grade = ["S", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F+"];
			const colour = ["green", "teal", "teal", "lblue", "lblue", "blue", "blue", "purple", "purple", "pink"];
			element("span", "당신의 속임수 기술이", "gold");
			element("span", `${grade[V.skulduggerymessage - 1]}로 발전하였다.`, colour[V.skulduggerymessage - 1]);
			delete V.skulduggerymessage;
			V.skulduggeryday = V.skulduggery;
		}

		if (V.hypnosis_deviancy_message) {
			delete V.hypnosis_deviancy_message;
			sWikifier(
				`<<hypnosisText "당신은 어제 별로 이상성욕적이지 않았다.">> ${
					V.hypnosis_traits.deviancy < 5 ? "그 생각은 당신을 " : "그 생각은 당신의 마음을 "
				}`
			);
			switch (V.hypnosis_traits.deviancy) {
				case 1:
					element("span", "수치로 채운다.", "lblue");
					break;
				case 2:
					element("span", "후회로 채운다.", "blue");
					break;
				case 3:
					element("span", "죄악감으로 채운다.", "purple");
					break;
				case 4:
					element("span", "극심한 죄책감으로 채운다.", "pink");
					break;
				case 5:
					element("span", "죄책감과 불안에 휩싸이게 한다.", "red");
					break;
			}
			sWikifier("<<gggtrauma>>");
		}

		if (V.hypnosis_devotion_message) {
			switch (V.hypnosis_devotion_message) {
				case "ritual":
					sWikifier(`<<hypnosisText "당신은 어제 이번 주의 의식을 위해 그윌란을 만나지 않았다.">> `);
					break;
				case "request":
					if (V.gwylan.request.missed) {
						sWikifier(`<<hypnosisText "당신은 아직 그윌란의 의뢰를 완수하지 않았다.">> `);
					} else {
						sWikifier(`<<hypnosisText "당신은 어제 그윌란의 의뢰를 완수하지 않았다.">> `);
					}
					break;
				case "meetAtShop":
					if (V.gwylan.request.missed) {
						sWikifier(`<<hypnosisText "당신은 아직 그윌란을 만나러 숲속 가게에 가지 않았다.">> `);
					} else {
						sWikifier(`<<hypnosisText "당신은 어제 그윌란을 만나러 숲속 가게에 가지 않았다.">> `);
					}
					break;
				case "meetAtCafe":
					if (V.gwylan.request.missed) {
						sWikifier(`<<hypnosisText "당신은 아직 그윌란을 만나러 카페에 가지 않았다.">> `);
					} else {
						sWikifier(`<<hypnosisText "당신은 어제 그윌란을 만나러 카페에 가지 않았다.">> `);
					}
					break;
				default:
					if (V.gwylan.request.missed) {
						sWikifier(`<<hypnosisText "당신은 아직 그윌란의 요청을 이행하지 않았다.">> `);
					} else {
						sWikifier(`<<hypnosisText "당신은 어제 그윌란의 요청을 이행하지 않았다.">> `);
					}
					break;
			}
			sWikifier(`${V.hypnosis_traits.devotion < 5 ? "그 생각은 당신을 " : "그 생각은 당신의 마음을 "}`);
			switch (V.hypnosis_traits.devotion) {
				case 1:
					element("span", "수치로 채운다.", "lblue");
					sWikifier(`<<gtrauma>><<ghallucinogens>>`);
					break;
				case 2:
					element("span", "후회로 채운다.", "blue");
					sWikifier(`<<ggtrauma>><<ghallucinogens>>`);
					break;
				case 3:
					element("span", "죄악감으로 채운다.", "purple");
					sWikifier(`<<ggtrauma>><<gghallucinogens>>`);
					break;
				case 4:
					element("span", "극심한 죄책감으로 채운다.", "pink");
					sWikifier(`<<gggtrauma>><<gghallucinogens>>`);
					break;
				case 5:
					element("span", "죄책감과 불안에 휩싸이게 한다.", "red");
					sWikifier(`<<gggtrauma>><<ggghallucinogens>>`);
					break;
			}
			delete V.hypnosis_devotion_message;
		}

		if (V.hypnosis_timer_messages?.length) {
			V.hypnosis_timer_messages.forEach(trait => {
				switch (trait) {
					case "devotion":
						sWikifier("<<gwylanHypnosis 'devotion' -1>>");
						break;
					case "peace":
						sWikifier('<span class="purple">익숙한 불확실성이 당신의 존재를 채운다. 당신의 최면적 평화는 사라졌다.</span>');
						delete V.hypnosis_traits[trait];
						delete V.hypnosisTimers[trait];
						break;
					case "silence":
						sWikifier(
							`${
								numberOfEarSlime()
									? "<span class='purple'>익숙한 속삭임이 당신의 귀를 채운다. 당신의 최면적 침묵은 사라졌다.</span>"
									: "<span class='purple'>당신의 최면적 침묵이 사라졌다.</span>"
							}`
						);
						delete V.hypnosis_traits[trait];
						delete V.hypnosisTimers[trait];
						break;
					default:
						sWikifier(`<span class="purple">당신의 최면적 ${trait.toUpperFirst()}은 사라졌다.</span>`);
						delete V.hypnosis_traits[trait];
						delete V.hypnosisTimers[trait];
						break;
				}
			});
			delete V.hypnosis_timer_messages;
		}

		// expects the use of $science_up_message, $maths_up_message, $english_up_message, $history_up_message, $science_down_message, $maths_down_message, $english_down_message, $history_down_message
		["science", "maths", "english", "history"].forEach(subject => {
			if (V[`${subject}_up_message`]) {
				delete V[`${subject}_up_message`];
				sWikifier(`당신은 ${subject}에 더 자신감을 느낀다. <<${subject}_skill_up_text>>`);
				br();
			} else if (V[`${subject}_down_message`]) {
				delete V[`${subject}_down_message`];
				element("span", `${subject} 교육과정을 따라잡기가 벅차${V[`${subject}trait`] > 0 ? "서, 당신의 성적이 떨어졌다" : ""}.`, "red");
				br();
			}
		});

		if (V.lactationmessage) {
			delete V.lactationmessage;
			if (V.lactating) {
				sWikifier('<span class="purple">당신의 <<breasts>>이 무겁고 민감해진 것 같다.</span>');
			} else {
				sWikifier('<span class="lblue">당신의 <<breasts>>이 가볍다. 더는 전처럼 민감하지도 않다.</span>');
			}
		}

		if (V.penisgrowthmessage !== undefined) {
			switch (V.penisgrowthmessage) {
				case 4:
					element("span", "당신의 페니스가 엄청난 크기로 자라났다.", "purple");
					break;
				case 3:
					element("span", "당신의 페니스가 더 커졌다.", "purple");
					break;
				case 2:
					element("span", "당신의 페니스가 평범한 크기로 자라났다.", "purple");
					break;
				case 1:
					element("span", "당신의 페니스가 커지긴 했으나, 아직도 작은 상태다.", "purple");
					break;
				case 0:
					element("span", "당신의 페니스는 다시 자라나는 것처럼 보인다.", "purple");
					break;
				case -1:
					element("span", "당신의 페니스는 또다른 기회를 얻은 것처럼 보인다.", "purple");
					break;
			}
			delete V.penisgrowthmessage;
		}

		if (V.penisshrinkmessage !== undefined) {
			if (V.worn.genitals.name === "chastity parasite") {
				switch (V.penisshrinkmessage) {
					case 3:
						element("span", "기생충 정조대의 크기가 줄어들었으나, 아직 놀랄만한 페니스 크기일 것이라 짐작할 수 있다.", "purple");
						break;
					case 2:
						element("span", "기생충 정조대의 크기가 줄어들어, 훨씬 평범한 페니스 크기일 것이라 짐작할 수 있다.", "purple");
						break;
					case 1:
						element("span", "기생충 정조대의 크기가 더 작아졌다.", "purple");
						break;
					case 0:
						element("span", "기생충 정조대의 크기가 조그마해졌다.", "purple");
						break;
					case -1:
						element("span", "기생충 정조대의 크기가 말도 안 되게 작아져, 당신은 페니스가 아직 제 기능을 하는지 잠시 궁금해한다.", "purple");
						break;
					case -2:
						element(
							"span",
							"기생충 정조대는 그 안에 클리토리스 정도만이 들어있는 것 처럼 보여, 당신은 아직 페니스가 있기는 한지 잠시 궁금해한다.",
							"purple"
						);
						break;
				}
			} else {
				switch (V.penisshrinkmessage) {
					case 3:
						element("span", "당신의 페니스가 줄어들긴 했으나, 아직도 놀랄만한 크기다.", "purple");
						break;
					case 2:
						element("span", "당신의 페니스가 평범한 크기로 줄어들었다.", "purple");
						break;
					case 1:
						element("span", "당신의 페니스가 더 작아졌다.", "purple");
						break;
					case 0:
						element("span", "당신의 페니스가 조그마해졌다.", "purple");
						break;
					case -1:
						element("span", "당신의 페니스가 쪼그라든 것처럼 보인다.", "purple");
						break;
					case -2:
						element("span", "당신의 페니스는 더 이상 제대로 사용할 수 없을 것 같다.", "purple");
						break;
				}
			}
			delete V.penisshrinkmessage;
		}

		if (V.breastgrowthmessage !== undefined) {
			switch (V.breastgrowthmessage) {
				case 12:
					element("span", "당신의 커다란 유방은 무거워 행동에 방해가 될 것 같다.", "purple");
					break;
				case 11:
					element("span", "당신의 커다란 유방은 무겁고 인상적이다.", "purple");
					break;
				case 10:
				case 9:
					element("span", "당신의 유방이 무겁게 느껴진다.", "purple");
					break;
				case 8:
				case 7:
					element("span", "당신의 유방이 조금 무거워진 것 같다.", "purple");
					break;
				case 6:
				case 5:
					element("span", "당신 주변에 있는 사람들에게 당신의 작은 유방은 분명히 눈에 띌 것이다.", "purple");
					break;
				case 4:
				case 3:
					element("span", "다른 사람들에게 당신의 작은 가슴은 분명히 는에 띌 것이다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 가슴에 뭔가 이상한 느낌이 든다; 자라나고 있는 것일지도 모른다.", "purple");
					break;
			}
			delete V.breastgrowthmessage;
		}

		if (V.milkFullPainMessage) {
			if (V.milkFullPain >= 275) {
				sWikifier(`<span class="red">당신은 꽤 오랜 시간 동안 모유를 충분히 짜 주지 못했다. 당신의 <<breasts>>이 너무나 꽉 차서 아프게 욱신거린다.</span>`);
			} else if (V.milkFullPain >= 250) {
				sWikifier(`<span class="red">당신은 한동안 모유를 충분히 짜 주지 못했다. 당신의 <<breasts>>이 너무 꽉 차서 쓰리다.</span>`);
			} else {
				sWikifier(`<span class="red">당신은 최근에 모유를 충분히 짜 주지 못했다. 당신의 <<breasts>>이 꽉 차서 조금 쓰리다.</span>`);
			}
			V.daily.milkFullPainMessage = true;
			delete V.milkFullPainMessage;
		}

		if (V.breastshrinkmessage !== undefined) {
			switch (V.breastshrinkmessage) {
				case 11:
					element("span", "당신의 커다란 유방이 조금 가벼워진 느낌이지만, 아직도 커다랗다.", "purple");
					break;
				case 10:
				case 9:
					element("span", "당신의 유방이 조금은 가벼워진 것 같고, 이전보다는 덜 인상적이게 되었다.", "purple");
					break;
				case 8:
				case 7:
					element("span", "당신의 유방이 가벼워진 느낌이다.", "purple");
					break;
				case 6:
				case 5:
					element("span", "당신의 작은 유방이 더 가벼워졌다.", "purple");
					break;
				case 4:
				case 3:
					element("span", "당신의 작은 유방이 전보다 분명히 인식하기 어려워졌다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 가슴이 전보다 평평해져 보인다.", "purple");
					break;
				case 0:
					element("span", "당신의 가슴은 평평해 보인다.", "purple");
					break;
			}
			delete V.breastshrinkmessage;
		}

		if (V.bottomgrowthmessage !== undefined) {
			switch (V.bottomgrowthmessage) {
				case 8:
					element("span", "당신의 커다랗던 엉덩이가 전보다도 더 커졌다.", "purple");
					break;
				case 7:
					element("span", "당신의 엉덩이가 무거운 느낌이다.", "purple");
					break;
				case 6:
					element("span", "당신의 엉덩이가 더 통통해진 것 같다.", "purple");
					break;
				case 5:
					element("span", "당신의 엉덩이가 둥그래진 것 같다.", "purple");
					break;
				case 4:
					element("span", "당신의 엉덩이가 더 푹신해진 것 같다.", "purple");
					break;
				case 3:
					element("span", "당신의 엉덩이에 약간 살이 찐 것 같다.", "purple");
					break;
				case 2:
					element("span", "당신의 작은 엉덩이가 당신 기억보다 더 튀어나온 것 같다.", "purple");
					break;
				case 1:
					element("span", "당신의 엉덩이가 더는 전처럼 작은 것 같지 않다.", "purple");
					break;
			}
			delete V.bottomgrowthmessage;
		}

		if (V.bottomshrinkmessage) {
			switch (V.bottomshrinkmessage) {
				case 7:
					element("span", "당신의 커다랗던 엉덩이가 조금 가벼워진 것 같다.", "purple");
					break;
				case 6:
					element("span", "당신의 엉덩이가 가벼워진 것 같다.", "purple");
					break;
				case 5:
					element("span", "당신의 엉덩이가 전처럼 푹신하지 않다.", "purple");
					break;
				case 4:
					element("span", "당신의 엉덩이에 살이 많이 빠졌다.", "purple");
					break;
				case 3:
					element("span", "당신의 엉덩이가 꽤나 날렵해진 느낌이다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 엉덩이가 작아진 느낌이다.", "purple");
					break;
				case 0:
					element("span", "당신의 엉덩이가 조그마해진 느낌이다.", "purple");
					break;
			}
			delete V.bottomshrinkmessage;
		}

		if (V.speech_attitude_bratty_message) {
			delete V.speech_attitude_bratty_message;
			element("span", "당신은 대화 중에 건방진 태도를 취하기에는 너무 순종적으로 변했다.", "purple");
		}

		if (V.speech_attitude_meek_message) {
			delete V.speech_attitude_meek_message;
			element("span", "당신은 대화 중에 온순한 태도를 취하기에는 너무 반항적으로 변했다.", "purple");
		}

		if (V.sunscreenAutoApplied) {
			element("span", `당신은 피부에 선크림을 바${Skin.Sunscreen.usesLeft <= 0 ? "르지만," : "른다."}`, "purple");
			if (Skin.Sunscreen.usesLeft <= 0) element("span", "방금 사용한 것으로 동이 났다.", "red");
			delete V.sunscreenAutoApplied;
		}

		if (V.pillsTaken) {
			element("span", "당신은 매일마다 먹는 약을 복용한다.", "purple");
			if (V.pillsTakenLast) element("span", "몇몇 약은 방금 먹은 것으로 동이 났다.", "red");
			delete V.pillsTaken;
			delete V.pillsTakenLast;
		}

		if (V.hairGrowthApplied) {
			element("span", `당신은 모발 성장약을 뿌${V.hairGrowthAppliedLast ? "리지만," : "린다."}`, "purple");
			if (V.hairGrowthAppliedLast) element("span", "방금 마지막 약을 사용했다.", "red");
			delete V.hairGrowthApplied;
			delete V.hairGrowthAppliedLast;
		}

		if (V.exhibitionism_message) {
			sWikifier(
				`<span class="lblue">당신은 속옷을 입지 않은 상태로 사람들이 있는 곳에서 시간을 보냈다. 혹시 사람들이 눈치채진 않았을까 하는 생각을 하며, 당신은 전율한다.</span> <<exhibitionism1>>`
			);
			delete V.exhibitionism_message;
		}

		if (V.rebuy_success.length) {
			const rebuyMessage = {};
			V.rebuy_success.forEach(([item, location]) => {
				if (!rebuyMessage[location]) rebuyMessage[location] = [];
				rebuyMessage[location].push(item);
			});
			Object.entries(rebuyMessage).forEach(([location, items]) => {
				element(
					"span",
					`당신의 ${formatList(items, "그리고", true)} signal${items.length > 1 ? "" : ""}가 너무 해졌기 때문에${
						V.wardrobes[location]
							? ` 새로 사서 ${V.wardrobes[location].name}에 넣었다.`
							: `. 새로 샀다. (아마도 업데이트 후에 한 번 나는 에러이며, 같은 세이브에서 여러 번 보여지는 게 아니면 버그리포트할 필요 없습니다 ${
									Array.isArray(V.rebuy_success) ? JSON.stringify(V.rebuy_success) : ""
							  }`
					}.
				`,
					"lblue"
				);
			});
			V.rebuy_success = [];
		}

		if (V.rebuy_failure.length) {
			element(
				"span",
				`당신의 ${formatList(V.rebuy_failure, "그리고", true)}가 너무 해져서${
					V.rebuy_failure.length > 1 ? "" : "s"
				} 새로 사야 하지만, 당신은 충분한 돈이 없다.`,
				"purple"
			);
			V.rebuy_failure = [];
		}

		if (V.masochism_message) {
			switch (V.masochism_message) {
				case "up 1":
					element("span", "여태껏 시달린 공격들이 머릿속을 떠돈다. 몸이 떨려온다.", "blue");
					element("i", "당신은 죄책감있는 마조히스트가 되었다.", "blue");
					break;
				case "up 2":
					element("span", "여태껏 시달린 공격들이 떠오른다. 그러고는 느닷없이, 흥분이 뒤따라 온다.", "purple");
					element("i", "당신은 평범한 마조히스트가 되었다.", "purple");
					break;
				case "up 3":
					element("span", "당신의 몸은 더 많은 학대를 원한다.", "pink");
					element("i", "당신은 굳건한 마조히스트가 되었다.", "pink");
					break;
				case "up 4":
					element("span", "당신의 몸은 더 많은 학대를 갈망한다.", "red");
					element("i", "당신은 엄청난 마조히스트가 되었다.", "red");
					break;
				case "down 0":
					element("i", "당신은 더는 마조히스트가 아니다.", "lblue");
					break;
				case "down 1":
					element("span", "당신은 이전보다 피학 성애적인 면모가 줄어들어,", "blue");
					element("i", "죄책감있는 마조히스트로 분류된다.", "blue");
					break;
				case "down 2":
					element("span", "당신은 이전보다 피학 성애적인 면모가 줄어들어,", "purple");
					element("i", "평범한 마조히스트로 분류된다.", "purple");
					break;
				case "down 3":
					element("span", "당신은 이전보다 피학 성애적인 면모가 줄어들어,", "pink");
					element("i", "굳건한 마조히스트로 분류된다.", "pink");
					break;
			}
			delete V.masochism_message;
		}

		if (V.sadism_message) {
			switch (V.sadism_message) {
				case "up 1":
					element("span", "당신이 사람들에게 입힌 고통이 머릿속을 떠돈다. 몸이 떨려온다.", "blue");
					element("i", "당신은 죄책감있는 새디스트가 되었다.", "blue");
					break;
				case "up 2":
					element("span", "당신이 사람들에게 입힌 고통이 머릿속을 떠돈다. 그러고는 느닷없이, 흥분이 뒤따라 온다.", "purple");
					element("i", "당신은 평범한 새디스트가 되었다.", "purple");
					break;
				case "up 3":
					element("span", "당신은 다른 사람들을 학대하는 것을 갈망한다.", "pink");
					element("i", "당신은 굳건한 새디스트가 되었다.", "pink");
					break;
				case "up 4":
					element("span", "그들이 험하게 하기를 원한다면, 그렇게 해주자.", "red");
					element("i", "당신은 복수심에 불타는 새디스트가 되었다.", "red");
					break;
				case "down 0":
					element("i", "당신은 더는 새디스트가 아니다.", "lblue");
					break;
				case "down 1":
					element("span", "당신은 이전보다 가학적인 면모가 줄어들어,", "blue");
					element("i", "죄책감있는 새디스트로 분류된다.", "blue");
					break;
				case "down 2":
					element("span", "당신은 이전보다 가학적인 면모가 줄어들어,", "purple");
					element("i", "평범한 새디스트로 분류된다.", "purple");
					break;
				case "down 3":
					element("span", "당신은 이전보다 가학적인 면모가 줄어들어,", "pink");
					element("i", "굳건한 새디스트로 분류된다.", "pink");
					break;
			}
			delete V.sadism_message;
		}

		if (V.school_crossdress_message) {
			const crossdressing = V.player.gender !== V.player.sex ? "presumed crossdressing" : "crossdressing";
			const knows = V.player.gender !== V.player.sex ? "believes it to be true" : "knows";
			switch (V.school_crossdress_message) {
				case 5:
					element("span", `학교 내에서 당신이 크로스드레서라는 건 공공연한 사실이 되었다. 선생님들을 포함한 모두가 알고 있다.`, "red");
					break;
				case 4:
					element("span", `학교 전체에 당신이 크로스드레서라는 소문이 퍼지고 있다.`, "pink");
					break;
				case 3:
					element("span", `학교에 당신이 크로스드레서라는 소문이 퍼지고 있고, 흔한 대화 주제 중 하나가 되었다.`, "purple");
					break;
				case 2:
					element("span", `당신이 크로스드레서라는 내용의 귓속말이 학교에 퍼지고 있다.`, "blue");
					break;
				case 1:
					element("span", `학교 내의 몇몇 학생들이 당신이 크로스드레서라며 귓속말을 하기 시작했다.`, "lblue");
					break;
			}
			delete V.school_crossdress_message;
		}

		if (V.school_herm_message) {
			switch (V.school_herm_message) {
				case 5:
					element("span", "선생님들을 포함한 학교의 모두가 당신의 독특한 성기에 대해 들어보았다.", "red");
					break;
				case 4:
					element("span", "학교 전체에 당신의 독특한 성기에 대한 소문이 퍼지고 있다.", "pink");
					break;
				case 3:
					element(
						"span",
						"많은 학생들이 믿지는 않으나, 남성기와 여성기를 모두 가진 학생에 대한 소문이 학교에 만연하다.",
						"purple"
					);
					break;
				case 2:
					element("span", "남성기와 여성기를 모두 가진 학생에 대한 소문이 학교에 퍼지고 있다.", "blue");
					break;
				case 1:
					element("span", "학교 내의 몇몇 학생들이 남성기와 여성기를 모두 가진 학생에 대해 귓속말을 하기 시작했다.", "lblue");
					break;
			}
			delete V.school_herm_message;
		}

		// expects the use of $orgasm_trait_message, $molest_trait_message, $rape_trait_message, $bestiality_trait_message, $tentacle_trait_message, $vore_trait_message, $milk_trait_message and $cum_trait_message
		[
			["orgasm", "쾌락주의자", "절정 중독자"],
			["molest", "품위있음", "노리개"],
			["rape", "생존자", "육변기"],
			["bestiality", "조련사", "암캐"],
			["tentacle", "마술사", "먹잇감"],
			["vore", "무모함", "맛있음"],
			["milk", "모유 성애자", "모유 중독자"],
			["cum", "정액 성애자", "정액받이"],
		].forEach(([variable, defiantName, submissiveName]) => {
			if (V[`${variable}_trait_message`]) {
				element("span", `당신은 "${V.submissive <= 850 ? defiantName : submissiveName}" 특성을 얻었다.`, "gold");
				delete V[`${variable}_trait_message`];
			}
		});

		if (V.nectarmessage) {
			switch (V.nectarmessage) {
				case "traitGain":
					element(
						"span",
						`당신은 스스로가 달콤한 꿀을 더 갈망하는 것을 알게 되었다. 당신은 "${V.submissive <= 850 ? "식물 애호가" : "식물 성애자"}"와`,
						"purple"
					);
					element("span", '"꿀 중독"', "red");
					element("span", "특성을 얻었다.", "purple");
					break;
				case "traitLost":
					element(
						"span",
						`꿀에 대한 갈망이 드디어 가라앉았다. 당신은 "${V.submissive <= 850 ? "식물 애호가" : "식물 성애자"}"와`,
						"lblue"
					);
					element("span", '"꿀 중독"', "red");
					element("span", "특성을 잃었다.", "lblue");
					break;
				case "withdrawals":
					sWikifier(
						'<span class="red">당신의 몸은 꿀을 갈망하고 있으며, 금단 증상으로 고통받기 시작했다.</span> <<stress 12>><<ggstress>><<trauma 12>><<ggtrauma>><<physique_loss 4>><<lphysique>>'
					);
					br();
					break;
			}
			delete V.nectarmessage;
		}

		if (V.hiddenTransformMessage) {
			element(
				"span",
				V.hiddenTransformMessage === 1
					? "당신의 내적 자아를 계속 숨기기에는 당신의 정신상태가 너무 취약하다."
					: "당신의 내적 자아를 숨기고 있기에 정신상태에 무리가 가고 있다.",
				"red"
			);
			delete V.hiddenTransformMessage;
		}

		if (V.prof_spray_message) {
			element("span", "당신은 스프레이를 정밀하게 쏠 수 있게 되었다. 당신은 한 통을 전부 쓸 필요가 없기에, 탄약을 아낄 수 있다.", "green");
			delete V.prof_spray_message;
		}

		if (V.community_message === "missed") {
			sWikifier('<span class="red">당신은 사회봉사를 하지 않았다. 경찰은 그 사실을 알고 있다.</span><<crime "obstruction">>');
			delete V.community_message;
		}

		if (V.toy_message) {
			element("span", "섹스 장난감들이 도시 전체에서 점점 인기가 많아지고 있다.", "purple");
			delete V.toy_message;
		}

		if (V.loveInterest_message === 1) {
			element("i", "당신은 여러 명의 연인을 갖는 것은 잘못됐다고 느낀다. 당신은 더 이상 연인 하나 이상을 선택할 수 없다.", "blue");
			delete V.loveInterest_message;
			delete V.loveInterestAwareMessage;
		} else if (V.loveInterest_message === 2 && !V.loveInterestAwareMessage) {
			element("i", "당신의 마음은 여러 명의 연인에 대한 가능성에 열렸다. 당신은 이제 두 번째 연인을 선택할 수 있다.", "pink");
			delete V.loveInterest_message;
			V.loveInterestAwareMessage = 1;
		} else if (V.loveInterest_message === 3 && V.loveInterestAwareMessage === 2) {
			element("i", "당신은 여러 명의 연인을 갖는 것은 잘못됐다고 느낀다. 당신은 더 이상 연인 둘 이상을 선택할 수 없다.", "blue");
			delete V.loveInterest_message;
			V.loveInterestAwareMessage = 1;
		} else if (V.loveInterest_message === 4 && V.loveInterestAwareMessage === 1) {
			element("i", "당신의 마음은 여러 명의 연인에 대한 가능성에 열렸다. 당신은 이제 세 번째 연인을 선택할 수 있다.", "pink");
			delete V.loveInterest_message;
			V.loveInterestAwareMessage = 2;
		}

		if (V.fallenangelmessage) {
			sWikifier('<span class="red">당신은 어두운 존재가 당신의 피부를 할퀴는 느낌을 받는다.</span> <<gstress>>');
			V.stress += V.stressmax;
			delete V.fallenangelmessage;
		}

		if (V.demonmessage) {
			sWikifier('<span class="red">당신은 끔찍한 빛이 당신을 관통하며 불태우는 느낌을 받는다.</span> <<gstress>>');
			V.stress += V.stressmax;
			delete V.demonmessage;
		}

		if (V.foxCrimeMessage) {
			element(
				"span",
				V.blackmoney >= 100
					? "당신은 훔친 물건이 점점 늘어나는 것에서 동물적인 만족감을 느낀다."
					: "당신은 그런 범죄를 저지르면서 동물적인 만족감을 느낀다.",
				"gold"
			);
			delete V.foxCrimeMessage;
		}

		if (V.bookoverduemessage) {
			if (V.bookoverduemessage === 1) {
				sWikifier(`<<crimeUp 5 "thievery">><<delinquency ${5 / 4}>>`);
				element("span", "당신은 반납기한이 심각하게 지난 책을 가지고 있고, 경찰은 그 사실을 알고 있다.", "red");
			} else {
				sWikifier(`<<delinquency ${3 / 4}>>`);
				element("span", "당신은 반납기한이 지난 책을 가지고 있고, 그로 인해 불량하다고 여겨지고 있다.", "red");
			}
			delete V.bookoverduemessage;
		}

		if (V.wraithcompoundmessage) {
			element("span", "포악한 안개가 엘크 가에 드리워져 있다.", "red");
			delete V.wraithcompoundmessage;
		}

		if (V.halloweenClothesMessage) {
			sWikifier(`<<specialClothesUnlock "set" "halloween">>`);
			delete V.halloweenClothesMessage;
		}

		if (V.christmasClothesMessage) {
			sWikifier(`<<specialClothesUnlock "set" "christmas">>`);
			delete V.christmasClothesMessage;
		}

		if (V.valentinesClothesMessage) {
			sWikifier(`<<specialClothesUnlock "set" "valentines">>`);
			delete V.valentinesClothesMessage;
		}

		if (V.earSlimebreastsParasite || V.earSlimePenisParasite || V.earSlimeClitParasite) {
			const parasiteCount = (V.earSlimebreastsParasite ? 1 : 0) + (V.earSlimePenisParasite ? 1 : 0) + (V.earSlimeClitParasite ? 1 : 0);
			let parasiteMessage = "";
			if (V.earSlimebreastsParasite) parasiteMessage += `새 기생충이 당신 ${V.player.breastsize >= 1 ? "유방" : "가슴"}`;

			if (V.earSlimePenisParasite) {
				parasiteMessage += parasiteMessage ? " 과 페니스의 밑동" : "새 기생충이 당신 페니스의 밑동";
			}

			if (V.earSlimeClitParasite && V.player.vaginaExist) {
				if (V.earSlime.focus === "pregnancy") {
					parasiteMessage += parasiteMessage ? " 과 질 주위에 형성되었다" : "새 기생충이 당신의 질 주위에 형성되었다";
				} else {
					const looks = playerChastity("vagina") ? "느낌이다" : "모습이다";
					parasiteMessage += parasiteMessage
						? ` 과 클리토리스 주위에 형성되었다. 그것은 이제 당신 자신의 페니스가 된 것 같은 ${looks}`
						: `새 기생충이 당신의 클리토리스 주위에 형성되었고, 페니스와 비슷한 ${looks}`;
				}
			}
			if (parasiteMessage) {
				sWikifier(`<span class="blue">만족스러운 따뜻함이 당신을 채운다. ${parasiteMessage}.</span>`);
				element("span", `${parasiteCount > 1 ? "은" : "은"} 그것이 다 자라자 곧 떨어져 버린다.`);
				if (V.earSlimePenisParasite && V.earSlimePenisParasite !== 1) {
					element("span", `이전 ${V.earSlimePenisParasite}은 그것이 다 자라자 곧 떨어져 버린다.`, "red");
				}
				if (V.earSlimeClitParasite && V.earSlimeClitParasite !== 1) {
					element("span", `이전 ${V.earSlimeClitParasite}은 그것이 다 자라자 곧 떨어져 버린다.`, "red");
				}
			}
			delete V.earSlimebreastsParasite;
			delete V.earSlimePenisParasite;
			delete V.earSlimeClitParasite;
		}

		if (V.penisslimebrokenchastitymessage) {
			element(
				"span",
				`당신의 성기 밑동에 있던 기생충이 ${V.penisslimebrokenchastitymessage}${
					V.penisslimecagemessage === 1 ? "떨어지고, 곧바로 새 기생충 정조대가 당신의 페니스 주위에 형성된다" : "떨어진다"
				}.`,
				"purple"
			);
			delete V.penisslimecagemessage;
			delete V.penisslimebrokenchastitymessage;
		}

		if (V.penisslimecagemessage) {
			element(
				"span",
				V.penisslimecagemessage === 1 ? "새 기생충 정조대가 당신의 페니스 주위에 형성된다." : "당신의 기생충 정조대가 다시 새 것처럼 깨끗해진다.",
				"purple"
			);
			delete V.penisslimecagemessage;
		}

		if (V.pregnancyDailyEvent) {
			sWikifier("<<pregnancyDailyEvent>>");
			delete V.pregnancyDailyEvent;
		}

		// Check if any parasites are present before running events. If not, clear events.
		// TODO: Clear event messages in the case of "staggered" births where some parasites remain in that category. Otherwise, all events will continue to play until the daily reset, even if some parasites have already been birthed.
		if (V.daily.parasiteEvent) {
			if (V.sexStats.vagina.pregnancy.type === "parasite") {
				for (let i = 0; i < maxParasites("vagina"); i++) {
					if (V.sexStats.vagina.pregnancy.fetus[i] != undefined) {
						T.hasVaginaParasiteForEvent = true;
						break;
					}
				}
			}
			if (V.sexStats.anus.pregnancy.type === "parasite") {
				for (let i = 0; i < maxParasites("anus"); i++) {
					if (V.sexStats.anus.pregnancy.fetus[i] != undefined) {
						T.hasAnusParasiteForEvent = true;
						break;
					}
				}
			}
			if (!T.hasVaginaParasiteForEvent) {
				V.daily.parasiteEvent = V.daily.parasiteEvent.filter(function(event) {
					return !event.includes("vagina");
				});
			}
			if (!T.hasAnusParasiteForEvent) {
				V.daily.parasiteEvent = V.daily.parasiteEvent.filter(function(event) {
					return !event.includes("anus");
				});
			}
		}

		if (V.daily.parasiteEvent) {
			let minDaysLeft;
			if (V.sexStats.vagina.pregnancy.type === "parasite") {
				minDaysLeft = V.sexStats.vagina.pregnancy.fetus.reduce((prev, curr) => (prev.daysLeft < curr.daysLeft ? prev.daysLeft : curr.daysLeft), 30);
			}
			if (V.sexStats.anus.pregnancy.type === "parasite") {
				minDaysLeft = V.sexStats.anus.pregnancy.fetus.reduce(
					(prev, curr) => (prev.daysLeft < curr.daysLeft ? prev.daysLeft : curr.daysLeft),
					minDaysLeft || 30
				);
			}
			const stressMulti = Math.clamp(2 - V.sexStats.anus.pregnancy.motherStatus + V.sexStats.vagina.pregnancy.motherStatus, 0, 2);
			const arousalMulti = Math.clamp(1 + V.sexStats.anus.pregnancy.motherStatus + V.sexStats.vagina.pregnancy.motherStatus, 1, 3);
			let arousalGain = 0;
			if (V.daily.parasiteEvent.includes("anus3") && V.daily.parasiteEvent.includes("vagina3")) V.daily.parasiteEvent.delete("vagina3");

			V.daily.parasiteEvent.forEach(event => {
				switch (event) {
					case "anus0":
					case "vagina0":
						if (V.pregnancyStats.parasiteDoctorEvents >= 4) {
							sWikifier(
								`당신은 ${V.pregnancyStats.namesParasitesChild ? "커진 당신의 아기를" : "자란 기생충을"} 당신의 ${
									event === "anus0" ? "배" : "자궁"
								} 안에서 움직이는 것을 느낀다. <<ggarousal>>`
							);
						} else {
							sWikifier(
								`당신은 무언가 커다란 것이 당신의 ${
									event === "anus0" ? "배" : "자궁"
								} 안에서 움직이는 것을 느낀다. 다시 한번 병원에 가 보는 것이 최선일 듯 하다. <<ggarousal>>`
							);
						}
						arousalGain += 2000;
						break;
					case "anus1":
					case "vagina1":
						if (V.pregnancyStats.parasiteDoctorEvents >= 2) {
							sWikifier(
								`당신은 ${V.pregnancyStats.namesParasitesChild ? "당신의 아기들" : "기생충들"} 중 하나가 ${
									event === "anus1" ? "배" : "자궁"
								} 안에서 움직이는 것을 느낀다. <<ggarousal>>${stressMulti ? "<<gstress>>" : ""}`
							);
						} else {
							sWikifier(`당신은 무언가가 당신의 ${event === "anus1" ? "배" : "자궁"}. 안에서 움직이는 것을 느낀다. 병원에 가 보는 것이 최선일 듯 하다.
							<<ggarousal>>${stressMulti ? "<<gstress>>" : ""}`);
						}
						arousalGain += (arousalMulti * 500) / (minDaysLeft + 1);
						V.stress += 300 * stressMulti;
						break;
					case "anus2":
					case "vagina2":
						sWikifier(
							`당신의 ${
								event === "anus2" ? "배가" : "자궁이"
							} 살짝 꾸르륵 거린다. 당신은 이 소리가 어떤 주의도 끌지 않기를 바란다. <<garousal>>${stressMulti ? "<<gstress>>" : ""}`
						);
						arousalGain += (arousalMulti * 250) / (minDaysLeft + 1);
						V.stress += 200 * stressMulti;
						break;
					case "anus3":
					case "vagina3":
						sWikifier(`잠시동안 머리가 어지러운 것을 느꼈다.${stressMulti ? "<<gstress>>" : ""}`);
						V.stress += 100 * stressMulti;
						break;
				}
			});
			if (arousalGain) sWikifier(`<<arousal ${Math.clamp(arousalGain, 0, 10000)}>>`);
			br();
			delete V.daily.parasiteEvent;
		}
	}

	if (numberOfEarSlime() && V.earSlime.event && !V.statFreeze) {
		if (V.earSlime.event.includes("get sperm into your") && V.earSlime.event.includes("completed") && V.earSlime.eventTimer <= 2) {
			element(
				"span",
				`귓속의 슬라임이 당신이 ${V.player.vaginaExist ? "질" : "항문"} 안에 정액을 넣으라는 명령을 이행한 것에 기뻐하고 있다.`,
				"green"
			);
			sWikifier(`<<pain -4>><<stress -6>><<trauma -12>><<lpain>><<lltrauma>><<lstress>>`);
			br();
			V.earSlime.event = "";
		} else if (V.earSlime.event.includes("get your own sperm into your") && V.earSlime.event.includes("completed") && V.earSlime.eventTimer <= 2) {
			element(
				"span",
				`귓속의 슬라임이 당신이 ${V.player.vaginaExist ? "질" : "항문"} 안에 당신 자신의 정액을 넣으라는 명령을 이행한 것에 기뻐하고 있다.`,
				"green"
			);
			sWikifier(`<<pain -4>><<stress -6>><<trauma -12>><<lpain>><<lltrauma>><<lstress>>`);
			if (V.earSlime.growth >= 100 && V.earSlime.focus === "pregnancy" && V.worn.genitals.name === "naked") {
				sWikifier(`<span class="purple">새 기생충 정조대가 당신의 페니스 주위에 형성되었다.</span> <<genitalswear 8>>`);
				V.worn.genitals.origin = "ear slime";
			}
			br();
			V.earSlime.event = "";
		} else if (V.earSlime.eventTimer <= 2 || (V.earSlime.noSleep && Time.dayState !== "night")) {
			if (V.earSlime.startedThreats) {
				element("span", "귓속의 슬라임이 임무를 완수하지 못한 것에 대한 처벌을 내린다.", "red");
				sWikifier(`<<ggpain>><<ggtrauma>><<ggstress>><<pain 16>><<stress 12>><<trauma 12>>`);
				V.earSlime.defyCooldown += 4;
			} else {
				element("span", "귓속의 슬라임은 당신이 하겠다고 말한 명령을 완수할 수 없게 되자 당황하고 있다.", "cyan");
			}
			br();
			V.earSlime.event = "";
			V.earSlime.noSleep = false;
		}
	}

	if (Array.isArray(V.timeMessages) && V.timeMessages.length) {
		/*
			Calls to <<earnFeat "x">> here and within earnHourlyFeats are intended to show feats to the user.
			Be aware that the earnFeat widget is also used in passages such as 'Forest Blood Lemon Pick' and feats earned this way should still be displayed on that very passage and not the next one.
		*/
		const errors = [];
		V.timeMessages.forEach(messageKey => {
			let display;
			switch (messageKey) {
				case "feats":
					display = earnHourlyFeats();
					if (display) fragment.append(display);
					break;
				// Transformations
				case "fallenAngelFeathers":
					element("span", "당신의 날개에 새로운 깃털들이 조금 자랐다.", "gold");
					break;
				case "fallenAngelWings":
					element("span", "부드러운 깃털의 익숙한 느낌이 당신을 희망으로 채워준다.", "gold");
					break;
				case "fallenAngelDescend":
					element(
						"span",
						"검게 변한 당신의 날개가 더욱 어두워져간다. 산산조각난 광륜이 희미해진다. 머리에서 뿔이 솟아오르고 엉덩이 쪽에서 꼬리가 자라난다. 당신이 느끼고 있던 상실감이 복수심으로 바뀌었다.",
						"gold"
					);
					fragment.append(wikifier("garousal"));
					fragment.append(wikifier("specialClothesUnlock", "'set'", "'succubus'"));
					fragment.append(wikifier("earnFeat", "'Demon'"));
					break;
				case "angelUp1":
					sWikifier('<span class="gold">여태까지 여러 일들을 겪었음에도 불구하고, 당신은 순수한 소녀로 남아있다. 그 생각에 당신은 행복하다.</span>');
					break;
				case "angelUp2":
					element("span", "당신은 순수하며 그 상태 그대로 있고자 최선을 다하기로 한다.", "gold");
					break;
				case "angelUp3":
					element("span", "어깨에서 짐이 덜어진 느낌이다.", "gold");
					break;
				case "angelUp4":
					element("span", "황금색 빛이 당신을 비추고 있다.", "gold");
					break;
				case "angelUp5":
					element("span", "마음이 진정되는 온기가 등에 퍼진다.", "gold");
					break;
				case "angelUp6":
					element("span", "몸이 조금 더 가벼워진 느낌이다. 새로이 돋아난 날개가 당신의 얼굴을 어루만진다.", "gold");
					fragment.append(wikifier("earnFeat", "'Angel'"));
					break;
				case "angelDown0":
					element("span", "때묻은 느낌이다.", "gold");
					break;
				case "angelDown1":
					element("span", "더럽혀진 느낌이다.", "gold");
					break;
				case "angelDown2":
					element("span", "어깨를 내리누르는 무게가 느껴진다.", "gold");
					break;
				case "angelDown3":
					element("span", "머리 위의 빛이 희미해져간다.", "gold");
					break;
				case "angelDown4":
					element("span", "등에서 느껴지던 마음이 진정되는 온기가 사라진다.", "gold");
					break;
				case "angelDown5":
					element("span", "날개가 희미해져간다.", "gold");
					break;
				case "demonUp1":
					sWikifier('<span class="gold">머리가 가렵다.</span><<garousal>>');
					break;
				case "demonUp2":
					sWikifier('<span class="gold">머리에서 뿔이 솟아오른다.</span><<garousal>>');
					break;
				case "demonUp3":
					sWikifier('<span class="gold">엉덩이가 가렵다.</span><<garousal>>');
					break;
				case "demonUp4":
					sWikifier('<span class="gold">엉덩이에서 꼬리가 자라난다.</span><<garousal>>');
					break;
				case "demonUp5":
					sWikifier('<span class="gold">등에서 불이 타오르는 듯한 느낌이 난다.</span><<garousal>>');
					break;
				case "demonUp6":
					sWikifier(
						'<span class="gold">몸이 조금 더 가벼워진 느낌이다. 새로이 돋아난 날개가 당신의 얼굴을 어루만진다.</span><<garousal>><<earnFeat "Demon">><<specialClothesUnlock "set" "succubus">>'
					);
					break;
				case "demonDown0":
					element("span", "보이지 않는 빛이 당신의 더러움을 불태우는 느낌이다.", "gold");
					if (V.demonFeat) {
						fragment.append(wikifier("earnFeat", "'The Path to Redemption'"));
						delete V.demonFeat;
					}
					break;
				case "demonDown1":
					element("span", "뿔이 희미해져간다.", "gold");
					break;
				case "demonDown2":
					sWikifier('<span class="gold">엉덩이에서 느껴지던 가려움이 사라진다.</span>');
					break;
				case "demonDown3":
					element("span", "꼬리가 희미해져간다.", "gold");
					break;
				case "demonDown4":
					element("span", "등에서 느껴지던 불타는 듯한 느낌이 멎는다.", "gold");
					break;
				case "demonDown5":
					element("span", "날개가 희미해져간다.", "gold");
					break;
				case "wolfUp1":
					element("span", "이상하게 이가 아프다.", "gold");
					break;
				case "wolfUp2":
					element("span", "입이 뭔가 이상한 느낌이다. 당신은 혀로 입 안을 살펴보다가 새로 자라난 송곳니에 놀라 몸을 움찔거린다.", "gold");
					break;
				case "wolfUp3":
					element("span", `머리${V.settings.pubicHairEnabled === true ? "와 사타구니가 가렵다" : "가 가렵다"}.`, "gold");
					break;
				case "wolfUp4":
					element("span", "머리에 무언가 붙은 것 같다. 당신은 머리 위로 손을 뻗어 잡아당겨보지만, 아프기만 하다. 한 쌍의 늑대 귀를 얻었다.", "gold");
					if (V.settings.pubicHairEnabled === true) element("span", "또한 사타구니에 길고 북슬북슬한 털이 났다.");
					break;
				case "wolfUp5":
					element("span", "엉덩이 쪽이 가렵다.", "gold");
					break;
				case "wolfUp6":
					element("span", "엉덩이가 평소보다 무거운 느낌이다. 뒤쪽으로 손을 뻗어보니 새로 자라난 늑대 꼬리가 만져진다.", "gold");
					fragment.append(wikifier("earnFeat", "'Wolf'"));
					break;
				case "wolfDown0":
					element("span", "치통이 사라졌다.", "gold");
					break;
				case "wolfDown1":
					element("span", "당신의 송곳니가 일반 이빨로 돌아왔다.", "gold");
					break;
				case "wolfDown2":
					element("span", `머리${V.settings.pubicHairEnabled === true ? "와 사타구니가 더는 가렵지 않다" : "가 더는 가렵지 않다"}.`, "gold");
					break;
				case "wolfDown3":
					element("span", `늑대 귀${V.settings.pubicHairEnabled === true ? "와 새로 자라난 체모" : ""}가 사라졌다.`, "gold");
					break;
				case "wolfDown4":
					element("span", "엉덩이가 더는 가렵지 않다.", "gold");
					break;
				case "wolfDown5":
					element("span", "무게중심이 달라진 느낌이다. 늑대 꼬리가 사라졌다.", "gold");
					break;
				case "catUp1":
					element("span", "이상하게 이가 아프다. 딱정벌레 한 마리가 근처를 기어간다. 당신은 벌레를 덮치려는 욕구를 억누른다.", "gold");
					break;
				case "catUp2":
					element("span", "입이 뭔가 이상한 느낌이다. 당신은 혀로 입 안을 살펴보다가 새로 자라난 송곳니에 놀라 몸을 움찔거린다.", "gold");
					break;
				case "catUp3":
					element("span", "머리가 가렵다.", "gold");
					break;
				case "catUp4":
					element("span", "두피가 씰룩거린다. 머리 위로 손을 뻗자 한 쌍의 고양이 귀가 돋아나있다.", "gold");
					break;
				case "catUp5":
					element("span", "엉덩이가 가렵다.", "gold");
					break;
				case "catUp6":
					element("span", "엉덩이가 조금 더 무거워진 느낌이나, 균형은 완벽하게 잡을 수 있다. 당신이 뒤로 손을 뻗자 새로운 고양이 꼬리가 만져진다.", "gold");
					fragment.append(wikifier("earnFeat", "'Neko'"));
					break;
				case "catUp7":
					element("span", "당신의 눈이 가렵다.", "gold");
					break;
				case "catUp8":
					element("span", "눈동자 주위의 불타는 듯한 느낌에 당신은 눈물이 난다.", "gold");
					break;
				case "catUp9":
					element("span", "어떤 종류의 알레르기 때문인지 눈이 불타는 듯이 뜨거워서, 당신은 거의 눈을 뜨고 있지 못한다.", "gold");
					break;
				case "catUp10":
					element(
						"span",
						"당신의 눈은 더 이상 뜨겁지 않고, 이른 아침의 어둠 속에서도 당신 주변의 모든 세부적인 것들을 알아볼 수 있다.",
						"gold"
					);
					break;
				case "catDown0":
					element("span", "머리가 더는 가렵지 않다.", "gold");
					break;
				case "catDown1":
					element("span", "송곳니가 평범한 이로 변했다.", "gold");
					break;
				case "catDown2":
					element("span", "머리가 더는 가렵지 않다.", "gold");
					break;
				case "catDown3":
					element("span", "고양이 귀가 사라졌다.", "gold");
					break;
				case "catDown4":
					element("span", "엉덩이가 더는 가렵지 않다.", "gold");
					break;
				case "catDown5":
					element("span", "고양이 꼬리가 사라진다.", "gold");
					break;
				case "catDown6":
					element("span", "당신의 눈은 더 이상 가렵지 않다; 아마도 알레르기였던 것 같다.", "gold");
					break;
				case "catDown7":
					element("span", "당신의 눈은 주변의 세부적인 것들을 잘 알아보지 못한다.", "gold");
					break;
				case "catDown9":
					element("span", "당신의 주변이 예전보다 어둡게 보인다.", "gold");
					break;
				case "cowUp1":
					element("span", "이상하게 풀을 뜯어먹고 싶다.", "gold");
					break;
				case "cowUp2":
					element("span", "머리가 가렵다. 머리 위로 손을 뻗자, 작은 뿔 한 쌍이 돋아난 것이 만져진다.", "gold");
					break;
				case "cowUp3":
					element("span", "귀가 따끔거린다.", "gold");
					break;
				case "cowUp4":
					element(
						"span",
						"귀가 가렵다. 긁으려 손을 뻗자, 이전보다 훨씬 커진 것을 알아차린다. 당신은 한 쌍의 소 귀를 가지게 되었다.",
						"gold"
					);
					break;
				case "cowUp5":
					element("span", "엉덩이가 따끔거린다.", "gold");
					break;
				case "cowUp6":
					element(
						"span",
						"엉덩이가 전보다 무겁다. 엉덩이로 손을 뻗자 새로 돋아난 소 꼬리가 만져진다. 당신은 음메, 하고 울고픈 욕구를 억누른다.",
						"gold"
					);
					fragment.append(wikifier("earnFeat", "'Cattle'"));
					break;
				case "cowDown0":
					element("span", "풀이 더는 전처럼 맛있어 보이지 않는다.", "gold");
					break;
				case "cowDown1":
					element("span", "작은 뿔이 사라졌다.", "gold");
					break;
				case "cowDown2":
					element("span", "귀가 더는 따끔거리지 않는다.", "gold");
					break;
				case "cowDown3":
					element("span", "소 귀가 사라졌다.", "gold");
					break;
				case "cowDown4":
					element("span", "무게중심이 달라진 느낌이다. 소 꼬리가 사라졌다.", "gold");
					break;
				case "cowDown5":
					element("span", "무게중심이 달라진 느낌이다. 소 꼬리가 사라졌다.", "gold");
					break;
				case "harpyUp1":
					element("span", "당신의 시력이 예리해짐을 느낀다.", "gold");
					break;
				case "harpyUp2":
					element("span", "눈이 이상하게 느껴진다. 시력이 향상되었다.", "gold");
					break;
				case "harpyUp3":
					element(
						"span",
						`등 아래쪽과 목이 가렵다. ${
							V.loveInterest.primary !== "None"
								? `당신의 생각이 ${
										["Black Wolf", "Great Hawk"].includes(V.loveInterest.primary)
											? `${V.loveInterest.primary}에게 미치고,`
											: `카일라에게 미치고,`
								  } 당신은 그를 향한 근본적인, 거의 동물적인, 함께 있고 싶다는 욕구를 느낀다.`
								: "당신은 갑자기 같이 있고 싶은 진정한 연인을 갈망한다."
						}`,
						"gold"
					);
					break;
				case "harpyUp4":
					element("span", "엉덩이가 가벼워진다. 당신은 뒤에 손을 뻗어 깃털로 장식된 꼬리를 잡는다. 작은 깃털이 목을 뒤덮는다.", "gold");
					break;
				case "harpyUp5":
					element("span", `등${V.settings.pubicHairEnabled === true ? "과 사타구니가 가렵다" : "이 가렵다"}.`, "gold");
					break;
				case "harpyUp6":
					element(
						"span",
						`몸이 깃털처럼 가볍게 느껴진다. 날개가 얼굴을 쓰다듬는다.${
							V.settings.pubicHairEnabled === true ? " 당신은 또한 짧고, 깃털 같은 털이 사타구니에 돋아난 것을 본다." : ""
						}`,
						"gold"
					);
					fragment.append(wikifier("earnFeat", "'Harpy'"));
					break;
				case "harpyDown0":
					element("span", "당신의 시력이 정상으로 돌아왔다.", "gold");
					break;
				case "harpyDown1":
					element("span", "당신의 시력은 더는 예리하지 않다.", "gold");
					break;
				case "harpyDown2":
					element("span", "등 아래와 목의 가려움증이 멈추고, 당신은 더이상 연인을 그렇게 열광적으로 갈망하지 않는다.", "gold");
					break;
				case "harpyDown3":
					element("span", "깃털 달린 꼬리가 사라졌고, 목의 깃털도 사라졌다.", "gold");
					break;
				case "harpyDown4":
					element("span", `당신은 더 무겁게 느껴진다${V.settings.pubicHairEnabled === true ? ", 그리고 사타구니가 더이상 가렵지 않다" : ""}.`, "gold");
					break;
				case "harpyDown5":
					element(
						"span",
						`당신은 더 무겁게 느껴진다. 당신의 깃털 달린 날개${V.settings.pubicHairEnabled === true ? " 와 깃털같은 음모" : ""} 가 사라졌다.`,
						"gold"
					);
					break;
				case "foxUp1":
					element("span", "당신은 이상하게 이가 아프고, 당신의 눈이 약간 날카로워졌다고 느낀다. 당신은 무언가를 훔치고 싶은 충동을 느낀다.", "gold");
					break;
				case "foxUp2":
					element(
						"span",
						"당신의 입과 눈이 다르게 느껴진다. 당신은 혀로 입 안을 살펴보다가 새로 자라난 송곳니를 누르고는 낑낑거리는 소리를 낸다.",
						"gold"
					);
					break;
				case "foxUp3":
					element(
						"span",
						`머리가 가렵다. ${
							V.loveInterest.primary !== "None"
								? `당신의 생각이 ${
										["Black Wolf", "Great Hawk"].includes(V.loveInterest.primary)
											? `${V.loveInterest.primary}에게 미치고,`
											: `카일라에게 미치고,`
								  } 당신은 그를 향한 근본적인, 거의 동물적인, 함께 있고 싶다는 욕구를 느낀다.`
								: "당신은 갑자기 같이 있고 싶은 진정한 연인을 갈망한다."
						}`,
						"gold"
					);
					break;
				case "foxUp4":
					element("span", "당신은 머리에 무언가 있다고 느낀다. 당신이 손을 뻗어 당신의 새로운 여우 귀를 만지자, 그 귀는 그 반응하듯 씰룩거린다.", "gold");
					break;
				case "foxUp5":
					element(
						"span",
						"당신의 등 아래가 가렵다. 당신은 누군가에게 그곳을 긁어달라고 하고 싶은 욕구를 느낀다. 당신은 또한 눈 주위가 이상하게 변색된 것을 알아차린다.",
						"gold"
					);
					break;
				case "foxUp6":
					element(
						"span",
						"당신의 엉덩이가 평소보다 무겁게 느껴진다. 당신은 엉덩이를 한번 흔들어보고 당신의 새로운 여우 꼬리를 느낀다. 그것은 만지자 매우 안락한 느낌이 든다.",
						"gold"
					);
					fragment.append(wikifier("specialClothesUnlock", "'set'", "'shrine'"));
					fragment.append(wikifier("earnFeat", "'Fox'"));
					break;
				case "foxDown0":
					element("span", "치통이 사라졌다.", "gold");
					break;
				case "foxDown1":
					element("span", "당신의 송곳니가 일반 이빨로 돌아왔고, 당신은 시력이 둔해졌다고 느낀다.", "gold");
					break;
				case "foxDown2":
					element("span", "당신은 머리가 더는 가렵지 않고, 더 이상 연인을 그렇게 열광적으로 갈망하지 않는다.", "gold");
					break;
				case "foxDown3":
					element("span", "당신의 여우 귀가 사라졌다.", "gold");
					break;
				case "foxDown4":
					element("span", "등 아래의 가려움증이 멈추고, 당신의 눈 주위의 변색이 사라졌다.", "gold");
					break;
				case "foxDown5":
					element("span", "당신의 균형이 다르게 느껴진다. 당신의 여우 꼬리가 사라졌다.", "gold");
					break;
				// Clothes
				case "bimboMessage1":
					element(
						"span",
						`당신은 자신의 무언가가 달라졌다고 느끼지만, 이유를 알 수 없다.${
							V.worn.upper.type.includesAny("bimbo", "pimp") ||
							V.worn.lower.type.includesAny("bimbo", "pimp") ||
							V.worn.feet.type.includes("bimbo") ||
							V.worn.head.type.includes("pimp")
								? " 옷이 약간 몸에 들러붙어 있는 것처럼 느껴진다."
								: ""
						}`,
						"lewd"
					);
					break;
				case "pimpMessage1":
					element(
						"span",
						`당신은 자신의 무언가가 달라졌다고 느끼지만, 이유를 알 수 없다.${
							V.worn.upper.type.includes("pimp") || V.worn.lower.type.includes("pimp") || V.worn.head.type.includes("pimp")
								? " 당신의 옷은 만지면 따듯하게 느껴진다."
								: ""
						}`,
						"lewd"
					);
					break;
				case "bimboMessage2":
					element(
						"span",
						`당신은 또다시 자신의 무언가가 달라졌음을 느낀다. 이번에는 확실하다: 무언가가 당신을 여성스럽게 보이도록 만들고 있다. 당신의 생각이${
							V.worn.upper.type.includes("bimbo") || V.worn.lower.type.includes("bimbo") || V.worn.feet.type.includes("bimbo")
								? " 입고 있는 옷으로 향한다."
								: " 입고 있던 옷으로 향한다."
						}`,
						"lewd"
					);
					break;
				case "pimpMessage2":
					element(
						"span",
						`당신은 또다시 자신의 무언가가 달라졌음을 느낀다. 이번에는 확실하다: 무언가가 당신을 남성스럽게 보이도록 만들고 있다. 당신의 생각이${
							V.worn.upper.type.includes("pimp") || V.worn.lower.type.includes("pimp") || V.worn.head.type.includes("pimp")
								? " 입고 있는 옷으로 향한다."
								: " 입고 있던 옷으로 향한다."
						}`,
						"lewd"
					);
					break;
				case "bimboMessage3":
					element(
						"span",
						"당신은 마음 속에서 이상한 갈망이 커지는 것을 느낀다. 당신은 깊은 욕망으로 가득 찬다. 참을 수 없는 욕망이 당신을 사로잡는다.",
						"lewd"
					);
					break;
				// Feats
				case "heroicVictory":
					fragment.append(wikifier("earnFeat", "'Heroic Victory'"));
					break;
				case "dawnToDusk":
					fragment.append(wikifier("earnFeat", "'Dawn to Dusk'"));
					break;
				case "adultShopContribution":
					if (V.adultshopcontribution) fragment.append(wikifier("earnFeat", "'Opened Pandoras Box'"));
					if (V.adultshopcontribution >= 12) fragment.append(wikifier("earnFeat", "'Opened Pandoras Cocks'"));
					break;
				case "valentinesTomorrow":
					sWikifier(
						`<span class="gold">내일은 발렌타인 데이다. 당신은 특별한 사람과 함께 즐거운 시간을 보내기를 손꼽아 기다리는 자신을 발견한다.</span> <<stress -6>><<lstress>><<trauma -6>><<ltrauma>>`
					);
					br();
					break;
				case "valentinesToday":
					sWikifier(
						`<span class="gold">오늘은 발렌타인 데이다. 당신은 특별한 사람과 소중한 시간을 보내기를 고대하고 있다. 그렇게 하는 편이 보다 충실한 시간을 보낼 수 있으리라.</span> <<stress -6>><<lstress>><<trauma -6>><<ltrauma>>`
					);
					br();
					break;
				default:
					// Report error
					errors.pushUnique(messageKey);
					break;
			}
		});
		if (errors.length) Errors.report("Not fully implemented or incorrect time message keys found", errors);
		V.timeMessages = [];
	}

	sWikifier("<<integritycheck>><<exposure>>");

	V.orgasmdown -= 1;

	if (V.exposed >= 1 && V.exposedcheck === 1) {
		V.exposedcheck = 0;
		sWikifier("당신은 당신의 알몸을 의식한다.");
		br();
	}

	if (V.timer >= 1) V.timer--;
	// V.turnCount++;

	sWikifier("<<bindings>>");

	if (V.worn.genitals.cursed === 1 && V.worn.genitals.integrity <= 0) V.worn.genitals.type.push("broken");

	if (V.worn.feet.type.includes("heels") && currentSkillValue("feetskill") < V.worn.feet.reveal) {
		V.tiredness += (V.worn.feet.reveal - currentSkillValue("feetskill")) / 150;
	}

	if (V.combat) sWikifier("<<pass 10 seconds>>");

	if (fragment.children.length) br();

	V.menu = 0;

	if (V.combat === 0 && V.ironmanmode === true) IronMan.scheduledSaves();

	return fragment;
}

Macro.add("effects", {
	handler() {
		const fragment = effects();
		this.output.append(fragment);
	},
});
