function Footer() {
    return(
        <div>
            <div className="container">
            <div className="footer-content">
            <h1 className="projects-title">Projects</h1>
            <div className="underline"></div>
            </div>
            <form>
               <div className="first-input">
               <label className="Label-name" htmlFor="name">Name</label>
               <input className="Name-inp" type="text" id="name" />
               </div>
               <div className="first-input1">
               <label className="Label-name" htmlFor="email">Email</label>
               <input className="Name-inp" type="email" id="email" />
               </div>
               <div className="first-input1">
               <label className="Label-name" htmlFor="massage">Message</label>
               <input className="massage-inp" type="text" id="massage" />
               </div>
               <button className="send-btn" type="submit">Send</button>
            </form>
            <div className="social-networks">
                <img src="/instagram.svg" alt="" />
                <img src="/bi_linkedin.svg" alt="" />
                <img src="/bi_envelope-fill.svg" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Footer