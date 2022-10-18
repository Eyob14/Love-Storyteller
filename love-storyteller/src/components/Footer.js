import React from "react";
import "./style-components/Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <footer className="footer">
      <div className="container pt-2">
        <section className="mb-2">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FacebookIcon />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <TwitterIcon />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <InstagramIcon />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <LinkedInIcon />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <GitHubIcon />
          </a>
        </section>
      </div>
      <p>
        &copy; 2019-2022 &nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/Eyob14/Love-Storyteller"
          target="_blank"
          rel="noreferrer"
        >
          Love Storyteller
        </a>
      </p>
    </footer>
  );
}

export default Footer;
