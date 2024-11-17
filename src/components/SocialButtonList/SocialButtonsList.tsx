import { SocialButton } from "../SocialButton/SocialButton";

interface buttonInfo {
  siteUrl: string;
  imageUrl: string;
}

const buttonsInfo: buttonInfo[] = [
  {
    siteUrl: "https://facebook.com",
    imageUrl: "../../../img/img/facebook.png",
  },
  {
    siteUrl: "https://ca.linkedin.com",
    imageUrl: "../../../img/img/linkedin.png",
  },
  {
    siteUrl: "https://twitter.com",
    imageUrl: "../../../img/img/twitter.png",
  },
];

export const SocialButtonsList = () => {
  const buttonsList = buttonsInfo.map((info) => {
    return (
      <SocialButton
        key={info.siteUrl}
        siteUrl={info.siteUrl}
        imageUrl={info.imageUrl}
      />
    );
  });
  return <ul className="list-inline social-buttons">{buttonsList}</ul>;
};
