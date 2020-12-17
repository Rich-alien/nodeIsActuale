const showQuesion = (data,id) => {
    let answer = data[id].group_name;
    document.querySelector('answer-data').innerHTML= answer;
   document.querySelector('.answer').style.display = 'block';
    console.log('show');
}