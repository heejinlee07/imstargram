// 액션 타입
const SET_TARGET = 'INFINITESCROLL/SET_TARGET';
const SET_LAST = 'INFINITESCROLL/SET_LAST';

// 액션 생성 함수
export const setTarget = (target, page) => ({
  type: SET_TARGET,
  targetList: {
    [page]: target,
  },
});

export const setLast = () => ({
  type: SET_LAST,
});

const init = {
  explore: null,
  isLast: false,
};

export default function InfiniteScrollReducer(state = init, action) {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        ...action.targetList,
      };
    case SET_LAST:
      return {
        ...state,
        isLast: true,
      };
    default:
      return state;
  }
}
