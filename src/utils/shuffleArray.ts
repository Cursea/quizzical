import { AnswerType } from '../types/appTypes'

export const shuffleArray = (array: AnswerType[]): AnswerType[] => {
    console.count('shuffleArray() called')
    for (let i = array.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}
