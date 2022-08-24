import React from 'react';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap'; 
import '../../style/follow-the-card/login/login.css';

export default function LogIn() {

    const[userName, setUserName] = useState('');
    const[guestName, setGuestName] = useState('');
    const[guestLastName, setGuestLastName] = useState('');
    const[guestDateOfBirth, setGuestDateOfBirth] = useState('');
    const[guestMail, setGuestMail] = useState('');
    const[guestPhone, setGuestPhone] = useState('');
    const[guestPassword, setGuestPassword] = useState('');
    const[guestRePassword, setGuestRePassword] = useState('');

    function checkGuestInput(){
        if( 
            (localStorage.getItem('userName') === '') ||
            (localStorage.getItem('guestName') === '') ||
            (localStorage.getItem('guestLastName') === '') ||
            (localStorage.getItem('guestDateOfBirth') === '') ||
            (localStorage.getItem('guestMail') === '') ||
            (localStorage.getItem('guestPhone') === '') ||
            (localStorage.getItem('guestPassword') === '') ||
            (localStorage.getItem('guestRePassword') === '') 
            ) {
                alert('Nisu uneseni svi podatci')
            } else if( (localStorage.getItem('guestPassword') !== localStorage.getItem('guestRePassword')) ){
                alert('Niste unijeli iste lozinke!')
            } else {
                window.location.href='https://nikolaknezevic120.github.io/nikola-react-app/#/followTheCard'
            }
    }

    function checkLogIn(){
        if (localStorage.getItem('userName') === ''){
            alert('Unesite korisničko ime')
        } else if (localStorage.getItem('userName') !== 'nikola65'){
            alert('Unijelio ste krivo korisničko ime')
        } else {
            window.location.href='https://nikolaknezevic120.github.io/nikola-react-app/#/followTheCard';
        }
    }
    return (

    <Container fluid>
        <div className='body'>
            <Row>
                <Col lg={12} sm={12}>
                    <h2>Dobro došli na stranicu Follow the card.</h2>
                    <h2>Uz nas u svakom trenutku provjerite i uredite podatke o svojoj kartici!</h2>
                </Col>
            </Row>

            <div className='log-in-sign-up'>
                <Row>

                    <Col lg={6} sm={12}>
                        <div className='sign-in-account'>

                            <h3 id='log-sign-in'>Prijavi se</h3>
                            <input type={'text'} placeholder={'User Name'} onChange={(event) => {
                                setUserName(event.target.value)
                            }}/> <br /> <br />
                            <input type={'password'} placeholder={'Password'} /> <br /> <br />
                            <button id='btn-prim-log' className="btn btn-primary" onClick={() => {
                                localStorage.clear();
                                localStorage.setItem('userName', userName ); 
                                checkLogIn();
                            }}
                            >Prijavi se</button>

                            
                        </div>
                    </Col>

                    <Col lg={6} sm={12}>
                    <div className='new-account'>
                            <h3 id='log-sign-in'>Kreiraj novi račun</h3>
                        <div className='new-acc-input'>
                            <input type={'text'} id={'guestUserNameId'} placeholder={'User Name'} onChange={(event) => {
                                setUserName(event.target.value)
                            }}/> <br /> <br />
                            <input type={'password'} placeholder={'Password'} onChange={(event) => {
                                setGuestPassword(event.target.value)
                            }} /> <br /> <br />
                            <input type={'password'} placeholder={'Retype password'} onChange={(event) => {
                                setGuestRePassword(event.target.value)
                            }} /> <br /> <br />
                            <input type={'text'} placeholder={'Your Name'} onChange={(event) => {
                                setGuestName(event.target.value)
                            }}/> <br /> <br />
                            <input type={'text'} placeholder={'Your Last Name'} onChange={(event) => {
                                setGuestLastName(event.target.value)
                            }}/> <br /> <br />
                            <input type={'text'} placeholder={'Your date of birth'} onChange={(event) => {
                                setGuestDateOfBirth(event.target.value)
                            }}/> <br /> <br />
                            <input type={'text'} placeholder={'Your mail'} onChange={(event) => {
                                setGuestMail(event.target.value)
                            }}/> <br /> <br /><input type={'text'} placeholder={'Your phone'} onChange={(event) => {
                                setGuestPhone(event.target.value)
                            }}/> <br /> <br />
                            <button id='btn-prim-log' className="btn btn-primary" onClick={() => {
                                localStorage.setItem('userName', userName ); 
                                localStorage.setItem('guestName', guestName );
                                localStorage.setItem('guestLastName', guestLastName);
                                localStorage.setItem('guestDateOfBirth', guestDateOfBirth ); 
                                localStorage.setItem('guestMail', guestMail );
                                localStorage.setItem('guestPhone', guestPhone);
                                localStorage.setItem('guestPassword', guestPassword);
                                localStorage.setItem('guestRePassword', guestRePassword)
                                checkGuestInput();
                                }}
                            >Kreiraj i prijavi se</button>
                        </div>
                    </div>
                </Col>
                
                </Row>
            </div>
        </div>
    </Container>
    )
}
