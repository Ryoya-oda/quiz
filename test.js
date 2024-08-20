const quiz = [
 {
  question : "ハリーの額にある傷は何の形をしている？",
  answers:  [
  "星",
  "雷",
  "炎",
  "月"
    ],
  correct: "雷"
 },
 {
  question : "この中で「死の秘宝」ではないものはどれ？",
  answers: [
  "透明マント",
  "蘇りの石",
  "ニワトコの杖",
  "灯消しライター"
    ],
  correct: "灯消しライター"
 },
 {
  question : "ハリーポッターを演じた役者の名前は？",
  answers: [
  "ルパート・グリント",
  "アラン・リックマン",
  "ダニエル・ラドクリフ",
  "トム・フェルトン"
    ],
  correct: "ダニエル・ラドクリフ"
 },
{
  question : "この中で「禁じられた呪文」でないものを選べ",
  answers:  [
  "クルーシオ",
  "セクタムセンプラ",
  "インペリオ",
  "アバダケダブラ"
    ],
  correct: "セクタムセンプラ"
},
 {
  question : "セブルス・スネイプの守護獣（パトローナス）は次のうちどれか",
  answers:  [
  "牝鹿",
  "蛇",
  "犬",
  "牡鹿"
    ],
  correct: "牝鹿"
 },
 {
  question : "映画のハリーポッターで一番多く唱えられた呪文は？",
  answers:  [
  "ルーモス",
  "エクスぺリアームス",
  "エクスペクト・パトローナム",
  "ステューピファイ"
    ],
  correct: "エクスペリアームス"
 },
 {
  question : "ハリーの飼いフクロウ、ヘドウィグを演じたフクロウはシリーズを通して何羽いる？",
  answers:  [
  "１",
  "４",
  "６",
  "９"
    ],
  correct: "４"
 },
 {
  question : "「ハリーポッターと謎のプリンス」に出てきた”半純血のプリンス”とはいったい誰のことでしょう？",
  answers:  [
  "シリウス・ブラック",
  "ホラス・スラグホーン",
  "ダンブルドア",
  "セブルス・スネイプ"
    ],
  correct: "セブルス・スネイプ"
 },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//何度も出てくるものは変数や定数に設定する
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
//HTMLのオブジェクトを変数や定数に設定した場合には$をつける
//同じような命令を繰り返している　→1つにまとめる
const setupQuiz = () =>{
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex =0;
  while(buttonIndex < buttonLength ){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
   }
}
setupQuiz();

//e.target:クリックされた場所
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解");
    score++;
  }else{
    window.alert("不正解")
  }

  quizIndex++;

  if(quizIndex < quizLength){
    　setupQuiz();
  }else{
　　　window.alert("終了！ あなたの正解数は"+score+"点です！");
  }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
   $button[handlerIndex].addEventListener("click",(e)=>{
  clickHandler(e);
});
   handlerIndex++;
};



