import {
  CommentInfoDiv,
  CommentInputWrapperDiv,
  CommentRecommentCancelButton,
  CommentRecommentWrapperDiv,
  CommentSendButton,
  CommentSendWrapperDiv,
  CommentWriteInput,
  CommentNameNoneSelectDiv,
  CommentNicknameWrapperDiv,
} from "../commentStyle";
import CommentIcon from "@mui/icons-material/Comment";
import { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface selectCommentProps {
  nickname: string | null;
  trigger: boolean;
  setTrigger: (e: boolean) => void;
  cleanSelectComment: () => void;
  getCommentInput: (e: string) => void;
}

const WriteComment = ({
  nickname,
  trigger,
  setTrigger,
  cleanSelectComment,
  getCommentInput,
}: selectCommentProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const commentWrite = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      const content = inputRef.current.value;
      getCommentInput(content);
    }
  };
  useEffect(() => {
    if (trigger) {
      setTrigger(false);
      if (inputRef.current && inputRef.current.value !== "") {
        inputRef.current.value = "";
      }
    }
  }, [setTrigger, trigger]);
  return (
    <CommentInputWrapperDiv>
      <CommentInfoDiv>
        {nickname !== null ? (
          <CommentRecommentWrapperDiv>
            <CommentNicknameWrapperDiv>{nickname}</CommentNicknameWrapperDiv>
            <CommentRecommentCancelButton onClick={cleanSelectComment}>
              <CloseIcon sx={{ color: "#FFFFFF" }} />
            </CommentRecommentCancelButton>
          </CommentRecommentWrapperDiv>
        ) : (
          <CommentNameNoneSelectDiv>
            <h3>댓글</h3>
          </CommentNameNoneSelectDiv>
        )}
      </CommentInfoDiv>
      <CommentWriteInput ref={inputRef} />
      <CommentSendWrapperDiv>
        <CommentSendButton onClick={commentWrite}>
          <CommentIcon sx={{ color: "#FFFFFF" }} />
        </CommentSendButton>
      </CommentSendWrapperDiv>
    </CommentInputWrapperDiv>
  );
};

export default WriteComment;
