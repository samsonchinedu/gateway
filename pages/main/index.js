import styles from './index.module.scss'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { VscChecklist } from 'react-icons/vsc'
import { RiDatabase2Fill } from 'react-icons/ri'
import { HiGift } from 'react-icons/hi'
import { useState } from 'react'

const Content = () => {
    const [click, setClick] = useState(false)
    const [changeColor, setChangeColor] = useState(false)
    const [changeColor1, setChangeColor1] = useState(false)
    const [changeColor2, setChangeColor2] = useState(false)
    const [changeColor3, setChangeColor3] = useState(false)

    const changeClassName = () => {
        setChangeColor(!changeColor)
    }
    
    const changeClassName1 = () => {
        setChangeColor1(!changeColor1)
    }
    
    const changeClassName2 = () => {
        setChangeColor2(!changeColor2)
    }
    
    const changeClassName3 = () => {
        setChangeColor3(!changeColor3)
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.points}>
                    <div className={styles.rewards}>
                        <h1>What are Contracts?</h1>
                        <div className={styles.frames}>
                            <div className={styles.frame}>
                                <MdOutlineAccessTimeFilled /> 
                                <p>Estimated 3 minutes to read</p>
                            </div>
                            <div className={styles.frame}>
                                <VscChecklist />
                                <p>0 tasks</p>
                            </div>
                            <div className={styles.frame}>
                                <RiDatabase2Fill />
                                <p>2 reward points</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.point}>
                        <HiGift className={styles.gift} />
                        <p>0 points</p>
                    </div>
                </div>

                <div className={styles.video} download>
                    <video controls={false} >
                        <source src="/Next.mp4" />
                    </video>
                </div>

                <div className={styles.content}>
                    <div className={styles.frame}>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                        <div className={styles.details}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                                eu non eget felis magna ligula molestie. Lorem ipsum mauris, arcu id 
                                nam ut tempor amet. Mauris enim quam magna ornare quam pellentesque est 
                                diam. Eget a cras maecenas non risus elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                                eu non eget felis magna ligula molestie. Lorem ipsum mauris, arcu id 
                                nam ut tempor amet. Mauris enim quam magna ornare quam pellentesque est 
                                diam. Eget a cras maecenas non risus elit.
                            </p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                                eu non eget felis magna ligula molestie. Lorem ipsum mauris, arcu id 
                                nam ut tempor amet. Mauris enim quam magna ornare quam pellentesque est 
                                diam. Eget a cras maecenas non risus elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                                eu non eget felis magna ligula molestie. Lorem ipsum mauris, arcu id 
                                nam ut tempor amet. Mauris enim quam magna ornare quam pellentesque est 
                                diam. Eget a cras maecenas non risus elit.
                            </p>
                        </div>
                    </div>

                    <button className={styles.click} onClick={() => {
                        setClick(true)
                        }}>Next level
                    </button>
                </div>

                <div className={styles.recaps} style={{ "display": click ? 'flex' : "none" }}>
                    <div className={styles.recap}>
                        <h4>Let’s recap, okay?</h4>
                        <div className={styles.contracts}>
                            <h3>What are contracts?</h3>
                            <div className={styles.radio} onClick={changeClassName} >
                                <input type="radio" className={changeColor? styles.active: styles.deactive} />
                                <p className={changeColor? styles.blue: styles.black}>A contract is an agreement between private parties creating mutual obligations enforceable by law.</p>
                            </div>
                            <div className={styles.radio} onClick={changeClassName1} >
                                <input type="radio" className={changeColor1? styles.active: styles.deactive} />
                                <p className={changeColor1? styles.blue: styles.black}>A contract is an agreement between private parties creating mutual obligations enforceable by law.</p>
                            </div>
                            <div className={styles.radio} onClick={changeClassName2} >
                                <input type="radio" className={changeColor2? styles.active: styles.deactive} />
                                <p className={changeColor2? styles.blue: styles.black}>A contract is an agreement between private parties creating mutual obligations enforceable by law.</p>
                            </div>
                            <div className={styles.radio} onClick={changeClassName3} >
                                <input type="radio" className={changeColor3? styles.active: styles.deactive} />
                                <p className={changeColor3? styles.blue: styles.black}>A contract is an agreement between private parties creating mutual obligations enforceable by law.</p>
                            </div>
                        </div>
                        <button className={styles.button} style={{"backgroundColor": changeColor || changeColor1 || changeColor2 || changeColor3  ? "#333333" : "#999999"}} >Submit</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;