import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Contact extends Vue {
  title: string = "ご連絡は下記GmailかTwitterDMからよろしくお願いいたします";
  gmailAddress: string = "ryosuke.izumi62@gmail.com";
  twitterInfo = {
    name: "is_ryo",
    link: "https://twitter.com/is_ryo"
  };
}
