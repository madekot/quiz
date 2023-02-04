import dataMock from 'mock/data.json'
import {Question} from 'types'

const DELAY_TIME = 300

class Api {
  getAll(): Promise<Question[]> {
    return (
      new Promise(resolve => {
        setTimeout(() =>  resolve(dataMock.questions), DELAY_TIME)
      })
    )
  }
}

export default Api