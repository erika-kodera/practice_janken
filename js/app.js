// ジャンケンの手の番号を設定
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

// ジャンケンの入力ダイアログボックスを表示
let hum = prompt('半角数字で1〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);

// 入力値のチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
  //入力値が不適切な場合
  alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
  
}
