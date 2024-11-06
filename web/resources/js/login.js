$(()=> {

    // 버튼 클릭
    $('#btn-login').click(login);
    
    // 엔터치면 로그인
    $('#input-id').keypress(() => { if (event.keyCode == 13) { login() } })
    $('#input-pw').keypress(() => { if (event.keyCode == 13) { login() } })

    // 회원가입 클릭
    $('#link-register').click(() => {
        window.location.href = '/screens/auth/register.html'
    })

    // 아이디 변경 이벤트
    $('#input-id').on("propertychange change keyup paste input", () => {
        $('#input-id').removeClass('warning-input')
    })
    // 비밀번호 변경 이벤트
    $('#input-pw').on("propertychange change keyup paste input", () => {
        $('#input-pw').removeClass('warning-input')
    })
})

const login = () => {

    const id = $('#input-id').val().trim()
    const pw = $('#input-pw').val()

    // 빈칸 확인
    let isBlanked = false
    if (id == undefined || id == '') { $('#input-id').addClass('warning-input'); isBlanked = true }
    if (pw == undefined || pw == '') { $('#input-pw').addClass('warning-input'); isBlanked = true }
    if (isBlanked) { $('#warning-box').text('빈 칸이 존재합니다'); return }

    // 서버 통신
    const data = { id: id, pw: pw }

    $.ajax({
        url: mainServer + '/login',
        type: 'post',
        data: data,
        success: res => {
            const data = JSON.parse(res)
            
            if (data.result == "success") {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('login', id);
                window.location.href = '/screens/main.html'
            } else {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('login')
                $('#warning-box').text('존재하지 않는 아이디 혹은 잘못된 비밀번호입니다')
                $('#input-pw').val('')
            }
        },
        error: err => { console.log(`error: ${err.status}`) }
    })
  }