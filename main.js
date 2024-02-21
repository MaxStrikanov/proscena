import 'normalize.css'


var tl = gsap.timeline();


tl.to('.title', {opacity: 1, y: -100, duration: 1 })

// tl.to('.reviews_item', {opacity: 1, y: 10, duration: 0.05})

tl.to(".animation_1", {duration: 0.1, opacity: 1, y: -20 })
  .to(".animation_2", {duration: 0.12, opacity: 1, y: -20 })
  .to(".animation_3", {duration: 0.14, opacity: 1, y: -20 })
  .to(".animation_4", {duration: 0.16, opacity: 1, y: -20 })
  .to(".animation_5", {duration: 0.18, opacity: 1, y: -20 });



  
  const API_URL = 'https://api.unisender.com/ru/api/subscribe?';
  const API_KEY = '6x6q7z7desosw7j18upmyuxetyoshy8d378jr9qy';
  const LIST_IDS = '19862270';
  
  const arr = [ 'velery-shoy@mail.ru', 'ramai-zetta@mail.ru', 'pp274662@gmail.com', 'kropotinchik@rambler.ru', 't.abramova@udm.ru', 'pozd80@mail.ru', 'frankinshtein@mail.ru']
  
  // Массив данных для отправки на сервер
  // const url = `${API_URL}format=json&api_key=${API_KEY}&list_ids=${LIST_IDS}&fields[email]=${arrEmail}&double_optin=0&overwrite=0}`

  
  const arrEmail = []
  var myString = ''
  arr.forEach((item, i) => {
    
    let query = `data[${i}][0]=${item}&data[${i}]][1]=778899&`;
    arrEmail.push(query)
    myString = arrEmail.join('').slice(0, -1);
  })

    console.log(myString);
 