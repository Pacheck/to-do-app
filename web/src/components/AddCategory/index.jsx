import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { create_category } from '../../redux/actions';

import { IoMdPerson, IoMdLock, IoMdUnlock, IoIosKey, IoIosPaper, IoMdFitness } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { HiStar } from 'react-icons/hi';
import { MdPayment, MdClose } from 'react-icons/md'

const AddNewCategory = styled.div`
    
    width: 100vw;
    height: 100vh;
    background: var(--appBackground);

    form {
        width: 100%;
        height: 100%;

        font-family: 'Roboto Slab', serif;
        color: var(--defaultTextColor);

        display: flex;
        flex-direction: column;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 60px;
        }

        .nav {
     
            flex-direction: row;

            h4 {
                font-weight: 500; 
                margin-left: 120px;
            }

            svg {
                margin-left: 90px;
            }
        }

        .category-name {
            input {
                width: 80%;
                height: 22px;
                border: none;
                /* text-align: center; */
                
                font-size: 25px;
                
                margin-top: 15px;
                background-color: transparent;
                outline: none;
            }

            input::placeholder{
                color: #c5bbbb;
            }

            label {
                color: #949090;
                font-size: 14px;
                margin-right: 180px;
            }
        }

        .input-button {
            width: 100%;
            height: 40px;

            border-radius: 0;
            border: none;

            color: var(--whiteTextColor);
            background-color: #2c6bcf;

            padding: 0 2px;
            position: fixed;
            bottom: 0;
            
        }
        
    }
`
const Modal = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    ${props => props.showModal ? 'z-index: 10' : 'z-index: -10'}

    top: 0; bottom: 0; left: 0; right: 0;

    background-color: rgba(0, 0, 0, 0.7);

    .wrapper {
        width: 60%;
        height: 40%;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 2em #706161;

        border-radius: 5%;
        background: linear-gradient(#7c0707, #df4646);
    }

    /* div {
        width: 2rem;
        background-color: aquamarine;
    } */

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 5px;
        align-items: center;
    }

    .icon:hover {  
        svg {
            color: #f5f0f0;
        }
        background-color: #5d0c0c
    }
`

const AddCategory = () => {

    const [showModal, setShowModal] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm();
    
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = data => createCategory(data);
        
    const createCategory = data => {
        const icon = getIcon(data);
        
        const payload = {
            ...data,
            icon: icon,
            id: Math.random(), //TEMPORARIO
            tasks: []
        }
        dispatch(create_category(payload));
        
        console.log(payload);
    }

    const getIcon = (data) => {
        const { icon, color } = data;
        switch(icon){
            case 'person':
                return <IoMdPerson size={22} color={color} />
                case 'secret':
                    return <IoMdLock size={22} color={color}/>
                    case 'fitness':
                    return <IoMdFitness size={22} color={color}/>
            default:
                return 'Sem ícone'
        }
    }

    const handleModal = () => {
        setShowModal(!showModal);
    }
    
    const handleIcon = (icon) => {
        console.log(icon)
    }

    const FITNESS = 'Fitness';
    const SECRET = 'Secret';
    const NOT_SECRET = 'Not-Secret';
    const PERSONAL = 'Personal';
    const KEY = 'Key';
    const DOCUMENT = 'Document';

    return (
        <AddNewCategory showModal={showModal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <button onClick={() => history.push('/')}>Voltar</button> 
                    //VAI SER UM SVG PRA VOLTAR
                */}

                <div className="nav">
                    <h4 className="nav-title">New Category</h4>
                    <MdClose size={27} onClick={() => history.push('/')}/>
                </div>

                <div className="category-name">
                    <label >Category name?</label>
                    <input  name="name" placeholder="Personal" ref={register({ required: true})} />
                    {errors.name && <p style={{ color: 'red'}}>This field is required</p>}
                </div>
                
                <div className="category-color">
                    <label className="label-color">Color</label>
                    <input className="input-color" name="color" type="color" ref={register} />
                </div>

                <div className="category-icon">
                    <label>Selecioe um ícone</label>
                    <button  type="button" onClick={handleModal}>Show Icons</button>
                </div>

                <input className="input-button" type="submit" value="Create"/>
            </form>
            

            {showModal && 
                <Modal handleModal={handleModal} showModal={showModal}>
                    <div className="wrapper">
                        <div className="icon" onClick={() => handleIcon(FITNESS)}>
                            <IoMdFitness size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(SECRET)}>
                            <IoMdLock size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(PERSONAL)}>
                            <IoMdPerson size={35} />
                        </div>
                        <div className="icon" onClick={() => handleIcon(NOT_SECRET)}>
                            <IoMdUnlock size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(KEY)}>
                            <IoIosKey size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(DOCUMENT)}>
                            <IoIosPaper size={35}/>
                        </div>
                        <div className="icon" onClick={() => handleIcon(DOCUMENT)}>
                            <MdPayment size={35} />
                        </div>
                    </div>
                        <button type="button" onClick={handleModal}>Select</button>
                </Modal>
                }
       
        </AddNewCategory>
    )
}

export default AddCategory
