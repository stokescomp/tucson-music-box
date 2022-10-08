import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./com/wrapper";
import Title from "./com/title";
import Subtitle from "./com/sub";

const rockSalt =
  "https://static.wixstatic.com/media/73997b6d6824436ab296f0bba712b75a.jpg/v1/fill/w_1899,h_950,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/73997b6d6824436ab296f0bba712b75a.jpg";
const jewels =
  "https://static.wixstatic.com/media/4d074f966f2542ffb3d1ce823dce0ad9.jpg/v1/fill/w_1899,h_950,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/4d074f966f2542ffb3d1ce823dce0ad9.jpg";
const marble =
  "https://static.wixstatic.com/media/bebe38_5d2625d6991d48d194527b7c77ab276e~mv2.jpg/v1/crop/x_0,y_426,w_2250,h_1662/fill/w_386,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1367_edited.jpg";
const vol =
  "https://static.wixstatic.com/media/27f47b97593c44f4b1a985fe5627aaf9.jpg/v1/fill/w_1899,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/27f47b97593c44f4b1a985fe5627aaf9.jpg";
export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Revisit Your Childhood</Title>
          <Subtitle>
            Explore and experience the assortment of oddities available on
            Tucson Music Box
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Assorted Jewels"
        background={{
          backgroundImageSrc: jewels,
        }}
      />
      <Slide
        shouldRenderMask
        label="Marbled Quartz"
        background={{
          backgroundImageSrc: marble,
        }}
      />

      <Slide
        shouldRenderMask
        label="Pink Rock Salt"
        background={{
          backgroundImageSrc: rockSalt,
        }}
      />

      <Slide
        shouldRenderMask
        label=""
        background={{
          backgroundImageSrc: vol,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
