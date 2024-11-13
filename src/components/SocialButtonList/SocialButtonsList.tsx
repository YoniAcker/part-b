import { SocialButton } from "../SocialButton/SocialButton";

interface buttonInfo {
  id: number;
  siteUrl: string;
  imageUrl: string;
}

const buttonsInfo: buttonInfo[] = [
  {
    id: 1,
    siteUrl: "https://facebook.com",
    imageUrl: "../../../img/img/facebook.png",
  },
  {
    id: 2,
    siteUrl: "https://ca.linkedin.com",
    imageUrl: "../../../img/img/linkedin.png",
  },
  {
    id: 3,
    siteUrl: "https://twitter.com",
    imageUrl: "../../../img/img/twitter.png",
  },
];

export const SocialButtonsList = () => {
  const buttonsList = buttonsInfo.map((info) => {
    return (
      <SocialButton
        key={info.id}
        siteUrl={info.siteUrl}
        imageUrl={info.imageUrl}
      />
    );
  });
  return <ul className="list-inline social-buttons">{buttonsList}</ul>;
};
