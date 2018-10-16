import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
import { headerLinksType } from "@/type";

@Component({})
export default class Header extends Vue {
  headerLinks: headerLinksType[] = [
    {
      label: "Top",
      pass: "/"
    },
    {
      label: "About",
      pass: "/"
    },
    {
      label: "Language",
      pass: "/"
    },
    {
      label: "Favorite",
      pass: "/"
    },
    {
      label: "CloudService",
      pass: "/"
    },
    {
      label: "Contact",
      pass: "/"
    }
  ];

  public changePage(pass: string) {
    console.log("change page"); // eslint-disable-line no-console
    return router.push(pass);
  }
}
