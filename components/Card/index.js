import React from 'react'
import Styles from './card.module.css'

const Card = ({
    classNames,
    data
}) => {

    return (
        <div className={`${Styles.cardContainer} ${classNames.container}`}>
            {!!data.ImageSrc &&
                <img
                    src={data.ImageSrc}
                    alt='Image'
                    className={classNames.Images} />
            }
            {!!data.header &&
                <div className={`h5 ${classNames.header}`}>
                    {data.header}
                </div>
            }
            {!!data.details &&
                <p className={classNames.details}>
                    {data.details}
                </p>
            }
            {!!data.buttonClick && !!data.buttonText &&
                <button onClick={data.buttonClick} className={classNames.buttons}>
                    {data.buttonText}
                </button>
            }
        </div>
    )
}

export default Card
