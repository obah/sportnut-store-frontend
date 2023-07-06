import MainFooter from "./footer/mainFooter";
import Promo from "./footer/promo";
import Reward from "./footer/reward";

export default function Footer() {
  return (
    <footer>
      <Promo />
      <Reward />
      <MainFooter />
    </footer>
  );
}
