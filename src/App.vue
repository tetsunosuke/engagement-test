<script setup>
import { ref, reactive, onMounted} from 'vue';

const obj = reactive({judgeAble: false})


const data = [
  {
    index:1,
    text: "プライベートの活動と仕事は切り離して考えるべきだと思う",
    selfFocus: -1,
  },
  {index:2, text: "お金になるなら仕事の内容には強くこだわらない", selfFocus: -1 },
  { index:3,text: "業務に関係のあることをもっと学びたいと思っている", selfFocus: 1 },
  {
    index:4,
    text: "どのような顧客に対して関わるかよりもどんな仕事をするかの方が大事だ",
    selfFocus: 1,
  },
  { index:5,
    text: "仕事に関連した新しいことを学ぶと楽しいと思う", selfFocus: 1 },
  {
    index:6,
    text: "やってみたいと思えている仕事につくことは私にとっては重要だ",
    selfFocus: 1,
  },
  {
    index:7,
    text: "知識を拡げるための時間や金銭的な余裕がもっとあればいいと思う",
    selfFocus: 1,
  },
  { index:8,text: "好奇心を刺激されるような仕事に取り組みたい", selfFocus: 1 },
  {
    index:9,
    text: "スキルアップよりも自分の仕事を安定させることが大事だ",
    selfPurpose: -1,
  },
  {
    index:10,
    text: "成果のみを追求するよりもプロセスの方が重要なのでそこを評価してほしいと思っている",
    selfPurpose: -1,
  },
  { index:11,
    text: "仕事を通じて成長している感覚を得たいと思っている", selfPurpose: 1 },
  {
    index:12,
    text: "指示をされたり決められたやり方に従ってやるよりも自分でやりかたを決めて仕事を進めたい",
    selfPurpose: 1,
  },
  {index:13,
    text: "自己実現をするためには多少の困難が必要不可欠だと思っている",
    selfPurpose: 1,
  },
  {
    index:14,
    text: "より難しく、大きな影響力のある仕事をしていきたいと思っている",
    selfPurpose: 1,
  },
  {
    index:15,
    text: "自分自身を高めるために新しいことを学び続けることは重要だと思う",
    selfPurpose: 1,
  },
  {
    index:16,

    text: "仕事は結果を出して目標を達成することがとにかく重要だと思う",
    selfPurpose: 1,
  },
  {
    index:17,
    text: "家庭や友人との時間が仕事によって犠牲になってしまうことは仕方がないことだと思う",
    othersFocus: -1,
  },
  {
    index:18,
    text: "ワークライフバランスを考えると仕事のパフォーマンスは低下してしまうと思う",
    othersFocus: -1,
  },
  {
    index:19,
    text: "プライベートでの活動が充実すれば仕事に良い影響を与えると思う",
    othersFocus: 1,
  },
  {
    index:20,
    text: "職場の人間関係が良好でないと仕事をやる上で満足感は得られないと思う",
    othersFocus: 1,
  },
  {
    index:21,
    text: "一人で成果を出すよりも周りの人と関わり合いながら働きたい",
    othersFocus: 1,
  },
  {
    index:22,
    text: "人間関係が悪化すると仕事のパフォーマンスに悪影響が出てしまうと思う",
    othersFocus: 1,
  },
  {
    index:23,
    text: "休息や同僚との雑談の時間は、生産性を維持するために重要だと思う",
    othersFocus: 1,
  },
  {
    index:24,
    text: "「仕事人間」のような人を見ると理解できないと思う",
    othersPurpose: -1,
  },
  {
    index:25,
    text: "同じ仕事をしているチームの仲間なのに、特定の人だけが評価されるのは納得行かない",
    othersPurpose: -1,
  },
  {
    index:26,
    text: "社会的な評価よりも、自分自身が満足できる仕事をすることが重要だと思う",
    othersPurpose: 1,
  },
  {
    index:27,
    text: "関わっていた仕事が途中で中止になってしまったらとても悔しいと思う",
    othersPurpose: 1,
  },
  {
    index:28,
    text: "自分のやりたいことをやることよりも、周囲から求められることをやることのほうが大切だと思う",
    othersPurpose: 1,
  },
  {
    index:29,
    text: "周囲とうまくやっていくことよりも成果を出して高い報酬を得るほうを重視したい",
    othersPurpose: 1,
  },
  {
    index:30,
    text: "「昇進すること」は自分にとって大切なことの一つだ",
    othersPurpose: 1,
  },
  {
    index:31,
    text: "自分の仕事が誰かの役にたっていると思えることはとても重要だと思う",
    othersPurpose: 1,
  },
  {
    index:32,
    text: "自分が関わった仕事がテレビや社内報などで取り上げられるととても嬉しい",
    othersPurpose: 1,
  },
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(data)

onMounted(()  => {
})
const selectChange = (e, index) => {  
    let val = document.querySelector("[name='name_" + index + "']").value-0
    if (!isNaN(val)) {
      document.querySelector("#id_" + index).style.backgroundColor = "#ccc"
    } else {
      document.querySelector("#id_" + index).style.backgroundColor = ""
    }
    const total = data.filter((item) => {
      let val = document.querySelector("[name='name_" + item.index + "']").value-0
      return isNaN(val)
    })
    if (total.length === 0) {
      Object.assign(obj, {judgeAble:true})
    } else {
      Object.assign(obj, {judgeAble:false})
    }
    const nextSibling = e.target.parentNode.parentNode.parentNode.nextSibling
    if (typeof nextSibling.querySelector !== "undefined") {
      const nextSelect = nextSibling.querySelector("select")
      nextSelect.focus()
      nextSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const judgeBtn = document.querySelector("#judgeButton")
      if(judgeBtn) {
        judgeBtn.scrollIntoView({ behavior:"smooth", block: "center"})
      }
    }

}
const judge = () => {
  // すべてのチェック内容をカウントして
  const score = data.map ((item) => {
    let val = document.querySelector("[name='name_" + item.index + "']").value-0
    return {
      index: item.index,
      selfFocus: typeof item.selfFocus === "undefined" ? 0 : item.selfFocus * val,
      selfPurpose: typeof item.selfPurpose === "undefined" ? 0 : item.selfPurpose * val,
      othersFocus: typeof item.othersFocus === "undefined" ? 0 : item.othersFocus * val,
      othersPurpose: typeof item.othersPurpose === "undefined" ? 0 : item.othersPurpose * val,
    }
  }).reduce( (ac, ci) => {
    ac.selfFocus     += ci.selfFocus;
    ac.selfPurpose   += ci.selfPurpose;
    ac.othersFocus   += ci.othersFocus;
    ac.othersPurpose += ci.othersPurpose;
    return ac
  }, {selfFocus:0, selfPurpose:0, othersPurpose:0, othersFocus:0})
  var pairs = Object.entries(score);
  pairs.sort(function(p1, p2){
    let p1Val = p1[1], p2Val = p2[1];
    return p2Val - p1Val;
  })
  const result = Object.fromEntries(pairs)

  const display = translateAsDisplay(result)
  Object.assign(obj, display)
  Object.assign(obj, {finish: true})
}

const translateAsDisplay = (input) => {
  // 上位２位のタイプを取得
  const keys = Object.keys(input)[0]
  console.log("translateAsDisplay", input, keys)
  // self同士、others同士で比べて、強く出る要素をピックアップ
  const type = {
    self: input.selfFocus >= input.selfPurpose ? "F" : "P",
    others: input.othersFocus >= input.othersPurpose ? "F": "P"
  }

  const key = `${type.self}x${type.others}`

  const pattern = {
    "FxF": {
      character: "孫悟空／竈門炭治郎",  
      explanation: "自己成長と達成: 個々の成長、達成感、自己実現を追求するタイプです。",
      text: [
        "孫悟空：いつも自己成長を追求し、強大な敵を倒すために日々修行を積むキャラクターです。",
        "竈門炭治郎: 彼は自分のスキルと力を絶えず向上させようと努力し、家族を救うための目標を追求します。"
      ]
    },
    "FxP": {
      character: "ブルマ／富岡義勇",  
      explanation: "仕事の興味と多様性: 仕事そのものに対する興味や新規性、多様性を重視するタイプです。",
      text: [
        "ブルマ：技術者として、常に新たな発明を追求し、様々な装置や乗り物を開発するキャラクターです。",
        "富岡義勇：彼は鬼狩りという仕事に情熱を注ぎ、新しい技術と戦略を常に探求しています。"
      ]
    },
    "PxF": {
      character: "ベジータ／胡蝶しのぶ",  
      explanation: "社会的認知と評価：周囲からの評価や認知、社会的な意義を重視するタイプです。",
      text: [
        "胡蝶しのぶ：彼女は他者からの評価や尊敬を重視し、公正で慈悲深い行動によりその認識を維持します。",
        "ベジータ：サイヤ人の王子としての自己イメージを保つため、他者（特に悟空）からの評価を重視するキャラクターです。"

      ]
    },
    "PxP": {
      character: "クリリン／我妻善逸",
      explanation: "人間関係とワークライフバランス: 仕事場の人間関係や働く環境、ワークライフバランスを重視するタイプです。",
      text: [
        "クリリン：悟空との友情を大切にし、仲間たちとの人間関係に重きを置くキャラクターです。",
        "我妻善逸：彼は友人や同僚との関係を大切にし、他者との良好な人間関係を重視します",
      ]
    },
  }

  const result = pattern[key]
  result["priority"] = translatePriority(keys)
  result["score_mark"] = translateScores(input)
  return result
}
const translateScores = (input) => {
  // {selfPurpose: 0, othersPurpose: 0, othersFocus: 0, selfFocus: -2} を記号化する
  return convertToAlphabet(input.selfPurpose) + convertToAlphabet(input.selfFocus) + convertToAlphabet(input.othersPurpose) + convertToAlphabet(input.othersFocus)
}
function convertToAlphabet(number) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  // 数値が-20から20の範囲内に収まるように調整
  if (number < -20) {
    number = -20;
  } else if (number > 20) {
    return "-";
  }
  
  // 文字列をlettersの一文字に変換
  const letter = letters[number + 20];
  
  return letter;
}
const translatePriority = (key) => {
  const choice = {
    "selfFocus": "自中",
    "selfPurpose":"自焦",
    "othersFocus":"他焦",
    "othersPurpose":"他中"
  }

  return choice[key]
}
</script>

<template>
  <div>
    <div class="h1">あなたの働きがい診断</div>
    <div v-for="(row, index) in data" :key="index">
      <div class="card mb-3" v-bind="{id: 'id_' + row.index}">
        <div class="card-body">
    <p class="card-title">{{index+1}}. {{ row.text }}</p>
    <select class="form-select form-select-lg mb-3 card-text" 
            aria-label=".form-select-lg example" 
            @change="selectChange($event, row.index)" 
            v-bind="{name: 'name_' + row.index}">
      <option selected>当てはまると思うものを選択してください</option>
      <option value="2">はい</option>
      <option value="1">どちらかといえばはい</option>
      <option value="-1">どちらかといえばいいえ</option>
      <option value="-2">いいえ</option>
    </select>
    </div>
  </div>
    </div>
    <!-- 未回答の問題があったらそのリンクを出せたら良いが一旦やらない-->

    <div v-bind:disabled="!obj.judgeAble" v-bind:class="[obj.judgeAble? '' : 'disabled']" class="d-grid gap-2 mb-10 mt-5 btn btn-primary btn-lg" @click="judge" data-bs-toggle="modal" data-bs-target="#exampleModal" id="judgeButton">診断する</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">診断結果: {{ obj.score_mark }} ({{ obj.priority }})</h2>
      </div>
      <div class="modal-body text-left">
      <p class="text-center h3">{{ obj.character }}</p>
      <p class="text-left">{{ obj.explanation}}</p>
      <p class="text-left" v-for="(text, index) in obj.text" v-bind:key="index">{{text}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
