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
      label: "Profile",
      pass: "/profile"
    },
    {
      label: "Language",
      pass: "/language"
    },
    {
      label: "Favorite",
      pass: "/favorite"
    },
    {
      label: "CloudService",
      pass: "/cloudService"
    },
    {
      label: "Contact",
      pass: "/contact"
    }
  ];

  public changePage(path: string) {
    console.log("change page"); // eslint-disable-line no-console
    const currentPath = this.$router.currentRoute.path;
    if (currentPath === "/") {
      this.$parent.$data.backgroundColor = "dark-color";
    } else {
      this.$parent.$data.backgroundColor = "basic-color";
    }
    return router.push(path);
  }
}
