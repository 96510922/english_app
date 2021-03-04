$(".menuButton").on("click",function(){
    $(".menu").toggleClass("is-active");
});

 new Vue({
    el: "#app",
    data:{
        startFlag: "",   
        questions: [
            {
            question: "gifted child",
            choices: [
                {
                    "answer": "天才児",
                    "correct": true
                },
                {
                    "answer" : "問題児",
                    "correct": false
                },  
                {
                    "answer": "才能",
                    "correct": false
                }
            ],
            },
            {
            question: "precedent",
            choices:[
                {
                    "answer": "先例",
                    "correct": true
                },
                {
                    "answer" : "大統領",
                    "correct": false
                },  
                {
                    "answer": "祖先",
                    "correct": false
                }
            ]
            },
            {
                question: "boundary",
                choices:[
                    {
                        "answer": "絆",
                        "correct": false
                    },
                    {
                        "answer" : "隙間",
                        "correct": false
                    },  
                    {
                        "answer": "境界線",
                        "correct": true
                    }
                ]
                },
                {
                    question: "timidity",
                    choices:[
                        {
                            "answer": "退屈",
                            "correct": false
                        },
                        {
                            "answer" : "臆病",
                            "correct": true
                        },  
                        {
                            "answer": "締め切り",
                            "correct": false
                        }
                    ]
                    },
                    {
                        question: "blunder",
                        choices:[
                            {
                                "answer": "ベランダ",
                                "correct": false
                            },
                            {
                                "answer" : "大失敗",
                                "correct": true
                            },  
                            {
                                "answer": "転倒",
                                "correct": false
                            }
                        ]
                        },
            
        ],
        answerList: [],
        count: 0,
        red: true,
    },
    methods: {
        gameStart: function() {
            this.startFlag = true
        },
        click_choice: function(questionIndex, choiceIndex) {
            if (this.answerList[questionIndex]) {
                return
            }
                const click_question = this.questions[questionIndex]//クリックした質問
                const clickChoice = click_question.choices[choiceIndex]//クリックした選択肢
                const getCorrect = clickChoice.correct //クリックした選択肢の回答
                if(getCorrect){
                    this.count += 10
                }else{
                    this.count += 0
                }
                this.$set(this.answerList, questionIndex, choiceIndex + "")
        },
        judge: function(questionIndex){

            const question = this.questions[questionIndex]
            const answerExist = this.answerList[questionIndex]
            const option = question.choices[answerExist]
            return option.correct ? "正解" : "不正解"
        },
    },
    computed: {
        fullScore() {
            return this.questions.length * 10;
        }
    }
    
});