import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position:"absolute",
        top:"100vh",
        widht:"100%"
    }

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="container-fluid bg-12">
                CopyRight &copy; Harsh Joshi, 2021
            </p>
        </footer>
    )
}
