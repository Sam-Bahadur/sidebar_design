import React from "react";
import style from "./aboutme.module.scss";
import { BsPersonBoundingBox } from "react-icons/bs";
import { AiFillRead } from "react-icons/ai";
import { MdRecordVoiceOver } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

export default function AboutMe() {
  return (
    <div className={style.aboutme_container}>
      <div className={style.content_container}>
        <div className={style.icon_color}>
          <BsPersonBoundingBox />
          <h3>Personal Details</h3>
        </div>
        <h2>
          <li>Name: Sharmila Karki</li>
          <li>Birth: October 6, 1964</li>
          <li>Place of Birth: Haunchur, Khotang </li>
          <li>Maritial Status: married</li>
        </h2>
      </div>
      <div className={style.content_container}>
        <div className={style.icon_color}>
          <AiFillRead />
          <h3>Education</h3>
        </div>
        <h2>
          <li>
            “Masters in Cultural Anthropology”, Tribhuwan University, Nepal.
            1992
          </li>
          <li>
            “Diploma in Women Management and Development”, Lulu University,
            Sweden. 1997
          </li>
          <li>
            “Professional Certificate in Management”, Open University, UK. 2002
          </li>
          <li>
            “Peace and Conflict Resolution” Short Course, University of ULSTER,
            Northern Ireland. 2004
          </li>
          <li>
            “Leadership Development” Short Course, Oxford University, UK. 2005{" "}
          </li>
          <li>
            On-going: PhD on “Impact of Culture on Women Leadership”, Tribhuwan
            University.
          </li>
        </h2>
      </div>

      <div className={style.content_container}>
        <div className={style.icon_color}>
          <ImAirplane />
          <h3>International Exposures</h3>
        </div>
        <h6>Speaker</h6>
        <h2>
          <li>
            United Nations (UN), 2008 – “Role of Civil Society to promote the
            MDG with a special focus on women and marginalized communities.”{" "}
          </li>
          <li>
            United Nations (UN), 2011 – “Climate Change and Women’s agenda. No
            Climate Justice without Gender Justice.”
          </li>
          <li>
            United Nations (UN) Addis Ababa, 2014 – “Financials for Development.
            Focus on Local Resource based development for the sustainable
            Development.”{" "}
          </li>
          <li>
            United Nations (UN) Asia Pacific Region Office, 2015 – “SDG and
            local Resource mobilization and Sustainable Development.”{" "}
          </li>
          <li>
            United Nations (UN) Region Office Bangkok, 2015 – “Women’s
            participation in conflict resolution and the role of Women in
            building peace.”{" "}
          </li>
          <li>CSW Head Office, 2009 – “Women and Political Participation”</li>
          <li>
            {" "}
            “Women and Climate change and its impacts on Women” in Philippines,
            2013.{" "}
          </li>
          <li>
            {" "}
            “Issues of Tax Justice: Debt and Development” in Thailand, 2011.{" "}
          </li>
          <li>
            {" "}
            “Issues related to Reproductive health and Rights” organized by
            Feminist Task Force in Beirut, 2009.{" "}
          </li>

          <h6>Panelist</h6>

          <li>
            UN-SCAPE in South Africa, 2007 – “MDG and marginalized issues from
            grassroots.”
          </li>
          <li>
            CEDAW Geneva, 2018 on behalf of leaders of Nepal’s Civil Society.
          </li>
          <li>
            International Education Center Brazil, 2012 – “Role of Women and
            Education.”
          </li>

          <h6>Commentator</h6>

          <li>
            South Asian International Seminar Sri Lanka, 2010 – “The role of
            women Leadership and Development.”
          </li>

          <h6>Affiliations</h6>

          <li>
            Regional Coordinator – Global Call to Action Against Poverty (GCAP).{" "}
          </li>
          <li>
            Member & Gender Thematic Core Committee Member – South Asian
            Alliance of Poverty Eradication (SAAPE).
          </li>
          <li>Member – Association of Women in Development (AWID), USA.</li>
          <li>Member – Women and Management Club, Sweden. </li>
          <li>Member – SANGAT (South Asian Alliance of Gender Trainer)</li>
          <li>International member – Rotary Club.</li>
          <li>Member – Nepal Finland Association.</li>
          <li>Member – Ulster University Alumni, Ireland.</li>
          <li>Member – Sustainable International Development (SID). </li>
        </h2>
      </div>
      <div className={style.content_container}>
        <div className={style.icon_color}>
          <MdRecordVoiceOver />
          <h3>Languages</h3>
        </div>
        <h2>
          <li>Nepali</li>
          <li>English</li>
          <li>Hindi</li>
        </h2>
      </div>
      <div className={style.content_container}>
        <div className={style.icon_color}>
          <FaGlobeAsia />
          <h3>Countries Travelled</h3>
        </div>
        <br></br>
        <h2>
          USA, England, Sweden, Finland, Norway, Canada, Northern Ireland, South
          Africa, Ethiopia, Mexico, Germany, Denmark, Bangkok, Vietnam,
          Philippines, Republic Ireland, Scotland, Indonesia, Yemen, Tunisia,
          Lebanon, India, Bangladesh, Srilanka, Pakistan
        </h2>
      </div>
      <br></br>
    </div>
  );
}
