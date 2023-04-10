import { base } from '$app/paths';

interface pageLink {
  name: string,
}

interface works {
  name: string,
  url: Array<string>,
  img: string,
  details: string,
}

export const pageLink:pageLink[] = [
  {name: "about"},
]

export const works:works[] = [
  {name: "lightningtalk",  url: ["https://www.touka-dev.net/", "https://github.com/touka-aoi/Ltsytem-deploy"], img: "lightningtalk.png", details: "ライトニングトークをやるためのサービス作成\n開発言語 : svelte, typescript, node, azure postgresql, supabase"},
  {name: "novel AI discordBot",  url: ["https://github.com/touka-aoi/touka_server"], img: "generate.gif", details: "NovelAIのAPIを使ってdiscordから操作できるように \n開発言語 : python, fastapi, typescript, express, cloudflare images"},
  {name: "miniatureVP",  url: ["https://mirai-labo.digital-campus.info/?page_id=395"], img: "VP.gif", details: "Uneal Engineのincamera VFXを使用したミニチュアバーチャルプロダクションの制作 \n 担当 : 実開発・ワークフローの制定 \n 開発: Unreal Engine"},
  {name: "AEON Financial Service×HAL e-Sports U-26「パズドラカップ」",  url: ["https://www.youtube.com/watch?v=sKtc4J_TGp0"], img: "AEON.gif", details: "camera mappingを利用したARっぽい演出 \n 担当 : Unity内の演出・環境設定 \n 開発: Unity"},
  {name: "mnist",  url: [`${base}/mnist`], img: "mnist.gif", details: "よくあるやつ tensorflow.jsを試したくて \n 開発言語 : javascript, tensorflow.js"},
]

