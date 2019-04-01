import { INCREMENT } from '../constants'

export default (count = 10, action) => (action.type === INCREMENT ? count + 1 : count)
