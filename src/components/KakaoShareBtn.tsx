import { Button } from "react-bootstrap";
import { IResultData } from "../stores/result/types";
import { useEffect } from "react";

const Kakao = (window as any).Kakao;

interface IProps {
  data: IResultData;
}
export default function KakaoShareBtn({ data }: IProps) {
  const url = `https://main--mbti-test-ts.netlify.app`;
  const resultUrl = window.location.href;

  useEffect(() => {
    if (!Kakao.isInitialized) {
      Kakao.init(`a6d7dd9a6cb6deb9a66e805133ab45b8`);
    }
  }, []);
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "집사 판별기 결과'",
        description: `내 mbti와 가장 잘 맞는 고양이는 ${data.name}`,
        imageUrl: url + data.img,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },

      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button onClick={shareKakao} style={{ width: 170 }}>
      공유하기
    </Button>
  );
}
