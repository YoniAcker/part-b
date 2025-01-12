interface SocialButtonProps {
  siteUrl: string;
  imageUrl: string;
  alt: string;
}

export const SocialButton = ({ siteUrl, imageUrl, alt }: SocialButtonProps) => {
  return (
    <li>
      <a href={siteUrl} target="_blank">
        <img
          data-testid={`${alt} button`}
          src={imageUrl}
          alt={alt}
          className="icon"
          height="40rem"
          width="40rem"
        />
      </a>
    </li>
  );
};
