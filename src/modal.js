// Бургер и модалка
const menu = document.querySelector('.menu-container')
const close = document.querySelector('.close')
const burger = document.querySelector('.burger')

const modal = document.querySelector('.modal-window')
const crossModal = document.querySelector('.close-modal')
const phoneLink = document.querySelector('.phone-txt')

function openMenu() {
  menu.classList.toggle('open')
}

function closeMenu() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  }
}

function closeModal() {
  if (modal.classList.contains('open')) {
    modal.classList.remove('open')
  }
}

burger.addEventListener('click', openMenu)
menu.addEventListener('click', closeMenu)
close.addEventListener('click', closeMenu)

phoneLink.addEventListener('click', function () {
  Swal.fire({
    width: 900,
    showConfirmButton: false,
    showCloseButton: true,
    html: `<form
    enctype="multipart/form-data"
    method="post"
    id="form"
    onsubmit="sendConsult(event, './PHPMailer/forms/consult.php')"
    class="modal-container flex a-center column">
    <h2 class="modal-title">Получить косультацию</h2>
    <input class="modal-input" type="text" placeholder="Ваше имя" name="name" required />
    <input class="modal-input telephone" name="telephone" type="tel" placeholder="Ваш телефон" name="phone" required />
    <button
      value="Свяжитесь со мной"
      type="submit"
      id="modal-button"
      class="act-button flex a-center j-center">
      Свяжитесь со мной
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
    </button>
  </form>`,
  })
  phoneMask('.telephone')
})

const application = document.querySelector('.application-section')

const initPopup = (event) => {
  event.preventDefault()
  Swal.fire({
    width: 1200,
    showConfirmButton: false,
    showCloseButton: true,
    html: `<form class="app-container"
    method="post"
    onsubmit="sendApplication(event, Swal)"
    enctype="multipart/form-data">
    <h2 class="app-title flex j-center">Заполните полную анкету</h2>
    <input id="application-modal-name" style="display: none;" type="text" placeholder="Ваше имя" name="name" required />
    <input id="application-modal-phone" style="display: none;" type="tel" placeholder="Ваш телефон" name="phone" required />
    <div class="app-wrapper flex j-center">
      <input
        class="app-input"
        type="text"
        name="lastname"
        placeholder="Ваша Фамилия:"
        required
      />
      <input
        class="app-input mr-0"
        type="text"
        name="middlename"
        placeholder="Ваше Отчество:"
        required
      />
    </div>
    <div class="app-wrapper flex j-between">
      <div ref="select-box-citizenship" class="app-input"></div>
      <input
        class="app-input date-input"
        name="birthdate"
        data-name="birthdate"
        placeholder="Дата рождения:"
        required
      />
      <input
        class="app-input mr-0"
        type="text"
        name="place"
        required
        placeholder="Место рождения:"
        required
      />
    </div>
    <div class="app-wrapper flex j-between">
      <div ref="select-box-document" class="app-input"></div>
      <input
        class="app-input"
        type="number"
        name="document"
        placeholder="Серия и номер документа:"
        required
      />
      <input
        class="app-input date-input mr-0"
        data-name="expiredate"
        name="expiredate"
        placeholder="Срок действия паспорта:"
        required
      />
    </div>
    <div class="app-wrapper flex j-between">
      <input
        class="app-input"
        type="text"
        name="authority"
        placeholder="Кем выдан документ:"
        required
      />
      <input
        class="app-input date-input"
        data-name="issuedate"
        name="issuedate"
        placeholder="Дата выдачи документа:"
        required
      />
      <div ref="select-box-period" class="app-input mr-0"></div>
    </div>
    <textarea
      class="app-comment"
      name="comment"
      placeholder="Комментарий"
    ></textarea>
    <div class="flex column a-center j-center">
      <button class="act-button flex a-center j-center">
        Отправить
        <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      </button>
      <div class="form-privacy flex">
        Заполняя форму вы соглашаетесь с
        <a href="#"> политикой конфиденциальности</a>
      </div>
    </div>
  </form>`,
  }).then(result => {
    // if (result.dismiss === 'close' || result.dismiss === 'backdrop') {
    if (result.dismiss === 'close') {
      sendForm()
    }
  })

  const applicationName = document.querySelector('#application-name')
  const applicationPhone = document.querySelector('#application-phone')

  const applicationModalName = document.querySelector('#application-modal-name')
  const applicationModalPhone = document.querySelector('#application-modal-phone')

  applicationModalName.value = applicationName.value
  applicationModalPhone.value = applicationPhone.value

  initDatepickers()

  const citizenship = new window.Select({
    placeholder: 'Выберите гражданство:',
    dataset: [
      {
        value: 'Россия',
      },
      {
        value: 'Иностранное',
      },
      {
        value: 'Другое',
      },
      {
        value: 'Лицо без гражданства',
      },
    ],
    name: 'citizenship',
    selected: '',
  }).componentMount({
    el: document.querySelector('[ref="select-box-citizenship"]'),
  })

  const documentType = new window.Select({
    placeholder: 'Выберите документ:',
    dataset: [
      {
        value: 'Паспорт',
      },
      {
        value: 'Свидетельство о рождении,',
      },
      {
        value: 'Другое',
      },
    ],
    name: 'documenttype',
    selected: '',
  }).componentMount({
    el: document.querySelector('[ref="select-box-document"]'),
  })

  const period = new window.Select({
    placeholder: 'Выберите срок регистрации:',
    dataset: [
      {
        value: '3 месяца',
      },
      {
        value: '6 месяца',
      },
      {
        value: '1 год',
      },
      {
        value: '3 года',
      },
      {
        value: '5 лет',
      },
    ],
    name: 'registration',
    selected: '',
  }).componentMount({
    el: document.querySelector('[ref="select-box-period"]'),
  })
}

const form = document.querySelector('#form')
form.addEventListener('submit', initPopup)



// Отправка данных на сервер
function sendConsult(event, php) {
  console.log('Отправка запроса')
  event.preventDefault ? event.preventDefault() : (event.returnValue = false)
  var req = new XMLHttpRequest()
  req.open('POST', php, true)
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      const  json = JSON.parse(this.response)
      console.log(json)

      alert('Сообщение отправлено')

      // if (json.result == 'success') {
      //   // Если сообщение отправлено
      //   alert('Сообщение отправлено')
      // } else {
      //   // Если произошла ошибка
      //   alert('Ошибка. Сообщение не отправлено')
      // }
      // Если не удалось связаться с php файлом
    } else {
      console.log(req)
      alert('Ошибка сервера. Номер: ' + req.status)
    }
  }

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert('Ошибка отправки запроса')
  }
  req.send(new FormData(event.target))
}

function sendForm () {
  const form = document.querySelector('#help')
  const php = './PHPMailer/forms/consult.php'

  const req = new XMLHttpRequest()
  req.open('POST', php, true)
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      const  json = JSON.parse(this.response)
      console.log(json)
      // alert('Сообщение отправлено')

      // if (json.result == 'success') {
      //   // Если сообщение отправлено
      //   alert('Сообщение отправлено')
      // } else {
      //   // Если произошла ошибка
      //   alert('Ошибка. Сообщение не отправлено')
      // }
      // // Если не удалось связаться с php файлом
    } else {
      console.log(req)
      alert('Ошибка сервера. Номер: ' + req.status)
    }
  }

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert('Ошибка отправки запроса')
  }
  req.send(new FormData(form))
}

const setApplicationSelects = () => {
  const citizenship = document.querySelector('[ref="select-box-citizenship"] .select__label')
  const documentType = document.querySelector('[ref="select-box-document"] .select__label')
  const registration = document.querySelector('[ref="select-box-period"] .select__label')

  const citizenshipInput = document.querySelector('input[name="citizenship"]')
  const documentTypeInput = document.querySelector('input[name="documenttype"]')
  const registrationInput = document.querySelector('input[name="registration"]')

  citizenshipInput.value = citizenship.innerHTML
  documentTypeInput.value = documentType.innerHTML
  registrationInput.value = registration.innerHTML
}

function sendApplication(event, Swal) {
  event.preventDefault()
  const php = './PHPMailer/forms/application.php'

  setApplicationSelects()

  console.log('Отправка запроса')
  const req = new XMLHttpRequest()
  req.open('POST', php, true)
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      const  json = JSON.parse(this.response)
      console.log(json)
      alert('Сообщение отправлено')
      Swal.close()
    } else {
      console.log(req)
      alert('Ошибка сервера. Номер: ' + req.status)
    }
  }

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert('Ошибка отправки запроса')
  }
  req.send(new FormData(event.target))
}