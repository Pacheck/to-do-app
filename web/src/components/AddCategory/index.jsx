import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


const AddNewCategory = styled.div`
    background-color: tomato;
`

const AddCategory = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => console.log(data);
    const dispatch = useDispatch();

    const history = useHistory()

    const payload = {
        name: 'teste2',
        icon: 'category-icon',
        color: '#a33aaa',
        tasks: ['Testando create category']
    }

    // dispatch(create_category(payload))
    // console.log({ type: 'dispatch/create_category', payload: payload})


    return (
        <AddNewCategory>
            
            <button onClick={() => history.push('/')}>Voltar</button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Category Name</label>
                <input name="name" defaultValue="Personal" ref={register} />
                
                <label>Color</label>
                <input name="color" type="color" ref={register} />

                <label>Icon</label>
                <input name="name" defaultValue="Personal" ref={register} />

                

                <input type="submit" />
            </form>
          
        </AddNewCategory>
    )
}

export default AddCategory
