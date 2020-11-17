import faker from 'faker'
import shortId from 'shortid'
export const dummyDataScrolling=(number)=>Array(number).fill().map(()=>({
    id:shortId.generate(),
    firstName:faker.name.firstName(),
    content:faker.lorem.sentence()
}))