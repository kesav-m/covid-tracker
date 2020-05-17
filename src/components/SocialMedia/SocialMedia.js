import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon
} from "react-share";
import "./SocialMedia.css";

const SocialMedia = ({ primary }) => {
  return (
    <>
      <h2 className="head2">Contact& Helpline</h2>
      <div className="socialmedia-card">
        <br />
        <p className="title">email: {primary && primary.email}</p>
        <p className="title">Contact Number: {primary && primary.number}</p>
        <p className="title">
          Tollfree Number: {primary && primary["number-tollfree"]}
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://serviceonline.gov.in/epass/#"
          >
            Apply Epass
          </a>
        </p>
        <TwitterShareButton
          style={{ margin: "10px" }}
          url={primary && primary.twitter}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={primary && primary.facebook}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </div>
    </>
  );
};

export default SocialMedia;
