import React, { useState } from "react";
import { styled } from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsFillImageFill, BsYoutube } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import userImg from "../assets/images/user.svg";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");

  const resetHandler = (event) => {
    setEditorText("");
    props.clickHandler(event);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => resetHandler(event)}>
                <GrClose size={16} />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img
                  src={userImg}
                  alt=""
                />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(event) => setEditorText(event.target.value)}
                  placeholder="What do you want talk about?"
                  autoFocus={true}
                />
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton>
                  <BsFillImageFill size={20} />
                </AssetButton>
                <AssetButton>
                  <BsYoutube size={23} />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <FaCommentDots size={20} />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton>Post</PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8888;
  color: black;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 30px;
    width: 30px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    ${FaCommentDots} {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 36px;
  padding-right: 36px;
  background: #0a66c2;
  color: white;
  font-size: 14px;
  letter-spacing: 0.5px;
  border: none;

  &:hover {
    background-color: #004182;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export default PostModal;
