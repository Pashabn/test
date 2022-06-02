
  const chck = document.querySelector('.paid')
    const span = document.querySelector('span')

    chck.addEventListener('change', () => {
   //   console.log(chck.checked)
      span.textContent =
      span.textContent === 'Оплачено'
      ? 'Без оплаты': 'Оплачено'
    })