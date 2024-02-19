import React from "react"
import profilePic from '../../assests/profilePicture.jpg'

function Intro() {
    return (
        <header class="intro">
            <h1 class="heading">Hello! I'm <span class="name">Justin Winslow</span></h1>
            <span class="divider"></span>
            <div class="section">
                <img class="profilePicture" src={profilePic} alt="headshot"></img>
                <h2 class="text">I am a highly experienced software engineer with a strong track record in <strong>full-stack development</strong>, 
                optimizing existing software, and leading efficient project execution.
                </h2>
            </div>

            <h3 class="contact">
                <span>Lets connect! </span>
                <span>
                    <a href="mailto:justinwinslow55@gmail.com" class="link">justinwinslow55@gmail.com</a>
                </span>
            </h3>
        </header>
    )
}

export default Intro;