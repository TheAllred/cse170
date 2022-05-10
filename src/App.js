import styled from "styled-components";
import DocIcon from "./images/Document Icon.png";
let expanded = false;
function App() {
  return (
    <Main>
      <Header>
        <H1>Kevin Allred Technical Teamwork CSE170</H1>
      </Header>
      <Post id="Post1">
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 1 Reflection</H1>
        </PostHeader>
        <PostContent>
          <b>
            If you were to write your experience as STAR story, how would you
            phrase it?
          </b>{" "}
          In technical teamwork we were divided by tables into teams of 7. Each
          of us had a paper with seven symbols and a role given to us that had
          limits on who we could communicate with. A manager could only talk to
          two leads below them and the leads could only talk to the people they
          lead or the manager. With this system in place we were given a
          challenge, find the symbol we all had in common. In addition, we could
          only talk to the people who’s roles were directly above or below us,
          we could only communicate using yes or no answers. To speed up the
          process and avoid asking about each symbol individually, we decided to
          group the symbols into categories. Instead of asking everyone if they
          had a smiley face symbol, we asked everyone if they had a face symbol
          which included a smiley face, frowning face, or neutral face. By
          asking broader questions early on, we were able to narrow down our
          possible shared symbols to face symbols. We quickly figured out that
          we all shared the smiley face while only using 2 questions throughout
          the entire team and completed the task first.
          <br />
          <br />
          The most significant take away I had from this class was the
          importance of communication. Each team listed communication as one of
          the top traits of a successful team. In our activity, we would not
          have been able to succeed without clear communication.
          <br />
          <br />
          The experience we had with the symbols relates to my experience with
          work. I work in a team with all the aspects of the company. We’ve
          realized that in our morning huddles, we have an overflow of
          information. The graphic designer doesn’t need to hear what the
          software engineer is doing every day. We since then switched to a
          different model to where the tech related positions meet together and
          the marketing/sales would meet together. This was similar to the
          limits our roles had in the symbols activity. <br />
          <br />
          This activity related to the gospel because we don’t always share
          direct communication with our father above. He hears our prayers but
          often He chooses to communicate with us through the holy ghost. That
          holy spirit serving as the middleman or messenger. <br />
          <br />
          If I could do something differently next week, I would choose to have
          a better understanding of the situation and task at hand before taking
          action. Rash action can often lead to mistakes and a waste of time and
          opportunity. <br />
          <br />
          The symbol activity relates to my brother’s experience working for
          Amazon. He worked in a very structured environment with supervisors
          and team members. The channel of information was important to follow
          so that information reached the right people much like it was for our
          activity. <br />
          <br />
          I would explain what we learned in class to someone not in the class
          as the importance of communication. In every day life we will be put
          into situations where we will need to communicate clearly and
          effectively in order to succeed. <br />
          <br />
          <br />
        </PostContent>
        <ExpandBlur
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post1").style.maxHeight = "300vh";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post1").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
      <Post id="Post2">
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 2 Reflection</H1>
        </PostHeader>
        <PostContent>
          100 Points<br></br>
          <b>Q1 (20pts) Why is this week’s topic important for teamwork?</b>
          Influence is key to working as a team because our influence is the
          effect that we have on the other members of the team. You don’t get to
          turn on or off the influence that you radiate. You will influence
          others no matter what. If you are conscious of the influence you have,
          you can use it to have a positive effect on the team overall. Unaware
          of influence and you can have a greatly negative impact on the
          performance and mood of the team.<br></br>
          <br></br>
          <b>
            Q2 (20 pts) How does your experience relate to other experiences you
            have had?
          </b>
          There was a time where my friend and I were working on a group
          project. The groups were assigned and we were also paired up with a
          very socially awkward student who we had trouble getting along with.
          My first impression was that this assignment was going to be
          incredibly painful to complete with this other individual. To my
          surprise, my friend was positive and forced a smile though I could
          tell he was worried as well. His forced positive attitude somehow
          worked and we decided to roll with it until at the end of the
          assignment, we found that we had actually enjoyed it and working with
          this other kid wasn’t nearly as bad as we had feared. My friend made
          the conscious decision to use his influence for good and not to let it
          happen on its own.<br></br>
          <b>
            Q3(20pts) How does your experience relate to other experiences you
            have had?
          </b>
          This is the experience of my boss. He was hired as the new plant
          manager at a steel foundry. This environment was full of hardened
          factory workers and welders who lived a very rough life and had a
          gruff attitude towards authority. My boss being a psych-social science
          major used his newfound influence as the plant manager to foster a
          culture of mutual respect and accountability. It was a choice that he
          made and he had to put in effort for it to affect the overall
          environment of the plant.<br></br>
          <b>
            Q4 (20pts) If this were a religion class, how would you relate this
            week’s topic to the gospel.
          </b>
          We’re talking about the influence that we have on others. As members,
          they describe this influence as the light of the gospel that others
          can see in our eyes and in the ways that they live the gospel. Elder
          Uchtdorf quoted in a conference address that we must preach the gospel
          always and when necessary, use words. Our influence is not defined by
          the way we talk but by our actions.<br></br>
          <b>Q5(10pts) My most significant take-away from this week:</b>
          <b>
            My most significant take-away was that influence can not be turned
            off. You can’t decide not to influence others.<br></br>
            Q6(10pts)
          </b>
          Explain this topic to someone not in the class. We all have an effect
          on the people around us. The decisions we make will always impact the
          actions of those around us. We can go through life letting the natural
          influence take its toll on the ones around us or with a conscious
          effort, we can make sure that our influence inspires others to do
          their best or make the correct decisions .<br></br>
          <br></br>
        </PostContent>
        <ExpandBlur
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post2").style.maxHeight = "300vh";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post2").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
      <Post>
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 3 Reflection</H1>
        </PostHeader>
        <PostContent></PostContent>
        <ExpandBlur
          id="blur1"
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post1").style.maxHeight = "none";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post1").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
      <Post>
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 4 Reflection</H1>
        </PostHeader>
        <PostContent></PostContent>
        <ExpandBlur
          id="blur1"
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post1").style.maxHeight = "none";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post1").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
      <Post>
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 5 Reflection</H1>
        </PostHeader>
        <PostContent></PostContent>
        <ExpandBlur
          id="blur1"
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post1").style.maxHeight = "none";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post1").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
      <Post>
        <PostHeader>
          <PostIcon src={DocIcon} alt="Document Icon"></PostIcon>
          <H1>Week 6 Reflection</H1>
        </PostHeader>
        <PostContent></PostContent>
        <ExpandBlur
          id="blur1"
          onClick={() => {
            if (expanded === false) {
              document.getElementById("Post1").style.maxHeight = "none";
              // document.getElementById("blur1").style.display = "none";
              expanded = true;
            } else {
              document.getElementById("Post1").style.maxHeight = "20vh";
              expanded = false;
            }
          }}
        ></ExpandBlur>
      </Post>
    </Main>
  );
}
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background-color: #808080ed;
  height: 3em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  backdrop-filter: blur(2px);
  z-index: 100;
`;

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  background-color: #e1e1e1;
  justify-content: center;
`;
const Post = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width: 50%;
  min-height: 15vh;
  max-height: 20vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  box-shadow: 5px 4px 10px #100f0f57;
  border-radius: 10px;
  border: 2px solid black;
  overflow: hidden;

  transition: 2s;
`;

const PostHeader = styled.div`
  display: flex;

  align-items: center;
`;
const PostIcon = styled.img`
  height: 2rem;
  margin: 2%;
  grid-column: 0/2;
  grid-row: 0/2;
`;

const H1 = styled.h1`
  font-size: calc(10px + 1.3vw);
  margin: 0;
  padding: 0;
`;

const PostContent = styled.p`
  margin: 0;
`;
const ExpandBlur = styled.div`
  position: absolute;
  bottom: 0px;
  margin: 0vw;
  height: 5vw;
  width: 100%;
  filter: blur(10);
  backdrop-filter: blur(1px);
  background-color: #ffffffba;
  &:hover {
    filter: blur(1);
    backdrop-filter: blur(0);
  }
`;

export default App;
