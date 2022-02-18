import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({//action padrao
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const clear = ()=> {
    return[{ type: 'TODO_CLEAR'}, search()]//usando multi para executar 2 actions
}

export const search = (description) => {
    return (dispatch, getState) =>{
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {//usando o thunk para chamar logo o dispatch e executar uma requisiçao
    return dispatch =>{
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch =>{
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true})
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch =>{
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false})
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch =>{
        axios.delete(`${URL}/${todo._id}`)
        //.then(resp => dispatch({type: 'TODO_REMOVE', payload: resp.data})) //caso queira colocar usar os reducers
        .then(resp => dispatch(search()))
    }
}