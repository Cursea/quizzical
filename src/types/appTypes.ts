export interface QuestionType {
    category: string
    difficulty: string
    type: 'multiple' | 'boolean'
    question: string
    correct_answer: string
    incorrect_answers: []
}

export interface AnswerType {
    answer: string
    correct: boolean
}
