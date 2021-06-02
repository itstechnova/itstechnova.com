import React from "react";
import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Bubble from "../../resources/images/graphics/speech-bubble.svg";
import "./FAQ.scss";

const FAQ = () => (
  <SectionWrapper id="faq">
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-questions">
        <div className="faq-left-col">
          <ExpandableCard question={"What is a Hackathon?"}>
            A hackathon is an event where students work together to build a
            technology-based solution to a problem. You can build an app, a
            website, an extension, whatever you’d like. The sky’s the limit and
            we’re here to help along the way!
          </ExpandableCard>
          <ExpandableCard question={"Who can participate?"}>
            TechNova is open to all students (high school and university) in any
            major as well as those of unconventional backgrounds and those
            interested in technology (eg. Bootcamp graduates) who identify as
            women or underrepresented genders in technology.
          </ExpandableCard>
          <ExpandableCard question={"How many people can form a team?"}>
            Teams can have up to 4 hackers and you can find your team before or
            during the event.
          </ExpandableCard>
          <ExpandableCard question={"What kind of workshops are there?"}>
            There will be a variety of workshops including both technical and
            career related topics. Additionally, there will be workshops for
            both beginner and advanced hackers. Some examples could be Resume
            Writing, Networking, Intro to X, and Artificial Intelligence.
          </ExpandableCard>
        </div>
        <div className="faq-right-col">
          <ExpandableCard question={"What if it's my first hackathon?"}>
            No worries! We have our Prepare with Us event to get you up to speed
            so you're ready to hack during the weekend! Additionally, mentors
            are available to help guide you through your projects.
          </ExpandableCard>
          <ExpandableCard question={"Why is this event women only?"}>
            Women are underrepresented in this field and although progress has
            been made, there is still a long way to go! Thus, we want to create
            a safe and welcoming space for our hackers to grow and create
            amazing projects.
          </ExpandableCard>
          <ExpandableCard question={"Is there a cost to attend?"}>
            TechNova is free to attend!
          </ExpandableCard>
          <ExpandableCard question={"I applied, what happens next?"}>
            We will be reviewing applications on a rolling basis so keep up with
            your email - that's how you’ll hear back from us about decisions.
          </ExpandableCard>
        </div>
      </div>

      <div className="faq-contact">
        If you have any other questions, feel free to reach out to us at{" "}
        <a href="mailto:hello@itstechnova.org">hello@itstechnova.org</a>
      </div>
      <img className="faq-bubble" src={Bubble} alt="Speech Bubble graphic" />
    </div>
  </SectionWrapper>
);

export default FAQ;
