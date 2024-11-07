import { SocialButton } from "./SocialButton";

export const SocialButtonsList = () => {
  return (
    <ul className="list-inline social-buttons">
      <SocialButton
        siteUrl="https://facebook.com"
        imageUrl="../../img/img/facebook.png"
      ></SocialButton>
      <SocialButton
        siteUrl="https://ca.linkedin.com"
        imageUrl="../../img/img/linkedin.png"
      ></SocialButton>
      <SocialButton
        siteUrl="https://twitter.com"
        imageUrl="../../img/img/twitter-x-logo.png"
      ></SocialButton>
    </ul>
  );
};
