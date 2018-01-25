var kurs = {
	usdSell : `28.86`,
	usdBuy : `28.91`,
	euroSell : `35.3`,
	euroBuy : `35.5`,
	rubSell : `0.5`,
	rubBuy : `0.51`
}
var $inputSum = document.getElementById(`input_sum`);
var $selectCur = document.getElementById(`select_cur`);
var $buttonSell = document.getElementById(`button_sell`);
var $final = document.getElementById(`final`);

document.getElementById(`calc_curr`).addEventListener(`click`, function() {
	if (+$inputSum.value > 0) {
		if ($buttonSell.checked) {
			if ($selectCur.value === `euro`) {
				$final.textContent = (+kurs.euroSell * +$inputSum.value).toFixed(2);
			} else if ( $selectCur.value === `usd`) {
				$final.textContent = (+kurs.usdSell * +$inputSum.value).toFixed(2);
			} else if ($selectCur.value === `rub`) {
				$final.textContent = (+kurs.rubSell * +$inputSum.value).toFixed(2);
			}
			$final.textContent = `Вы получите ` + $final.textContent + ` грн`;
		} else {
			if ( $selectCur.value === `euro`) {
				$final.textContent = (+kurs.euroBuy * +$inputSum.value).toFixed(2);
			} else if ( $selectCur.value === `usd`) {
				$final.textContent = (+kurs.usdBuy * +$inputSum.value).toFixed(2);
			} else {
				$final.textContent = (+kurs.rubBuy * +$inputSum.value).toFixed(2);
			}
			$final.textContent = `Вам понадобится ` + $final.textContent + ` грн`;
		}
		$inputSum.placeholder = `Введите сумму`;
	} else {
		$inputSum.placeholder = `Введите сумму!`;
	}
	$inputSum.value = ``;
	$inputSum.focus();
})

document.getElementById(`calc_curr`).addEventListener(`mousedown`, function() {
	this.classList.add(`active_calc`);
});
document.getElementById(`calc_curr`).addEventListener(`mouseup`, function() {
	this.classList.remove(`active_calc`);
});

// переключатель меняет checked radio
document.querySelector(`.chk`).addEventListener(`click`, function() {
	if (!this.querySelector(`div`).classList.contains(`chk1`)){
		this.querySelector(`div`).classList.add(`chk1`);
		document.getElementById(`button_buy`).checked = `true`;
	} else {
		this.querySelector(`div`).classList.remove(`chk1`);
		document.getElementById(`button_sell`).checked = `true`;
	}
});
document.getElementById(`button_sell`).addEventListener(`click`, function() {
	document.querySelector(`.chk`).querySelector(`div`).classList.remove(`chk1`);
});
document.getElementById(`button_buy`).addEventListener(`click`, function() {
	document.querySelector(`.chk`).querySelector(`div`).classList.add(`chk1`);
});