

const getdonation=()=>{
        const storeddonation=localStorage.getItem('donation');
        if(storeddonation){
            return JSON.parse(storeddonation)
        }
        return []
    }
const savedonation=id=>{
       
        const savedonations=getdonation();
        const exists=savedonations.find(donationid=>donationid===id);
        if(!exists){
            savedonations.push(id)
            localStorage.setItem('donation',JSON.stringify(savedonations))
        }
    }
    
export {getdonation,savedonation}