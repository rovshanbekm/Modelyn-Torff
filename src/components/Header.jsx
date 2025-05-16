function Header () {
    return(
        <div className="content-about">
       <div className="container">
        <div className="header-content">
           <p className="content-text">UI/UX Designer</p>
           <h1 className="content-title">Hello,  my name <br /> is Madelyn Torff</h1>
           <p className="content-description">Short text with details about you, what you <br /> do or your professional career. You can add <br />
            more information on the about page.</p>
           <div className="content-btns">
           <button className="projects-btn">Projects</button>
           <button className="Linkedin-btn">LinkedIn</button>
           </div>
        </div>

        </div>
        <div className="designer-img">
            <img className="background-img" src="/yellow-bg.svg" alt="" />
            <img className="img-designer" src="/image (5).svg" alt="" />
        </div>
       </div>
    )
}

export default Header