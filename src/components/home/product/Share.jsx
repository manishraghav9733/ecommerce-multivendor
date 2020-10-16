import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  ///////////////
  EmailIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const Share = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div style={{ margin: "auto 20px auto 0px" }}>
        <FacebookShareButton
          className="share__button"
          url={"http://www.camperstribe.com"}
          // quote={"CampersTribe - World is yours to explore"}
          //  hashtag="#camperstribe"
          // className={classes.socialMediaButton}
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <EmailShareButton url={"https://myaccount.google.com/"}>
          <EmailIcon size={36} />
        </EmailShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <InstapaperShareButton>
          <InstapaperIcon size={36} />
        </InstapaperShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <LineShareButton>
          <LineIcon size={36} />
        </LineShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <LinkedinShareButton>
          <LinkedinIcon size={36} />
        </LinkedinShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <LivejournalShareButton>
          <LivejournalIcon size={36} />
        </LivejournalShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <MailruShareButton>
          <MailruIcon size={36} />
        </MailruShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <OKShareButton>
          <OKIcon size={36} />
        </OKShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <PinterestShareButton>
          <PinterestIcon size={36} />
        </PinterestShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <PocketShareButton>
          <PocketIcon size={36} />
        </PocketShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <RedditShareButton>
          <RedditIcon size={36} />
        </RedditShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <TelegramShareButton>
          <TelegramIcon size={36} />
        </TelegramShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <TumblrShareButton>
          <TumblrIcon size={36} />
        </TumblrShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <TwitterShareButton>
          <TwitterIcon size={36} />
        </TwitterShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <ViberShareButton>
          <ViberIcon size={36} />
        </ViberShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <VKShareButton>
          <VKIcon size={36} />
        </VKShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <WhatsappShareButton url={"https://web.whatsapp.com/"}>
          <WhatsappIcon size={36} />
        </WhatsappShareButton>
      </div>

      <div style={{ margin: "auto 20px auto 0px" }}>
        <WorkplaceShareButton>
          <WorkplaceIcon size={36} />
        </WorkplaceShareButton>
      </div>
    </div>
  );
};

export default Share;
