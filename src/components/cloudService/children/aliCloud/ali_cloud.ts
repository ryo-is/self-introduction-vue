import { Component, Vue } from "vue-property-decorator";
import { cloudServiceTextType } from "@/type";

@Component({})
export default class AliCloud extends Vue {
  title: string = "AliCloud";
  cloudServiceText: cloudServiceTextType[] = [
    {
      tag: "利用歴",
      text: "約1ヶ月"
    },
    {
      tag: "主に利用したサービス",
      text: "TableStore / Function Compute"
    },
    {
      tag: "コメント",
      text: "まだ個人で簡単に試してみたレベル。ただ中国でAWS使えないに等しいので、もし中国でクラウドするならAliCloud一択なのが現状みたい。"
    }
  ];
}
