/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { styled } from "styled-components";
import {
  BsCardImage,
  BsFillCalendar2DateFill,
  BsThreeDots,
} from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import userImg from "../assets/images/user.svg";
import likeImg from "../assets/images/like.svg";
import commentImg from "../assets/images/comments.svg";
import shareImg from "../assets/images/share.svg";
import sendImg from "../assets/images/send.svg";
import clappingHandsImg from "../assets/images/clapping-hands.svg";
import PostModal from "./PostModal";

const Main = () => {
  const [showModal, setShowModal] = useState("close");

  const clickHandler = (event) => {
    event.preventDefault();

    if (event.target !== event.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;

      case "close":
        setShowModal("open");
        break;

      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img
            src={userImg}
            alt=""
          />
          <button onClick={clickHandler}>Start a post</button>
        </div>
        <div>
          <button>
            <BsCardImage
              color="#38bdf8"
              size={22}
              className="feed-icons"
            />
            <span>Photo</span>
          </button>
          <button>
            <BsCardImage
              color="#fb923c"
              size={22}
              className="feed-icons"
            />
            <span>Video</span>
          </button>
          <button>
            <BsFillCalendar2DateFill
              color="#a3e635"
              size={22}
              className="feed-icons"
            />
            <span>Event</span>
          </button>
          <button>
            <RiArticleFill
              color="#fb7185"
              size={22}
              className="feed-icons"
            />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img
                src={userImg}
                alt=""
              />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <BsThreeDots />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src={likeImg} />
                <img src={clappingHandsImg} />
                <span>55</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src={likeImg} />
              <span>Like</span>
            </button>
            <button>
              <img src={commentImg} />
              <span>Comment</span>
            </button>
            <button>
              <img src={shareImg} />
              <span>Share</span>
            </button>
            <button>
              <img src={sendImg} />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal
        showModal={showModal}
        clickHandler={clickHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        .feed-icons {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;

      img {
        width: 14px;
        margin-right: 3px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    span {
      margin-left: 1.5px;
      font-size: 14px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 5px;
      }
    }
  }
`;

export default Main;
