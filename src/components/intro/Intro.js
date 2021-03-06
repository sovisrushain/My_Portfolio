import "./intro.css"
import Me from "../../img/me.png"


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Rushain Sovis</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Developer</div>
                            <div className="i-title-item">Hacker</div>
                            <div className="i-title-item">Tech Enthusiast</div>
                            <div className="i-title-item">Passionate Reader</div>
                            <div className="i-title-item">Football Aficionado</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I am a colombo based Tech Enthusiast and a Fullstack Developer. 
                    I can help you solve a problem, build a product or grow existing project. 
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;
