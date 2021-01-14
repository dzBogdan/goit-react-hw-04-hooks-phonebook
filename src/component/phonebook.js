import { useState} from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';


import './phonebook.moduls.css';

  
export default function Phonebook (){
  const [contacts, setContacts]= useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  
  const [filter, setFilter] = useState('');    
  
  const normolizefilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normolizefilter));
    
     const handleInputFilterChenge = event =>{
        setFilter(event.currentTarget.value);
      }

      const handleButtonAdd = element =>{

        const getUserByName = (arr, name) => arr.find(x => x.name === name);
        const findsElement = getUserByName(contacts,element.name);

              
        if(findsElement) {
            window.alert(`Пользователь с именем ${element.name} уже eсть в телефонной книге`)
        } else{
            setContacts(prevState => [...prevState,element]);
            
        }
          
      } 


     const deleteContact = (id) =>{
          setContacts(prevState=> prevState.filter(contact => contact.id !== id))
  }
  
  

       
        return(
            <div>
              
                <h2>Телефонная книга</h2>
                <ContactForm handleButtonAdd={handleButtonAdd}/>
                <label>Фильтр для поиска</label>
                <br/>
                <input type="text"
                onChange={handleInputFilterChenge}
                className="filter__input"
                />
                <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact}/>  
                      
            </div>   
        )
    
} 

