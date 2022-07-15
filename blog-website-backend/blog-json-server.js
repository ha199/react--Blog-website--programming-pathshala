const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

//making the fake data for the api
const generatingDB = () =>{
    const blogs = [];
    const categories=['Data Structures & Algorithms', 'Interview Preperation', 'Competitive Programming','Time and Space Complexities', 'Student Experiences', 'About Us'];
        for (let i = 0; i < 20; i++) {
            const blog= {
                id: uuidv4(),
                date: faker.date.recent(100),
                thumbnail:faker.image.imageUrl(752, 340,'nature',true),
                title:faker.lorem.sentence(12),
                categories:faker.helpers.arrayElements(categories, 1),
                description:faker.lorem.paragraphs(10),
                authorName:faker.name.findName()
            }
            blogs.push(blog);
        }
        return {blogs};
}

module.exports = generatingDB;