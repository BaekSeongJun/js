// 컨테이너
const containerAdmin = document.querySelector('.container__admin');
const containerJoin = document.querySelector('.container__join');
const containerMain = document.querySelector('.container__main');
const containerPhoneRecord = document.querySelector('.container__phoneRecord');
const containerCall = document.querySelector('.container__call');
const containerKatalk = document.querySelector('.container__katalk');
const containerKatalkConversation = document.querySelector(
	'.container__katalk-conversation'
);
const containerMessage = document.querySelector('.container__message');
const containerAccount = document.querySelector('.container__account');
const containerWarning = document.querySelector('.container__warning');
const containerAll = document.querySelectorAll('.container');

/**
 * alert box
 */
const alertBox = document.querySelector('.alert__box');
const alertBoxText = document.querySelector('.alert__box-text');
const alertBoxCheck = document.querySelector('.alert__box-check');

/**
 * 회원가입
 */
const joinAuth = document.querySelectorAll('.join__auth');
const joinEnter = document.querySelector('#join__enter');
const joinOuter = document.querySelector('#join__outer');

// 이름로그인
const adminAuth = document.querySelectorAll('.admin__auth');
const adminEnter = document.querySelector('#admin__enter');
const adminJoin = document.querySelector('#admin__join');

// 계좌금액
const accountName = document.querySelector('.account__name');
const accountAmount = document.querySelector('.account__amount');

// 메인버튼
const commonMainBtn = document.querySelectorAll('.common__mainBtn');

// 부재중전화버튼
const phoneRecordBtnIcon = document.querySelector('.phoneRecord__clickArea');

// 메세지화면(통화중화면이동)
const messageClickArea = document.querySelector('.message__clickArea');

// 카카오톡 대화방 입장 버튼
const katalkClick = document.querySelector('.katalk__click');

/**
 * 카카오톡 대화방
 */
const katalkConversation = document.querySelector('.katalk__conversation');
const katalkBtnSelect = document.querySelectorAll('.katalk__btnSelect');
const katalkSelect1 = document.querySelector('.katalk__select1');
const katalkSelect2 = document.querySelector('.katalk__select2');

// tts
const ttsSound = document.querySelectorAll('.tts__sound');

// 선택버튼
const callBtnSelect = document.querySelectorAll('.call__btnSelect');
const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');

// 뒤로버튼
const commonBtnEnd = document.querySelector('.common__btnEnd');
const commonBtnEndToggleIcon = document.querySelector(
	'.common__btnEnd-toggle-icon'
);

/**
 * 경고화면
 */
// 메인화면 이동버튼
const btnMainBack = document.querySelector('.btn__mainBack');
// 링크이동 버튼
const btnMoveLink = document.querySelector('.btn__moveLink');

/**
 * tts 정지
 */
function ttsStop() {
	ttsSound.forEach((e) => {
		e.load();
	});
}

/**
 * 전체 컨테이너 none func
 */
function containerNone(blackContainer, visible) {
	containerAll.forEach((ele) => {
		count = 0;
		countKatalk = 0;
		ele.style.display = 'none';
		blackContainer.style.display = 'block';
		commonBtnEnd.style.display = visible;
		ttsStop();
		commonBtnEnd.style.filter = 'invert()';
	});
	if (containerCall.style.display == 'block') {
		commonBtnEndToggleIcon.attributes.src.value = `./img/close_icon.png`;
	} else {
		commonBtnEndToggleIcon.attributes.src.value = `./img/back_icon.png`;
	}
}
/**
 * 로그인화면
 */

/**
 * 회원가입
 */
adminJoin.addEventListener('click', function () {
	containerJoin.style.display = 'block';
	containerAdmin.style.display = 'none';
});

joinOuter.addEventListener('click', function () {
	containerJoin.style.display = 'none';
	containerAdmin.style.display = 'block';
});

/**
 * 회원가입 검증
 */
joinEnter.addEventListener('click', function () {
	joinAuth.forEach((ele) => {
		console.log(ele.value[0]);
		console.log(ele.value[1]);
		if (ele.value == '') {
			alertBox.style.display = 'block';
			alertBoxText.textContent = `정보를 입력하세요.`;
			return;
		} else {
			localStorage.setItem('name', ele.value[0]);
			localStorage.setItem('pw', ele.value[1]);
			alertBox.style.display = 'block';
			alertBoxText.textContent = `회원가입이 완료되었습니다.`;
		}
	});
});

/**
 * alert box
 */
alertBoxCheck.addEventListener('click', function () {
	if (alertBoxText.textContent == `정보를 입력하세요.`) {
		alertBox.style.display = 'none';
	} else if (alertBoxText.textContent == `회원가입이 완료되었습니다.`) {
		alertBox.style.display = 'none';
		containerJoin.style.display = 'none';
		containerAdmin.style.display = 'block';
	} else if (alertBoxText.textContent == `로그인 정보를 입력하세요.`) {
		alertBox.style.display = 'none';
	}
});

/**
 * 메인화면
 */
let finalAccount = Number(accountAmount.innerHTML);
commonMainBtn.forEach((ele, idx) => {
	ele.addEventListener('click', function () {
		switch (idx) {
			case 0:
				containerMain.style.display = 'none';
				containerAccount.style.display = 'block';
				accountAmount.innerHTML = finalAccount.toLocaleString();
				commonBtnEnd.style.display = 'block';
				commonBtnEnd.style.filter = 'initial';
				break;
			case 1:
				if (finalAccount == 0) return;
				containerMain.style.display = 'none';
				containerPhoneRecord.style.display = 'block';
				break;
			case 2:
				containerMain.style.display = 'none';
				containerMessage.style.display = 'block';
				commonBtnEnd.style.display = 'block';
				break;
			case 3:
				finalAccount = 5000000;
				break;
			case 4:
				if (finalAccount == 0) return;
				containerMain.style.display = 'none';
				containerKatalk.style.display = 'block';
				katalkClick.style.display = 'block';
				break;
			default:
		}
	});
});

/**
 * 메세지버튼
 */
messageClickArea.addEventListener('click', function () {
	containerNone(containerCall, 'block');
	document.getElementById('tts1').play();
});

/**
 * 부재중전화 버튼
 */
phoneRecordBtnIcon.addEventListener('click', function () {
	containerNone(containerCall, 'block');
	document.getElementById('tts1').play();
});

/**
 * 통화중 선택
 */
let count = 0;
callBtnSelect.forEach((select) => {
	select.addEventListener('click', function () {
		if (count == 0) {
			ttsStop();
			document.getElementById('tts2').play();
			select1.attributes.src.value = `./select-box/2-1.png`;
			select2.attributes.src.value = `./select-box/2-2.png`;
			count++;
		} else if (count == 1) {
			ttsStop();
			document.getElementById('tts3').play();
			select1.attributes.src.value = `./select-box/4-1.png`;
			select2.attributes.src.value = `./select-box/4-2.png`;
			count++;
		} else if (count == 2) {
			if (select.attributes.src.value == `./select-box/4-1.png`) {
				ttsStop();
				containerCall.style.display = 'none';
				containerWarning.style.display = 'block';
				btnMainBack.style.display = 'block';
				btnMoveLink.style.display = 'block';
				commonBtnEnd.style.display = 'none';
				select1.attributes.src.value = `./select-box/1-1.png`;
				select2.attributes.src.value = `./select-box/1-2.png`;
				finalAccount = finalAccount - 2500000;
				count = 0;
			} else if (select.attributes.src.value == `./select-box/4-2.png`) {
				ttsStop();
				containerCall.style.display = 'none';
				containerMain.style.display = 'block';
				commonBtnEnd.style.display = 'none';
				select1.attributes.src.value = `./select-box/1-1.png`;
				select2.attributes.src.value = `./select-box/1-2.png`;
				count = 0;
			}
		}
	});
});

/**
 * 카카오톡 대화방
 */
katalkClick.addEventListener('click', function () {
	containerKatalk.style.display = 'none';
	katalkClick.style.display = 'none';
	containerKatalkConversation.style.display = 'block';
	commonBtnEnd.style.display = 'block';
	commonBtnEnd.style.filter = 'initial';
});

//
let countKatalk = 0;
katalkBtnSelect.forEach((select) => {
	select.addEventListener('click', function () {
		if (countKatalk == 0) {
			katalkConversation.attributes.src.value = `./katalk_select-box/katalk2.png`;
			katalkSelect1.attributes.src.value = `./katalk_select-box/2-1.png`;
			katalkSelect2.attributes.src.value = `./katalk_select-box/2-2.png`;
			countKatalk++;
		} else if (countKatalk == 1) {
			katalkConversation.attributes.src.value = `./katalk_select-box/katalk3.png`;
			katalkSelect1.attributes.src.value = `./katalk_select-box/3-1.png`;
			katalkSelect2.attributes.src.value = `./katalk_select-box/3-2.png`;
			countKatalk++;
		} else if (countKatalk == 2) {
			katalkConversation.attributes.src.value = `./katalk_select-box/katalk4.png`;
			katalkSelect1.attributes.src.value = `./katalk_select-box/4-1.png`;
			katalkSelect2.attributes.src.value = `./katalk_select-box/4-2.png`;
			countKatalk++;
		} else if (countKatalk == 3) {
			if (select.attributes.src.value == `./katalk_select-box/4-1.png`) {
				containerKatalkConversation.style.display = 'none';
				containerWarning.style.display = 'block';
				btnMainBack.style.display = 'block';
				btnMoveLink.style.display = 'block';
				commonBtnEnd.style.display = 'none';
				katalkConversation.attributes.src.value = `./katalk_select-box/katalk1.png`;
				katalkSelect1.attributes.src.value = `./katalk_select-box/1-1.png`;
				katalkSelect2.attributes.src.value = `./katalk_select-box/1-2.png`;
				finalAccount = finalAccount - 2500000;
				countKatalk = 0;
			} else if (select.attributes.src.value == `./katalk_select-box/4-2.png`) {
				containerKatalkConversation.style.display = 'none';
				containerMain.style.display = 'block';
				commonBtnEnd.style.display = 'none';
				katalkConversation.attributes.src.value = `./katalk_select-box/katalk1.png`;
				katalkSelect1.attributes.src.value = `./katalk_select-box/1-1.png`;
				katalkSelect2.attributes.src.value = `./katalk_select-box/1-2.png`;
				countKatalk = 0;
			}
		}
	});
});

/**
 * 경고창 메인화면버튼
 */
btnMainBack.addEventListener('click', function () {
	containerWarning.style.display = 'none';
	containerMain.style.display = 'block';
});

/**
 * 경고창 링크이동
 */
btnMoveLink.addEventListener('click', function () {
	window.open(`https://ecrm.police.go.kr`);
});

/**
 * 뒤로버튼
 */
commonBtnEnd.addEventListener('click', function () {
	ttsStop();
	containerNone(containerMain, 'none');
});


const signup = () => {
	const name = document.querySelector('.name').value
	const password = document.querySelector('.password').value
	const date = document.querySelector('.date').value
	const address = document.querySelector('.address').value
	console.log(name)
	if (name, password, date, address) window.localStorage.setItem(name, JSON.stringify({name, password, date, address}))
}

let userName

const signin = () => {

	const name = document.querySelector('.name2').value
	userName = name
	const password = document.querySelector('.password2').value
	const user = JSON.parse(window.localStorage.getItem(name))

	if (!user) {
		alert('유저 정보 없음')
		return
	}

	else if (password !== user.password) {
		alert('아이디/비밀번호를 확인해주세요')
	}

	else {
		document.querySelector('.container__admin').style.display = 'none'
		document.querySelector('.container__main').style.display = 'block'
		document.querySelector('.account__name').innerHTML = `${name} 님`
		document.querySelector('.name2').value = ''
		document.querySelector('.password2').value = ''
	}
}

const changePassword = () => {
	const user = JSON.parse(window.localStorage.getItem(userName))
	const newPassword = document.querySelector('.password3').value
	const newUser = {...user, password: newPassword}
	console.log(user, newUser)
	window.localStorage.setItem(user.name, JSON.stringify(newUser))
	alert('비밀번호 변경 완료\n다시 로그인 해주세요')
	document.querySelector('.container__admin').style.display = 'block'
	document.querySelector('.container__main').style.display = 'none'
	document.querySelector('.container__account').style.display = 'none'
	document.querySelector('.common__btnEnd').style.display = 'none'
	document.querySelector('.password3').value = ''

}
