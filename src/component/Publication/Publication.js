import React from "react";
import style from "./publication.module.scss";
import { RiArticleLine } from "react-icons/ri";
// import publish1 from "../../pdf/25_years.pdf";
// import publish2 from "../../pdf/Talking_points.pdf";
// import publish3 from "../../pdf/Paper_asia.pdf";
// import publish4 from "../../pdf/Panelist.pdf";
// import publish5 from "../../pdf/Finish.pdf";
// import publish6 from "../../pdf/development.pdf";

export default function Publications() {
  return (
    <div className={style.publication_container}>
      <ul>
        <li>
          <RiArticleLine />
          <span>25 years of Denmark in Nepal</span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
        <li>
          <RiArticleLine />
          <span>
            Talking points for the program organized by Australian Embassy and
            Sancharika Samuha on “Women and DRR” with special focus on Nepal
            Earthquake
          </span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
        <li>
          <RiArticleLine />
          <span>
            Paper Presented on Panelist on Asia Pacific Regional Lawyers
            Conference on “Ensuring Equality in Political Participation and
            Decision making in Asia Pacific Region
          </span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
        <li>
          <RiArticleLine />
          <span>
            Panelist on Gender and DRR in Vietnam supported by Japan and Vietnam
            Government
          </span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
        <li>
          <RiArticleLine />
          <span>Finish Contribution to Women's Empowerment in Nepal </span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
        <li>
          <RiArticleLine />
          <span>विकास लछ्य भट्न योजनाको पुन : संरचना गर्नुपर्छ</span>
          <a href="#" target="_blank">
            Read here
          </a>
        </li>
      </ul>
    </div>
  );
}
