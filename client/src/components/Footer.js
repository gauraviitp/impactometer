import React from "react";

const Footer = () => (
  <div class="gradient-footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <ul>
            <li role="menuitem">
              <a
                href="https://www.sse.co.uk/about-us/legal/terms-of-use"
                title="Terms of use"
              >
                Terms of use
              </a>
            </li>
            <li role="menuitem">
              <a href="#" title="Privacy policy">
                Privacy policy
              </a>
            </li>
            <li role="menuitem">
              <a href="#" title="Who we are">
                Who we are
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6">
          <ul class="socialLinks">
            <li role="menuitem">
              <a
                href="@footer.TwitterIconUrl"
                title="@footer.TwitterIconAltText"
                target="_blank"
                class="twitter-icon"
              ></a>
            </li>
            <li role="menuitem">
              <a
                href="@footer.FaceBookIconUrl"
                title="@footer.FaceBookIconAltText"
                target="_blank"
                class="facebook-icon"
              ></a>
            </li>
            <li role="menuitem">
              <a
                href="@footer.YouTubeIconUrl"
                title="@footer.YouTubeIconAltText"
                target="_blank"
                class="youtube-icon"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span class="copyright">@Html.Raw(footer.Copyright)</span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
