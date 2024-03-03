import uuid from "react-uuid";

export const getListClass = () => {
    if(!localStorage["@class"]){
        localStorage["@class"] = JSON.stringify([]);
    }
    let trainers = JSON.parse(localStorage["@class"]);
    return trainers;
}
export const getClassById = (id) =>{
    const trainers = getListClass();
    const trainer = trainers.find((trainer)=>trainer.id === id);
    return trainer;
}

export const addClass = (trainer)=>{
     const trainers = getListClass();
    trainers.push({id:uuid(),...trainer});
    localStorage["@class"] = JSON.stringify(trainers);
}
export const editClass = (id,newClass) => {
    let trainers = getListClass();
    trainers = trainers.filter((trainer)=> trainer.id !== id);
    trainers.push(newClass);
    localStorage["@class"] = JSON.stringify(trainers);
}

export const deleteClass = (id) => {
    let trainers = getListClass();
    trainers = trainers.filter((trainer) => trainer.id !==id);
    localStorage["@class"] = JSON.stringify(trainers);
}