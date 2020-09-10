// 액션 타입
const SET_TARGET = 'INFINITESCROLL/SET_TARGET';

// 액션 생성 함수
export const setTarget = (target, page) => ({
  type: SET_TARGET,
  targetList: {
    [page]: target,
  },
});

const init = {
  explore: null,
};

export default function InfiniteScrollReducer(state = init, action) {
  switch (action.type) {
    case SET_TARGET:
      return {
        ...state,
        ...action.targetList,
      };
    default:
      return state;
  }
}
