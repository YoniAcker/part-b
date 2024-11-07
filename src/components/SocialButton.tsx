interface SocialButtonProps {
  siteUrl: string;
  imageUrl: string;
}

export const SocialButton = ({ siteUrl, imageUrl }: SocialButtonProps) => {
  return (
    <li>
      <a href={siteUrl} target="_blank">
        <img src={imageUrl} className="icon" height="40rem" width="40rem" />
      </a>
    </li>
  );
};
