///////// task1

// const task1 = () => {
//     return document.querySelector("li").textContent
// };
// console.log(task1);


///////task2

const  task2 = () => {
    const list = Array.from(document.querySelectorAll("li"));
    return list.map(li => li.textContent);
};
console.log(task2);