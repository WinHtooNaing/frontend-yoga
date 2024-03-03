import uuid from "react-uuid";

export const getListTrainers = () => {
    if(!localStorage["@trainers"]){
        localStorage["@trainers"] = JSON.stringify([]);
    }
    let trainers = JSON.parse(localStorage["@trainers"]);
    return trainers;
}
export const getTrainerById = (id) =>{
    const trainers = getListTrainers();
    const trainer = trainers.find((trainer)=>trainer.id === id);
    return trainer;
}

export const addTrainer = (trainer)=>{
     const trainers = getListTrainers();
    trainers.push({id:uuid(),...trainer});
    localStorage["@trainers"] = JSON.stringify(trainers);
}
export const editTrainer = (id,newTrainer) => {
    let trainers = getListTrainers();
    trainers = trainers.filter((trainer)=> trainer.id !== id);
    trainers.push(newTrainer);
    localStorage["@trainers"] = JSON.stringify(trainers);
}

export const deleteTrainer = (id) => {
    let trainers = getListTrainers();
    trainers = trainers.filter((trainer) => trainer.id !==id);
    localStorage["@trainers"] = JSON.stringify(trainers);
}