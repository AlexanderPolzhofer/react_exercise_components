import { Component } from "react";
import cardstyle from './Card.module.css';

export default class Card extends Component {
    render() {
        return (
            <div className={cardstyle.cardwrapper}>
                <div className={cardstyle.Card}>
                    <div className={cardstyle.uppercontainer}>
                        <div className={cardstyle.imagecontainer}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt='w3schoolslogo' height='255px' width='255px' />
                        </div>
                    </div>


                    <div className={cardstyle.lowercontainer}>
                        <div className={cardstyle.carditem}>
                            <p className={cardstyle.editfontsize}><h3>Name: </h3>John Doe</p>
                        </div>
                        <div className={cardstyle.carditem}>
                            <p className={cardstyle.editfontsize}><h3>Job: </h3>Architect/Engineer</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}