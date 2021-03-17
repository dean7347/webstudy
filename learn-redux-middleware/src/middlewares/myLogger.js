const myLogger = store => next =>action =>{
    //액션이 디스패치될때 이것을 출력
    console.log(action); 

    console.log('\tPrev', store.getState())
    //액션을 다음 미들웨어, 다음미들웨어가 없으면 리듀서한테 전달
    const result = next(action);
    //액션이 리듀서에서 처리가 모두 되고 난 다음
    // 그 다음상태를 콘솔에 출력
    console.log('\tNext', store.getState())
    //반환값은 컨테이너에서 디스패치되었을때 결과물 
    // 프로미스를 만들게 된다면 프로미스를 전달할수있음
    return result;
}

export default myLogger;