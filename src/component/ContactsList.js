
import './phonebook.moduls.css';



export default function ContactList({ contacts, onDeleteContact }) {
   
    return (
        <div>
            <h3>Контакты</h3>
            <ul className="contact__list">
                {contacts.map(item => (
                    <li key={item.id} className="list__item">
                        <p>{`${item.name} : ${item.number}`}</p>
                        <button className="list__button" onClick={() => onDeleteContact(item.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}  

