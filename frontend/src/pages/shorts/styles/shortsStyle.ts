import styled from "@emotion/styled";

export const ShortsWrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* overflow-y: scroll; */
`;

export const ShortsVideoElementWrapperDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShortsVideoAreaDiv = styled.div<{ isModalOpen: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShortsVideoElementDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 699px) {
    padding-bottom: 40%;
  }
`;

export const ShortsVideoDiv = styled.div`
  width: 80vw;
  height: 70vh;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.subColorGradient4};
  position: relative;
  max-width: 1024px;
`;

export const ShortsVideoPlayerWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const ShortsVideoPlayerVideo = styled.video`
  width: 100%;
  height: 100%;
  /* min-width: 100%; */
  /* max-height: 100%; */
`;

export const LocationDiv = styled.h2`
  position: absolute;
  bottom: 2%;
  left: 1%;
  font-size: 1.2rem;
  width: 80%;
  text-shadow: 1px 1px 0 #f447bd, -1px 1px 0 #f447bd, 1px -1px 0 #f447bd,
    -1px -1px 0 #f447bd, 0px 1px 0 #f447bd, 0px -1px 0 #f447bd,
    -1px 0px 0 #f447bd, 1px 0px 0 #f447bd, 2px 2px 0 #f447bd, -2px 2px 0 #f447bd,
    2px -2px 0 #f447bd, -2px -2px 0 #f447bd, 0px 2px 0 #f447bd,
    0px -2px 0 #f447bd, -2px 0px 0 #f447bd, 2px 0px 0 #f447bd, 1px 2px 0 #f447bd,
    -1px 2px 0 #f447bd, 1px -2px 0 #f447bd, -1px -2px 0 #f447bd,
    2px 1px 0 #f447bd, -2px 1px 0 #f447bd, 2px -1px 0 #f447bd,
    -2px -1px 0 #f447bd;
`;

export const ShortsVoteCommentWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1%;
  bottom: 2%;
`;

export const ShortVoteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 4px 2px 2px gray;
  margin-bottom: 0.5vh;
`;

export const ShortsVideoModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const CommentModalInfoWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;
  align-items: center;
`;

export const CommentModalCloseHandlerDiv = styled.div`
  font-size: 1rem;
`;

export const CommentListWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`;
