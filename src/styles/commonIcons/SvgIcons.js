import React from 'react';
import { SvgStyle } from './Svg.styles';

/**
 *
 * @description
 * 아이콘이 배치되는 위치마다 aria-label이 다른 경우가 있어서 공통되지 않는 경우 제거해두었습니다.
 * 작업하시는 컴포넌트에서 aria-label 달아주시면 됩니다.
 * direct, heart
 */

export const SvgIcon = ({ children, ...rest }) => {
  return (
    <SvgStyle viewBox="0 0 48 48" {...rest}>
      {children}
    </SvgStyle>
  );
};

// export const HomeIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle aria-label="홈" viewBox="0 0 48 48" {...rest}>
//       {children}
//     </SvgStyle>
//   );
// };

// export const PaperPlaneIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle viewBox="0 0 48 48" {...rest}>
//       {children}
//     </SvgStyle>
//   );
// };

// export const FindPeopleIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle aria-label="사람 찾기" viewBox="0 0 48 48" {...rest}>
//       {children}
//     </SvgStyle>
//   );
// };

// export const HeartIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle viewBox="0 0 48 48" {...rest}>
//       {children}
//     </SvgStyle>
//   );
// };

// export const BookmarkIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle aria-label="저장" viewBox="0 0 48 48" {...rest}>
//       {children}
//     </SvgStyle>
//   );
// };

// export const ReplyIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle
//       width={24}
//       height={24}
//       aria-label="댓글 달기"
//       viewBox="0 0 48 48"
//       {...rest}
//     >
//       {children}
//     </SvgStyle>
//   );
// };

// export const BookMarkIcon = ({ children, ...rest }) => {
//   return (
//     <SvgStyle
//       width={24}
//       height={24}
//       aria-label="저장"
//       viewBox="0 0 48 48"
//       {...rest}
//     >
//       {children}
//     </SvgStyle>
//   );
// };

// post 더보기 버튼
export const MoreIcon = ({ ...rest }) => {
  return (
    <svg
      aria-label="옵션 더 보기"
      fill="#262626"
      height="16"
      viewBox="0 0 48 48"
      width="16"
      {...rest}
    >
      <circle
        clipRule="evenodd"
        cx="8"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
      <circle
        clipRule="evenodd"
        cx="24"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
      <circle
        clipRule="evenodd"
        cx="40"
        cy="24"
        fillRule="evenodd"
        r="4.5"
      ></circle>
    </svg>
  );
};
