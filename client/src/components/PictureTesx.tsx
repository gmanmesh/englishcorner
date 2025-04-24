import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const PictureTesx: React.FC = () => {
    const [input, setInput] = useState({
        picture: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/picture/upload", input)
            .then(res => (
                console.log(res)
            ))
            .catch(err => {
                console.log(err)
            })
    }


    const handleAuth = () => {


        axios.get("http://localhost:8000/api/user/useracount", { withCredentials: true })
            .then(res => (
                console.log(res)
            ))
            .catch(err => {
                console.log(err)
            })


    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Profile
                </label>
                <input name='profile' onChange={handleChange} type='file' placeholder='image' />
                <button type='submit' >Submit</button>
            </form>

            <p onClick={handleAuth}>Authe</p>
        </div>
    )
}

export default PictureTesx