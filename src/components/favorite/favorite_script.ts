import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Favorite extends Vue {
  favoriteContents = [
    {
      tag: "Vue.js",
      image: "../../assets/vue_logo.png",
      text: "Vue.jsです。"
    },
    {
      tag: "Serverless Freamwork",
      image: "../../assets/serverless_logo.png",
      text: "Serverless Freamworkです。"
    }
  ];
}
