import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './topic.scss'
function Quiz(){
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApi = () => {
            fetch(`https://v6t59v-8080.csb.app/tracnghiem`)
                .then(res => res.json())
                .then(data => {
                    // Sử dụng hàm để chọn số phần tử ngẫu nhiên
                    var randomItems = selectRandomItems(data, 15);
                    setQuiz(randomItems);
                    console.log(randomItems);
                    setLoading(false);
                });
        
        };
        setTimeout(fetchApi, 1500);
    },[]
)
const score = (array)=>{
    let score = 0;
    for(let i=0;i<array.length;i++){
        const value = array[i].value;
        const trueValue = quiz.find(item => item.id === parseInt(array[i].name)).answer;
        console.log(value, trueValue);
        if(value == trueValue)  score++;
    }
    console.log(score);
    if(array.length==0) window.alert("0 diem");
    else window.alert("Tra loi dung: "+ score);
}
// Hàm chọn 15 phần tử ngẫu nhiên từ mảng JSON
function selectRandomItems(jsonArray, count) {
    var selectedItems = [];
    var remainingItems = jsonArray.slice(); // Tạo một bản sao của mảng ban đầu để không làm thay đổi mảng gốc

    // Chọn ngẫu nhiên 15 phần tử từ mảng cho đến khi đạt đủ count
    while (selectedItems.length < count && remainingItems.length > 0) {
        var randomIndex = Math.floor(Math.random() * remainingItems.length);
        var selectedItem = remainingItems.splice(randomIndex, 1)[0]; // Xóa phần tử đã chọn khỏi mảng còn lại
        selectedItems.push(selectedItem);
    }

    return selectedItems;
}




const handleSubmit = (e)=>{
    e.preventDefault();
    let answers = [];
    for(let i=0;i<e.target.elements.length-2;i++){
        if(e.target.elements[i].checked){
            const name = e.target.elements[i].name;
            const value = e.target.elements[i].value
            answers.push({
                name: name,
                value: value
            })
            console.log(answers);
        }   
    }
    score(answers);
}

    return(
        <>
            {loading? (<Spinner animation="grow" />):(
                <>
                    <form className='listQuiz' onSubmit={handleSubmit}>
                        {
                            quiz.map((item,indexQues)=>(
                                <div key={item.id}>
                                    <div className='listQuiz__title' key={item.id}>Câu{indexQues+1}: {item.question}</div>
                                    {
                                        item.options.map((itemAns,indexAns)=>(
                                            <div className='listQuiz__answer' key={`${item.id}-${indexAns}`}>
                                                <input className='' value={itemAns} name={item.id} id={`quiz-${item.id}-${indexAns}`} type='radio' ></input>
                                                <label htmlFor={`quiz-${item.id}-${indexAns}`} >{itemAns}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        )                         
                        }
                        <div className='listQuiz__btn'>
                          <Button  type='submit' variant="primary" size="lg">Nộp bài</Button>{' '}

                        </div>
                    </form>
                </>
            )}
        </>
    )
}
export default Quiz;