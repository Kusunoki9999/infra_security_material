// pageを飛ぶ
function navigateTo(page) {
    window.location.href = page;
}

// 解答を判定
function checkAnswer() {
    const owner = document.getElementById('owner').value;
    const group = document.getElementById('group').value;
    const other = document.getElementById('other').value;
    const resultDiv = document.getElementById('result');

    // 解答が正しいかどうか・初期値はtrue
    let correct = true;
    // 誤答ならエラーメッセージを表示・初期値はnull
    let message = '';

    // 解答チェック
    if (owner != '読み取り(4)+書き込み(2)') {
        correct = false;
        message += '<p>所有者（ユーザ）の権限が間違っています。</p>';
    }
    if (group != '読み取り(4)') {
        correct = false;
        message += '<p>所有グループ（知人）の権限が間違っています。</p>';
    }
    if (other != '読み取り(4)') {
        correct = false;
        message += '<p>その他のユーザの権限が間違っています。</p>';
    }

    // フォームの下にエラーメッセージ挿入
    resultDiv.innerHTML = message;

    // 正誤で画像を変更
    if (correct) {
        showPopup('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiTJUPGV8hiZkZcUFB_W1vksJC7KkLhyz09vZao_3geYYoGhhG8xpKXzw8AWm_LVsUglwlTuVJGMxqznQg6Uz16Opm_O4M2HTwVIGhY0gKOFhRW7dnvK_3Yecr2bnag1FAe5SayuX66FmU/s552/mark_circle_ok.png', 'correct.mp3');
    } else {
        showPopup('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKKDRlalVZITp4VLajcSppV2F2R0ygePfxRxnJbz4ePk7ILogagNGjhMB5OVuS2BkFor-R2827wo1DxUQQrHeclV_SJtIwPtr8Q5mIyNJRLDZ_0Iz2QnGwTHwXZKgqFNVh30kVLXTTySUj/s552/mark_circle_ng.png', 'incorrect.mp3');
    }
}

function showPopup(imageSrc, audioSrc) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const img = document.createElement('img');
    img.src = imageSrc;
    popup.appendChild(img);
    document.body.appendChild(popup);

    const audio = new Audio(audioSrc);
    audio.play();

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

// 役割を保持
function setRole(role) {
    // 役割をブラウザのローカルストレージに保持・戻ってきたり再読み込みしたりしても保持
    localStorage.setItem('userRole', role);
    updateContent(role);

    // ボタンの近くに信号ライトを表示する
    showIndicators(role);
}

function updateContent(role) {
    const userContent = document.getElementById('user-content');
    const friendContent = document.getElementById('friend-content');
    const otherContent = document.getElementById('other-content');
    const defaultMessage = document.getElementById('default-message');

    // すべてのコンテンツを非表示にする
    userContent.style.display = 'none';
    friendContent.style.display = 'none';
    otherContent.style.display = 'none';

    if (role === 'user') {
        userContent.style.display = 'block';
    } else if (role === 'friend') {
        friendContent.style.display = 'block';
    } else if (role === 'other') {
        otherContent.style.display = 'block';
    }
    
    // デフォルトメッセージを非表示にする
    defaultMessage.style.display = 'none';
}

function showIndicators(role) {
    const buttons = document.querySelectorAll('.role-btn');
    
    // 一旦すべてのインジケータを非表示にする
    buttons.forEach(button => {
        const indicator = button.nextElementSibling;
        if (indicator) {
            indicator.style.display = 'none';
            indicator.classList.remove('green', 'red');
        }
    });

    // 選択されたボタンの近くに緑色のインジケータを表示する
    const activeButton = document.querySelector('.role-btn[data-role="' + role + '"]');
    if (activeButton) {
        const indicator = activeButton.nextElementSibling;
        if (indicator) {
            indicator.style.display = 'inline-block';
            indicator.classList.add('green');
        }
    }

    // 他のボタンの近くに赤色のインジケータを表示する
    buttons.forEach(button => {
        const buttonRole = button.getAttribute('data-role');
        if (buttonRole !== role) {
            const indicator = button.nextElementSibling;
            if (indicator) {
                indicator.style.display = 'inline-block';
                indicator.classList.add('red');
            }
        }
    });
}

// HTML生成時にインジケータを追加する
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.role-btn');
    buttons.forEach(button => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        button.parentNode.insertBefore(indicator, button.nextSibling);
    });
});

// 初期設定を読み込み
document.addEventListener('DOMContentLoaded', function() {
    const defaultMessage = document.getElementById('default-message');
    defaultMessage.style.display = 'block'; // 最初はデフォルトメッセージを表示する
});

