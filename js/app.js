// ジャンケンの手の番号を設定
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

// ジャンケンの入力ダイアログボックスを表示
let hum = prompt('半角数字で1〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);