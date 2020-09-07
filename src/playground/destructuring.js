// const book = { 
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name : publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

const item = ['Coffee (hot)', '10', '15', '20'];

const [type, ,size] = item;

console.log(`A medium ${type} costs ${size}`);