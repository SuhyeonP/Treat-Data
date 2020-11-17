import faker from 'faker'
import shortId from 'shortid'
export const dummyDataScrolling=(number)=>Array(number).fill().map(()=>({
    id:shortId.generate(),
    firstName:faker.name.firstName(),
    content:faker.lorem.sentence()
}))
export const dummyPaging=(number)=>Array(number).fill().map(()=>({
    firstName:faker.name.firstName(),
    lastName:faker.name.lastName(),
    title:faker.lorem.sentence(),
    content:faker.lorem.paragraph()
}))