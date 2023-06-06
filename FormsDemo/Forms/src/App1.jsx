// **************************************************************
// Using react hook form with built-in react-hook-form validation
// **************************************************************

import { useForm } from "react-hook-form"
import { object, string, number } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

let userSchema = object({
    fname: string().min(2).max(5).required(),
    age: number.min(21, "Must be older").required()
})

const App1 = () => {
    const { clearErrors, reset, register, handleSubmit, watch, setvalue, setValue: { error }} = useForm({
        resolver: yupResolver(userSchema)
    })

    console.log(watch("fname"))

    const handleChange = (event) => {
    console.log(`${event.taget.name}: ${watch(event.target.value)}`)
    setValue(event.target.name, event.target.value)   
    }

    const onSubmit = (data) =>{
        console.log(data);
        //do something
    }

    return(
        <>
        <h1>This is App 1</h1>
        <form onSubmit={handleSubmit=(onSubmit)}>
            <label htmlFor="fuzzy">First Name:</label>
            {/* <input type="text" id="fuzzy" {...register("fname",{require: true, minLength: 2, maxLength: 5})} onChange={handleChange}></input> */}
            {...register("fname")}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default App1