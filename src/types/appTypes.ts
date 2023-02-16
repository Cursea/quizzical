export interface QuestionType {
    category: string
    difficulty: string
    type: 'multiple' | 'boolean'
    question: string
    correct_answer: string
    incorrect_answers: []
    answers?: AnswerType[]
}

export interface AnswerType {
    answer: string
    correct: boolean
}

export type AnswersType = AnswerType[]
