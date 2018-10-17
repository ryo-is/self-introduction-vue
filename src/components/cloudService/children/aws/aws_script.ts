import { Component, Vue } from "vue-property-decorator";
import { cloudServiceTextType } from "@/type";

@Component({})
export default class AWS extends Vue {
  title: string = "AWS(Amazon Web Service)";
  cloudServiceText: cloudServiceTextType[] = [
    {
      tag: "利用歴",
      text: "約2年半"
    },
    {
      tag: "主に利用したサービス",
      text: "EC2 / S3 / ELB / Kinesis Data Streams / Lambda / DynamoDB / Elastic Beanstalk / CloudFormation / CodeCommit / CodePipeline / CodeBuild / CodeDeploy / ECS"
    },
    {
      tag: "コメント",
      text: "個人で試すにも仕事で使うにも基本的にAWSという環境です。アプリケーションの構築から、IoT関係のアーキテクチャ構築まで幅広く経験しました。AWS認定のDVAを取得しています。"
    }
  ];
}
