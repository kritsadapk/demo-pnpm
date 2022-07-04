const moment = require('moment');
 const getDateToday = (txt) =>{
    if(txt){
        return 'RETRUN TXT 🍓 🌝';
    }
    return `Hey! today is date ${moment().toString()}` 
}

module.exports = getDateToday