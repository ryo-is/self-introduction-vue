import { Component, Vue } from "vue-property-decorator";

@Component({
  created() {
    console.log(process.env.VUE_APP_VALUE);
  }
})
export default class Home extends Vue {
  title: string = "Welcome isryo Introduction Site.";
}
