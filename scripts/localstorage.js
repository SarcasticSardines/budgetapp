const savetolocalStorage = (moni) =>{
        let funds = getlocalStorage();
       
        if(!funds.includes(moni)){
            funds.push(moni);
        }
    
        localStorage.setItem("funds", JSON.stringify(funds));
    }
    
    const getlocalStorage = () => {
        let localStorageData = localStorage.getItem("funds");
    
        if(localStorageData == null){
            return [];
        }

        return JSON.parse(localStorageData);
    }
    
    const removefromlocalStorage = (moni) => {
        let funds = getlocalStorage();
    
        let namedIndex = funds.indexOf(moni);
    
        funds.splice(namedIndex, 1);
    
        localStorage.setItem("funds", JSON.stringify(funds));
    }
    
    export {savetolocalStorage, getlocalStorage, removefromlocalStorage};