<script lang="ts">
  import { onMount } from "svelte";
  import * as tf from "@tensorflow/tfjs"
  import { base } from '$app/paths';
  
  let canvas: any;
  let miniCanvas: any;
  let ctx: any = undefined;
  let width: number | null = null;
  let height: number | null= null;
  let x: number = 0;
  let y: number = 0;
  let isMouseDown: boolean = false; 
  let lineWidth:number = 16;
  let result:number = 0;

  let predictResult = [
    {number: 0, result: "確率表示", color: "bg-zinc-50"},
    {number: 1, result: "確率表示", color: "bg-zinc-50"},
    {number: 2, result: "確率表示", color: "bg-zinc-50"},
    {number: 3, result: "確率表示", color: "bg-zinc-50"},
    {number: 4, result: "確率表示", color: "bg-zinc-50"},
    {number: 5, result: "確率表示", color: "bg-zinc-50"},
    {number: 6, result: "確率表示", color: "bg-zinc-50"},
    {number: 7, result: "確率表示", color: "bg-zinc-50"},
    {number: 8, result: "確率表示", color: "bg-zinc-50"},
    {number: 9, result: "確率表示", color: "bg-zinc-50"},
  ]

  onMount(() => {
    ctx = canvas.getContext("2d", {willReadFrequently: true,});
    ctx.fillStyle = "#FaFaFa"
    width = canvas.width;
    height = canvas.height;
    ctx.lineCap = 'round'; 
    ctx.lineWidth = lineWidth; 
    ctx.rect(0, 0, width, height);
    ctx.fill();
  });

  function startDrawing(event: any) {
    isMouseDown = true;
    [x, y] = [event.offsetX, event.offsetY];
  }

  function endDrawing(event: any) {
    if (isMouseDown) {
      predict();
    }
    isMouseDown = false;
  }

  function drawing(event: any) {
    if (isMouseDown) {
      const newX:number = event.offsetX;
      const newY:number = event.offsetY;
      ctx.beginPath();  //パスの開始
      ctx.moveTo(x, y); //パスの原点
      ctx.lineTo(newX, newY); //パスの終点
      ctx.stroke(); //パスを描画
      x = newX; 
      y = newY;
   }
  }

  export function clearCanvas() {
    ctx.fillStyle = '#fafafa'
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()
  }
  
  async function predict() {
    const model:any = await tf.loadLayersModel(`${base}/model/model.json`);
    const canavsImage: any = ctx.getImageData(0, 0, width, height);
    const cli = tf.tidy(() => {
      const subSc = tf.scalar(1)
      const mulSc = tf.scalar(-1)
      // pixelを取得 -> float -> 白黒反転 -> マイナス除去 -> リサイズ
      let img: tf.Tensor3D = tf.browser.fromPixels(canavsImage, 1).toFloat().step(0).sub(subSc).mul(mulSc).resizeBilinear([28,28])
      tf.browser.toPixels(img, miniCanvas);
      img = img.expandDims(0)
      const ans = model.predict(img)
      return ans
    }) 
    result = cli.argMax(1).dataSync()[0]

    // console.log(result);

    // 確率表示
    for (let step = 0; step < 10; step++) {
      predictResult[step]["result"] = cli.dataSync()[step].toFixed(6);
      predictResult[step]["color"] = "bg-zinc-50";
    }

    // 色変更
    predictResult[result]["color"] = "bg-green-400";
  }

</script>

<!-- ページタイトル -->
<div class = "my-20 text-center flex gap-8 flex-col" >
    <p class = "pagetitle">
        MNIST
    </p>
</div>

<!-- 予測結果 -->
<div class = "flex flex-col gap-4">
  <p class = "text-center text-2xl font-bold text-violet-800">{result}</p>
  <canvas bind:this = {miniCanvas} class="mx-auto border-solid border-2 bg-neutral-100" width="32" height="32" />
</div>

<!-- 入力・結果 -->
<div class = "flex justify-center gap-56" >

  <!-- 入力 -->
  <div class ="flex flex-col gap-4">
    <p class = "m-2 font-bold text-violet-800">数字を書いてね！</p>
    <canvas bind:this = {canvas} on:mousedown={startDrawing} on:mousemove={drawing} on:mouseup={endDrawing} on:mouseout={endDrawing} class = "bg-zinc-50 border-solid border-2" width="300" height="300" />
    <div>
      <button on:click={clearCanvas} class = "py-2 px-4 text-sm font-bold  bg-amber-400 rounded"> リセットする </button>
    </div>
  </div>
  
  <!-- 結果 -->
  <div class = "my-4 flex flex-col bg-neutral-100 px-3">
    <p class = "m-2 font-bold text-violet-800">確率</p>
    <div class = "flex flex-col w-52 bg-zinc-50 ">
      {#each predictResult as {number, result, color}}
        <div class = "flex gap-3 items-center justify-between overflow-hidden h-9 {color}"> 
          <p class = "px-3 font-bold text-violet-800">{number}</p>
          <p class = "px-3 font-bold text-violet-800">{result}</p>
        </div>
      {/each}
    </div>
  </div>

</div>

