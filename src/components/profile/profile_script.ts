import { Component, Vue } from "vue-property-decorator";
import { basicProfilesType, linkProfilesType } from "@/type";

@Component({})
export default class Profile extends Vue {
  basicProfiles: basicProfilesType[] = [
    {
      tag: "名前",
      text: "泉 亮輔 (Ryosuke Izumi)"
    },
    {
      tag: "生年月日",
      text: "1992/06/02"
    },
    {
      tag: "紹介文",
      text:
        "京都のIT企業でIoT向けアプリケーションを開発しています。また、IoTデバイスからデータを取得して蓄積して可視化するまでの開発を経験しました。AWSにどっぷりな(フロントサイド)エンジニア。最近はVueに魅了され、ほぼ独断で自社アプリを書き換えてしまいました。Serverlessなアーキテクチャが好物。"
    },
    {
      tag: "Language",
      text:
        "HTML / Pug / CSS / Sass(SCSS) / JavaScript / TypeScript / Node.js / Express.js / Vue.js"
    },
    {
      tag: "Favorite",
      text: "FrontSide / Serverless / AWSLambda"
    },
    {
      tag: "CloudService",
      text: "AWS / AliCloud"
    }
  ];
  linkProfiles: linkProfilesType[] = [
    {
      tag: "Twitter",
      text: "is_ryo",
      link: "https://twitter.com/is_ryo"
    },
    {
      tag: "Qiita",
      text: "is_ryo",
      link: "https://qiita.com/is_ryo"
    },
    {
      tag: "Github",
      text: "ryo-is",
      link: "https://github.com/ryo-is"
    }
  ];
}
