import { SocialButton } from "../SocialButton/SocialButton";

interface buttonInfo {
  siteUrl: string;
  imageUrl: string;
  alt: string;
}

const buttonsInfo: buttonInfo[] = [
  {
    siteUrl: "https://facebook.com",
    imageUrl: "../../../img/img/facebook.png",
    alt: "Facebook",
  },
  {
    siteUrl: "https://ca.linkedin.com",
    imageUrl: "../../../img/img/linkedin.png",
    alt: "LinkedIn",
  },
  {
    siteUrl: "https://twitter.com",
    imageUrl: "../../../img/img/twitter.png",
    alt: "Twitter",
  },
];

export const SocialButtonsList = () => {
  const buttonsList = buttonsInfo.map((info) => {
    return (
      <SocialButton
        key={info.siteUrl}
        siteUrl={info.siteUrl}
        imageUrl={info.imageUrl}
        alt={info.alt}
      />
    );
  });
  return <ul className="list-inline social-buttons">{buttonsList}</ul>;
};
