$(() => {
    $('.register-input').on("propertychange change keyup paste input", () => {
        $('.register-input').removeClass('warning-input')
    })

    // 아이디 중복 확인
    $('#input-id').focusout(() => {
        const id = $('#input-id').val()

        if (id != '' && id != undefined) {
            checkDup(id)
        }
    })

    // 비밀번호 같은지 확인
    $('#input-pw').focusout(checkPw)
    $('#input-pw2').focusout(checkPw)

    // 회원가입 버튼
    $('#btn-register').click(register)
})

const checkDup = (id) => {
    $.ajax({
        url: mainServer + '/checkDup',
        type: 'post',
        data: {id: id},
        success: res => {
            const result = JSON.parse(res);
            if (result.result == 'success') {
                $('#warning-id').removeClass('warning-color')
                $('#warning-id').addClass('pass-color')
                $('#warning-id').text('사용 가능한 아이디 입니다')
            } else {
                $('#warning-id').removeClass('pass-color')
                $('#warning-id').addClass('warning-color')
                $('#warning-id').text('이미 존재하는 아이디 입니다')
            }
        },
        error: err => { console.log(err) }
    })
}

const checkPw = () => {
    const pw1 = $('#input-pw').val().trim()
    const pw2 = $('#input-pw2').val().trim()

    if (pw1 == undefined || pw1 == '') {
        return
    }

    if (pw2 == undefined || pw2 == '') {
        return
    }

    if (pw1 == pw2) {
        //
    } else {
        $('#input-pw2').addClass('warning-input')
    }
}

const register = () => {

    const id = $('#input-id').val().trim()
    const pw = $('#input-pw').val()
    const p2 = $('#input-pw2').val()
    const un = $('#input-username').val().trim()
    const em = $('#input-email').val().trim()

    // 빈칸 확인
    let isBlanked = false
    if (id == undefined || id == '') { $('#input-id').addClass('warning-input'); isBlanked = true }
    if (pw == undefined || pw == '') { $('#input-pw').addClass('warning-input'); isBlanked = true }
    if (p2 == undefined || p2 == '') { $('#input-pw2').addClass('warning-input'); isBlanked = true }
    if (un == undefined || un == '') { $('#input-username').addClass('warning-input'); isBlanked = true }
    if (em == undefined || em == '') { $('#input-email').addClass('warning-input'); isBlanked = true }
    if (isBlanked) { $('#warning-box').text('빈 칸이 존재합니다'); return }

    // 비밀번호 다른지 확인
    if (pw != p2) { $('#warning-box').text('비밀번호가 일치하지 않습니다'); return }

    // 서버 통신
    const data = { id: id, pw: pw , username: un, email: em, }
    
    $.ajax({
        url: mainServer + '/register',
        type: 'post',
        data: data,
        success: response => {
            const res = JSON.parse(response)
            
            if (res.result == 'success') {
                
                alert('회원가입 되었습니다.')
                window.location.href = '/screens/main.html'

            } else {
                alert('회원가입 실패')
            }
        },
        error: err => console.log(err)
    })
}

// 나중에 추가할 내용 -> 최소 입력 갯수 같은거?