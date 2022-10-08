{
  /* <section class="form">
  <div class="container">
    <form class="form_form">
      <b class="form_title">Залишились питання?</b>
      <strong class="form_subTitle">Залиш заявку і ми відповімо</strong>
      <input type="text" name="" id="form_form-Name" placeholder="Им'я" />
      <input type="tel" name="" id="form_form-Phone" placeholder="Телефон" />
      <input type="email" name="" id="form_form-Email" placeholder="Пошта" />
      <button class="form_btnSubmit"  type="submit">
        Залишити заявку
      </button>
    </form>
  </div>
</section>; */
}

const name = document.querySelector('#form_form-Name');
const phone = document.querySelector('#form_form-Phone');
const email = document.querySelector('#form_form-Email');
const btnSubmit = document.querySelector('#form_form-btnSubmit');

let data = {};

btnSubmit.addEventListener('click', submit);

function submit(e) {
  e.preventDefault();
  data.name = name.value;
  data.phone = phone.value;
  data.email = email.value;

  name.value = '';
  phone.value = '';
  email.value = '';

  console.log(data);
}
