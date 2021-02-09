 
(function(window,document){
// 전체영역에 영향을 끼칠 수 있으므로 구분화 한다
    'user strict'; //엄격한 자바 문법을 말한다
    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');


    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });

    window.addEventListener('resize', function(){
        if(window.innerWidth> 1024){
            offElements();
        }
    });

    function toggleElements(){
        // 토글이 두개가 있어서 반복해서 사용해줘야한다
        // 토글이라는 클래스를 가지고 있는 요소에다가 실행되면
        // 지속적으로 토글할것이다 
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }
})(window, document)