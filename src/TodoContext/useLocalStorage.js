import React from "react";

export function useLocalStorage(itemName, initialValue) {
  const [dataStatus, setDataStatus] = React.useState({loading: true, error: false});
  const [item, setItem] =  React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setDataStatus({...dataStatus, loading: false});

      } catch (error) {
        setDataStatus({...dataStatus, error: error});
      }
    }, 4000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setDataStatus({...dataStatus, error: error});
    }
  }

  return {
    item,
    saveItem,
    dataStatus
  };
}