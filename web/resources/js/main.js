

$(() => {
    $('headers').load('/screens/common/header.html')
    $('navs').load('/screens/common/nav.html')
    $('footers').load('/screens/common/footer.html')

    // 로테이션
    $.ajax({
        url: mainServer + '/rotation',
        type: 'post',
        success: (res) => {
            let html = ''
            res.forEach(item => {
                html += '<div class="lotation">'
                html += `<img src="http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${championKeyToId[item]}.png"></img>`
                html += '</div>'
            });
            $('#lotation-box').html(html)
        }

    })

    // 인기 게시글
    $.ajax({
        url: mainServer + '/popularPosts',
        type: 'get',
        success: response => {
            
            const res = JSON.parse(response)
            
            if (res.result == 'success') {

                const data = JSON.parse(res.data)
            
                let html = "";
                for (let i=0; i<10; ++i) {
                    html += `<div class="post-box"`
                    if (i < data.length) {
                        html += `onclick='window.location.href="/screens/bbs/bbsdetail.html?seq=${data[i].seq}"'`
                    }
                    html += `>`
                    html +=   `<div class="tx-rate">${i+1}</div>`
                    html +=   `<div class="text-box">`
                    html +=     `<div class="title-box">`
                    if (i < data.length) {
                        html +=   `<h3 class="tx-title">${data[i].title.substr(0, 10)}`
                        if (data[i].title.length > 10) { html +=' ...'} // 제목의 길이가 길 경우 [...] 추가
                        html +=   `</h3>`
                        html +=   `<h3 class="tx-comment">[${data[i].comments}]</h3>`
                        html += `</div>`
                        html += `<div class="subtitle-box">`
                        html +=   `<div class="tx-time">${dateToStringFromNow(data[i].created)}</div>`
                        html +=   `<div class="tx-nickname">${data[i].writer}</div>`
                    }
                    html +=     `</div>`
                    html +=   `</div>`
                    html += `</div>`
                }
                $('#popular-box').html(html);                
            }
        },
        error: err => console.log(err)
    })

    // 현재시간으로부터 얼마나 전에 생성된 글인지 확인
    const dateToStringFromNow = (postDateStr) => {
        
        const today = new Date()
        const postDate = new Date(postDateStr)

        const timeDiff = today.getTime() - postDate.getTime()

        const yearDiff = today.getFullYear() - postDate.getFullYear()
        const monthDiff = today.getMonth() - postDate.getMonth()
        const dateDiff = today.getDate() - postDate.getDate()
        const hourDiff = today.getHours() - postDate.getHours()
        const minDiff = today.getMinutes() - postDate.getMinutes()
        const secDiff = today.getSeconds() - postDate.getSeconds()
        
        let result = ''

        if (yearDiff > 0) {
            result = yearDiff + '년 전'
        } else if (monthDiff > 0) {
            result = monthDiff + '개월 전'
        } else if (dateDiff > 0) {
            result = dateDiff + '일 전'
        } else if (hourDiff > 0) {
            result = hourDiff + '시간 전'
        } else if (minDiff > 0) {
            result = minDiff + '분 전'
        } else if (secDiff > 0) {
            result = secDiff + '초 전'
        }

        return result
    }   
})