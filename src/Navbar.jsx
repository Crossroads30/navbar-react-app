import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

function Navbar() {
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='nav-toggle' type='button'>
						<FaBars />
					</button>
				</div>
				<div className='links-container show-container'>
					<ul className='links'>
						{links.map(link => {
							const { id, url, text } = link
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							)
						})}
					</ul>
				</div>
				<ul className='social-icons'>
					{social.map(icon => {
						const { id, url, icon } = icon
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
