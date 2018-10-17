import { Component, Vue } from "vue-property-decorator";
import { serviceLinksType } from "@/type";
import router from "@/router";

@Component({})
export default class CloudService extends Vue {
  title: string = "今までに利用したことのあるクラウドサービス";
  serviceLinks: serviceLinksType[] = [
    {
      text: "AWS",
      path: "/aws",
      buttonType: "warning"
    },
    {
      text: "AliCloud",
      path: "/aliCloud",
      buttonType: "info"
    }
  ];

  public changePage(path: string) {
    console.log("change page", path); // eslint-disable-line no-console
    return router.push("/cloudService" + path);
  }
}
