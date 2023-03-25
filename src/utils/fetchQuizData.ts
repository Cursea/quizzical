import he from 'he'
import { QuestionType } from '../types/appTypes'
import { shuffleArray } from './shuffleArray'

export const fetchQuizData = async (amount: number): Promise<QuestionType[]> => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`)
    const data = await response.json()

    return data.results.map((item: QuestionType) => ({
        category: item.category,
        type: item.type,
        difficulty: item.difficulty,
        question: he.decode(item.question),
        correct_answer: he.decode(item.correct_answer),
        incorrect_answers: item.incorrect_answers.map((ans: string) => he.decode(ans)),
        answers: shuffleArray([
            { answer: he.decode(item.correct_answer), correct: true },
            ...item.incorrect_answers.map((ans: string) => ({ answer: he.decode(ans), correct: false })),
        ]),
    }))
}
