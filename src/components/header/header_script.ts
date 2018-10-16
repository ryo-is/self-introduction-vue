import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
import { headerLinksType } from "@/type";

@Component({})
export default class Header extends Vue {
  headerLinks: headerLinksType[] = [
    {
      label: "Top",
      path: "/"
    },
    {
      label: "Profile",
      path: "/profile"
    },
    {
      label: "Language",
      path: "/language"
    },
    {
      label: "Favorite",
      path: "/favorite"
    },
    {
      label: "CloudService",
      path: "/cloudService"
    },
    {
      label: "Contact",
      path: "/contact"
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
