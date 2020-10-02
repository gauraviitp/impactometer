import React from "react";

const Footer = () => (
  <div className="gradient-footer">
    <div className="container-fluid">
      <div className="row pt-3">
        <div className="col-xs-6 col-sm-6 col-md-6 terms">
          <a className="terms-text" href="#">
            Terms of use
          </a>
          <a className="terms-text" href="#">
            Privacy Policy
          </a>
          <a className="terms-text" href="#">
            Who we are
          </a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 socialLinks">
          <a
            href="#"
            title="@footer.TwitterIconAltText"
            target="_blank"
            class="twitter-icon"
          ></a>
          <a
            href="#"
            title="@footer.FaceBookIconAltText"
            target="_blank"
            class="facebook-icon"
          ></a>
          <a
            href="#"
            title="@footer.YouTubeIconAltText"
            target="_blank"
            class="youtube-icon"
          ></a>
        </div>
      </div>
      <div class="row">
        <div class="col-12 copyright-wrapper">
          <span class="copyright">&copy; 2020 SSE. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
