import React, { Component } from "react";
import style from"./background.module.scss";
import { Link } from "react-router-dom";
// import cv from "../../../src/pdf/cv.pdf";

export default class Background extends Component {
  state = {
    readMore: true,
  };

  handleReadMore = () => {
    this.setState({
      readMore: !this.state.readMore,
    });
  };

  render() {
    const readMore = this.state.readMore ? (
      <>
        <div className={style.readless_animation}></div>
        <button onClick={this.handleReadMore}> read more... </button>
      </>
    ) : (
      <>
        <div className={style.readmore_animation}>
          <p>
            From a young age, I had realized that a father’s (male figure)
            perspective needed to change if girls of this country were to have
            the same privileges that a boy was inherently given by his family.
            This realization lead me to choose a career path that would aid to
            transform the gender perspectives in our society.
          </p>
          <p>
            In our small village of Haunchur we lived in a joint family. I had 4
            grandfathers and 5 grandmothers. When I was young, Nepal was under
            the Rana regime. I remember one of my grandfather getting killed by
            the authoritarian Ranas. This was a difficult time in the history of
            Nepal. Even through such difficult times, my parents did their best
            to give us a good quality of life. Education was a top priority for
            my parents. When I was a child, I too wanted to go heard the goats
            and cows like other children in the villages. I too wanted to have
            fun playing and loitering around. But we were not allowed to do so.
            Education was always the top priority. In a place where good
            teachers were rare and there was no schooling infrastructure, my
            parents have done a wonderful job at educating me and my siblings.
            They would hire a teacher for the local school and allow them to
            live in our house so that the teacher could provide us with extra
            tuition apart from school hours. There was a lot of studying
            involved in my childhood and less fun compared to the other children
            in our village.{" "}
          </p>
          <p>
            I have to be honest and accept that my foundational education was
            not the best. Villages back then lacked teachers who were skilled at
            teaching Mathematics and English and other resources that would make
            for a better teaching environment but my parents did their level
            best. Till date, my struggle to grasp new content and express myself
            is not the best but I have learned to persevere. I have learnt that
            with hard work and consistent effort anything is possible. That is
            why, today I am able to compete in International platforms
            regardless of my background. If there is one thing that I want other
            people to learn from my life that would be the trait of
            perseverance.
          </p>
          <button onClick={this.handleReadMore}> show less </button>
        </div>
      </>
    );
    return (
      <>
        <div className={style.content_container}>
          <div className={style.container_content_heading}>Personal Journey</div>
          <div className={style.ruler}></div>
          <div className={style.container_content_text}>
            <p>
              I was born in Khotang, a remote district in the Eastern region of
              Nepal. For the longest time my birth place lacked basic
              infrastructures such as roads, electricity, schools etc. Only in
              recent years Khotang has gotten access to such basic
              infrastructures.
            </p>
            <p>
              {" "}
              When I was growing up, my village as well as other surrounding
              villages did not have a High School. If someone wanted to continue
              their education after the 7th grade they had to leave their homes
              and go to other well-off parts of the country. In a patriarchal
              society like ours, girls leaving their homes for education was
              unheard of. The only reason a girl was allowed to leave their
              homes was when they were married and had to go to their husband’s
              home. Conversely, it was just the opposite for boys. Boys who
              showed interest in studies were motivated and financially
              supported by their families to continue their education in other
              parts of the country. Due to such social circumstance majority of
              the girls in Khotang did not get a chance to participate in higher
              education.
            </p>
            <p>
              However, I consider myself to be lucky as I was allowed to leave
              my home to pursue higher education in Jhapa. My parents,
              especially my father, was different from the rest. He was a
              maverick who believed that both his sons and daughters,
              irrespective of their gender, should have equal opportunity to get
              quality education. His belief was challenged by many neighboring
              orthodox villagers who tried to discourage him from allowing his
              daughters to leave their home and seek education in another place.
              Nonetheless, he did not change his mind. I vividly remember an
              instance where my father defended my right to quality education by
              trying to convince one of his peers by stating that Indira Gandhi,
              the then Prime Minister of India is also a daughter of somebody.
              He explained to him that his daughters are equally capable as his
              sons and educational opportunities will open doors for the
              daughters of Nepal to reach the height that Indira Gandhi has in
              this world. I was only six when my father said this.
            </p>
            {readMore}
            {/* 
                        </div> */}
          </div>
        </div>
      </>
    );
  }
}
