var btn = document.querySelectorAll('.control a')
        var formContainer = document.querySelector('.div-form')
        var form = document.querySelectorAll('.div-form form')

        // 切换注册
        btn[0].addEventListener('click', function(e) {
            form[0].classList.add('disappear')
            form[1].classList.remove('disappear')
            formContainer.style.transform = 'rotateY(180deg)'
        })
        // 切换登录
        btn[1].addEventListener('click', function(e) {
            form[1].classList.add('disappear')
            form[0].classList.remove('disappear')
            formContainer.style.transform = 'none'
        })