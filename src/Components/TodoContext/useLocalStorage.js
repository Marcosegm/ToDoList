import { useEffect, useState } from "react";

function useLocalStorage (itemName, initialValue) {
 
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(()=> {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]))
          parsedItem = [ ];
        }else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false);
  
      } catch(error) {
          setLoading(false)
          setError(true)
      }
    }, 2000);
  });
    
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }
  return {
    item,
    saveItem,
    loading,
    error
  };
  }

export {useLocalStorage}

// localStorage.removeItem("TODOS_V1");

// const defaultTodos = [
//   { text: "Tomar el curso de react", completed: true},
//   { text: "Tomar el curso de JS", completed: false},
//   { text: "Tomar el curso de VUE", completed: true},
//   { text: "Tomar el curso de backend", completed: true}
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));