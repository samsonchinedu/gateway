import styles from './index.module.scss'
import { HiGift } from 'react-icons/hi'
import { FaAngleDown, FaStar } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { useState } from "react";

const Adventure = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={styles.course}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.box} onClick={() => setToggle(true)}>
                        <div className={styles.reward}>
                            <img src="/image-5.png" />
                            <div className={styles.points}>
                                <div className={styles.point}>
                                    <HiGift className={styles.gift} />
                                    <p>200 reward points</p>
                                </div>
                                <div className={styles.star}>
                                    <FaStar className={styles.superstar} />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3>Introduction to Technology</h3>
                            <small>Beginner level</small>
                            <div className={styles.comrade}>
                                <img src="/image-4.png" />
                                <small>45 Comrades have joined.</small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box} onClick={() => setToggle(true)}>
                        <div className={styles.reward}>
                            <img src="/image-5.png" />
                            <div className={styles.points}>
                                <div className={styles.point}>
                                    <HiGift className={styles.gift} />
                                    <p>200 reward points</p>
                                </div>
                                <div className={styles.star}>
                                    <FaStar className={styles.superstar} />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3>Introduction to Technology</h3>
                            <small>Beginner level</small>
                            <div className={styles.comrade}>
                                <img src="/image-4.png" />
                                <small>45 Comrades have joined.</small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box} onClick={() => setToggle(true)}>
                        <div className={styles.reward}>
                            <img src="/image-5.png" />
                            <div className={styles.points}>
                                <div className={styles.point}>
                                    <HiGift className={styles.gift} />
                                    <p>200 reward points</p>
                                </div>
                                <div className={styles.star}>
                                    <FaStar className={styles.superstar} />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3>Introduction to Technology</h3>
                            <small>Beginner level</small>
                            <div className={styles.comrade}>
                                <img src="/image-4.png" />
                                <small>45 Comrades have joined.</small>
                            </div>
                        </div>
                    </div>

                    <div className={styles.box} onClick={() => setToggle(true)}>
                        <div className={styles.reward}>
                            <img src="/image-5.png" />
                            <div className={styles.points}>
                                <div className={styles.point}>
                                    <HiGift className={styles.gift} />
                                    <p>200 reward points</p>
                                </div>
                                <div className={styles.star}>
                                    <FaStar className={styles.superstar} />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3>Introduction to Technology</h3>
                            <small>Beginner level</small>
                            <div className={styles.comrade}>
                                <img src="/image-4.png" />
                                <small>45 Comrades have joined.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.modules} style={ {"display": toggle?'block' : 'none'} }>
                <div className={styles.containers}>
                    <div className={styles.stories}>
                        <img src="/image-8.png" className={styles.image} />
                        <h4>Crypto - Trading</h4>
                        <p>The act of speculating on cryptocurrency price trend via a contract for difference (CFD) trading account, or buying and selling the underlying coins via an exchange is known as cryptocurrency or crypto trading.</p>
                        <div classaName={styles.detai}>
                            <div className={styles.detail}>
                                <div className={styles.point}>
                                    <HiGift className={styles.gift} />
                                    <small>200 reward points</small>
                                </div>
                                <div className={styles.comrade}>
                                    <img src="/image-4.png" />
                                    <small>45 Comrades have joined.</small>
                                </div>
                            </div>
                            <div className={styles.star}>
                                <FaStar className={styles.superstar} />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className={styles.venture}>
                        <div className={styles.navbar}>
                            <li className={styles.active}>About</li>
                            <li>Modules</li>
                            <li>Reviews</li>
                            <MdCancel className={styles.mdcan} onClick={ () => setToggle(false)} />
                        </div>
                        <div className={styles.about}>
                            <div className={styles.section-1}>
                                <h3>What to Expect</h3>
                                <p>This adventure comes with Beginner level mission you can take on. go on and conquer, comrade!</p>
                            </div>
                        </div>
                        <div className={styles.module}>
                            <div className={styles.section-1}>
                                <h3><span>Mission 1</span><div></div><small>2mins</small></h3>
                                <p>Introduction to Cryptocurrency What are cryptocurrencies? Importance</p>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.contain}>
                                <div className={styles.best}>
                                    <small>Leave a review</small>
                                    <div className={styles.arrow}>
                                        <small>Best ratings</small>
                                        <FaAngleDown className={styles.angle} />
                                    </div>
                                </div>
                                <div className={styles.name}>
                                    <h3>Jennifer Robin</h3>
                                    <div className={styles.star}>
                                        <FaStar className={styles.superstar} />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <p>Had fun on this adventure, too sleek!</p>
                                <li>10th may, 2022</li>
                                </div>
                        </div>
                        <button className={styles.span}>start this Adventure</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adventure;