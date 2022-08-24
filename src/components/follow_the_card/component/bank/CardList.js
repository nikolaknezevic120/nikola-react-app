import { CardDetail } from "./CardDetail"

export function CardList(props) {
    return <div className="row">
            {props.cards.map((card, index) => {
                return <div key={index} className="col-12 mt-3">
                    <CardDetail deleteCard={props.deleteCard} updateCard={props.updateCard} id={index} iban={card.iban} validate={card.validate} 
                    pin={card.pin} cvv={card.cvv} cardName={card.cardName} ownerName={card.ownerName}
                    ownerSecondName={card.ownerSecondName} avaliable={card.avaliable}/>
                </div>
            })}
    </div>
}